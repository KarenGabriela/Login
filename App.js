import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import { AsyncStorage } from 'react-native';

const AppStack = createStackNavigator();

const App = () => {
  //Inicio para mostrar onboarding al primer lanzamiento de la app
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);


  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value ==null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if(isFirstLaunch === null){
    return null;
  }
  if (isFirstLaunch === true) {
    //fin primer lanzamiento

    return (
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
          <AppStack.Screen name="Login" component={LoginScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <LoginScreen />
    )
  }
}


export default App;

