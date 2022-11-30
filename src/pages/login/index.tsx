import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Column, Container, CreateText, ForgotPassText, Row, 
    SubtitleLogin, Title, TitleLogin, Wrapper
} from "./style";
import { MdEmail, MdLock } from "react-icons/md"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api"; 
import { IFormData } from "./type";

const schema = yup.object({
    email: yup.string().email("Email não válido").required("Necessário"),
    password: yup.string().min(3, "No mínimo 3 caracteres").required("Necessário"),
}).required();

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });
    
    const login = (userData) => {
        if(userData.length === 1)
        {
            navigate('/feed');
        }
        else
        {
            alert("Usuário ou senha inválidos.");
        }
    }

    const onSubmit = (formData : IFormData) => {
        api.get(`users?email=${formData.email}&password=${formData.password}`)
            .then( ({data}) => { login(data); })
            .catch( (error) => { alert("Houve um erro, tente novamente"); console.error(error);});
    };

    return (
    <>
        <Header />
        <Container>
            <Column>
                <Title> 
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={(errors?.email?.message as string)} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={(errors?.password?.message as string)} control={control} placeholder="Senha" leftIcon={<MdLock />} type="password"/>
                        <Button title="Entrar" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <ForgotPassText>Esqueci minha senha</ForgotPassText>
                        <a href="/register"><CreateText>Criar Conta</CreateText></a>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login };