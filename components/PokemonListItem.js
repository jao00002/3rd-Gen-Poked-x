import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { useFonts } from "expo-font";

export default function PokemonListItem({
    user: pokemon,
    onPress,
    onPressOut,
}) {
    // console.log(pokemon);

    const [fontsLoaded] = useFonts({
        pkmnem: require("../assets/fonts/pkmnem.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Pressable
            style={styles.card}
            onPress={onPress}
            onPressOut={onPressOut}
        >
            <Text style={styles.itemTxt}>{pokemon.name}</Text>
            <Text style={styles.itemTxt}>Pokémon ID: {pokemon.id}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        "text-transform": "capitalize",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        backgroundColor: "#DFDFDF",
        fontFamily: "pkmnem",
    },
    itemTxt: {
        fontSize: 15,
        fontFamily: "pkmnem",
    },
});
