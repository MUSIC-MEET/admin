import { AxiosResponse } from "axios";
import customAxios from "utils/customAxios";


const SetBanUser = 
    ({
        userId
    }: { userId: string}): Promise<AxiosResponse> => {
        const axios = customAxios();
        return axios({
            method: "PUT",
            url: `/users/${userId}`,
            data: {
                state: 2
            }
        });
        
    };


export default SetBanUser;