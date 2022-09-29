import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from "react";
import RandomCat from "../Cat/RandomCat";

export default function HardMode() {
    const [viewCat, setViewCat] = useState(false);
    const [input, onChangeInput] = useState(null);
    const [operatorState, setOperatorState] = useState(null);
    const [operationResult, setOperationResult] = useState(null);
    const [number1, setNumber1] = useState(getRandomInt(50))
    const [number2, setNumber2] = useState(getRandomInt(50))


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function generateOperation(number1, number2) {

        const ops = {
            '+': function (a, b) {
                return a + b
            },
            '*': function (a, b) {
                return a * b
            },
            '-': function (a, b) {
                return a - b
            },
            '/': function (a, b) {
                return a / b
            }
        };

        const switchOperator = ['+', '-', '*', '/'];
        const random = Math.floor(Math.random() * switchOperator.length);
        const randomOperator = switchOperator[random];
        const result = ops[randomOperator](number1, number2).toFixed(2)
        setOperatorState(randomOperator)
        setOperationResult(result)
        console.log({result})
        console.log({randomOperator})
    }

    useEffect(() => {
        generateOperation()
    }, [])


    function handleControl() {
        if (input == operationResult) {
            setViewCat(true)
        } else {
            alert("Perdu")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{number1 + " ? " + number2 + " = " + operationResult}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeInput}
                value={input}
                placeholder={`Type result here: ${operatorState}`}
            />
            <Button
                onPress={handleControl}
                title="Submit"
                color='#000000'
            ></Button>
            {viewCat && <RandomCat result={operationResult}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 30
    },
    input: {
        height: 60,
        width: 300,
        margin: 30,
        borderWidth: 1,
        padding: 10,
    },
});