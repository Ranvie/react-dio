import React from 'react'
import { 
    Container,
    Row,
    Input,
    Menu,
    MenuRight,
    SearchInputContainer,
    Wrapper,
    Logo
} from './style';
import { Button } from '../Button';
import logo from "../../assets/logo-dio.png";
import { UserPicture } from '../UserPicture';
import { IHeader } from './type';
import { useNavigate } from 'react-router-dom';

const Header = ({isAuthenticated} : IHeader) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Logo url={logo} alt="Logo da dio" />
                    {isAuthenticated ? (
                        <>
                            <SearchInputContainer>
                            <Input placeholder="Buscar..."/>
                            </SearchInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {isAuthenticated ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/89880413?s=40&v=4"/>
                    ) : (
                        <>
                        <MenuRight href="#">Home</MenuRight>
                        <a href='/login'><Button title="Entrar"/></a>
                        <a href='/register'><Button title="Cadastrar"/></a>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };