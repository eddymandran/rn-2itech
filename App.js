import React from "react";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import EasyMode from "./components/Game/EasyMode"
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HardMode from "./components/Game/HardMode";
import MediumMode from "./components/Game/MediumMode";



export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Tabs"
                    component={Tabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="EasyMode" component={EasyMode} />
                <Stack.Screen name="MediumMode" component={MediumMode} />
                <Stack.Screen name="HardMode" component={HardMode} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={'Home'} component={Home}/>
            <Tab.Screen name={'About'} component={About}/>
        </Tab.Navigator>
    );
}

