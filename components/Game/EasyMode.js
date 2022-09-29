import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from "react";
import RandomCat from "../Cat/RandomCat";
import {getData, storeData} from "../LocalStorage";

export default function EasyMode() {
    const [viewCat, setViewCat] = useState(false);
    const [operationText, setOperationText] = useState("");
    const [number, onChangeNumber] = useState(0);
    const [operationResult, setOperationResult] = useState(null);
    const [succes, setSuccess] = useState(false)

    useEffect(() => {
        if (succes){
            updateScore()
        }
    }, [succes])

    async function updateScore(){
        getData('score').then((res) => {
            let newScore = 10 + parseInt(res)
            console.log({newScore})
            storeData('score', newScore.toString())
        })
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const generateOperation = () => {
        const number1 = getRandomInt(50);
        const number2 = getRandomInt(50);

        setOperationResult(number1 + number2);

        setOperationText(number1 + " + " + number2 + " = ?")
    }

    useEffect(() => {
        generateOperation()
    }, [])

    const onSubmitClick = () => {
        if (number == operationResult) {
            setViewCat(true)
            setSuccess(true)
            //alert("Gagne")
        } else {
            alert("Perdu")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{operationText}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={parseInt(number)}
                placeholder={`Type result here: ${operationResult}`}
                keyboardType="numeric"
            />
            <Button
                onPress={onSubmitClick}
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