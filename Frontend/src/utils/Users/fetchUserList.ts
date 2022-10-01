import User from "components/pages/User/UserManage/UserType";
import customAxios from "utils/customAxios";


const fetchUserList = 
    ({
        keyword
    }: { keyword: string}): Promise<User[]> => {
        const axios = customAxios();
        if(keyword.length === 0) {
            return axios({
                url: `/users`,
            }).then((res) => res.data);
        } else {
            return axios({
                url: `/users/${keyword}`,
            }).then((res) => res.data);
        }
        
    };


export default fetchUserList;