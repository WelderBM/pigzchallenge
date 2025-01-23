import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import GoogleButton from '../../components/GoogleButton';
import { Container, Title, Subtitle, ForgotPassword, CreateAccountBox, CreateAccountgray, CreateAccountorange, LoginWithBox, LoginWith, Line } from './styles';
import PigzLogo from '../../assets/pigz-logotipo-branco.svg'
import { Alert } from 'react-native';

const LoginScreen = () => {
    const handleGoogleSignIn = () => {
      Alert.alert('Google Sign-In', 'Funcionalidade de autenticação com o Google aqui.');
    };


  return (
    <Container>
      <PigzLogo width={100} height={50} fill="#FA641E" />
      <Title>Para entregadores</Title>
      <Subtitle>Login</Subtitle>
      <Input placeholder="example@pigz.com.br" label="Email ou Telefone" />
      <Input
        label="Senha"
        placeholder="********"
        isPassword={true}
      />
      <ForgotPassword>Esqueci minha senha</ForgotPassword>
      <Button title="Entrar"/>
      <CreateAccountBox>
        <CreateAccountgray>Não tem uma Conta?</CreateAccountgray>
        <CreateAccountorange> Criar agora!</CreateAccountorange>
      </CreateAccountBox>
      <LoginWithBox>
        <LoginWith>Entrar com</LoginWith>
        <Line/>
      </LoginWithBox>
      <GoogleButton onPress={handleGoogleSignIn} />
    </Container>
  );
};

export default LoginScreen;
