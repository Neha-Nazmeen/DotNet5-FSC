MySQL Assessment — Local Community Event Portal

Files:
- `schema.sql` — CREATE DATABASE and CREATE TABLE statements with constraints and indexes.
- `data.sql` — INSERT statements with the provided sample dataset.
- `solutions.sql` — SQL queries solving Exercises 1–25 with comments.

How to use:
1. Run the schema to create database and tables:
   mysql> SOURCE schema.sql;
2. Load sample data:
   mysql> SOURCE data.sql;
3. Run `solutions.sql` or copy individual queries into your MySQL client to test.

Notes:
- The SQL is written for MySQL 8+ (uses CHECK constraints and proper DATETIME/ENUM usage).
- Some queries use CURRENT_DATE or CURDATE() — adjust if running historical sample dates.
