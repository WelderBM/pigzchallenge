import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';

const { width: screenWidth, } = Dimensions.get('window');

const pxToWp = (px: number) => (px / screenWidth) * 100;

export const Container = styled.View`
  height: 100%;
  padding: 24px;
  background-color: #fff;
`;

export const FisrtBox = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 60px;
`;

export const NewDeliveryText = styled.Text`
  font-size: ${wp(pxToWp(18))}px;
  font-weight: bold;
  color: #222222;
  margin-left: 16px;
  flex: 1;
  text-align: center;
`;

export const RowBox = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 55px;
  margin-bottom: 14px;
`;

export const InfoBox = styled.View`

  padding: 20px;
  border-radius: 8px;
  align-items: center;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Title = styled.Text`
  font-size: ${wp(pxToWp(14))}px;
  color: #707070;
  line-height: 21px;
`;

export const Value = styled.Text`
  font-size: ${wp(pxToWp(20))}px;
  font-weight: bold;
  line-height: 30px;
  color: #fa641f;
`;

export const ValueLarge = styled.Text`
  font-size:${wp(pxToWp(35))}px;
  font-weight: bold;
  line-height: 53px;
  color: #fa641f;
  margin-bottom: 21px;
`;

export const Divisor = styled.View`
  width: 100%;
  height: 2px;
  background-color: #707070;
  opacity: 0.1;
  margin-bottom: 20px;
`;

export const DeliveryMotoBox = styled(LinearGradient).attrs({
  colors: ['#FF881F', '#FA641E'],
  start: { x: 0.5, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex-direction: row;
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;

export const DeliveryTitle = styled.Text`
  color: #ffffff;
  line-height: 22px;
  font-size: ${wp(pxToWp(18))}px;
  font-weight: bold;
`;

export const DeliverySubtitle = styled.Text`
  color: #ffffff;
  line-height: 14px;
  font-size: ${wp(pxToWp(12))}px;
  margin-top: 5px;
`;

export const TouchableWrapper = styled.TouchableOpacity`
  width: 100%;
`;

export const ButtonContainer = styled(LinearGradient).attrs({
  colors: ['#FF881F', '#FA641E'],
  start: { x: 0.5, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex-direction: row;
  width: 100%;
  padding: 12px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: ${wp(pxToWp(16))}px;
  line-height: 25px;
  margin-left: 8px;
`;

export const GhostButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  padding: 12px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  border: 1px solid #e8453e;
  margin-top: 15px;
`;

export const GhostText = styled.Text`
  color: #e8453e;
  font-size: ${wp(pxToWp(16))}px;
  line-height: 25px;
  margin-left: 8px;
`;

export const Timeline = styled.View`
  flex-direction: row ;
  margin-bottom: 36px;
`;
export const VerticalLine = styled.View`
  width: 1px;
  background-color: #BABABA;
  margin-left: 30px;
`;

export const RowView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;


export const TimelinePoint = styled.View<{ active?: boolean }>`
  width: ${({ active }) => (active ? '15px' : '10px')};
  height: ${({ active }) => (active ? '15px' : '10px')};
  background-color: ${({ active }) => (active ? '#fa641e' : '#fff')};
  border: 1px solid #fa641e;
  border-radius: 50%;
  position: absolute;
  left: ${({ active }) => (active ? '-8px' : '-5px')};
  top: 5px;
`;

export const TimelineTitle = styled.Text`
  font-size: ${wp(pxToWp(18))}px;
  line-height: 27px;
  color: #fa641e;
  font-weight: bold;
  margin-bottom: 4px;
  padding-left: 16px;
`;

export const TimelineSubtitle = styled.Text`
  font-size: ${wp(pxToWp(14))}px;
  color: #707070;
  line-height: 21px;
  padding-left: 16px;
`;

