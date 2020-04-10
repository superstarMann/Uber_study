import { SayHelloQueryArgs, SayhelloResponse } from "../../types/graph";

const resolvers = {
    Query: {
        sayHello: (_, args: SayHelloQueryArgs): SayhelloResponse => {
            return {
                error: false,
                text: `hello ${args.name}`
            };
    }
}
};

export default resolvers;