import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';

const { width: screenWidth, } = Dimensions.get('window');

const pxToWp = (px: number) => (px / screenWidth) * 100;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  align-items: center;
`;

export const FisrtBox = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 60px;
`;

export const GeralVisionText = styled.Text`
  font-size: ${wp(pxToWp(18))}px;
  font-family: Poppins-Medium;
  color: #222222;
  margin-left: 16px;
  flex: 1;
  text-align: center;
  position: absolute;
  left: -50%;
  right: -50%;
`;

export const InfoBox = styled(LinearGradient).attrs({
  colors: ['#FF881F', '#FA641E'],
  start: { x: 0.5, y: 0 },
  end: { x: 1, y: 1 },
})`
  padding: 16px 16px 20px 16px;
  border-radius: 16px;
  margin-bottom: 32px;
  width: 100%;
`;

export const TopBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 11px;
`;

export const Title = styled.Text`
  font-size: ${wp(pxToWp(16))}px;
  font-family: Poppins-Medium;
  color: #fff;
  line-height: 25px;
`;

export const WonDate = styled.Text`
  font-size: ${wp(pxToWp(13))}px;
  font-family: Poppins-Medium;
  color: #fff;
  line-height: 25px;
`;

export const MoneyBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: ${wp(pxToWp(24))}px;
  font-family: Poppins-Medium;
  color: #fff;
  text-align: center;
  margin-top: 10px;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const ResumeBox = styled.View`
  padding: 16px 16px 20px 16px;
  border-radius: 16px;
  margin-bottom: 32px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.29);
  elevation: 15;
`;

export const ResumeTitle = styled.Text`
  text-align: start;
  font-size: ${wp(pxToWp(16))}px;
  font-family: Poppins-Bold;
  color: #333333;
  line-height: 25px;
  margin-bottom: 18px;
  font-weight: bold;
`;

export const ResumeCardsBox = styled.View`
  flex-direction: row;
  gap: 6px;
`;

export const CardBox = styled.View`
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  padding: 25px;
  width: 33%;
`;

export const CardText = styled.Text`
  text-align: center;
  font-size: ${wp(pxToWp(11))}px;
  font-family: Poppins-Regular;
  line-height: 17px;
  color: #9f9f9f;
`;

export const CardNumber = styled.Text`
  text-align: center;
  font-size: ${wp(pxToWp(40))}px;
  font-family: Poppins-Medium;
`;

export const QRCodeBox = styled.View`
  padding: 16px 14px 24px 14px;
  border-radius: 16px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.29);
  elevation: 15;
  margin-bottom: 20px;
`;

export const QRCodeTitle = styled.Text`
  font-size: ${wp(pxToWp(16))}px;
  font-family: Poppins-Bold;
  line-height: 25px;
  color: #333333;
  padding: 0 2px;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const InputButtonContainer = styled.View`
  flex-direction: column;
  width: 100%;
  margin-bottom: 18px;
`;

export const InputLabel = styled.Text`
  font-size: ${wp(pxToWp(14))}px;
  font-family: Poppins-Regular;
  color: #333333;
  margin-bottom: 8px;
`;

export const InputRow = styled.View`
  flex-direction: row;
`;

export const StyledInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  border: 1px solid #FF671F;
  border-radius: 16px;
  margin-right: 12px;
`;

export const OkButton = styled.TouchableOpacity`
  background-color: #FA641E;
  padding: 12px 20px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.05);
`;

export const OkButtonText = styled.Text`
  color: #fff;
  font-size: ${wp(pxToWp(17))}px;
  font-family: Poppins-Medium;
  line-height: 26px;
`;

export const QRCodeButton = styled(LinearGradient).attrs({
  colors: ['#FF881F', '#FA641E'],
  start: { x: 0.5, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 16px;
`;

export const QRCodeButtonText = styled.Text`
  color: #fff;
  font-size: ${wp(pxToWp(16))}px;
  font-family: Poppins-Medium;
  margin-left: 8px;
`;

export const TabbarCard = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const TabbarBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  position: absolute;
  bottom: 0;
`;

export const TabbarText = styled.Text`
  font-size: ${wp(pxToWp(12))}px;
  color: #676767;
  margin-top: 4px;
  font-family: Poppins-Regular;
`;

export const NotificationDot = styled.View`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 15px;
  height: 15px;
  background-color: #FA641E;
  border: 2.5px solid #fff;
  border-radius: 50%;
`;
