import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

import "./App.scss";

import DayList from "./components/DayList";
import Appointment from "./components/Appointment";

const socket = io("http://localhost:8080");

export default function Application() {
	const [day, setDay] = useState("Monday");
	const [days, setDays] = useState("");
	const [appointments, setAppointments] = useState({});

  useEffect(() => {
    socket.on("get-appointments", (obj) => {
      console.log("new data received");
      if (obj.day === day) {
        console.log(obj.day, day);
        setAppointments(obj.appointments);
      }
    });
  }, [day]);

  useEffect(() => {
    const formattedData = {};
    fetch(`http://localhost:8000/appointments/${day}`)
      .then((result) => result.json())
      .then((data) => {
        data.forEach((appointment) => {
          formattedData[appointment.id] = {
            id: appointment.id,
            time: appointment.time,
            interview: appointment.student
              ? {
                  student: appointment.student,
                  interviewer: {
                    id: appointment.interviewer_id,
                    name: appointment.interviewer,
                    avatar: appointment.avatar,
                  },
                }
              : null,
          };
        });
        setAppointments(formattedData);
      });
  }, [day]);

	useEffect(() => {
		const daysObj = {};
		fetch(`http://localhost:8000/remainingSpots`)
			.then((result) => result.json())
			.then((data) => {
				let count = {
					Monday: 0,
					Tuesday: 0,
					Wednesday: 0,
					Thursday: 0,
					Friday: 0,
				};
				data.forEach((day) => {
					count[day.day_name] += 1;
					daysObj[day.day_name] = {
						id: day.day_id,
						name: day.day_name,
						spots: 5 - count[day.day_name],
					};
				});
				setDays(daysObj);
			});
	}, []);

  function bookInterview(id, interview) {
    console.log(id, interview);
    const isEdit = appointments[id].interview;

    setAppointments((prev) => {
      const appointment = {
        ...prev[id],
        interview: { ...interview },
      };
      const appointments = {
        ...prev,
        [id]: appointment,
      };
      socket.emit("send-appoinments", {
        appointments,
        day,
      });
      return appointments;
    });

    if (!isEdit) {
      setDays((prev) => {
        const updatedDay = {
          ...prev[day],
          spots: prev[day].spots - 1,
        };
        const days = {
          ...prev,
          [day]: updatedDay,
        };
        return days;
      });
    }
  }

  function cancelInterview(id) {
    fetch("http://localhost:8000/deleteAppointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appointment_id: id,
      }),
    });

    setAppointments((prev) => {
      const updatedAppointment = {
        ...prev[id],
        interview: null,
      };
      const appointments = {
        ...prev,
        [id]: updatedAppointment,
      };
      socket.emit("send-appoinments", {
        appointments,
        day,
      });
      return appointments;
    });

    setDays((prev) => {
      const updatedDay = {
        ...prev[day],
        spots: prev[day].spots + 1,
      };
      const days = {
        ...prev,
        [day]: updatedDay,
      };
      return days;
    });
  }
  
	return (
		<main className="layout">
			<section className="sidebar">
				<img
					className="sidebar--centered"
					src="images/logo.png"
					alt="Interview Scheduler"
				/>
				<hr className="sidebar__separator sidebar--centered" />
				<nav className="sidebar__menu">
					<DayList days={days} value={day} onChange={setDay} />
				</nav>
			</section>
			<section className="schedule">
				{Object.values(appointments).map((appointment) => (
					<Appointment
						day={day}
						key={appointment.id}
						time={appointment.time}
						id={appointment.id}
						interview={appointment.interview || null}
						bookInterview={(interview) =>
							bookInterview(appointment.id, interview)
						}
						cancelInterview={cancelInterview}
					/>
				))}
				<Appointment key="last" time="5pm" />
			</section>
		</main>
	);
}
