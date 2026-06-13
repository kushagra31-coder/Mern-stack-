# Secure Banking Dashboard - TSX & Typed Components: Mastering Type Safety

## Overview
A secure banking dashboard built with React and TypeScript,
implementing advanced type safety patterns for financial
transactions and budget tracking.

## Features
- Strictly typed transaction records
- Type-safe currency handling (USD, EUR, GBP)
- Immutable state with useReducer
- Class and functional components with full type safety
- Prevents negative balance through type-safe checks

## Components
- **TransactionList** - Functional component displaying
  all transactions with color coding
- **TransactionForm** - Class component for adding new
  transactions with type-safe form handling
- **BudgetTracker** - Manages income and expenses using
  useReducer with typed actions

## Types
- **Transaction** - Core transaction interface
- **IncomeEntry** - Typed income records
- **ExpenseEntry** - Typed expense records
- **BudgetState** - Reducer state interface
- **BudgetAction** - Discriminated union for actions

## Tech Stack
- React 18
- TypeScript
- Vite

## Setup
npm install
npm run dev

## Learning Outcomes
- Type-safe props and state management
- useReducer with TypeScript
- Class components with generics
- Immutable state patterns
