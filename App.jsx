import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/login';
import Home from './src/components/home';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ title: 'Iniciar Sesión' }} />
                <Stack.Screen name="Home" component={Home} options={{ title: 'Inicio' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
