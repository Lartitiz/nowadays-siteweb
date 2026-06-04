## Plan: Remove "site web" card from Hero

### Context
The Hero section contains a single floating service bubble labeled "site web" positioned in the bottom-right of the hero. The user wants it removed.

### Change
In `src/components/site/Hero.tsx`, remove the "site web" bubble from the `SERVICES` array (currently the only item). Since the array will be empty, also remove the `{SERVICES.map(...)}` rendering block in the JSX to avoid rendering an empty loop.

No other sections or components are affected.