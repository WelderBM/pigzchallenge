export type RootStackParamList = {
  Login: undefined; // Tela Login sem parâmetros
  Dashboard: undefined; // Tela Dashboard sem parâmetros
  Delivery: { id: string }; // Tela Delivery com um parâmetro chamado `id`
};