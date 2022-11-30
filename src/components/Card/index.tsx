import React from 'react'
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo } from "./style"
import { FiThumbsUp } from "react-icons/fi"
import { UserPicture } from "../../components/UserPicture";

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://ac-landing-pages-user-uploads-production.s3.amazonaws.com/0000051657/95ce2b2e-ccc0-40d8-ae56-65178fc030b9.png"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/89880413?s=40&v=4"/>
                    <div>
                        <h4>Rangel Vieira</h4>
                        <p>Há 12 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para o curso de React</h4>
                    <p>Projeto desenvolvido durante as aulas do bootcamp Orangetech.</p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp />10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card };
