export class UnreachableError extends Error {
  constructor(value: never) {
    super(`Unreachable case: ${value}`)
  }
}

export function UnreachableFunction(value: never): never {
  return value
}
