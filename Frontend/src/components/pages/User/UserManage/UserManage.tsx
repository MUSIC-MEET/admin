import Title from "components/common/Title";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import SectionWrapper from "components/UI/SectionWrapper";
import { css } from "@emotion/react";
import ArticleWrapper from "components/UI/ArticleWrapper";
import InputForm from "./InputForm";
import User from "./UserType";
import Result from "./Result";
import { useQuery } from "react-query";
import fetchUserList from "utils/Users/fetchUserList";
import _ from "lodash";

function UserManage() {
    const [keyword, setKeyword] = useState<string>("");

    const { data, refetch } = useQuery<User[]>(["fecthUserList"], () => fetchUserList({ keyword }), {
        useErrorBoundary: false,
        suspense: false
    });

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
                    />
                </SectionWrapper>
            </ArticleWrapper>
        </React.Fragment>
    );
}

const style = css`

`;



export default UserManage;