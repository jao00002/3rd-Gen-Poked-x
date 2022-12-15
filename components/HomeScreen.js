import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import FocusAwareStatusBar from "./FocusAwareStatusBar";

function HomeScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                {/* <FocusAwareStatusBar /> */}
                <View style={styles.pads}>
                    <View style={styles.card}>
                        <Text style={styles.pads}>
                            Welcome to the 3rd Gen Pokédex!
                            <Image
                                style={styles.Images}
                                source={{
                                    uri: require("../assets/pokeball.png"),
                                }}
                            />
                        </Text>
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
        // fontStyle: "italic",
    },
    container: {
        flex: 1,
        padding: "1rem",
        alignContent: "center",
        backgroundColor: "black",
    },
    instructionsTitle: {
        fontWeight: "bold",
        fontSize: "2rem",
        padding: "0.5rem",
    },
    pads: {
        padding: "0.5rem",
        fontSize: "2rem",
    },
    card: {
        backgroundColor: "#DFDFDF",
        padding: "0.5rem",
        borderRadius: "1rem",
        margin: "0.3rem",
    },
    Images: {
        display: "flex",
        alignContent: "center",
        width: "5rem",
        height: "5rem",
        maxWidth: "100rem",
        maxHeight: "100rem",
    },
});

export default HomeScreen;
