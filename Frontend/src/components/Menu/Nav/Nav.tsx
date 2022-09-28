import { css } from "@emotion/react";
import React, { useCallback, useMemo, useState } from "react";
import BaseProps from "../../common/BaseProps";
import NaviItem from "./NaviItem";
import NaviItemType from "./NaviItemType";



function Nav(props: BaseProps) {

    const [current, setCurrent] = useState<number>(1);

    const onChangeCurrent = useCallback((index: number) => {
        setCurrent(() => index);
    }, []);

    const navitems: NaviItemType[] = useMemo(() => [
        { name: "메인", path: "/", index: 1 },
        { name: "유저 관리", path: "/users/manage", index: 2 },
        { name: "음악 추가", path: "/musics/add", index: 3 },
        { name: "음악 관리", path: "/musics/manage", index: 4 },
    ], []);

    return (
        <nav
            className={`${props.className}`}
            css={style}
        >
            <ul>
                {
                    navitems.map((item) => (
                        <NaviItem
                            key={item.index}
                            {...item}
                            isCurrent={current === item.index}
                            onChangeCurrent={onChangeCurrent}
                        />
                    ))
                }
            </ul>
        </nav>
    );
}

const style = css`
    
`;

export default Nav;