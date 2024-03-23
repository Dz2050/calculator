import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Keypad = ({ onButtonPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
            <Pressable onPress={() => onButtonPress('C')} style={styles.clearButton}>
                <Text style={styles.buttonText}>C</Text>
            </Pressable>
            <Pressable onPress={() => onButtonPress('%')} style={styles.operatorButton}>
                <Text style={styles.buttonText}>%</Text>
            </Pressable>
            <Pressable onPress={() => onButtonPress('/')} style={styles.operatorButton}>
                <Text style={styles.buttonText}>/</Text>
            </Pressable>
        </View>
            <View style={styles.row}>
            <Pressable onPress={() => onButtonPress('7')} style={styles.button}>
                <Text style={styles.buttonText}>7</Text>
            </Pressable>
            <Pressable onPress={() => onButtonPress('8')} style={styles.button}>
                <Text style={styles.buttonText}>8</Text>
            </Pressable>
            <Pressable onPress={() => onButtonPress('9')} style={styles.button}>
                <Text style={styles.buttonText}>9</Text>
            </Pressable>
            <Pressable onPress={() => onButtonPress('*')} style={styles.operatorButton}>
                <Text style={styles.buttonText}>*</Text>
            </Pressable>
            </View>
        <View style={styles.row}>
            <Pressable onPress={() => onButtonPress('4')} style={styles.button}>
                <Text style={styles.buttonText}>4</Text>
            </Pressable>
            <Pressable onPress={() => onButtonPress('5')} style={styles.button}>
                <Text style={styles.buttonText}>5</Text>
            </Pressable>
            <Pressable onPress={() => onButtonPress('6')} style={styles.button}>
                <Text style={styles.buttonText}>6</Text>
            </Pressable>
            <Pressable onPress={() => onButtonPress('-')} style={styles.operatorButton}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
        </View>
            <View style={styles.row}>
            <Pressable onPress={() => onButtonPress('1')} style={styles.button}>
                <Text style={styles.buttonText}>1</Text>
            </Pressable>
            <Pressable onPress={() => onButtonPress('2')} style={styles.button}>
                <Text style={styles.buttonText}>2</Text>
            </Pressable>
            <Pressable onPress={() => onButtonPress('3')} style={styles.button}>
                <Text style={styles.buttonText}>3</Text>
            </Pressable>
            <Pressable onPress={() => onButtonPress('+')} style={styles.operatorButton}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
            <View style={styles.row}>
            <Pressable onPress={() => onButtonPress('0')} style={styles.button}>
                <Text style={styles.buttonText}>0</Text>
            </Pressable>
            <Pressable onPress={() => onButtonPress('.')} style={styles.button}>
                <Text style={styles.buttonText}>.</Text>
            </Pressable>
            <Pressable onPress={() => onButtonPress('=')} style={styles.equalsButton}>
                <Text style={styles.buttonText}>=</Text>
            </Pressable>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    },

    row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    },

    button: {
    width: 80,
    height: 80,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 5,
    },

    operatorButton: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    },

    clearButton: {
        width: 160,
        height: 80,
        borderRadius: 8,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        fontSize: 24,
    },

    equalsButton: {
    width: 160,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#ff9800',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    },

});

export default Keypad;