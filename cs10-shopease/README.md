# ShopEase - Bundle Analysis & Optimization

## Overview
An e-commerce platform built with React and TypeScript,
demonstrating bundle analysis techniques and optimization
strategies for fast load times.

## Problem Statement
ShopEase faced slow page loads due to bloated bundles
from third-party libraries. This project demonstrates
how to analyze and optimize bundle size for better
performance especially on slow mobile networks.

## Features
- Bundle visualization with rollup-plugin-visualizer
- Bad vs Good import strategy comparison
- Lazy loaded heavy components
- Date formatting comparison
- Product cards with optimized imports
- TypeScript config optimized for tree shaking

## Bundle Analysis Tools Used
- **rollup-plugin-visualizer** - Visual treemap of modules
- **Vite built-in** - Module size reporting

## Import Strategy Comparison
| Library | Bad Import | Size | Good Import | Size |
|---------|-----------|------|-------------|------|
| lodash | import _ from 'lodash' | ~70KB | import debounce from 'lodash/debounce' | ~2KB |
| dates | import moment from 'moment' | ~330KB | import { format } from 'date-fns' | ~3KB |

## Components
- **Chart** - Lazy loaded chart component
- **HeavyChart** - Heavy chart.js demonstration
- **DateDisplay** - Date formatting comparison
- **ProductCard** - Product display with good imports

## Utils
- **goodImports.ts** - Optimized selective imports
- **badImports.ts** - Heavy whole-library imports

## Optimization Strategies Applied
1. Tree shaking with ES modules
2. Selective imports for lodash and date-fns
3. Lazy loading for heavy chart component
4. TypeScript config optimized for bundling
5. Code splitting for performance

## Setup
```bash
npm install
npm install lodash date-fns moment chart.js
npm install --save-dev rollup-plugin-visualizer @types/lodash
```

## How to Analyze Bundle
```bash
npm run build
```

## What to Look For in the Treemap
| Library | Size | Verdict |
|---------|------|---------|
| moment | ~330KB | Replace with date-fns |
| lodash (full) | ~70KB | Use lodash/method imports |
| chart.js | ~200KB | Lazy load it |
| date-fns (selective) | ~3KB | Good |
| lodash/debounce | ~2KB | Good |

## Key Lessons

### 1. Selective imports save hundreds of KB
```ts
// BAD (+70KB)
import _ from 'lodash'

// GOOD (+2KB)
import debounce from 'lodash/debounce'
```

### 2. TypeScript types = zero bundle cost
```ts
interface Product { ... }  
type Currency = 'USD' | 'INR'  
enum Status { Active } 
```

### 3. Lazy load heavy components
```ts
const HeavyChart = lazy(() => import('./HeavyChart'))
```

### 4. tsconfig for better tree shaking
```json
{
  "compilerOptions": {
    "module": "esnext",
    "target": "es2017"
  }
}
```

## File Structure