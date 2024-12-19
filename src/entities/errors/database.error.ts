export class DatabaseError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class DBInternalServerError extends DatabaseError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}

export class DBConflictError extends DatabaseError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}
