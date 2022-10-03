import { AxiosResponse } from "axios";
import customAxios from "utils/customAxios";

const SetActiveUser = 
    ({
        userId
    }: { userId: string}): Promise<AxiosResponse> => {
        const axios = customAxios();
        return axios({
            method: "PUT",
            url: `/users/${userId}`,
            data: {
                state: 0
            }
        });
        
    };


export default SetActiveUser;