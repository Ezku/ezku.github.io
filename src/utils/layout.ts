// See: https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862
const breakpointMinWidths = [600, 900, 1200];

export const breakpoints = breakpointMinWidths.map(bp => `@media (min-width: ${bp}px)`);
