import React, {useState} from "react";
import {Button, Image, StatusBar, StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function RandomCat({result}) {

    const [cat, setCat] = useState("https://cataas.com/cat/says/" + result );
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: cat }}
                style={styles.img}
            />
            <StatusBar hidden={true} />
            <Button
                title="Voulez vous rejouer ?"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    img: {
        width: 400,
        height: 400,

    }
})