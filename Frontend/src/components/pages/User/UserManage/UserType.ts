import ActiveType from "./ActiveType";
interface User{
    id: number;
    userId: string;
    email: string;
    nickname: string;
    state:  ActiveType;
}

export default User;