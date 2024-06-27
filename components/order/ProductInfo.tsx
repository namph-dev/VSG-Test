import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Modal, FlatList, TouchableOpacity } from 'react-native';

const currencies = [
    { label: 'VND', value: 'VND' },
    { label: 'USD', value: 'USD' },
    { label: 'EUR', value: 'EUR' },
];

const ProductInfo = ({ selectedProduct }) => {
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState('VND');
    const [exchangeRate, setExchangeRate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setPrice('');
        setCurrency('VND');
        setExchangeRate('');
    }, [selectedProduct]);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.modalItem}
            onPress={() => {
                setCurrency(item.value);
                setModalVisible(false);
            }}
        >
            <Text>{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.productInfoContainer}>
            <View style={styles.priceInputSection}>
                <Text style={styles.sectionTitle}>Nhập giá</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input, { marginRight: 10 }]}
                        value={price}
                        onChangeText={setPrice}
                        keyboardType="numeric"
                        placeholder="Nhập giá"
                    />
                    <TouchableOpacity
                        style={styles.customDropdown}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text>{currency}</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={[styles.input, currency === 'VND' && styles.disabledInput]}
                        value={exchangeRate}
                        onChangeText={setExchangeRate}
                        keyboardType="numeric"
                        editable={currency !== 'VND'}
                        placeholder="Tỉ giá"
                    />
                </View>
            </View>
            <View style={styles.productInfo}>
                <Image style={styles.productImage} source={{ uri: selectedProduct?.uri }} />
                <View style={styles.productDetails}>
                    <View style={styles.row}>
                        <Text>Giá nhập: </Text>
                        <TextInput
                            style={styles.input}
                            value={price}
                            onChangeText={setPrice}
                            keyboardType="numeric"
                            placeholder="Nhập giá"
                        />
                    </View>
                    <View style={styles.row}>
                        <Text>Giá buôn: </Text>
                        <TextInput
                            style={styles.input}
                            defaultValue="0"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.row}>
                        <Text>Tên Sp: </Text>
                        <TextInput
                            style={styles.input}
                            value={selectedProduct?.name || "Tên sản phẩm"}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text>Mã Vải: </Text>
                        <TextInput
                            style={styles.input}
                            value={selectedProduct?.code || "Mã sản phẩm"}
                        />
                    </View>
                </View>
            </View>
            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <FlatList
                            data={currencies}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.value}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    productInfoContainer: {
        padding: 10,
    },
    priceInputSection: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productInfo: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
    },
    productImage: {
        width: 100,
        height: 100,
        marginRight: 20,
        borderRadius: 10,
    },
    productDetails: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginLeft: 10,
    },
    disabledInput: {
        backgroundColor: '#f0f0f0',
    },
    customDropdown: {
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginRight: 10,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    },
    modalItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
});

export default ProductInfo;
