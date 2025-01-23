import React from 'react';
import Button from '../../components/Button';
import { Container, InfoBox, Title, Value } from './styles';

const DeliveryScreen = () => (
  <Container>
    <InfoBox>
      <Title>Tempo Estimado</Title>
      <Value>30 Min</Value>
    </InfoBox>
    <Button title="Aceitar" onPress={() => {}} />
    <Button title="Rejeitar" onPress={() => {}} />
  </Container>
);

export default DeliveryScreen;
