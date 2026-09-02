const entries = [];

/**
 * Add a log entry to storage.
 */
export function add(entry) {
    if (!entry || typeof entry !== "object") {
        throw new TypeError("Log entry must be an object");
    }

    entries.push(entry);

    return entry;
}

/**
 * Return every stored log entry.
 */
export function getAll() {
    return [...entries];
}

/**
 * Find logs by level.
 */
export function getByLevel(level) {
    return entries.filter(entry => entry.level === level);
}

/**
 * Search messages for text.
 */
export function search(query) {
    const text = String(query).toLowerCase();

    return entries.filter(entry =>
        String(entry.message).toLowerCase().includes(text)
    );
}

/**
 * Get the number of stored entries.
 */
export function count() {
    return entries.length;
}

/**
 * Remove all stored entries.
 */
export function clear() {
    entries.length = 0;
}
