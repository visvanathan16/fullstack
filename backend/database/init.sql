# Database initialization script
# This script creates the users table and populates it with sample data

CREATE DATABASE IF NOT EXISTS avio_db;
USE avio_db;

CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(100),
  role VARCHAR(100),
  country VARCHAR(100),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Sample data
INSERT INTO users (firstName, lastName, email, phone, company, role, country) VALUES
('Emily', 'Johnson', 'emily.johnson@example.com', '+1-555-0101', 'Tech Corp', 'Software Engineer', 'United States'),
('Michael', 'Williams', 'michael.williams@example.com', '+1-555-0102', 'Innovation Labs', 'Product Manager', 'United States'),
('Sarah', 'Brown', 'sarah.brown@example.com', '+44-20-7946', 'Digital Solutions', 'UX Designer', 'United Kingdom'),
('David', 'Miller', 'david.miller@example.com', '+1-555-0104', 'Cloud Systems', 'DevOps Engineer', 'Canada'),
('Jessica', 'Davis', 'jessica.davis@example.com', '+1-555-0105', 'AI Ventures', 'Data Scientist', 'United States'),
('Christopher', 'Wilson', 'christopher.wilson@example.com', '+61-2-5550', 'Web Innovations', 'Frontend Developer', 'Australia'),
('Amanda', 'Moore', 'amanda.moore@example.com', '+1-555-0107', 'Enterprise Software', 'Backend Developer', 'United States'),
('Daniel', 'Taylor', 'daniel.taylor@example.com', '+49-30-5550', 'Mobile Apps Inc', 'Mobile Developer', 'Germany'),
('Lauren', 'Anderson', 'lauren.anderson@example.com', '+1-555-0109', 'Digital Agency', 'UI Designer', 'United States'),
('James', 'Thomas', 'james.thomas@example.com', '+44-121-5550', 'Tech Consultants', 'Business Analyst', 'United Kingdom'),
('Rachel', 'Jackson', 'rachel.jackson@example.com', '+1-555-0111', 'Cloud Providers', 'Solutions Architect', 'United States'),
('Ryan', 'White', 'ryan.white@example.com', '+1-555-0112', 'Security First', 'Security Officer', 'United States'),
('Victoria', 'Harris', 'victoria.harris@example.com', '+1-555-0113', 'Marketing Tech', 'Marketing Manager', 'United States'),
('Kevin', 'Martin', 'kevin.martin@example.com', '+39-6-5550', 'IT Solutions', 'Systems Administrator', 'Italy'),
('Olivia', 'Thompson', 'olivia.thompson@example.com', '+1-555-0115', 'Finance Tech', 'Financial Analyst', 'United States'),
('Brandon', 'Garcia', 'brandon.garcia@example.com', '+1-555-0116', 'E-commerce Plus', 'Full Stack Developer', 'United States'),
('Sophia', 'Martinez', 'sophia.martinez@example.com', '+34-91-5550', 'Tech Startups', 'Startup Founder', 'Spain'),
('Jason', 'Robinson', 'jason.robinson@example.com', '+1-555-0118', 'Quality Assurance', 'QA Engineer', 'United States'),
('Emma', 'Clark', 'emma.clark@example.com', '+1-555-0119', 'Education Tech', 'Educational Developer', 'United States'),
('Matthew', 'Rodriguez', 'matthew.rodriguez@example.com', '+52-55-5550', 'Tech Community', 'Community Manager', 'Mexico');
