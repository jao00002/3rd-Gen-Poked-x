import Pokemon from "../components/Pokemon";
import PokemonDetails from "../components/PokemonDetails";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import React from "react";

const Stack = createStackNavigator();

const PokemonStackNavigation = () => {
    const [fontsLoaded] = useFonts({
        pkmnem: require("../assets/fonts/pkmnem.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    cardStyle: styles.cards,
                    headerStyle: styles.stackHeaderBG,
                    headerTitleStyle: styles.stackHeaderTitle,
                    headerTintColor: "#FFFFFF",
                    headerShown: false,
                }}
                name="Pokédex"
                component={Pokemon}
            />
            <Stack.Screen
                options={{
                    cardStyle: styles.cards,
                    headerStyle: styles.stackHeaderBG,
                    headerTitleStyle: styles.stackHeaderTitle,
                    headerTintColor: "#FFFFFF",
                }}
                name="Details"
                component={PokemonDetails}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    cards: {
        backgroundColor: "black",
        padding: 0,
        margin: 0,
        color: "white",
        fontFamily: "pkmnem",
    },
    stackHeaderTitle: {
        fontFamily: "pkmnem",
    },
    stackHeaderBG: {
        backgroundColor: "#FB1B1B",
    },
});

export { PokemonStackNavigation };
