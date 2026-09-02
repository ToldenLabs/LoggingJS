export const LEVELS = Object.freeze({
    DEBUG: "DEBUG",
    INFO: "INFO",
    WARN: "WARN",
    ERROR: "ERROR",
    FATAL: "FATAL"
});

export const LEVEL_PRIORITY = Object.freeze({
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    FATAL: 4
});

export function isValidLevel(level) {
    return Object.hasOwn(LEVELS, level);
}
