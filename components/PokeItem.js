import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { useFonts } from "expo-font";

export default function PokeItem({ item: pokeitem, onPress, onPressOut }) {
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
            <Text style={styles.itemTxt}>
                {pokeitem.name.replace("-", " ")}
            </Text>
            <Text style={styles.itemTxt}>Item ID: {pokeitem.id}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        textTransform: "capitalize",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        backgroundColor: "#DFDFDF",
        fontFamily: "pkmnem",
    },
    itemTxt: {
        textTransform: "capitalize",
        fontSize: 20,
        fontFamily: "pkmnem",
    },
});
