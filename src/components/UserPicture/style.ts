import styled from "styled-components";
import { IUserPictureStyled } from "./type";

export const Picture = styled.img<IUserPictureStyled>`
    display: inline-block;
    margin: ${({margin}) => margin};
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #fff;
`