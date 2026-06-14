# StreamVision Dashboard - Memoization in React

## Overview
A streaming analytics dashboard built with React 
and TypeScript, demonstrating memoization patterns 
to optimize performance.

## Features
- useMemo for expensive calculations
- useCallback for stable function references
- React.memo for component memoization
- Performance logging in console
- Tag management system
- Video overlay management
- Comments panel

## Components
- **AnalyticsChart** - useMemo for data computation
- **TagInput** - useCallback for handlers
- **TagList** - React.memo to prevent re-renders
- **TagManager** - Combined memoization patterns
- **VideoOverlay** - React.memo component
- **CommentsPanel** - Memoized comments

## Tech Stack
- React 18
- TypeScript
- Vite

## Setup
npm install
npm run dev

## Learning Outcomes
- useMemo for expensive computations
- useCallback for stable references
- React.memo for component optimization
- Performance monitoring patterns