import React from 'react'
import { IFormData } from './type';

import { MdEmail, MdLock } from "react-icons/md"
import { FaUser } from 'react-icons/fa';

import { Column, Container, SubtitleRegister, TitleRegister, Title, LoginText, Wrapper, InfoRegister } from './style';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  fullName: yup.string().required("Necessário"),
  email: yup.string().email("Email não válido").required("Necessário"),
  password: yup.string().min(3, "No mínimo 3 caracteres").required("Necessário"),
}).required();

const Register = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (formData : IFormData) => {
    api.get(`users?email=${formData.email}`)
        .then( ({data}) => { 
          if(isEmailExists(data))
          {
            alert("O email já está cadastrado");
          }
          else
          {
            register(formData);
            alert("Usuário criado com sucesso");
            navigate("/login");
          }
        })
        .catch( (error) => { alert("Houve um erro, tente novamente"); console.error(error); });
  };

  const isEmailExists = (data) => {
    return data.length !== 0;
  }

  const register = (userData) => {
    api.post('/users', {
      fullName: userData.fullName,
      email: userData.email,
      password: userData.password
    });
  }

  return (<>
    <Header />
    <Container>
      <Column>
        <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleRegister>Comece agora grátis</TitleRegister>
          <SubtitleRegister>Crie sua conta e make the change._</SubtitleRegister>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input leftIcon={<FaUser />} name='fullName' placeholder='Nome Completo' control={control} errorMessage={(errors?.fullName?.message as string)}/>
            <Input leftIcon={<MdEmail />} name='email' placeholder='E-mail' control={control} errorMessage={(errors?.email?.message as string)}/>
            <Input leftIcon={<MdLock />} name='password' placeholder='Senha' type="password" control={control} errorMessage={(errors?.password?.message as string)}/>
            <Button title='Criar minha Conta' variant="secondary" type='submit'/>
          </form>
          <InfoRegister>
            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de 
            Privacidade e os Termos de Uso da DIO.
          </InfoRegister>
          <LoginText variant=''>
            Já tenho conta. <a href='/login'><LoginText variant="login">Fazer Login</LoginText></a>
          </LoginText>
        </Wrapper>
      </Column>
    </Container>
  </>)
}

export { Register }
