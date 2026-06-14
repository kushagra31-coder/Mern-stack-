# FinTrust Wallet - MongoDB Transactions (ACID)

## Overview
An interactive ACID transaction simulator built with
React and TypeScript, demonstrating MongoDB's
multi-document transaction capabilities for a
digital wallet system.

## Problem Statement
FinTrust needed atomic money transfers between wallets
ensuring no partial updates occur - either all changes
commit or all roll back.

## Features
- Multi-document atomic transfers
- Session start/commit/abort simulation
- Simulate failure to test rollback
- Refund transactions
- Real-time session log
- Color-coded balance warnings
- ACID properties explanation

## Components
- **TransactionDemo** - Interactive wallet UI
- **Transactions Page** - Main page wrapper

## MongoDB Concepts Demonstrated
- session.startTransaction()
- session.commitTransaction()
- session.abortTransaction()
- Multi-document atomic updates
- $inc operator for balance updates
- insertOne within transaction session
- Rollback on failure

## ACID Properties
- **Atomicity** - All operations succeed or all fail
- **Consistency** - Balances always valid
- **Isolation** - No partial reads during transfer
- **Durability** - Committed changes persist

## Tech Stack
- React 18
- TypeScript
- Vite

## Setup
npm install
npm run dev

## How to Test
1. Select sender and receiver
2. Enter amount and click Transfer
3. Check Simulate failure to test rollback
4. Click Refund to reverse completed transaction

## Learning Outcomes
- MongoDB ACID transactions
- Multi-document atomic operations
- Transaction commit and abort patterns
- Real-world financial transaction use case