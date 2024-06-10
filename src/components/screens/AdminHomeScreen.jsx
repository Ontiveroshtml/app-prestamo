import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuScreen from './MenuScreen';

const AdminHomeScreen = ({ navigation }) => {
    const handleViewMore = (worker) => {
        // Lógica para manejar el botón "Ver más"
        console.log(`Ver más sobre ${worker}`);
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Trabajadores</Text>
                
            </View>
            <TextInput
                style={styles.input}
                placeholder="Buscar trabajador..."
                placeholderTextColor="#888"
            />
            <View style={styles.cardContainer}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Joaquín</Text>
                    <TouchableOpacity
                        style={styles.viewMoreButton}
                        onPress={() => handleViewMore('Joaquín')}
                    >
                        <Text style={styles.viewMoreButtonText}>Ver más</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Trabajador 2</Text>
                    <TouchableOpacity
                        style={styles.viewMoreButton}
                        onPress={() => handleViewMore('Trabajador 2')}
                    >
                        <Text style={styles.viewMoreButtonText}>Ver más</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Trabajador 3</Text>
                    <TouchableOpacity
                        style={styles.viewMoreButton}
                        onPress={() => handleViewMore('Trabajador 3')}
                    >
                        <Text style={styles.viewMoreButtonText}>Ver más</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            {/* Integración del componente MenuScreen */}
            <View style={styles.menuContainer}>
                <MenuScreen navigation={navigation} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        position: 'relative',
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
        color: '#fff',
        marginLeft: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 10,
    },
    cardContainer: {
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 8,
        borderColor: '#ddd',
        borderWidth: 1,
        marginHorizontal: 20,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewMoreButton: {
        backgroundColor: '#2e5c74',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    viewMoreButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    menuContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
});

export default AdminHomeScreen;
