import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeData(key, value) {
    try {
        await AsyncStorage.setItem(key, value)
        console.log('set in local storage', value)
    } catch (e) {
        console.log(e)
    }
}

export async function getData(key) {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            console.log('get', value)
            return value
        }
    } catch (e) {
        console.log(e)
    }
}

export async function removeItem(item) {
    try {
        await AsyncStorage.removeItem(item)
    } catch (e) {
        console.log(e)
    }
}