import { info, warn } from "./logger.js";
import { createError, handleError } from "./errors.js";
import { inspect, assert } from "./debugger.js";

info("Logging engine starting");

inspect({
    version: "0.1.0",
    mode: "development"
}, "engine");

warn("This is a test warning");

assert(10 > 5, "10 should be greater than 5");

try {
    throw createError("Test error");
} catch (err) {
    handleError(err);
}

info("Logging engine finished");
