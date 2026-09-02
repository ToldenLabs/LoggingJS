import {
    debug,
    info,
    warn,
    error,
    fatal,
    log,
    setMinimumLevel,
    getMinimumLevel,
    formatLog
} from "../logger.js";

import { LEVELS } from "../levels.js";

console.log("Running logger tests...");

setMinimumLevel(LEVELS.DEBUG);

console.assert(getMinimumLevel() === LEVELS.DEBUG);

const entry = log(LEVELS.INFO, "Test message", {
    test: true
});

console.assert(entry.level === LEVELS.INFO);
console.assert(entry.message === "Test message");
console.assert(entry.metadata.test === true);
console.assert(typeof entry.timestamp === "string");

const formatted = formatLog(entry);

console.assert(formatted.includes("[INFO]"));
console.assert(formatted.includes("Test message"));

debug("Debug test");
info("Info test");
warn("Warning test");
error("Error test");
fatal("Fatal test");

console.log("✓ logger tests passed");
