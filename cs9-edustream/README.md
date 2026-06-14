# CS9 — EduStream: Lazy Loading & Code Splitting

## What This Demonstrates
- `React.lazy()` + `Suspense` for lazy loading components
- Route-based code splitting (each page = separate JS chunk)
- Component-based splitting (Quiz, ProfileSettings load on demand)
- Error boundaries for failed lazy loads
- Spinner fallback UI while chunks load

## How to Run
```bash
npm install
npm run dev
```

## How to Test Lazy Loading
1. Open DevTools → Network tab → filter by **JS**
2. Navigate between routes — watch new chunks appear per page
3. On Dashboard, click **Open Settings** — ProfileSettings chunk loads only then
4. On Courses, click **Take Quiz** — Quiz chunk loads only on click
5. Visit `/admin` — AdminPanel chunk loads only on that route

## Key Concepts

### Route-based splitting
```tsx
const Courses = lazy(() => import('./pages/Courses'));
// Only downloads Courses.js when user visits /courses
```

### Component-based splitting
```tsx
const Quiz = lazy(() => import('./Quiz'));
// Only downloads Quiz.js when Take Quiz is clicked
```

### Always wrap in Suspense
```tsx
<Suspense fallback={<Spinner />}>
  <LazyComponent />
</Suspense>
```

### Error boundary protects against failed loads
```tsx
<ErrorBoundary>
  <Suspense fallback={<Spinner />}>
    <LazyComponent />
  </Suspense>
</ErrorBoundary>
```

## What NOT to lazy load
- Navbar, header, core layout — always in main bundle
- Small components used on every page
- Anything needed immediately on first render

## Tech Stack
- React 18 + TypeScript
- React Router v6
- Vite (handles code splitting automatically)

## Part of
Vinternship MERN Stack Case Studies — CS9 of 10