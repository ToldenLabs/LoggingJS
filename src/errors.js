import { error } from "./logger.js";

export class LoggingError extends Error {
    constructor(message, options = {}) {
        super(message);

        this.name = options.name ?? "LoggingError";
        this.code = options.code ?? "UNKNOWN";
        this.details = options.details ?? null;

        Error.captureStackTrace?.(this, LoggingError);
    }
}

export function createError(message, options = {}) {
    return new LoggingError(message, options);
}

export function handleError(err) {
    if (!(err instanceof Error)) {
        error("Unknown thrown value", {
            value: err
        });

        return;
    }

    error(err.message, {
        name: err.name,
        code: err.code,
        stack: err.stack
    });
}
