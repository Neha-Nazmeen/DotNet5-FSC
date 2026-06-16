USE community_portal;

-- Exercise 1: User Upcoming Events
-- Show upcoming events a specific user (placeholder :user_id) is registered for in their city, sorted by date
-- Replace :user_id with the actual user id
SELECT e.*
FROM events e
JOIN registrations r ON e.event_id = r.event_id
JOIN users u ON r.user_id = u.user_id
WHERE r.user_id = /*:user_id*/ 1
  AND e.city = u.city
  AND e.start_date > NOW()
ORDER BY e.start_date;

-- Exercise 2: Top Rated Events (min 10 feedbacks)
SELECT e.event_id, e.title, AVG(f.rating) AS avg_rating, COUNT(f.feedback_id) AS feedback_count
FROM feedback f
JOIN events e ON f.event_id = e.event_id
GROUP BY e.event_id
HAVING feedback_count >= 10
ORDER BY avg_rating DESC;

-- Exercise 3: Inactive Users (no registrations in last 90 days)
SELECT u.*
FROM users u
WHERE NOT EXISTS (
  SELECT 1 FROM registrations r
  WHERE r.user_id = u.user_id
    AND r.registration_date >= DATE_SUB(CURDATE(), INTERVAL 90 DAY)
);

-- Exercise 4: Peak Session Hours (10 AM to 12 PM) count per event
SELECT s.event_id, e.title, COUNT(*) AS sessions_10_12
FROM sessions s
JOIN events e ON s.event_id = e.event_id
WHERE TIME(s.start_time) >= '10:00:00' AND TIME(s.start_time) < '12:00:00'
GROUP BY s.event_id;

-- Exercise 5: Most Active Cities (top 5 by distinct user registrations)
SELECT u.city, COUNT(DISTINCT r.user_id) AS distinct_registrations
FROM registrations r
JOIN users u ON r.user_id = u.user_id
GROUP BY u.city
ORDER BY distinct_registrations DESC
LIMIT 5;

-- Exercise 6: Event Resource Summary (counts per resource type per event)
SELECT e.event_id, e.title,
  SUM(r.resource_type='pdf') AS pdf_count,
  SUM(r.resource_type='image') AS image_count,
  SUM(r.resource_type='link') AS link_count,
  COUNT(r.resource_id) AS total_resources
FROM events e
LEFT JOIN resources r ON e.event_id = r.event_id
GROUP BY e.event_id;

-- Exercise 7: Low Feedback Alerts (rating < 3) with user and event
SELECT f.feedback_id, u.user_id, u.full_name, e.event_id, e.title, f.rating, f.comments
FROM feedback f
JOIN users u ON f.user_id = u.user_id
JOIN events e ON f.event_id = e.event_id
WHERE f.rating < 3;

-- Exercise 8: Sessions per Upcoming Event
SELECT e.event_id, e.title, COUNT(s.session_id) AS session_count
FROM events e
LEFT JOIN sessions s ON e.event_id = s.event_id
WHERE e.start_date > NOW()
GROUP BY e.event_id;

-- Exercise 9: Organizer Event Summary (counts and status breakdown)
SELECT u.user_id, u.full_name,
  COUNT(e.event_id) AS total_events,
  SUM(e.status = 'upcoming') AS upcoming_count,
  SUM(e.status = 'completed') AS completed_count,
  SUM(e.status = 'cancelled') AS cancelled_count
FROM users u
LEFT JOIN events e ON u.user_id = e.organizer_id
GROUP BY u.user_id;

-- Exercise 10: Feedback Gap (events with registrations but no feedback)
SELECT e.event_id, e.title
FROM events e
JOIN registrations r ON e.event_id = r.event_id
WHERE NOT EXISTS (SELECT 1 FROM feedback f WHERE f.event_id = e.event_id)
GROUP BY e.event_id;

-- Exercise 11: Daily New User Count (last 7 days)
SELECT registration_date, COUNT(*) AS new_users
FROM users
WHERE registration_date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
GROUP BY registration_date
ORDER BY registration_date;

-- Exercise 12: Event with Maximum Sessions
SELECT e.event_id, e.title, COUNT(s.session_id) AS session_count
FROM events e
LEFT JOIN sessions s ON e.event_id = s.event_id
GROUP BY e.event_id
HAVING session_count = (
  SELECT MAX(cnt) FROM (
    SELECT COUNT(session_id) AS cnt FROM sessions GROUP BY event_id
  ) AS counts
);

