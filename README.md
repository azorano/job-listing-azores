# Job Listing Platform

A full-stack job listing platform built with **React**, **Express**, **Node.js**, and **MongoDB**. This platform allows employers to post jobs and candidates to browse and apply through email in an initial phase, with a user-friendly UI built with **Tailwind CSS**.


## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Usage](#usage)
- [License](#license)


## Features

- **Employer Functionalities**:
  - Post job listings with descriptions and images.
  - Automatic deletion of job posts after 3 months.
- **Candidate Functionalities**:
  - Browse jobs (10 jobs per page for easy scrolling).
  - Apply to job listings.
- **Error Handling**:
  - ErrorBoundary for graceful error handling.
- **Styling**: Tailwind CSS for responsive design.


## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **File Handling**: Multer (for image upload)


## Prerequisites

- Node.js (version 20.16.0 or higher)
- MongoDB (version 8.7.3 or higher)
- React 18.3.1
- React Router 6.27.0
- Tailwind CSS 3.4.14
- Typescript 4.9.5


## Project Structure

```
job-listing-platform/
├── backend/
│ └── config/   # MongoDB connection
│ └── api/      # External API controllers
│ └── models/   # Mongoose models
│ └── routes/   # Internal API routes
│ └── uploads/  # Images
│ └── ai/       # AI production
│ │
│ └── .env      # Environment variables (excluded from Git)
│ │
│ └── server.js # Express entry point
│
├── frontend/
│ └── src/
│   └── components/ # Reusable React components
│   └── pages/      # Page components for routing
│   │
│   └── App.tsx     # Main App component
│   │
│   └── index.tsx   # ReactDOM render
│   │
│   └── public/     # build
│   │
│   └── .env        # Environment variables (excluded from Git)
│   │
│   └── .gitignore  # Git exclusion file
---------------------------------------------------------
```


## Installation

**Clone the repository**:
git clone https://github.com/azorano/job-listing.git


## API Documentation

The project includes a REST API for managing job listings and other features. Documentation for each endpoint will be available soon.


## ROADMAP 2024 (until January)

- **Frontend**:

  - Employer Registration: A simple, intuitive registration flow for employers with validation and onboarding guidance.
  - Employer Login and Dashboard: Provide employers with a dashboard to view, edit, or delete job posts and track applications.

- **Backend**:

  - Authentication & Authorization: Secure user login and role-based access (e.g., employers vs. candidates).
  - Job Posting API: Allow authenticated employers to create, edit, and delete job listings.

- **Database**:

  - Job Listing Schema Enhancements: Add fields for salary range, location, employment type, and application deadline.

- **File Handling**:
  - Image upload: Allow employers to upload company logos or other kind of images.
  - File Optimization: Compress images to optimize load times and storage space.
  - Secure File Access: Set permissions and secure links for user-uploaded files to avoid unauthorized access.


## ROADMAP 2025

- **Frontend**:

  - AI-Powered Automated Posting: Integrate AI to assist employers in creating job posts based on industry standards or past successful listings.
  - Job Application Tracker for Candidates: Allow candidates to view their submitted applications, check job status, and receive notifications.
  - Advanced Search and Filter: AI-based job suggestions and filters by keywords, experience level, location, and industry.

- **Backend**:

  - Scheduled Data Cleanup: Automatically delete outdated job posts (older than 3 months).
  - Notification System: Implement notifications for job updates, application status, and new job postings.
  - Rate Limiting & Throttling: Ensure API security and performance by limiting excessive requests.

- **Database**:

  - Analytics Data: Track engagement metrics like views, applications, and clicks on job posts.
  - User Schema Enhancements: Get additional employer and candidate details, e.g., company information, resume, and portfolio links.

- **File Handling**:
  - Allow candidates to upload resumes and/or cover letters.
  - Automatic Image Resizing: fit standard dimensions or better redimensioning for faster loading.
  - Enhanced Compression: Apply lossless compression to reduce file sizes without quality loss.
  - File Expiry: Set automatic deletion of unused files to free up storage space.
  - Better Organization: Organize files by user or job post ID for easier management.
  - Secure Access Links: Use time-limited links for file downloads to enhance security.


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for new features, bug fixes, or improvements.

Feel free to email me if you have any questions or need assistance => azores.work*at*brunomatos.pt
