import ActiveType from "./ActiveType";

type ChangeStateFnType = {
    onChangeState: ({ userId, state }: {userId: string, state: ActiveType}) => void;
}

export default ChangeStateFnType;