import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonText, TouchableWrapper } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => (
  <TouchableWrapper {...rest}>
    <ButtonContainer>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  </TouchableWrapper>
);

export default Button;
