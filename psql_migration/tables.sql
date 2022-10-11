-- Create database 
-- in terminal type psql 
-- CREATE DATABSE final_project_interview;
-- check with \l if databse created, if yes connect to db with |c final_project_interview
--\i psql_migration/tables.sql to create tables

CREATE TABLE days (
    id SERIAL PRIMARY KEY,
    name TEXT,
    day_id INTEGER REFERENCES days(id) ON DELETE CASCADE
);

CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    time TEXT,
    day_id INT REFERENCES days(id) ON DELETE CASCADE
);

CREATE TABLE interviewers (
    id SERIAL PRIMARY KEY,
    name TEXT,
    avatar TEXT
);

CREATE TABLE interviews (
    id SERIAL PRIMARY KEY,
    student VARCHAR(255) NOT NULL,
    interviewer_id INT REFERENCES interviewers(id) ON DELETE CASCADE,
    appointment_id INT REFERENCES appointments(id) ON DELETE CASCADE
);

CREATE TABLE available_interviewers (
    id SERIAL PRIMARY KEY,
    interviewer_id INT REFERENCES interviewers(id) ON DELETE CASCADE,
    day_id INTEGER REFERENCES days(id) 
);
