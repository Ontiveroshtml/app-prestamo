import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuScreen from './MenuScreen'; // Importa el componente MenuScreen

const HomeScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 20) + 1; // Genera un número aleatorio del 1 al 20
    };

    const data = [
        { id: '1', name: 'Juan Pérez', fullName: 'Juan Pérez', address: '123 Main St', phoneNumber: '555-555-5555', loanAmount: '5000', days: 15, dailyPercentage: '5', interest: '10', payments: generateRandomNumber(), fines: generateRandomNumber() },
        // Otras entradas de datos...
    ];

    const filteredData = data.filter(item => {
        return item.name.toLowerCase().includes(searchText.toLowerCase());
    });

    const renderCard = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.info}>Abonos: {item.payments}</Text>
            <Text style={styles.info}>Multas: {item.fines}</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('ClientDetails', { clientData: item })}
            >
                <Text style={styles.buttonText}>Ver más</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Clientes</Text>
               
            </View>
            <TextInput
                style={styles.input}
                value={searchText}
                onChangeText={text => setSearchText(text)}
                placeholder="Buscar..."
                placeholderTextColor="#666"
            />
            <FlatList
                data={filteredData}
                renderItem={renderCard}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
                numColumns={2}
            />
            <TouchableOpacity 
                style={styles.newClientButton}
                onPress={() => navigation.navigate('NewClientScreen')}
            >
                <Text style={styles.newClientButtonText}>Nuevo Cliente</Text>
            </TouchableOpacity>
            {/* Integración del componente MenuScreen */}
            <MenuScreen navigation={navigation} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2e5c74',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff', // Cambiado a blanco
    },
    list: {
        paddingBottom: 20,
        paddingHorizontal: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        margin: 10,
        flex: 0.5,
        height: 150, 
        justifyContent: 'space-between',
        borderColor: '#666',
        borderWidth: 1,
        padding: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    name: {
        fontSize: 14,
        textAlign: 'left',
    },
    info: {
        fontSize: 12,
        color: '#666',
    },
    button: {
        backgroundColor: '#666',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4,
        alignSelf: 'flex-end',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 4,
        margin: 10,
        marginBottom: 0,
        borderColor: '#666',
        borderWidth: 1,
    },
    newClientButton: {
        backgroundColor: '#2e5c74',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 4,
        position: 'absolute',
        bottom: 100, // Ajustado arriba del menú
        right: 20,
    },
    newClientButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default HomeScreen;
