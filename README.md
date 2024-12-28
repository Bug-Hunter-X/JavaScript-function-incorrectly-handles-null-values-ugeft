# JavaScript Function Bug: Incorrect Null Handling

This repository demonstrates a common bug in JavaScript where a function incorrectly handles `null` values as input.  The function `foo` is designed to add two numbers, but it incorrectly returns 0 when either input is `null` instead of handling the `null` input more appropriately (e.g., throwing an error or returning `NaN`).

The `bug.js` file contains the buggy code, and `bugSolution.js` provides a corrected version.

## Bug Description
The original function returns 0 when either 'a' or 'b' is null, making it's behavior unexpected. It should properly handle such input to provide a more robust application.

## Solution
The corrected version handles null values gracefully by explicitly checking for null and throwing an error or returning NaN to clearly communicate the issue.