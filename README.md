# Stock Watchlist App

Polished React + Vite app implementing the assignment requirements.

## Run locally

Requirements: Node.js installed

 install:-
npm install

 dev server:-
npm run dev

 run tests (requires jest):-
npm run test


## Clarifying questions I would have asked
1. Should the dummy chart be a visual line chart or textual numbers? 
- I used Recharts visual line chart
2. Are the exact colors/branding required? 
- I used neutral, accessible colors
3. Should toggle view affect only the displayed line/chart or change the underlying data? 
- I implemented toggle as a per-card UI switch
4. Are there any accessibility requirements? 
 -Basic a11y included - roles and labels

## Assumptions
- Dummy data is acceptable and stored in public/dummyData.json
- Drawer shows a visual dummy chart generated from CMP
- Tests will be run with Node >= 18 and npm

## Features implemented
- Responsive grid (6 per row desktop)
- Card details: symbol, CMP, Futures, % change, last-updated
- Toggle A/B per card (View text shows current view)
- Search & Sort (pct, cmp, fut asc/desc)
- Right-side drawer with Recharts 30-point dummy series
- Refresh with simulated network errors and retry
- Loading skeletons and friendly error state
- Auto-updating "last updated ... ago" text
- 3 Jest + RTL tests for core behaviors

## Tradeoffs & next steps
 - Used Recharts for dummy chart → more polished than plain numbers, still lightweight
 - Last updated' stops at 59 min instead of hours, per assignment format
 - Tests cover core functionality; could add integration tests for filters and drawer
 - Styling is custom CSS → could migrate to Tailwind or a design system for consistency

## Personal Note: 
  I kept the UI minimal, clean, and responsive because I wanted it to feel like a 
  real trading dashboard rather than just a demo. I decided to use Recharts for 
  the dummy chart to make the drawer more intuitive, while still keeping the code 
  simple and lightweight. This way, I could balance clarity for the examiner with 
  realism for a real-world project.