-- Exercise 13: Average Rating per City
SELECT e.city, AVG(f.rating) AS avg_rating
FROM events e
JOIN feedback f ON e.event_id = f.event_id
GROUP BY e.city;

-- Exercise 14: Most Registered Events (top 3)
SELECT e.event_id, e.title, COUNT(r.registration_id) AS total_registrations
FROM events e
LEFT JOIN registrations r ON e.event_id = r.event_id
GROUP BY e.event_id
ORDER BY total_registrations DESC
LIMIT 3;

-- Exercise 15: Event Session Time Conflict (overlaps within same event)
SELECT s1.event_id, e.title, s1.session_id AS s1_id, s1.title AS s1_title, s1.start_time AS s1_start, s1.end_time AS s1_end,
       s2.session_id AS s2_id, s2.title AS s2_title, s2.start_time AS s2_start, s2.end_time AS s2_end
FROM sessions s1
JOIN sessions s2 ON s1.event_id = s2.event_id AND s1.session_id < s2.session_id
JOIN events e ON s1.event_id = e.event_id
WHERE s1.start_time < s2.end_time AND s2.start_time < s1.end_time
ORDER BY s1.event_id, s1.start_time;

-- Exercise 16: Unregistered Active Users (created in last 30 days but no registrations)
SELECT u.*
FROM users u
WHERE u.registration_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
  AND NOT EXISTS (SELECT 1 FROM registrations r WHERE r.user_id = u.user_id);

-- Exercise 17: Multi-Session Speakers (more than one session)
SELECT speaker_name, COUNT(*) AS session_count
FROM sessions
GROUP BY speaker_name
HAVING session_count > 1;

-- Exercise 18: Resource Availability Check (events with no resources)
SELECT e.event_id, e.title
FROM events e
LEFT JOIN resources r ON e.event_id = r.event_id
WHERE r.resource_id IS NULL;

-- Exercise 19: Completed Events with Feedback Summary (total regs and avg rating)
SELECT e.event_id, e.title,
  COUNT(DISTINCT r.registration_id) AS total_registrations,
  AVG(f.rating) AS avg_rating
FROM events e
LEFT JOIN registrations r ON e.event_id = r.event_id
LEFT JOIN feedback f ON e.event_id = f.event_id
WHERE e.status = 'completed'
GROUP BY e.event_id;

-- Exercise 20: User Engagement Index (events attended and feedbacks submitted)
SELECT u.user_id, u.full_name,
  COUNT(DISTINCT r.event_id) AS events_attended,
  COUNT(DISTINCT f.feedback_id) AS feedback_submitted
FROM users u
LEFT JOIN registrations r ON u.user_id = r.user_id
LEFT JOIN feedback f ON u.user_id = f.user_id
GROUP BY u.user_id;

-- Exercise 21: Top Feedback Providers (top 5 users by feedback count)
SELECT u.user_id, u.full_name, COUNT(f.feedback_id) AS feedback_count
FROM feedback f
JOIN users u ON f.user_id = u.user_id
GROUP BY u.user_id
ORDER BY feedback_count DESC
LIMIT 5;

-- Exercise 22: Duplicate Registrations Check
SELECT user_id, event_id, COUNT(*) AS dup_count
FROM registrations
GROUP BY user_id, event_id
HAVING dup_count > 1;

-- Exercise 23: Registration Trends (month-wise for past 12 months)
SELECT DATE_FORMAT(registration_date, '%Y-%m') AS year_month, COUNT(*) AS registrations
FROM registrations
WHERE registration_date >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH)
GROUP BY year_month
ORDER BY year_month;

-- Exercise 24: Average Session Duration per Event (in minutes)
SELECT e.event_id, e.title, AVG(TIMESTAMPDIFF(MINUTE, s.start_time, s.end_time)) AS avg_duration_minutes
FROM events e
JOIN sessions s ON e.event_id = s.event_id
GROUP BY e.event_id;

-- Exercise 25: Events Without Sessions
SELECT e.event_id, e.title
FROM events e
LEFT JOIN sessions s ON e.event_id = s.event_id
WHERE s.session_id IS NULL;
