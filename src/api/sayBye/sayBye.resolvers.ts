import { Greeting } from "../../types/graph";

const resolvers = {
    Query: {
        sayBye: (): Greeting=> {
            return {
                error: true,
                text: "i did it! okay let me tell you , first you make the fuction ,second use in here!"
            }
        }
    }
};

export default resolvers;