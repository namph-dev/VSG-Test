import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const Header = () => {
    return (
        <View style={styles.header}>
            <Icon name="arrow-back" size={24} />
            <Text style={styles.headerText}>Tạo đơn nhập</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default Header;
