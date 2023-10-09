/*Create the database.*/
CREATE DATABASE mrswensen;

--set extention
-- create extension if not exists "uuid-ossp";
/*Create database tables*/
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

-- Insert Test Users
INSERT INTO users(user_name, user_email, user_password)
    VALUES('henry' 'henryly213@gamil.com', 'kthl188822');