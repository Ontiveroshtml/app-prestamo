// ProfileScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.avatarContainer}>
                <Ionicons name="person-circle-outline" size={100} color="#2e5c74" />
                <Text style={styles.addPhotoText}>Añadir foto</Text>
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nombre:</Text>
                    <TextInput style={styles.input} placeholder="Nombre completo" />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Usuario:</Text>
                    <TextInput style={styles.input} placeholder="Nombre de usuario" />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Contraseña:</Text>
                    <TextInput style={styles.input} placeholder="********" secureTextEntry={true} />
                </View>
            </View>
            <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
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

export default ProfileScreen;
