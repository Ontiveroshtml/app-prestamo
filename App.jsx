import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewClientScreen from './src/components/screens/NewClientScreen';
import Home from './src/components/screens/home';
import MenuScreen from './src/components/screens/MenuScreen';
import Login from './src/components/screens/login'
import ProfileScreen from './src/components/screens/ProfileScreen';
import StatisticsScreen from './src/components/screens/StatisticsScreen';
import ClientDetailsScreen from './src/components/screens/ClientDetailsScreen';
import RegisterScreen from './src/components/screens/RegisterScreen';
import AdminHomeScreen from './src/components/screens/AdminHomeScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ title: 'Iniciar Sesión' }} />
                <Stack.Screen name="AdminHome" component={AdminHomeScreen} options={{ title: 'Administrador' }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registro' }} />
                <Stack.Screen name="Menu" component={MenuScreen} />
                <Stack.Screen name="Statistics" component={StatisticsScreen} options={{ title: 'Estadisticas' }} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
                <Stack.Screen name="Home" component={Home} options={{ title: 'Inicio' }} />
                <Stack.Screen name="NewClientScreen" component={NewClientScreen} options={{ title: 'Nuevo Cliente', headerShown: false }} />
                <Stack.Screen name="ClientDetails" component={ClientDetailsScreen} options={{ title: 'Detalles del cliente' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
