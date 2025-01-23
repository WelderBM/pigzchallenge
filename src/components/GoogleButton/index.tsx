import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, GoogleLogo, ButtonText } from './styles';
import GoogleIcon from '../../assets/logo_googleg_48dp.svg'; // Substitua pelo caminho correto da logo do Google

interface GoogleButtonProps extends TouchableOpacityProps {
  onPress: () => void;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ onPress, ...rest }) => {
  return (
    <Container onPress={onPress} {...rest}>
        <GoogleIcon width={20} height={20} />
        <ButtonText>Continuar com o Google</ButtonText>
    </Container>
  );
};

export default GoogleButton;
