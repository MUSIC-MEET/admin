import { AxiosResponse } from "axios";
import customAxios from "utils/customAxios";


const SetUncertifiedUser = 
    ({
        userId
    }: { userId: string}): Promise<AxiosResponse> => {
        const axios = customAxios();
        return axios({
            method: "PUT",
            url: `/users/${userId}`,
            data: {
                state: 3
            }
            ,
        });
        
    };


export default SetUncertifiedUser;