import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Display = ({ value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 10,
        alignItems: 'flex-end',
    },
    text: {
        fontSize: 30,
        color: '#333',
    }
});

export default Display;