export interface MyInterface {
  method(): string
}

export class MyClass implements MyInterface {
  constructor(parameters) {
    
  }
  method(): string {
    throw new Error("Method not implemented.");
  }
}