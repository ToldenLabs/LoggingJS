import { debug } from "./logger.js";

export function inspect(value, name = "value") {
    debug(`${name}: ${JSON.stringify(value)}`);
}

export function assert(condition, message) {
    if (!condition) {
        throw new Error(`Assertion failed: ${message}`);
    }

    debug(`Assertion passed: ${message}`);
}
