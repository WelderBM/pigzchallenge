import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import { Container, InfoBox, Title, Value } from './styles';

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <InfoBox>
        <Title>Ganhos do Dia</Title>
        <Value>R$ 150</Value>
      </InfoBox>
      <Button title="Nova Entrega" onPress={() => navigation.navigate('Delivery')} />
    </Container>
  );
};

export default DashboardScreen;
