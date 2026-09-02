import {
    LoggingError,
    createError,
    handleError
} from "../errors.js";

console.log("Running errors tests...");

const err = createError("Database failed", {
    name: "DatabaseError",
    code: "DB001",
    details: {
        database: "test"
    }
});

console.assert(err instanceof LoggingError);
console.assert(err instanceof Error);

console.assert(err.message === "Database failed");
console.assert(err.name === "DatabaseError");
console.assert(err.code === "DB001");
console.assert(err.details.database === "test");

handleError(err);

console.log("✓ errors tests passed");
