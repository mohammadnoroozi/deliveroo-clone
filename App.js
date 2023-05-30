import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View } from 'react-native';
import Wrapper from './Wrapper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createStackNavigator();

export default function App() {


  return (
    <Provider store={store}>
      <Wrapper>
        <StatusBar style='dark' backgroundColor='#fff' />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Basket" component={BasketScreen} options={{
              presentation: "modal",
              headerShown: false
            }} />
            <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} options={{
              presentation: "modal",
              headerShown: false
            }} />
            <Stack.Screen name="Delivery" component={DeliveryScreen} options={{
              presentation: "modal",
              headerShown: false
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Wrapper>
    </Provider>
  );
}
