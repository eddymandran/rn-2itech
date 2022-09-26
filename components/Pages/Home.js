import {StyleSheet, Text, View} from "react-native"

export default function Home() {
    return (
        <View style={styles.container}>
            <Text> Welcome to CalculaCat 2022 !!</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});