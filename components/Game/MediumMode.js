import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from "react";
import RandomCat from "../Cat/RandomCat";

export default function MediumMode() {
    const [viewCat, setViewCat] = useState(false);
    const [operationText, setOperationText] = useState("");
    const [number, onChangeNumber] = useState(null);
    const [operationResult, setOperationResult] = useState(null);


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const generateOperation = () => {
        const number1 = getRandomInt(50);
        const number2 = getRandomInt(50);

        const ops = {
            '+': function(a, b) { return a + b },
            '*': function(a, b) { return a * b },
            '-': function(a, b) { return a - b },
            '/': function(a, b) { return a / b }
        };

        const switchOperator=['+','-','*','/'];
        const random = Math.floor(Math.random() * switchOperator.length);
        const randomOperator = switchOperator[random];
        setOperationText(number1 + randomOperator + number2 + " = ?")
        setOperationResult(ops[randomOperator](number1, number2).toFixed(2));

    }

    useEffect(() => {
        generateOperation()
    }, [])

    const handleControl = () => {
        if (number == operationResult) {
            setViewCat(true)
            //alert("Gagne")
        }
        else {
            alert("Perdu")
        }
    }

    return (
        <View style={styles.container}>
            <Text nativeID='count'></Text>
            <Text style={styles.text}>{operationText}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={parseInt(number)}
                placeholder={`Type result here: ${operationResult}`}
                keyboardType="numeric"
            />
            <Button
                onPress={handleControl}
                title="Submit"
                color='#000000'
            ></Button>
            {viewCat && <RandomCat result={operationResult} />}
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