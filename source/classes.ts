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
  static ensure(error: any): error is NetworkException {
    return error instanceof TypeError
  }

  static throw(...args: ConstructorParameters<typeof NetworkException>) {
    throw new NetworkException(...args)
  }

  constructor(public message = '') {
    super(0x0, 'NetworkException', message)
  }
}

export class ApiException extends Exception {
  static ensure(error: any): error is ApiException {
    return error instanceof ApiException
  }

  static throw(...args: ConstructorParameters<typeof ApiException>) {
    throw new ApiException(...args)
  }

  constructor(public message = '') {
    super(0x1, 'ApiException', message)
  }
}

export class BusinessException extends Exception {
  static ensure(error: any): error is BusinessException {
    return error instanceof BusinessException
  }

  static throw(...args: ConstructorParameters<typeof BusinessException>) {
    throw new BusinessException(...args)
  }

  constructor(public message = '') {
    super(0x2, 'BusinessException', message)
  }
}

export class UnhandledException extends Exception {
  static ensure(error: any): error is BusinessException {
    return error instanceof BusinessException
  }

  static throw(...args: ConstructorParameters<typeof BusinessException>) {
    throw new BusinessException(...args)
  }

  constructor(public message = '') {
    super(0x3, 'UnhandledException', message)
  }
}
