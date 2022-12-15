import React from "react";
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    ScrollView,
    Image,
} from "react-native";
import { useUser } from "../context/userContext";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import FocusAwareStatusBar from "./FocusAwareStatusBar";
//TODO: Add splash screen, Font, linear gradient, sound
function ItemDetails({ route }) {
    const [itemList] = useUser();

    console.log(itemList);

    let id = parseInt(route.params.id) - 1;
    //console.log(users.pokeDetails[id].id);

    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    {/* <FocusAwareStatusBar style={styles.redder} /> editing this another time*/}
                    <StatusBar barStyle="light-content" backgroundColor="red" />
                    <ScrollView>
                        <View style={styles.pads}>
                            <Text style={styles.StatMarker}>Berry Details</Text>
                            <Text style={styles.StatMarker}>
                                Berry ID: {itemList.itemDetails[id].id}
                            </Text>
                            <Text style={styles.pokemonName}>
                                {itemList.itemDetails[id].name}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Max Harvest: {itemList.itemDetails[id].name}
                            </Text>
                        </View>
                        <Text style={styles.StatMarker}>Sprites:</Text>
                        <View style={styles.spriteRows}>
                            <Text style={styles.StatMarker}>
                                Default Front Sprite:
                            </Text>
                            <Image
                                style={styles.Sprites}
                                source={{
                                    uri: itemList.itemDetails[id].sprites,
                                }}
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </SafeAreaProvider>
        </>
    );
}

const styles = StyleSheet.create({
    pokemonName: {
        "text-transform": "capitalize",
        fontWeight: "bold",
        fontStyle: "italic",
        padding: "0.5rem",
        color: "white",
        fontSize: "1.5rem",
    },
    container: {
        flex: 1,
        padding: "1rem",
    },
    spriteRows: {
        flexDirection: "row",
        margin: "0.5rem",
        flexWrap: "wrap",
        color: "white",
    },
    pads: {
        padding: "0.5rem",
    },
    StatMarker: {
        "text-transform": "uppercase",
        fontWeight: "bold",
        padding: "0.5rem",
        color: "white",
    },
    Sprites: {
        width: "96px",
        height: "96px",
        maxWidth: "10rem",
        maxHeight: "10rem",
    },
});

export default ItemDetails;
