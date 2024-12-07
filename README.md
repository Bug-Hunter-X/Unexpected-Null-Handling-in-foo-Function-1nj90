# Unexpected Null Handling in foo Function

This repository demonstrates an unexpected behavior in a JavaScript function that handles null values. The function `foo` is expected to add two numbers, but it returns `null` if either of its arguments is `null`. This behavior might not be desirable in all scenarios. 

The `bug.js` file contains the original function with the unexpected behavior.  The `bugSolution.js` file provides a solution that addresses this unexpected behavior, ensuring that null values are handled correctly. 

## How to Reproduce
1. Clone the repository.
2. Open `bug.js` and run it using a JavaScript interpreter (e.g., Node.js).
3. Observe the unexpected output.
4. Open `bugSolution.js` to view a potential solution. 

## Solution
The solution presented in `bugSolution.js` addresses the issue using a more robust way to handle null values to avoid unexpected results. 