import React, { useState, useEffect } from "react";

import "./App.scss";

import DayList from "./components/DayList";
import Appointment from "./components/Appointment";
import daysData from "./components/__mocks__/days.json";

export default function Application() {
  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState(daysData);
  const [appointments, setAppointments] = useState({});

  useEffect(() => {
    const formattedData = {}
    fetch(`http://localhost:8000/appointments/${day}`)
      .then((result) => result.json())
      .then((data) => {
        // console.log(data)
        data.forEach((appointment) =>{
          formattedData[appointment.id] = {
            id : appointment.id,
            time : appointment.time,
            interview : appointment.student ? {
              student : appointment.student,
              interviewer : {
                id: appointment.interviewer_id,
                name: appointment.interviewer,
                avatar: appointment.avatar
              }
            } : null
          }
        })    
        setAppointments(formattedData);
      });
  }, [day]);

	useEffect(() => {
    const urlDays = "http://localhost:8000/days";
    const urlAppointments = "http://localhost:8000/appointments";

    const fetchDays = async () => {
      try {
          const response = await fetch(urlDays);
          const json = await response.json();
          console.log(json);
          setDays(json);
      } catch (error) {
          console.log("error", error);
      }
    };
    fetchDays();

    const fetchAppointments = async () => {
      try {
          const response = await fetch(urlAppointments);
          const json = await response.json();
          console.log(json);
          setAppointments(json);
      } catch (error) {
          console.log("error", error);
      }
    };
    fetchAppointments();
	}, []);

  function cancelInterview(id) {
    fetch('http://localhost:8000/deleteAppointment', {
      method: 'POST',
      headers :{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        appointment_id: id
      })
    })

    setAppointments((prev) => {
      const updatedAppointment = {
        ...prev[id],
        interview: null,
      };
      const appointments = {
        ...prev,
        [id]: updatedAppointment,
      };
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
