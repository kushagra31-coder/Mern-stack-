# CollabNotes - Advanced State Management with Zustand

## Overview
A real-time collaborative note-taking platform built 
with React and TypeScript, demonstrating advanced 
Zustand patterns including middleware, persistence, 
and state versioning.

## Features
- Persistent preferences (theme, font size)
- Persistent session management
- Immutable state updates with Immer middleware
- Devtools integration for debugging
- Audit history log for all note changes
- State versioning and migration
- Add, update, delete notes

## Components
- **NoteForm** - Add new notes
- **NotesList** - Display and delete notes
- **Preferences** - Theme and font size settings
- **SessionInfo** - Login/logout with persistence
- **HistoryLog** - Audit log of all changes

## Stores
- **noteStore** - Notes with immer + devtools
- **preferenceStore** - Persisted theme/fontSize
- **sessionStore** - Persisted session with migration

## Middleware Used
- **devtools** - Redux DevTools integration
- **persist** - localStorage persistence
- **immer** - Immutable state updates
- **partialize** - Selective persistence
- **migrate** - State version migration

## Tech Stack
- React 18
- TypeScript
- Zustand
- Immer
- Vite

## Setup
npm install
npm run dev

## Learning Outcomes
- Zustand middleware patterns
- State persistence with localStorage
- Immutable updates with Immer
- State versioning and migration
- Audit logging patterns