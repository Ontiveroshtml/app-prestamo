import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, SafeAreaView, TextInput } from 'react-native';

const data = [
    { id: '1', name: 'Juan Pérez' },
    { id: '2', name: 'María López' },
    { id: '3', name: 'Carlos Gómez' },
    { id: '4', name: 'Ana Sánchez' },
    { id: '5', name: 'Luis Martínez' },
    { id: '6', name: 'Marta Rodríguez' },
    { id: '7', name: 'Sofía Fernández' },
    { id: '8', name: 'Pedro García' },
    { id: '9', name: 'Lucía Ramírez' },
    { id: '10', name: 'Miguel Torres' },
];

const Home = () => {
    const [searchText, setSearchText] = useState('');

    const filteredData = data.filter(item => {
        return item.name.toLowerCase().includes(searchText.toLowerCase());
    });

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => Alert.alert('Información', `Más información sobre ${item.name}`)}
            >
                <Text style={styles.buttonText}>Ver más</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.headerText}>Lista de Personas</Text>
            <TextInput
                style={styles.input}
                value={searchText}
                onChangeText={text => setSearchText(text)}
                placeholder="Buscar..."
                placeholderTextColor="#666"
            />
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#02416D',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 20,
        textAlign: 'center',
    },
    list: {
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10,
        width: '90%',
        alignSelf: 'center',
        height: 100, 
        justifyContent: 'center', 
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    name: {
        fontSize: 18,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#02416D',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 5,
        margin: 10,
        marginBottom: 0,
    },
});

export default Home;
