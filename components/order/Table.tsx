import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';

const itemsPerPage = 8;

const initialData = Array.from({ length: 24 }, (_, index) => ({
    key: (index + 1).toString(),
    values: Array(5).fill(0),
}));

const PaginatedTable = () => {
    const [data, setData] = useState(initialData);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (page: any) => {
        setCurrentPage(page);
    };

    const handleInputChange = (rowIndex: any, colIndex: any, value:any) => {
        const newData = [...data];
        newData[rowIndex].values[colIndex] = value;
        setData(newData);
    };

    const renderItem = ({ item, index }) => {
        const globalIndex = (currentPage - 1) * itemsPerPage + index;
        return (
            <View style={styles.tableRow}>
                <Text style={styles.tableCell}>{globalIndex + 1}</Text>
                {item.values.map((cellValue, idx) => (
                    <TextInput
                        key={idx}
                        style={styles.tableCell}
                        value={cellValue.toString()}
                        onChangeText={(value) => handleInputChange(globalIndex, idx, value)}
                        keyboardType="numeric"
                    />
                ))}
            </View>
        );
    };

    const paginatedData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <View style={styles.container}>
            <View style={styles.sidePanel}>
                <Text style={styles.sidePanelText}>Page {currentPage}</Text>
                <Text style={styles.sidePanelHighlight}>5000 kg</Text>
                <Text style={styles.sidePanelText}>50 cây</Text>
                <Image
                    source={{ uri: 'https://via.placeholder.com/100' }}
                    style={styles.image}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Lưu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sửa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addPageButton}>
                    <Text style={styles.addPageButtonText}>Page</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tableContainer}>
                <View style={styles.table}>

                    <FlatList
                        data={paginatedData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.key}
                        style={styles.tableContent}
                    />
                </View>
                <View style={styles.pagination}>
                    <TouchableOpacity
                        style={styles.pageButton}
                        onPress={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <Text style={styles.pageButtonText}>{"<"}</Text>
                    </TouchableOpacity>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.pageButton, currentPage === index + 1 && styles.activePageButton]}
                            onPress={() => handlePageChange(index + 1)}
                        >
                            <Text style={[styles.pageButtonText, currentPage === index + 1 && styles.activePageButtonText]}>{index + 1}</Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                        style={styles.pageButton}
                        onPress={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <Text style={styles.pageButtonText}>{">"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    sidePanel: {
        width: 120,
        marginRight: 10,
        alignItems: 'center',
    },
    sidePanelText: {
        fontSize: 14,
        marginBottom: 5,
    },
    sidePanelHighlight: {
        fontSize: 16,
        color: 'green',
        marginBottom: 5,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#1890FF',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    addPageButton: {
        backgroundColor: '#E6F7FF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    addPageButtonText: {
        color: '#1890FF',
        fontWeight: 'bold',
    },
    tableContainer: {
        flex: 1,
    },
    table: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f7f7f7',
    },
    tableHeaderCell: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    tableContent: {
        flex: 1,
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableCell: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        textAlign: 'center',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    pageButton: {
        padding: 10,
        marginHorizontal: 5,
    },
    pageButtonText: {
        fontSize: 16,
    },
    activePageButton: {
        backgroundColor: '#1890FF',
        borderRadius: 5,
    },
    activePageButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default PaginatedTable;
