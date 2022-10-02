import { Interpolation, Theme } from "@emotion/react";

interface BaseProps {
    className?: string;
    style?: Interpolation<Theme>;
    onClick?: (event: React.MouseEvent) => void;
}

export default BaseProps;