# FitLog — Workout Library

FitLog is a responsive workout library web application that helps users explore workouts, view detailed workout information, create a daily workout plan, save workouts for later, and track completed exercises.

## Live Website

Add your deployed website link here.

## Features

* Browse workouts covering different muscle groups.
* View detailed information about each workout.
* Add workouts to Today's Plan.
* Save workouts for later.
* Remove workouts from Today's Plan or Saved list.
* Mark workouts as completed.
* Track total exercises, workout duration, and calories.
* Sort workouts by duration, calories, or rating.
* Persistent workout data using Zustand.
* Toast notifications for user actions.
* Responsive design for mobile, tablet, and desktop.
* Loading state while data is being fetched.
* Custom 404 page for unavailable routes.

## Technologies Used

* Next.js
* TypeScript
* React
* Tailwind CSS
* Zustand
* React Hot Toast
* REST API
* Git & GitHub

## API

FitLog uses a REST API to fetch workout data.

### All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Single Workout

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

## Pages

### Home

The home page contains the hero section and workout library.

### Workout Details

Users can view detailed information about a selected workout, including:

* Workout name
* Muscle groups
* Equipment
* Difficulty
* Duration
* Calories
* Sets and reps
* Rating
* Description
* Instructions

### My Plan

The My Plan page allows users to manage their workouts.

It includes:

* Today's Plan
* Saved Workouts
* Exercise count
* Total duration
* Total calories
* Mark as Done
* Remove workout
* View Details

## State Management

Zustand is used for managing workout-related client state.

The application manages:

* Today's workout plan
* Saved workouts
* Completed workouts

Zustand's persist middleware keeps the workout plan and saved workouts available after refreshing the browser.

## Responsive Design

FitLog is responsive and optimized for:

* Mobile devices
* Tablets
* Desktop screens

## Getting Started

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```text
src/
├── app/
│   ├── library/
│   │   └── api.ts
│   ├── my-plan/
│   │   └── page.tsx
│   ├── workout/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Library.tsx
│   ├── LibraryContent.tsx
│   ├── WorkOutCard.tsx
│   ├── PlanWorkoutCard.tsx
│   ├── SavedWorkoutCard.tsx
│   └── Footer.tsx
│
└── store/
    └── useWorkoutStore.ts

public/
└── assets/
    └── logo.png
```

## License

This project is created for learning and portfolio purposes.
