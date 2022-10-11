-- \i psql_migration/seeds.sql to migrate data in tables

--day table
INSERT INTO days (id, name) VALUES (1, 'Monday');
INSERT INTO days (id, name) VALUES (2, 'Tuesday');
INSERT INTO days (id, name) VALUES (3, 'Wednesday');
INSERT INTO days (id, name) VALUES (4, 'Thursday');
INSERT INTO days (id, name) VALUES (5, 'Friday');

--appointment table
INSERT INTO appointments (id, time, day_id) VALUES (1, '12pm', 1);
INSERT INTO appointments (id, time, day_id) VALUES (2, '1pm', 1);
INSERT INTO appointments (id, time, day_id) VALUES (3, '2pm', 1);
INSERT INTO appointments (id, time, day_id) VALUES (4, '3pm', 1);
INSERT INTO appointments (id, time, day_id) VALUES (5, '4pm', 1);
INSERT INTO appointments (id, time, day_id) VALUES (6, '12pm', 2);
INSERT INTO appointments (id, time, day_id) VALUES (7, '1pm', 2);
INSERT INTO appointments (id, time, day_id) VALUES (8, '2pm', 2);
INSERT INTO appointments (id, time, day_id) VALUES (9, '3pm', 2);
INSERT INTO appointments (id, time, day_id) VALUES (10, '4pm', 2);
INSERT INTO appointments (id, time, day_id) VALUES (11, '12pm', 3);
INSERT INTO appointments (id, time, day_id) VALUES (12, '1pm', 3);
INSERT INTO appointments (id, time, day_id) VALUES (13, '2pm', 3);
INSERT INTO appointments (id, time, day_id) VALUES (14, '3pm', 3);
INSERT INTO appointments (id, time, day_id) VALUES (15, '4pm', 3);
INSERT INTO appointments (id, time, day_id) VALUES (16, '12pm', 4);
INSERT INTO appointments (id, time, day_id) VALUES (17, '1pm', 4);
INSERT INTO appointments (id, time, day_id) VALUES (18, '2pm', 4);
INSERT INTO appointments (id, time, day_id) VALUES (19, '3pm', 4);
INSERT INTO appointments (id, time, day_id) VALUES (20, '4pm', 4);
INSERT INTO appointments (id, time, day_id) VALUES (21, '12pm', 5);
INSERT INTO appointments (id, time, day_id) VALUES (22, '1pm', 5);
INSERT INTO appointments (id, time, day_id) VALUES (23, '2pm', 5);
INSERT INTO appointments (id, time, day_id) VALUES (24, '3pm', 5);
INSERT INTO appointments (id, time, day_id) VALUES (25, '4pm', 5);

--interviewer table
INSERT INTO interviewers (id, name, avatar) VALUES (1, 'Sylvia Palmer', 'https://i.imgur.com/LpaY82x.png');
INSERT INTO interviewers (id, name, avatar) VALUES (2, 'Tori Malcolm', 'https://i.imgur.com/Nmx0Qxo.png');
INSERT INTO interviewers (id, name, avatar) VALUES (3, 'Mildred Nazir', 'https://i.imgur.com/T2WwVfS.png');
INSERT INTO interviewers (id, name, avatar) VALUES (4, 'Cohana Roy', 'https://i.imgur.com/FK8V841.jpg');
INSERT INTO interviewers (id, name, avatar) VALUES (5, 'Sven Jones', 'https://i.imgur.com/twYrpay.jpg');

--interview table
INSERT INTO interviews (id, student, interviewer_id, appointment_id) VALUES (1, 'WHITE', 1, 3);
INSERT INTO interviews (id, student, interviewer_id, appointment_id) VALUES (2, 'BLUE', 2, 8);
INSERT INTO interviews (id, student, interviewer_id, appointment_id) VALUES (3, 'BLACK', 5, 11);
INSERT INTO interviews (id, student, interviewer_id, appointment_id) VALUES (4, 'Yellow', 3, 17);
INSERT INTO interviews (id, student, interviewer_id, appointment_id) VALUES (5, 'RED', 4, 22);

--available_interviewer table
INSERT INTO available_interviewers (id, interviewer_id, day_id) VALUES (1, 1, 1);
INSERT INTO available_interviewers (id, interviewer_id, day_id) VALUES (2, 1, 2);
INSERT INTO available_interviewers (id, interviewer_id, day_id) VALUES (3, 1, 3);
INSERT INTO available_interviewers (id, interviewer_id, day_id) VALUES (4, 1, 4);
INSERT INTO available_interviewers (id, interviewer_id, day_id) VALUES (5, 1, 5);
INSERT INTO available_interviewers (id, interviewer_id, day_id) VALUES (6, 2, 2);
INSERT INTO available_interviewers (id, interviewer_id, day_id) VALUES (7, 2, 4);
INSERT INTO available_interviewers (id, interviewer_id, day_id) VALUES (8, 3, 1);
INSERT INTO available_interviewers (id, interviewer_id, day_id) VALUES (9, 3, 3);
INSERT INTO available_interviewers (id, interviewer_id, day_id) VALUES (10, 3, 5);
INSERT INTO available_interviewers (id, interviewer_id, day_id) VALUES (11, 4, 1);
INSERT INTO available_interviewers (id, interviewer_id, day_id) VALUES (12, 4, 5);
INSERT INTO available_interviewers (id, interviewer_id, day_id) VALUES (13, 5, 4);
INSERT INTO available_interviewers (id, interviewer_id, day_id) VALUES (14, 5, 5);











