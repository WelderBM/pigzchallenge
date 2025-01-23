import React, { useState } from 'react';
import { TextInputProps, TouchableOpacity } from 'react-native';
import { Container, Label, StyledInput, IconWrapper } from './styles';
import Eye from '../../assets/eye.svg';
import EyeSlash from '../../assets/eye-slash.svg';

interface InputProps extends TextInputProps {
  placeholder: string;
  label?: string;
  isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, label, isPassword, ...rest }) => {
  const [isSecure, setIsSecure] = useState(isPassword);

  const toggleVisibility = () => {
    setIsSecure(!isSecure);
  };

  console.log(Eye);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <IconWrapper>
        <StyledInput
          placeholder={isPassword && !isSecure ? '********' : placeholder}
          secureTextEntry={isSecure}
          {...rest}
          placeholderTextColor="#4B4B4B"
        />
        {isPassword && (
          <TouchableOpacity onPress={toggleVisibility}>
            {isSecure ? <Eye width={24} height={24}  /> : <EyeSlash width={24} height={24} />}
          </TouchableOpacity>
        )}
      </IconWrapper>
    </Container>
  );
};

export default Input;
