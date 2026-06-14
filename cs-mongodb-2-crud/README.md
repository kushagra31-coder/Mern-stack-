# FastBite Menu - MongoDB CRUD Operations

## Overview
An interactive CRUD operations demo built with React
and TypeScript, demonstrating MongoDB's core database
operations on a restaurant menu system.

## Problem Statement
FastBite needed a system to manage their menu items
with full create, read, update, and delete operations
while maintaining data consistency.

## Features
- insertOne - Add new dishes to collection
- find - Filter dishes by tag and price
- updateOne - Update price and add tags
- deleteOne - Remove dishes from collection
- Real-time operation log
- Visual filter matching (green highlight)

## Components
- **QueryBuilder** - Interactive CRUD UI
- **CRUD Page** - Main page wrapper

## MongoDB Operations Demonstrated
- insertOne with document structure
- find with query operators
- updateOne with $set and $push
- deleteOne by field value
- Real-time acknowledged responses

## Tech Stack
- React 18
- TypeScript
- Vite

## Setup
npm install
npm run dev

## Learning Outcomes
- MongoDB CRUD operations
- Query operators and filters
- Document insertion and deletion
- Update operators ($set, $push)
- Real-world menu management use case