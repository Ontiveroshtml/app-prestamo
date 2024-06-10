import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);

    const handleRegister = () => {
        // Add registration logic here
        console.log(name, email, password, image);
    };

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <TouchableOpacity>
                    <Ionicons name="camera" size={50} color="#2e5c74" />
                    <Text style={styles.addPhotoText}>Añadir foto</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nombre Completo</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setName(text)}
                        value={name}
                        placeholder="Nombre Completo"
                        placeholderTextColor="#888"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Usuario</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setEmail(text)}
                        value={email}
                        placeholder="Correo Electrónico"
                        placeholderTextColor="#888"
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setPassword(text)}
                        value={password}
                        placeholder="Contraseña"
                        placeholderTextColor="#888"
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity style={styles.editButton} onPress={handleRegister}>
                    <Text style={styles.editButtonText}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        paddingTop: 40,
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    addPhotoText: {
        marginTop: 10,
        color: '#2e5c74',
        fontSize: 16,
    },
    infoContainer: {
        width: '80%',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    editButton: {
        backgroundColor: '#2e5c74',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 8,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default RegisterScreen;
