export const typeDefs = ["type Greeting {\n  error: Boolean!\n  text: String!\n  text: String!\n  error: Boolean!\n}\n\ntype Query {\n  sayBye: Greeting!\n  sayHello: Greeting!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: Greeting;
  sayHello: Greeting;
}

export interface Greeting {
  error: boolean;
  text: string;
}
