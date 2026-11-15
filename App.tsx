import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import { PaperProvider } from 'react-native-paper';
import { RootStackParamList } from './types/navigation';
import MainAppbar from './components/MainAppbar';



const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          header: (props) => <MainAppbar {...props}/>,
        }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="SecondScreen"
            component={SecondScreen}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  )
}
