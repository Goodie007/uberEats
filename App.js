import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNav from './components/navigations/StackNav';
import Splash from './components/Splash';

export default function App() {
  return (
   <NavigationContainer>
      <StackNav /> 
     {/* <Splash /> */}
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
