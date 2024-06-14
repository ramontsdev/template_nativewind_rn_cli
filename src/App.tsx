import './styles/global.css';

import { Text, View } from 'react-native';

export function App() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="font-black">App com NativeWind</Text>
      <Text className="font-mono">Já suportando SVGs</Text>
    </View>
  );
}
