import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet, Alert, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [hidePass, setHidePass] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = async () => {
        if (!username) {
            Alert.alert('Error', 'El campo de correo electrónico o número de teléfono es requerido.');
            return;
        }
        if (!password) {
            Alert.alert('Error', 'El campo de contraseña es requerido.');
            return;
        }

        try {
            const response = await fetch('http://10.0.2.2:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.role === 1) { // Admin
                    navigation.navigate('AdminHome');
                } else if (data.role === 2) { // User
                    navigation.navigate('Home');
                }
            } else {
                Alert.alert('Error', 'Nombre de usuario o contraseña incorrectos');
            }
        } catch (error) {
            Alert.alert('Error', 'Error de conexión');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>¡Préstamos Diarios!</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Correo electrónico o número de teléfono:"
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                        placeholderTextColor="#666"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña:"
                        secureTextEntry={hidePass}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        placeholderTextColor="#666"
                    />
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => setHidePass(!hidePass)}
                    >
                        <Ionicons name={hidePass ? "eye-off" : "eye"} size={20} color="gray" />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.forgotpwdContainer}>
                    <Text style={styles.forgotpwdText}>¿Olvidaste tu contraseña?</Text>
                </View>
                <View style={styles.registerContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registerText}>Registro</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    headerContainer: {
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: '#2e5c74',
        padding: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
    },
    formContainer: {
        alignItems: 'center',
        width: '100%',
        marginTop: 100,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#2e5c74',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        width: '80%',
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        height: 60,
        paddingLeft: 8,
        color: '#000',
    },
    icon: {
        padding: 10,
    },
    buttonContainer: {
        marginTop: 40,
        width: '80%',
    },
    loginButton: {
        backgroundColor: '#2e5c74',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    forgotpwdContainer: {
        marginTop: 50,
    },
    forgotpwdText: {
        color: '#2e5c74',
    },
    registerContainer: {
        marginTop: 20,
    },
    registerText: {
        color: '#2e5c74',
    },
});

export default Login;
