const entries = [];

export function add(entry) {
    entries.push(entry);
}

export function getAll() {
    return [...entries];
}

export function getByLevel(level) {
    return entries.filter(entry => entry.level === level);
}

export function count() {
    return entries.length;
}

export function clear() {
    entries.length = 0;
}
