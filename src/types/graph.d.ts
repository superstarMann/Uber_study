export const typeDefs = ["type ByeName {\n  error: Boolean!\n  text: String!\n}\n\ntype Query {\n  sayBye(name: String!): ByeName!\n  sayHello(name: String!): SayhelloResponse!\n}\n\ntype SayhelloResponse {\n  text: String!\n  error: Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: ByeName;
  sayHello: SayhelloResponse;
}

export interface SayByeQueryArgs {
  name: string;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface ByeName {
  error: boolean;
  text: string;
}

export interface SayhelloResponse {
  text: string;
  error: boolean;
}
