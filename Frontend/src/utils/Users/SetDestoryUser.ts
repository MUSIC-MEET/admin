import { AxiosResponse } from "axios";
import customAxios from "utils/customAxios";


const SetDestoryUser = 
    ({
        userId
    }: { userId: string}): Promise<AxiosResponse> => {
        const axios = customAxios();
        return axios({
            method: "PUT",
            url: `/users/${userId}`,
        });
        
    };


export default SetDestoryUser;