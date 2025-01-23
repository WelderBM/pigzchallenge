import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const ButtonContainer = styled(LinearGradient).attrs({
  colors: ['#FF881F', '#FA641E'],
  start: { x: 0.5, y: 0 },
  end: { x: 1, y: 1 },
})`
  width: 100%;
  padding: 12px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  line-height: 25px;
`;
