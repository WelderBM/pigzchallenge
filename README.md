# Pigz Challenge

um aplicativo mobile desenvolvido com React Native. Este projeto utiliza diversas bibliotecas e ferramentas modernas para fornecer uma interface interativa e funcional, incluindo um painel de controle detalhado.
---
![print das 3 telas do app](https://github.com/WelderBM/pigzchallenge/blob/main/Captura%20de%20tela%202025-01-25%20164000.png)
---

## Tecnologias Utilizadas

- **React Native**: Framework principal para o desenvolvimento mobile.
- **React Navigation**: Gerenciamento de navegação entre telas.
- **styled-components**: Estilização dos componentes com CSS-in-JS.
- **Android SDK e Gradle**: Ferramentas para compilar e executar o aplicativo no Android.

---

## Pré-requisitos

Certifique-se de que as seguintes ferramentas estão instaladas:

1. **Node.js** (v14 ou superior)
2. **npm** ou **yarn**
3. **Java Development Kit (JDK 11)**
4. **Android Studio** com SDK configurado
5. **React Native CLI**

---

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-repositorio/pigzchallenge.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd pigzchallenge
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Certifique-se de limpar o cache e configurar o ambiente:
   ```bash
   npm start --reset-cache
   ```

5. Configure as permissões para o Android:
   - Certifique-se de que o arquivo `AndroidManifest.xml` contém as permissões:
     ```xml
     <uses-permission android:name="android.permission.CAMERA" />
     <uses-permission android:name="android.permission.RECORD_AUDIO" />
     ```

6. Construa o aplicativo:
   ```bash
   cd android
   ./gradlew clean
   cd ..
   npx react-native run-android
   ```

---

## Funcionalidades

### Dashboard
- Exibição de ganhos do dia.
- Resumo de entregas (aceitas, rejeitadas, total).

### Navegação
- Navegação entre diferentes seções: Relatórios, Visão Geral e Perfil.
- Destaque visual para notificações.

---

## Estrutura de Arquivos

```plaintext
pigzchallenge/
├── android/                 # Configurações do Android
├── assets/                  # Arquivos de mídia (ícones, imagens, etc.)
├── src/                     # Código principal do aplicativo
│   ├── components/          # Componentes reutilizáveis
│   ├── screens/             # Telas do aplicativo
│   ├── styles/              # Estilizações globais
│   └── App.tsx              # Ponto de entrada do React Native
├── package.json             # Dependências e scripts
└── README.md                # Documentação do projeto
```

---

## Comandos Úteis

### Limpar Cache
```bash
npm start --reset-cache
```

### Construir e Executar o Projeto
```bash
npx react-native run-android
```

### Limpar Gradle
```bash
cd android
./gradlew clean
cd ..
```

---

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais informações.

---

## Contato

Se tiver dúvidas ou sugestões, entre em contato:
- **Email:** welderb40@gmail.com
- **whatsapp:** 5595991341586 - Welder

