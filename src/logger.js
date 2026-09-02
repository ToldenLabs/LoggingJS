import { LEVELS, LEVEL_PRIORITY, isValidLevel } from "./levels.js";

let minimumLevel = LEVELS.DEBUG;

export function setMinimumLevel(level) {
    if (!isValidLevel(level)) {
        throw new Error(`Invalid log level: ${level}`);
    }

    minimumLevel = level;
}

export function getMinimumLevel() {
    return minimumLevel;
}

export function log(level, message, metadata = {}) {
    if (!isValidLevel(level)) {
        throw new Error(`Invalid log level: ${level}`);
    }

    if (LEVEL_PRIORITY[level] < LEVEL_PRIORITY[minimumLevel]) {
        return;
    }

    const entry = {
        timestamp: new Date().toISOString(),
        level,
        message,
        metadata
    };

    console.log(formatLog(entry));

    return entry;
}

export function formatLog(entry) {
    const metadata = Object.keys(entry.metadata).length
        ? ` ${JSON.stringify(entry.metadata)}`
        : "";

    return `[${entry.timestamp}] [${entry.level}] ${entry.message}${metadata}`;
}

export function debug(message, metadata) {
    return log(LEVELS.DEBUG, message, metadata);
}

export function info(message, metadata) {
    return log(LEVELS.INFO, message, metadata);
}

export function warn(message, metadata) {
    return log(LEVELS.WARN, message, metadata);
}

export function error(message, metadata) {
    return log(LEVELS.ERROR, message, metadata);
}

export function fatal(message, metadata) {
    return log(LEVELS.FATAL, message, metadata);
}
