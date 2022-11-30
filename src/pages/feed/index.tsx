import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighlight} from "./style";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
    return (<>
        <Header isAuthenticated={true}/>
        <Container>
            <Column flex="3">
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex="1">
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo name="Rangel Vieira" image="https://avatars.githubusercontent.com/u/89880413?s=40&v=4" percentual={65}/>
                <UserInfo name="Rangel Vieira" image="https://avatars.githubusercontent.com/u/89880413?s=40&v=4" percentual={65}/>
                <UserInfo name="Rangel Vieira" image="https://avatars.githubusercontent.com/u/89880413?s=40&v=4" percentual={65}/>
                <UserInfo name="Rangel Vieira" image="https://avatars.githubusercontent.com/u/89880413?s=40&v=4" percentual={65}/>
                <UserInfo name="Rangel Vieira" image="https://avatars.githubusercontent.com/u/89880413?s=40&v=4" percentual={65}/>
                <UserInfo name="Rangel Vieira" image="https://avatars.githubusercontent.com/u/89880413?s=40&v=4" percentual={65}/>
                <UserInfo name="Rangel Vieira" image="https://avatars.githubusercontent.com/u/89880413?s=40&v=4" percentual={65}/>
            </Column>
        </Container>
    </>)
}

export { Feed };