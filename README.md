# Advanced Services Management Application

This is a comprehensive web application designed to manage hierarchical groups of services. It includes features like authentication, viewing, adding, editing, and unlinking services.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [State Management](#state-management)
- [Routing](#routing)
- [Responsive Design](#responsive-design)
- [Error Handling](#error-handling)
- [Git Version Control](#git-version-control)
- [Future Improvements](#future-improvements)


## Features

1. **Login**: 
   - Username and password-based authentication.
   - Form validation with error handling.
   - Uses the API endpoint: `https://dummyjson.com/auth/login`.
   
2. **Services Overview**:
   - Display user information from API.
   - Fetch hierarchical services from mock data and display them in a tree view.
   - Expand/collapse service groups.
   - Checkbox selection logic that propagates through the hierarchy.
   - Remove services with cascading delete confirmation for services with child groups.

3. **Service Management**:
   - Edit services and propagate changes to child services.
   - Immediate UI update after data modification.

4. **Access Control**: 
   - Protected routes for authenticated users.
   - Logout functionality to clear session and return to login page.

5. **Responsive Design**: 
   - Optimized for both desktop and mobile viewports.

6. **Error Handling**:
   - Error handling with `onError` from `useQuery` and `useMutation`.

## Technologies Used

- **React.js** (Functional Components, Hooks)
- **Vite** (Fast bundling and development)
- **Redux Toolkit** (State management for hierarchical services)
- **React Query** (Asynchronous data fetching and caching)
- **React Router** (Client-side routing)
- **Ant Design (AntD)** (UI Component Library)
- **React Responsive** (Responsive layouts)
- **TypeScript** (For type safety)
- **react-cookie** (For authentication token management)
- **Git** (Version control)

## Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

Clone the repository:

```bash
git clone https://github.com/DimaMarji/DOMECARE.git
npm install
npm run dev

