import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}
type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

const Button: React.FC<ButtonProps> = ({ title}) => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();
  const navigateToDashboard = () => {
    navigation.navigate('Dashboard');
  };
  return <ButtonContainer  onPress={navigateToDashboard} >
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
}
;

export default Button;
