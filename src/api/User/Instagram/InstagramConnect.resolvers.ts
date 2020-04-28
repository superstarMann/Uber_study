import { Resolvers } from "../../../types/resolvers";
import { InstagramConnectMutation_InstagramArgs, InstagramResponse } from "../../../types/graph";
import User from "../../../entities/User";



const resolvers: Resolvers = {
    Mutation_Instagram: {
        InstagramConnect: async(_, args:InstagramConnectMutation_InstagramArgs): Promise<InstagramResponse> => {
            const {instaId} = args;
         try{
             const existingUser = await User.findOne({instaId});
         }
        }
    }
}

export default resolvers;