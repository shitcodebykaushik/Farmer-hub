import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Component Imports
import SplashScreen from './components/Splash';
import LoginScreen from './components/Login';
import SignUpScreen from './components/Signup';
import ForgotPasswordScreen from './components/Forget';
import FarmerHomeScreen from './components/Home'; // Farmer Home Screen
import CustomerHomeScreen from './components/CustomerHome'; // Customer Home Screen
import ProfileScreen from './components/Profile';
import ProfileScreen2 from './components/Profile2';
import CartScreen from './components/Cart';
import CartScreen2 from './components/Cart2';
import ServiceScreen from './components/Service';
import ServiceScreen2 from './components/Service2';
import PaymentsScreen from './components/Payment';
import AchievementsScreen from './components/Achive';
import PrivacyScreen from './components/Privacy';
import EditProfileScreen from './components/Edit';

const Stack = createNativeStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState('Splash');

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialRoute('Login'); // After splash, redirect to Login screen
    }, 2000); // Simulate a splash screen delay of 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="FarmerHome" component={FarmerHomeScreen} />
        <Stack.Screen name="CustomerHome" component={CustomerHomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Profile2" component={ProfileScreen2} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Cart2" component={CartScreen2} />
        <Stack.Screen name="Service" component={ServiceScreen} />
        <Stack.Screen name="Service2" component={ServiceScreen2} />
        <Stack.Screen
          name="Payments"
          component={PaymentsScreen}
          options={{
            headerShown: true,
            title: 'Payments',
          }}
        />
        <Stack.Screen
          name="Achievements"
          component={AchievementsScreen}
          options={{
            headerShown: true,
            title: 'Achievements',
          }}
        />
        <Stack.Screen
          name="Privacy"
          component={PrivacyScreen}
          options={{
            headerShown: true,
            title: 'Privacy Settings',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
