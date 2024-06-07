import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet, Alert, Button, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Login = ({ navigation }) => {
    const [hidePass, setHidePass] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!username) {
            Alert.alert('Error', 'El campo de correo electrónico o número de teléfono es requerido.');
            return;
        }
        if (!password) {
            Alert.alert('Error', 'El campo de contraseña es requerido.');
            return;
        }
        navigation.navigate('Home');
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>¡Préstamos Diarios!</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Correo electrónico o número de teléfono:"
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña:"
                        secureTextEntry={hidePass}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => setHidePass(!hidePass)}
                    >
                        <Ionicons name={hidePass ? "eye-off" : "eye"} size={20} color="gray" />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title='Iniciar sesión'
                        onPress={handleLogin}
                    />
                </View>
                <View style={styles.forgotpwdContainer}>
                    <Text style={styles.forgotpwdText}> ¿Olvidaste tu contraseña? </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#02416D',
    },
    headerContainer: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
    },
    container: {
        alignItems: 'center',
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        width: '80%',
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        height: 60,
        paddingLeft: 8,
    },
    icon: {
        padding: 10,
    },
    buttonContainer: {
        marginTop: 40,
        width: '80%',
    },
    forgotpwdContainer: {
        marginTop: 50,
    },
    forgotpwdText:{
        color: 'white',
    }
});

export default Login;
