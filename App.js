import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/Pages/Home";

export default function App() {
  return (
    <View>
      <Text>Hello Lyon !</Text>
      <StatusBar hidden={true} />
      <Home/>
    </View>
  );
}


