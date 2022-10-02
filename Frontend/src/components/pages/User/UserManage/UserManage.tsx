import Title from "components/common/Title";
import React, { useCallback, useState } from "react";
import SectionWrapper from "components/UI/SectionWrapper";
import Input from "components/common/Input";
import { css } from "@emotion/react";
import ArticleWrapper from "components/UI/ArticleWrapper";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import InputForm from "./InputForm";
import User from "./UserType";
import Result from "./Result";
import { useQuery } from "react-query";
import fetchUserList from "utils/Users/fetchUserList";
function UserManage() {
    const [keyword, setKeyword] = useState<string>("");

    const { data, refetch } = useQuery<User[]>(["fecthUserList"], () => fetchUserList({ keyword }), {
        useErrorBoundary: false,
        suspense: false
    });

    // const data: User[] = [
    //     { id: 1, userId: "abx1234", nickname: "김철수", email: "this@kakao.com", state: 1 },
    //     { id: 1, userId: "abx1234", nickname: "김철수", email: "this@kakao.com", state: 1 },
    //     { id: 1, userId: "abx1234", nickname: "김철수", email: "this@kakao.com", state: 1 }
    // ];


    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(() => e.target.value);
    }, []);

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