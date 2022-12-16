import React from "react";
import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

function HomeScreen() {
    SplashScreen.preventAutoHideAsync();
    const [isLoaded, setLoading] = useState(true);

    const [fontsLoaded] = useFonts({
        pkmnem: require("../assets/fonts/pkmnem.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    } //fonts

    setTimeout(async function () {
        await SplashScreen.hideAsync();
        loadedApp();
    }, 3500);

    const loadedApp = () => {
        setTimeout(async function () {
            setLoading(false);
        }, 5000);
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.pads}>
                    <View style={styles.card}>
                        <Text style={styles.pads}>
                            Welcome to the 3rd Gen National Pokédex!
                        </Text>
                        <Image
                            style={styles.Images}
                            source={require("../assets/pokeball.png")}
                        />
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
                    {
                        //only show when true
                        isLoaded == true && (
                            <View>
                                <ActivityIndicator
                                    animating={true}
                                    size="large"
                                    color="#00ff00"
                                />
                            </View>
                        )
                    }
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    instructions: {
        // fontWeight: "bold",
        // fontStyle: "italic",
        fontFamily: "pkmnem",
        fontSize: 20,
    },
    container: {
        flex: 1,
        padding: 10,
        alignContent: "center",
        backgroundColor: "black",
    },
    instructionsTitle: {
        // fontWeight: "bold",
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
