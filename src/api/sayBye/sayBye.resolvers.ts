import { SayByeQueryArgs, ByeName } from "../../types/graph";

const resolvers = {
    Query: {
        sayBye: (_,args: SayByeQueryArgs): ByeName=> {
            return {
                error: true,
                text:`i did it! okay let me tell you , first you make the fuction ,second use in here! and third welcome ${args.name}`
                };
        }
    }
};

export default resolvers;