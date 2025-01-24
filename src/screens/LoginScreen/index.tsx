import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import GoogleButton from '../../components/GoogleButton';
import {
  Container,
  Title,
  Subtitle,
  ForgotPassword,
  CreateAccountBox,
  CreateAccountgray,
  CreateAccountorange,
  LoginWithBox,
  LoginWith,
  Line,
} from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import PigzLogo from '../../assets/pigz-logotipo-branco.svg';
import { Alert, TouchableOpacity } from 'react-native';

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

const LoginScreen = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  const handleGoogleSignIn = () => {
    Alert.alert('Google Sign-In', 'Funcionalidade de autenticação com o Google aqui.');
  };

  const navigateToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  const handleForgotPassword = () => {
    Alert.alert('Esqueci minha senha', 'Funcionalidade de recuperação de senha aqui.');
  };

  const handleCreateAccount = () => {
    Alert.alert('Criar Conta', 'Funcionalidade de criação de conta aqui.');
  };

  return (
    <Container>
      <PigzLogo width={100} height={50} fill="#FA641E" />
      <Title>Para entregadores</Title>
      <Subtitle>Login</Subtitle>
      <Input placeholder="example@pigz.com.br" label="Email ou Telefone" />
      <Input label="Senha" placeholder="********" isPassword={true} />
      <TouchableOpacity onPress={handleForgotPassword} style={{ alignSelf: 'flex-start' }}>
        <ForgotPassword>Esqueci minha senha</ForgotPassword>
      </TouchableOpacity>
      <Button title="Entrar" onPress={navigateToDashboard} />
      <CreateAccountBox>
        <CreateAccountgray>Não tem uma Conta?</CreateAccountgray>
        <TouchableOpacity onPress={handleCreateAccount}>
          <CreateAccountorange> Criar agora!</CreateAccountorange>
        </TouchableOpacity>
      </CreateAccountBox>
      <LoginWithBox>
        <LoginWith>Entrar com</LoginWith>
        <Line />
      </LoginWithBox>
      <GoogleButton onPress={handleGoogleSignIn} />
    </Container>
  );
};

export default LoginScreen;
