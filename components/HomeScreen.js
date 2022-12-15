import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

function HomeScreen() {
    const [fontsLoaded] = useFonts({
        pkmnem: require("../assets/fonts/pkmnem.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.pads}>
                    <View style={styles.card}>
                        <Text style={styles.pads}>
                            Welcome to the 3rd Gen Pokédex!
                        </Text>
                        {/* <Image
                            style={styles.Images}
                            source={{
                                uri: require("../assets/pokeball.png"),
                            }}
                        /> */}
                        <Text style={styles.pads}>
                            AKA (Pokémon #'s 1-386) & Item List
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.instructionsTitle}>
                            Instructions:
                        </Text>
                        <Text style={styles.instructions}>
                            Tap Pokémon List or Item List on the bottom bar to
                            begin looking through the Pokèdex.
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    instructions: {
        fontWeight: "bold",
        fontStyle: "italic",
        fontFamily: "pkmnem",
    },
    container: {
        flex: 1,
        padding: 10,
        alignContent: "center",
        backgroundColor: "black",
    },
    instructionsTitle: {
        fontWeight: "bold",
        fontSize: 33,
        padding: 10,
        fontFamily: "pkmnem",
    },
    pads: {
        padding: 10,
        fontSize: 30,
        fontFamily: "pkmnem",
    },
    card: {
        backgroundColor: "#DFDFDF",
        padding: 10,
        borderRadius: 20,
        margin: 5,
        fontFamily: "pkmnem",
    },
    Images: {
        display: "flex",
        alignContent: "center",
        width: 100,
        height: 100,
        textAlign: "center",
    },
});

export default HomeScreen;
