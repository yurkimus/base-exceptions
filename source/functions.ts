export abstract class Exception extends Error {
  constructor(
    public code: number,
    public name: string,
    public message: string
  ) {
    super(message)
  }
}

export class NetworkException extends Exception {
  constructor(public message: string) {
    super(0x0, 'NetworkException', message)
  }
}

export function isNetworkException(error: any): error is NetworkException {
  return error instanceof TypeError
}

export function throwNetworkException(
  ...args: ConstructorParameters<typeof NetworkException>
) {
  throw new NetworkException(...args)
}

export class ApiException extends Exception {
  constructor(public message: string) {
    super(0x1, 'ApiException', message)
  }
}

export function isApiException(error: any): error is ApiException {
  return error instanceof ApiException
}

export function throwApiException(
  ...args: ConstructorParameters<typeof ApiException>
) {
  throw new ApiException(...args)
}

export class BusinessException extends Exception {
  constructor(public message: string) {
    super(0x2, 'BusinessException', message)
  }
}

export function isBusinessException(error: any): error is BusinessException {
  return error instanceof BusinessException
}

export function throwBusinessException(
  ...args: ConstructorParameters<typeof BusinessException>
) {
  throw new BusinessException(...args)
}

export class UnhandledException extends Exception {
  constructor(public message: string) {
    super(0x3, 'UnhandledException', message)
  }
}

export function isUnhandledException(error: any): error is UnhandledException {
  return error instanceof UnhandledException
}

export function throwUnhandledException(
  ...args: ConstructorParameters<typeof UnhandledException>
) {
  throw new UnhandledException(...args)
}
