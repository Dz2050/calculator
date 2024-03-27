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
        width: '100%',
        height: 100,
        borderRadius: 10,
        borderWidth: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 5,
        padding: 10,
        marginBottom: 10,
        alignItems: 'flex-end',
    },
    text: {
        fontSize: 45,
        color: 'black',
    }
});

export default Display;