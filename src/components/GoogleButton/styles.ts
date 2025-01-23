import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 12px 16px;
  border: 1px solid #9F9F9F;
  margin-top: 24px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center; 
  font-size: 16px;
  color: #676767;
  font-weight: bold;
  line-height: 20px;
`;
