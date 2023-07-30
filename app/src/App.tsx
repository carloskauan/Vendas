import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  font-size: 50px;
  color: #ed0a5d;
`;

const App = () => {
  return (
    <SafeAreaView>
      <TextNew>Novo test</TextNew>
    </SafeAreaView>
  );
};

export default App;
