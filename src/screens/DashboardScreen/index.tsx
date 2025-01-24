import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import {
  Container,
  FisrtBox,
  GeralVisionText,
  InfoBox,
  Title,
  Value,
  TopBox,
  WonDate,
  MoneyBox,
  EyeButton,
  ResumeBox,
  ResumeTitle,
  ResumeCardsBox,
  CardBox,
  CardText,
  CardNumber,
  QRCodeBox,
  QRCodeTitle,
  InputButtonContainer,
  InputLabel,
  QRCodeButton,
  QRCodeButtonText,
  StyledInput,
  OkButton,
  OkButtonText,
  InputRow,
  TabbarBox,
  TabbarCard,
  TabbarText,
  NotificationDot 
} from './styles';
import ArrowBack from '../../assets/arrow_back_black_24dp.svg';
import Eye from '../../assets/eye-dashboard.svg';
import EyeSlash from '../../assets/eye-slash-dashboard.svg';
import QRCodeIcon from '../../assets/qrcode.svg';
import RelatoriosIcon from '../../assets/relatorios.svg';
import GeralIcon from '../../assets/geral.svg';
import PerfilIcon from '../../assets/perfil.svg';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [stateRelatorios, setStateRelatorios] = useState<'ativo' | 'ativoComNotificacao' | 'desativado'>('desativado');
  const [stateGeral, setStateGeral] = useState<'ativo' | 'ativoComNotificacao' | 'desativado'>('desativado');
  const [statePerfil, setStatePerfil] = useState<'ativo' | 'ativoComNotificacao' | 'desativado'>('desativado');

  const handlePressRelatorios = () => {
    setStateRelatorios((prev) => {
      if (prev === 'desativado') return 'ativo';
      if (prev === 'ativo') return 'ativoComNotificacao';
      return 'desativado';
    });
  };
  const handlePressGeral = () => {
    setStateGeral((prev) => {
      if (prev === 'desativado') return 'ativo';
      if (prev === 'ativo') return 'ativoComNotificacao';
      return 'desativado';
    });
  };
  const handlePressPerfil = () => {
    setStatePerfil((prev) => {
      if (prev === 'desativado') return 'ativo';
      if (prev === 'ativo') return 'ativoComNotificacao';
      return 'desativado';
    });
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const today = new Date();
  const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1)
    .toString()
    .padStart(2, '0')}`;

  const navigateToDelivery = () => {
    navigation.navigate('Delivery');
  };

  return (
    <Container>
      <FisrtBox>
        <ArrowBack
          width={24}
          height={24}
          fill="#FA641E"
          onPress={() => navigation.navigate('Login')}
        />
        <GeralVisionText>Visão geral</GeralVisionText>
      </FisrtBox>
      <InfoBox>
        <TopBox>
          <Title>Ganhos do Dia</Title>
          <WonDate>{formattedDate}</WonDate>
        </TopBox>
        <MoneyBox>
          <Value>{isVisible ? 'R$ 150' : '----'}</Value>
          <EyeButton onPress={toggleVisibility}>
            {!isVisible ? (
              <Eye width={24} height={24} />
            ) : (
              <EyeSlash width={24} height={24} />
            )}
          </EyeButton>
        </MoneyBox>
      </InfoBox>
      <ResumeBox>
        <ResumeTitle>Resumos das Entregas</ResumeTitle>
        <ResumeCardsBox>
          <CardBox>
            <CardText>Aceitas</CardText>
            <CardNumber>15</CardNumber>
          </CardBox>
          <CardBox>
            <CardText>Rejeitadas</CardText>
            <CardNumber>5</CardNumber>
          </CardBox>
          <CardBox>
            <CardText>Total</CardText>
            <CardNumber>20</CardNumber>
          </CardBox>
        </ResumeCardsBox>
      </ResumeBox>
      <QRCodeBox>
        <QRCodeTitle>Iniciar Nova Entrega</QRCodeTitle>
        <InputButtonContainer>
          <InputLabel>Número de Identificação</InputLabel>
          <InputRow>
            <StyledInput
              placeholder="Digite o número"
              onChangeText={(text) => setInputValue(text)} 
              value={inputValue}
            />
            <OkButton onPress={navigateToDelivery}>
              <OkButtonText>OK</OkButtonText>
            </OkButton>
          </InputRow>
        </InputButtonContainer>
        <TouchableOpacity onPress={navigateToDelivery}>
          <QRCodeButton>
            <QRCodeIcon width={22} height={22} fill="#fff" />
            <QRCodeButtonText>Escanear Qrcode</QRCodeButtonText>
          </QRCodeButton>
        </TouchableOpacity>
      </QRCodeBox>
      <TabbarBox>
        <TabbarCard onPress={handlePressRelatorios}>
          <View>
            <RelatoriosIcon
              width={28}
              height={28}
              fill={
                stateRelatorios === 'ativo'
                  ? '#FA641E'
                  : stateRelatorios === 'desativado'
                  ? '#9F9F9F'
                  : '#FA641E'
              }
            />
            {stateRelatorios === 'ativoComNotificacao' && <NotificationDot />}
          </View>
          <TabbarText>Relatórios</TabbarText>
        </TabbarCard>
        <TabbarCard onPress={handlePressGeral}>
          <View>
            <GeralIcon
              width={28}
              height={28}
              fill={
                stateGeral === 'ativo'
                  ? '#FA641E'
                  : stateGeral === 'desativado'
                  ? '#9F9F9F'
                  : '#FA641E'
              }
            />
            {stateGeral === 'ativoComNotificacao' && <NotificationDot />}
          </View>
          <TabbarText>Visão geral</TabbarText>
        </TabbarCard>
        <TabbarCard onPress={handlePressPerfil}>
          <View>
            <PerfilIcon
              width={28}
              height={28}
              fill={
                statePerfil === 'ativo'
                  ? '#FA641E'
                  : statePerfil === 'desativado'
                  ? '#9F9F9F'
                  : '#FA641E'
              }
            />
            {statePerfil === 'ativoComNotificacao' && <NotificationDot />}
          </View>
          <TabbarText>Perfil</TabbarText>
        </TabbarCard>
      </TabbarBox>
    </Container>
  );
};

export default DashboardScreen;
