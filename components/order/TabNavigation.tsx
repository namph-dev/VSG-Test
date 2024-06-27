import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TabNavigation = () => {
    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tabItem}>
                <Text style={styles.tabText}>Quần áo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
                <Text style={[styles.tabText, styles.activeTabText]}>Vải</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
                <Text style={styles.tabText}>Phụ Liệu</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tabItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    tabText: {
        fontSize: 16,
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#1890FF',
    },
    activeTabText: {
        color: '#1890FF',
        fontWeight: 'bold',
    },
});

export default TabNavigation;
