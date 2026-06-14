# TaskFlow Project Management - State Management in React

## Overview
A project management app built with React and TypeScript,
demonstrating Context Providers and Zustand for 
type-safe state management.

## Features
- Light/Dark theme with Context Provider
- Type-safe Zustand stores
- Task management (add, complete, delete)
- User authentication simulation
- Notification system with read/unread status
- Selective re-renders with Zustand selectors

## Components
- **TaskForm** - Add new tasks
- **TaskList** - Display and manage tasks
- **NotificationList** - Show and manage notifications
- **Profile** - User login/logout simulation

## Context
- **ThemeContext** - Global light/dark theme provider

## Zustand Stores
- **taskStore** - Tasks state and actions
- **userStore** - User authentication state
- **notificationStore** - Notifications with read status

## Types
- **Task** - Task interface
- **User** - User interface  
- **Notification** - Notification with type and read status

## Tech Stack
- React 18
- TypeScript
- Zustand
- Vite

## Setup
npm install
npm run dev

## Learning Outcomes
- Context Provider vs Zustand comparison
- Type-safe global state management
- Zustand selectors for performance
- Combining Context and Zustand