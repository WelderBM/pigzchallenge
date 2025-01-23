import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center; /* Centraliza verticalmente */
  align-items: center; /* Centraliza horizontalmente */
  padding: 48px;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 40px;
  font-weight: bold;
  color: #333;
  line-height: 24px;
`;

export const Subtitle = styled.Text`
  align-self: flex-start;
  font-size: 16px;
  margin-bottom: 16px;
  font-weight: bold;
  color: #222222;
  line-height: 18px;
`;

export const ForgotPassword = styled.Text`
  align-self: flex-start;
  font-size: 13px;
  margin-top: 8px;
  margin-bottom: 24px;
  text-decoration: underline;
  color: #676767;
  line-height: 20px;
`;

export const CreateAccountBox = styled.View`
  flex-direction: row;
  margin-top: 36px;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Alinha os itens na linha */
`;

export const CreateAccountgray = styled.Text`
  font-size: 13px;
  color: #676767;
  line-height: 20px;
`;

export const CreateAccountorange = styled.Text`
  font-size: 13px;
  color: #FA641E;
  line-height: 20px;
`;

export const LoginWithBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
`;

export const LoginWith = styled.Text`
  font-size: 13px;
  color: #333333;
  line-height: 20px;
`;

export const Line = styled.View`
  border: 1px solid #707070;
  flex: 1;
  height: 0;
  margin: 0 10px;
`;
