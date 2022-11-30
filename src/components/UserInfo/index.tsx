import React from 'react';
import { Container, NameText, Progress } from "./style";
import { UserPicture } from '../UserPicture';
import { IUserInfo } from './type';

const UserInfo = ({name, image, percentual} : IUserInfo) => {
    return (
        <Container>
            <UserPicture src={image} margin="0 10px 0 0"/>
            <div>
                <NameText>{name}</NameText>
                <Progress percentual={percentual}/>
            </div>
        </Container>
    )
}

export { UserInfo };