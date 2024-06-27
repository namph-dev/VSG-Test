import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const Summary = () => {
    return (
        <>
            <View style={styles.section}>
                <View style={styles.summaryText}>
                    <Text >Tổng page: 5000kg / 50 cây</Text>
                </View>
                <Button title="Kg/M" type='outline' />
                <Button title="Khổ Vải" type='outline' />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    summaryText: {
        fontSize: 16,
        textAlign: "center",
        display: 'flex',
        justifyContent: "center",
        borderWidth: 1,
        padding: 10,
        borderColor: '#41B870',
        borderRadius: 8


    },

    section: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 20,
    },

});

export default Summary;
