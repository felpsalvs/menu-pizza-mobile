import SignIn from './src/pages/SignIn';
import { View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View>
      <SignIn/>
      <StatusBar backgroundColor='#1d1d2e' barStyle='light-content' translucent={false}/>
    </View>
  );
}
