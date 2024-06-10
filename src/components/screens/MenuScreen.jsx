import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MenuScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.optionContainer}>
                <Ionicons name="home" size={24} color="black" />
                <Text style={styles.option}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.optionContainer}>
                <Ionicons name="person" size={24} color="black" />
                <Text style={styles.option}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Statistics')} style={styles.optionContainer}>
                <Ionicons name="stats-chart" size={24} color="black" />
                <Text style={styles.option}>Estadísticas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.optionContainer}>
                <Ionicons name="person-add" size={24} color="black" />
                <Text style={styles.option}>Registrar Trabajador</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 20,
    },
    optionContainer: {
        alignItems: 'center',
    },
    option: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default MenuScreen;
