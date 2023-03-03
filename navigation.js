import React, {  useContext,} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, NavigationContext, } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import FirstScreen from "./screens/FirstScreen";
import FlashMessage from 'react-native-flash-message';
import AuthScreen from "./screens/AuthScreen";
import Onboarding from "./screens/Onboarding";
import UserFinance from "./screens/UserFinance";
import UserFinanceTwo from "./screens/UserFinanceTwo";
import UserFinanceThree from "./screens/UserFinanceThree";
import UserFinanceSummary from "./screens/UserFinanceSummary";
import FZone from "./screens/FZone";
import Hook from "./screens/Hook";
import FZoneTwo from "./screens/FZoneTwo";
import Hookone from "./screens/Hookone";
import PremiumScreen from "./screens/PremiumScreen";

//Screens

const store = configureStore();
export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };
  const navigation = useContext(NavigationContext) 
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FirstScreen" screenOptions={screenOptions}>
          <Stack.Screen name="FirstScreen" component={FirstScreen} /> 
  
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
          <Stack.Screen name="UserFinance" component={UserFinance} />
          <Stack.Screen name="UserFinanceTwo" component={UserFinanceTwo} />
          <Stack.Screen name="UserFinanceThree" component={UserFinanceThree} />
          <Stack.Screen name="UserFinanceSummary" component={UserFinanceSummary} />
          <Stack.Screen name="FZone" component={FZone} />
          <Stack.Screen name="FZoneTwo" component={FZoneTwo} />
          <Stack.Screen name="Hook" component={Hook} />
          <Stack.Screen name="Hookone" component={Hookone} />
          <Stack.Screen name="PremiumScreen" component={PremiumScreen} />
       
         
          <Stack.Screen name="Onboarding" component={Onboarding} />
     
        </Stack.Navigator>
        <FlashMessage
        position="top"
      />
      </NavigationContainer>
    </ReduxProvider>
  );
}
