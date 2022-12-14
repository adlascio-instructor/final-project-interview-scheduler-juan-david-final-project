SELECT 
appointments.id, 
appointments.time, 
interviews.student, 
interviewers.id AS interviewer_id,
interviewers.name AS interviewer, 
interviewers.avatar
FROM 
appointments 
LEFT JOIN 
interviews ON interviews.appointment_id = appointments.id 
LEFT JOIN interviewers ON interviews.interviewer_id = interviewers.id 
LEFT JOIN days ON appointments.day_id = days.id 
WHERE days.name = 'Tuesday'
ORDER BY appointments.id;