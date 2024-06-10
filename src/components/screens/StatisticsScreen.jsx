import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString();
};

const StatisticsScreen = () => {
    const todayDate = getCurrentDate();

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Estadísticas Diarias</Text>
            
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Multas del Día</Text>
                <Text style={styles.cardDate}>{todayDate}</Text>
                <Text style={styles.cardContent}>Total Multas: $0.00</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Abonos del Día</Text>
                <Text style={styles.cardDate}>{todayDate}</Text>
                <Text style={styles.cardContent}>Total Abonos: $0.00</Text>
            </View>

            <Text style={styles.title}>Estadísticas Semanales</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Multas de la Semana</Text>
                <Text style={styles.cardDate}>Semana Actual</Text>
                <Text style={styles.cardContent}>Total Multas: $0.00</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Abonos de la Semana</Text>
                <Text style={styles.cardDate}>Semana Actual</Text>
                <Text style={styles.cardContent}>Total Abonos: $0.00</Text>
            </View>

            <Text style={styles.title}>Estadísticas Mensuales</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Multas del Mes</Text>
                <Text style={styles.cardDate}>Mes Actual</Text>
                <Text style={styles.cardContent}>Total Multas: $0.00</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Abonos del Mes</Text>
                <Text style={styles.cardDate}>Mes Actual</Text>
                <Text style={styles.cardContent}>Total Abonos: $0.00</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardDate: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    cardContent: {
        fontSize: 16,
        color: '#333',
    },
});

export default StatisticsScreen;
