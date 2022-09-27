import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useNavigation} from '@react-navigation/native';
import EasyMode from "../Game/EasyMode"
import MediumMode from "../Game/MediumMode"
import HardMode from "../Game/HardMode"
import {createStackNavigator} from "@react-navigation/stack";


const Separator = () => (
    <View style={styles.separator}/>
);

const Stack = createStackNavigator();


export default function SelectLevel() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Please select your difficulty
            </Text>
            <View>
                <Button
                    title="Easy"
                    color="#16D424"
                    onPress={() => navigation.navigate('EasyMode')}
                />
            </View>
            <Separator/>
            <View>
                <Button
                    title="Medium"
                    color="#F0A312"
                    onPress={() => navigation.navigate('MediumMode')}
                />
            </View>
            <Separator/>
            <View>
                <Button
                    title="Hard"
                    color="#F50D0D"
                    onPress={() => navigation.navigate('HardMode')}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});