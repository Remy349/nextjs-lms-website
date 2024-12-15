export class DBInternalServerError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}
