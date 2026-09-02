import { debug } from "./logger.js";

export function inspect(value, label = "value") {
    debug(`${label}: ${formatValue(value)});

    return value;
}

export function formatValue(value) {
    if (typeof value === "string") {
        return JSON.stringify(value);
    }

    if (value === null) {
        return "null";
    }

    if (value === undefined) {
        return "undefined";
    }

    try {
        return JSON.stringify(value);
    } catch {
        return `[Unserializable ${typeof value}]`;
    }
}

export function assert(condition, message) {
    if (!condition) {
        throw new Error(`Assertion failed: ${message}`);
    }

    debug(`Assertion passed: ${message}`);
}

export function trace(label = "Trace") {
    const stack = new Error().stack;

    debug(label, {
        stack
    });
}
