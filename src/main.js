import {
    debug,
    info,
    warn,
    error,
    fatal,
    setMinimumLevel
} from "./logger.js";

import {
    createError,
    handleError
} from "./errors.js";

import {
    inspect,
    assert,
    trace
} from "./debugger.js";

info("Logging engine starting");

debug("Debug mode enabled");

inspect({
    version: "0.1.0",
    environment: "development"
}, "engine");

warn("This is a warning");

assert(10 > 5, "10 should be greater than 5");

trace("Startup trace");

try {
    throw createError("Test database failure", {
        name: "DatabaseError",
        code: "DB001"
    });
} catch (err) {
    handleError(err);
}

setMinimumLevel("WARN");

debug("This will no longer be displayed");
info("This will no longer be displayed");

warn("Warnings are still displayed");
error("Errors are still displayed");
fatal("Fatal messages are still displayed");
