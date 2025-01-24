import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';

const { width: screenWidth, } = Dimensions.get('window');

const pxToWp = (px: number) => (px / screenWidth) * 100;

export const Container = styled.View`
  flex: 1;
  justify-content: center; /* Centraliza verticalmente */
  align-items: center; /* Centraliza horizontalmente */
  padding: 48px;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: ${wp(pxToWp(18))}px;
  margin-top: 8px;
  margin-bottom: 40px;
  font-weight: bold;
  color: #333;
  line-height: 24px;
`;

export const Subtitle = styled.Text`
  align-self: flex-start;
  font-size: ${wp(pxToWp(16))}px;
  margin-bottom: 16px;
  font-weight: bold;
  color: #222222;
  line-height: 18px;
`;

export const ForgotPassword = styled.Text`
  align-self: flex-start;
  font-size: ${wp(pxToWp(13))}px;
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
  font-size: ${wp(pxToWp(13))}px;
  color: #676767;
  line-height: 20px;
`;

export const CreateAccountorange = styled.Text`
  font-size: ${wp(pxToWp(13))}px;
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
  font-size: ${wp(pxToWp(13))}px;
  color: #333333;
  line-height: 20px;
`;

export const Line = styled.View`
  flex: 1;
  height: 1px;
  background-color: #707070;
  margin: 0 10px;
`;
