import Title from "components/common/Title";
import React, { useCallback, useMemo, useState } from "react";
import SectionWrapper from "components/UI/SectionWrapper";
import { css } from "@emotion/react";
import ArticleWrapper from "components/UI/ArticleWrapper";
import InputForm from "./InputForm";
import User from "./UserType";
import Result from "./Result";
import { useMutation, useQuery, useQueryClient } from "react-query";

import _ from "lodash";
import ActiveType from "./ActiveType";

import fetchUserList from "utils/Users/fetchUserList";
import SetActiveUser from "utils/Users/SetActvieUser";
import SetUncertifiedUser from "utils/Users/SetUncertifiedUser";
import SetDestoryUser from "utils/Users/SetDestoryUser";
import SetBanUser from "utils/Users/SetBanUser";

function UserManage() {
    const [keyword, setKeyword] = useState<string>("");
    const queryClient = useQueryClient();
    const { data, refetch } = useQuery<User[]>(["fecthUserList"], () => fetchUserList({ keyword }), {
        useErrorBoundary: false,
        suspense: false
    });

    const { mutate: setActvieMutate } = useMutation(["setActive"],
        SetActiveUser,
        {
            onSuccess: () => {
                queryClient.invalidateQueries("fecthUserList");
            }
        }
    );

    const { mutate: setSetUncertifiedMutate } = useMutation(["setUncertified"],
        SetUncertifiedUser,
        {
            onSuccess: () => {
                queryClient.invalidateQueries("fecthUserList");
            }
        }
    );

    const { mutate: setDestroyMutate } = useMutation(["setDestroy"],
        SetDestoryUser,
        {
            onSuccess: () => {
                queryClient.invalidateQueries("fecthUserList");
            }
        }
    );

    const { mutate: setBanMutate } = useMutation(["setBan"],
        SetBanUser,
        {
            onSuccess: () => {
                queryClient.invalidateQueries("fecthUserList");
            }
        }
    );



    const debounceOnChange = useMemo(() => _.debounce(() => {
        refetch();
    }, 500), []);

    const onChangeHandler = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        await setKeyword(() => e.target.value);
        debounceOnChange();
    }, [debounceOnChange]);

    const onKeywordSearchHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        refetch();
    }, [refetch]);

    const onChangeUserState = useCallback(({ userId, state }: { userId: string; state: ActiveType }) => {
        if (state === 0) {
            setActvieMutate({ userId });
        } else if (state === 1) {
            setDestroyMutate({ userId });
        } else if (state === 2) {
            setBanMutate({ userId });
        } else if (state === 3) {
            setSetUncertifiedMutate({ userId });
        }
    }, [setActvieMutate, setBanMutate, setDestroyMutate, setSetUncertifiedMutate]);

    return (
        <React.Fragment>
            <Title>{"유저 관리"}</Title>
            <ArticleWrapper style={style}>
                <InputForm
                    value={keyword}
                    onChange={onChangeHandler}
                    onSubmit={onKeywordSearchHandler}
                />
                <SectionWrapper>
                    <Result
                        result={data}
                        onChangeState={onChangeUserState}
                    />
                </SectionWrapper>
            </ArticleWrapper>
        </React.Fragment>
    );
}

const style = css`

`;



export default UserManage;