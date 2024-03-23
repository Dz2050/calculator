import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Keypad from './Keypad';
import Display from './Display';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('');

    const handleButtonPress = (value) => {
        if (value === '=') {
            try {
                const result = eval(displayValue);
                setDisplayValue(result.toString());
            } catch (error) {
                setDisplayValue('Error');
            }
        } else if (value === 'C') {
            setDisplayValue('');
        } else {
            setDisplayValue((prevValue) => prevValue + value);
        }
    };

    return (
        <View style={styles.container}>
            <Display value={displayValue}/>
            <Keypad onButtonPress={handleButtonPress}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default Calculator;