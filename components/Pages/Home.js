import {Button, StatusBar, StyleSheet, Text, View} from "react-native";
import SelectLevel from "./SelectLevel";
import React, {useEffect, useState} from "react";
import {getData, removeItem, storeData} from "../LocalStorage";


export default function Home() {

    const [myScore, setMyScore] = useState(0);
    const [localStorageClear, setLocalStorageClear] = useState(false)


    useEffect(() => {
        getData('score').then((res) => {
            if (res && res !== 'undefined' && res !== null) {
                setMyScore(parseInt(res))
            } else {
                let newScore = 0
                storeData('score', newScore.toString())
                setMyScore(0)
            }
        })
    }, [localStorageClear, myScore])

    function onSubmitClick(){
        removeItem('score')
        setLocalStorageClear('true')
    }

    return (
        <View style={styles.container}>
            <View>
                <Text>Welcome to CalculaCat 2022 !!</Text>
                <Text>Ton score est de : {myScore}</Text>
                <Button
                    onPress={onSubmitClick}
                    title="Remove localstorage"
                    color='#a742f5'
                ></Button>
                <StatusBar hidden={true}/>
            </View>
            <View>
                <SelectLevel/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})