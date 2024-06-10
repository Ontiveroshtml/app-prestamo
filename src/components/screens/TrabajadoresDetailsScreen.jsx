import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TrabajadoresDetailsScreen = ({ route, navigation }) => {
    const { clientData } = route.params;
    const [dailyRecords, setDailyRecords] = useState(
        Array.from({ length: clientData.days }, (_, index) => ({
            day: index + 1,
            abono: '',
            date: new Date().toLocaleDateString(),
            multa: '',
            isExpanded: false,
        }))
    );

    const handleInputChange = (index, name, value) => {
        const newRecords = [...dailyRecords];
        newRecords[index][name] = value;
        setDailyRecords(newRecords);
    };

    const handleSave = (index) => {
        // Lógica para guardar el registro diario
        console.log(`Registro para el día ${index + 1} guardado: `, dailyRecords[index]);
    };

    const handlePending = (index) => {
        // Lógica para marcar como pendiente
        console.log(`Registro para el día ${index + 1} está pendiente`);
    };

    const toggleExpand = (index) => {
        const newRecords = [...dailyRecords];
        newRecords[index].isExpanded = !newRecords[index].isExpanded;
        setDailyRecords(newRecords);
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.clientInfoContainer}>
                    <Text style={styles.infoText}>Nombre: {clientData.fullName}</Text>
                    <Text style={styles.infoText}>Número de teléfono: {clientData.phoneNumber}</Text>
                    <Text style={styles.infoText}>Número de abonos: 5</Text>
                    <Text style={styles.infoText}>Abonos totales: $5000</Text>
                    <Text style={styles.infoText}>Multas pendientes: 2</Text>
                    <Text style={styles.infoText}>Pagos pendientes: 3</Text>
                </View>
                <View style={styles.tableContainer}>
                    {dailyRecords.map((record, index) => (
                        <View key={index} style={styles.cardContainer}>
                            <TouchableOpacity style={styles.cardHeader} onPress={() => toggleExpand(index)}>
                                <Text style={styles.cardTitle}>Nombre</Text>
                                <Ionicons name={record.isExpanded ? "chevron-up" : "chevron-down"} size={24} color="black" />
                            </TouchableOpacity>
                            {record.isExpanded && (
                                <View>
                                    <Text style={styles.label}>Abono:</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Abono"
                                        value={record.abono}
                                        onChangeText={(value) => handleInputChange(index, 'abono', value)}
                                    />
                                    <Text style={styles.label}>Fecha:</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={record.date}
                                        editable={false}
                                    />
                                    <Text style={styles.label}>Multa:</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Multa"
                                        value={record.multa}
                                        onChangeText={(value) => handleInputChange(index, 'multa', value)}
                                    />
                                    <TouchableOpacity style={styles.saveButton} onPress={() => handleSave(index)}>
                                        <Text style={styles.saveButtonText}>Guardar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.pendingButton} onPress={() => handlePending(index)}>
                                        <Text style={styles.pendingButtonText}>Pendiente</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    ))}
                </View>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>Agregar Abono</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    clientInfoContainer: {
        padding: 20,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
    },
    tableContainer: {
        padding: 20,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 8,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    cardContainer: {
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 8,
        borderColor: '#ddd',
        borderWidth: 1,
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
    label: {
        fontSize: 16,
        marginBottom: 5,
        marginLeft: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    saveButton: {
        backgroundColor: '#1976D2',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pendingButton: {
        backgroundColor: '#FF8C00',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    pendingButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    addButton: {
        backgroundColor: '#1976D2',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignSelf: 'center',
        marginVertical: 20,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default TrabajadoresDetailsScreen;
