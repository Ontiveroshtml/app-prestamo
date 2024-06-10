import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NewClientScreen = ({ navigation }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        phoneNumber: '',
        loanAmount: '',
        days: '',
        dailyPercentage: '',
        interest: '',
    });

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        // Logic to handle form submission
        Alert.alert('Cliente agregado', `Nombre: ${formData.fullName}`);
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Nuevo Cliente</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Nombre completo:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre completo"
                        placeholderTextColor="#666"
                        value={formData.fullName}
                        onChangeText={value => handleInputChange('fullName', value)}
                    />
                    <Text style={styles.label}>Dirección:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Dirección"
                        placeholderTextColor="#666"
                        value={formData.address}
                        onChangeText={value => handleInputChange('address', value)}
                    />
                    <Text style={styles.label}>Número de teléfono:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Número de teléfono"
                        placeholderTextColor="#666"
                        value={formData.phoneNumber}
                        onChangeText={value => handleInputChange('phoneNumber', value)}
                    />
                    <Text style={styles.label}>Préstamo:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Préstamo"
                        placeholderTextColor="#666"
                        value={formData.loanAmount}
                        onChangeText={value => handleInputChange('loanAmount', value)}
                    />
                    <Text style={styles.label}>A cuantos días:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="A cuantos días"
                        placeholderTextColor="#666"
                        value={formData.days}
                        onChangeText={value => handleInputChange('days', value)}
                    />
                    <Text style={styles.label}>Porcentaje diario:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Porcentaje diario"
                        placeholderTextColor="#666"
                        value={formData.dailyPercentage}
                        onChangeText={value => handleInputChange('dailyPercentage', value)}
                    />
                    <Text style={styles.label}>Interés:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Interés"
                        placeholderTextColor="#666"
                        value={formData.interest}
                        onChangeText={value => handleInputChange('interest', value)}
                    />
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.submitButtonText}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        alignItems: 'center',
        backgroundColor: '#1976D2',
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
    },
    scrollView: {
        flex: 1,
    },
    formContainer: {
        padding: 20,
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
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor: '#1976D2',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginTop: 20,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default NewClientScreen;
