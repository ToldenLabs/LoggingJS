import {
    LEVELS,
    LEVEL_PRIORITY,
    isValidLevel
} from "../levels.js";

console.log("Running levels tests...");

console.assert(LEVELS.DEBUG === "DEBUG");
console.assert(LEVELS.INFO === "INFO");
console.assert(LEVELS.WARN === "WARN");
console.assert(LEVELS.ERROR === "ERROR");
console.assert(LEVELS.FATAL === "FATAL");

console.assert(LEVEL_PRIORITY.DEBUG === 0);
console.assert(LEVEL_PRIORITY.INFO === 1);
console.assert(LEVEL_PRIORITY.WARN === 2);
console.assert(LEVEL_PRIORITY.ERROR === 3);
console.assert(LEVEL_PRIORITY.FATAL === 4);

console.assert(isValidLevel("DEBUG") === true);
console.assert(isValidLevel("INFO") === true);
console.assert(isValidLevel("INVALID") === false);

console.log("✓ levels tests passed");
