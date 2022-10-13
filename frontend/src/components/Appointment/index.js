import React, { useEffect } from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Confirm from "./Confirm";

import "./styles.scss";

const Appointment = (props) => {
  const [dayOfWeek, setDayOfWeek] = React.useState("Monday");
  const [add, setAdd] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [interviewers, setInterviewers] = React.useState()
  const [isDeleting, setIsDeleting] = React.useState(false);

  useEffect(() =>{
    setDayOfWeek(props.day)
  }, [props.day])

  useEffect(() => {
    fetch(`http://localhost:8000/interviewers/${dayOfWeek}`)
      .then((response) => response.json())
      .then((data) => {
        setInterviewers(data);
      });
  }, [dayOfWeek]);

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    setEdit(false);
    props.bookInterview(interview);
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ? (
        isDeleting ? (
          <Confirm
            message={"Are you sure you want to delete?"}
            onCancel={() => setIsDeleting(false)}
            onConfirm={() => {
              props.cancelInterview(props.id);
              setIsDeleting(false);
            }}
          />
        ) : edit ? (
          <Form
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            interviewers={interviewers}
            appointment_id={props.id}
            onSave={save}
            onCancel={() => setEdit(false)}
          />
        ) : (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            interviewers={interviewers}
            onEdit={() => setEdit(true)}
            onDelete={() => setIsDeleting(true)}
          />
        )
      ) : add ? (
        <Form
          interviewers={interviewers}
          appointment_id={props.id}
          onSave={save}
          onCancel={() => setAdd(false)}
        />
      ) : (
        <Empty onAdd={() => setAdd(true)} />
      )}
    </article>
  );
};

export default Appointment;
