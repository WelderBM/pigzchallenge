import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ArrowBack from '../../assets/arrow_back_black_24dp.svg';
import Accept from '../../assets/accept.svg';
import Reject from '../../assets/reject.svg';
import Moto from '../../assets/moto.svg';
import {
  Container,
  FisrtBox,
  NewDeliveryText,
  RowBox,
  InfoBox,
  Title,
  Value,
  Divisor,
  ValueLarge,
  TouchableWrapper,
  DeliveryMotoBox,
  DeliveryTitle,
  DeliverySubtitle,
  ButtonContainer,
  GhostButtonContainer,
  ButtonText,
  GhostText,
  Timeline,
  VerticalLine,
  RowView,
  TimelinePoint,
  TimelineTitle,
  TimelineSubtitle,
} from './styles';
import { TouchableOpacity, View } from 'react-native';

const DeliveryScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <FisrtBox>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
         <ArrowBack
           width={30}
           height={30}
           fill="#FA641E"
         />
        </TouchableOpacity>
        <NewDeliveryText>Nova entrega</NewDeliveryText>
      </FisrtBox>
      <RowBox>
        <InfoBox>
          <Title>Tempo Estimado</Title>
          <Value>30 Min</Value>
        </InfoBox>
        <InfoBox>
          <Title>Número de ID</Title>
          <Value>#6789</Value>
        </InfoBox>
      </RowBox>
      <Divisor />
      <InfoBox>
        <Title>Valor da Entrega</Title>
        <ValueLarge>R$ 13,75</ValueLarge>
      </InfoBox>
      <TouchableWrapper>
        <DeliveryMotoBox>
          <Moto width={24} height={24} fill="white" />
          <View>
            <DeliveryTitle>Entrega</DeliveryTitle>
            <DeliverySubtitle>Percurso Total: 8km</DeliverySubtitle>
          </View>
        </DeliveryMotoBox>
      </TouchableWrapper>
      <Timeline>
        <VerticalLine />
        <View>
          <View style={{ marginTop: 30 }}>
            <RowView>
              <TimelinePoint active />
              <TimelineTitle>Coleta</TimelineTitle>
            </RowView>
            <RowView>
              <TimelinePoint  />
              <View>
                <TimelineSubtitle>Restaurante Recanto da Peixada</TimelineSubtitle>
                <TimelineSubtitle>Distancia: 2km</TimelineSubtitle>
              </View>
            </RowView>
          </View>
          <View style={{ marginTop: 30 }}>
            <RowView>
              <TimelinePoint active />
              <TimelineTitle>Entrega</TimelineTitle>
            </RowView>
            <RowView>
              <TimelinePoint  />
              <View>
                <TimelineSubtitle>Av: Cabo dos Soldados - Caranã</TimelineSubtitle>
                <TimelineSubtitle>Distancia: 6km</TimelineSubtitle>
              </View>
            </RowView>
          </View>
        </View>
      </Timeline>
      <TouchableWrapper>
        <ButtonContainer onPress={() => console.log('Aceitar entrega')}>
          <Accept width={24} height={24} fill="white" />
          <ButtonText>Aceitar</ButtonText>
        </ButtonContainer>
      </TouchableWrapper>
      <TouchableWrapper>
        <GhostButtonContainer onPress={() => console.log('Rejeitar entrega')}>
          <Reject width={24} height={24} />
          <GhostText>Rejeitar</GhostText>
        </GhostButtonContainer>
      </TouchableWrapper>
    </Container>
  );
};

export default DeliveryScreen;
