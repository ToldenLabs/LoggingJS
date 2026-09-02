import { LEVELS } from "./levels.js";

export function log(level, message) {
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] [${level}] ${message}`);
}

export function debug(message) {
    log(LEVELS.DEBUG, message);
}

export function info(message) {
    log(LEVELS.INFO, message);
}

export function warn(message) {
    log(LEVELS.WARN, message);
}

export function error(message) {
    log(LEVELS.ERROR, message);
}
