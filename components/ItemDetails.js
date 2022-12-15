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

    //console.log(itemList);

    let id = route.params.id;
    //console.log(id);
    let item = itemList.itemDetails.find((item) => item.id == id);

    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    {/* <FocusAwareStatusBar style={styles.redder} /> editing this another time*/}
                    <StatusBar barStyle="dark-content" backgroundColor="red" />
                    <ScrollView>
                        <View style={styles.pads}>
                            <Text style={styles.StatMarker}>Berry Details</Text>
                            <Text style={styles.StatMarker}>
                                Item ID: {item.id}
                            </Text>
                            <Text style={styles.pokemonName}>
                                {item.names[7].name}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Max Harvest: {item.names[7].name}
                            </Text>
                        </View>
                        <Text style={styles.StatMarker}>Sprites:</Text>
                        <View style={styles.spriteRows}>
                            <Text style={styles.StatMarker}>
                                Default Sprite:
                            </Text>
                            <Image
                                style={styles.Sprites}
                                source={{
                                    uri: item.sprites.default,
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
        padding: 10,
        color: "white",
        fontSize: 20,
    },
    container: {
        flex: 1,
        padding: 10,
    },
    spriteRows: {
        flexDirection: "row",
        margin: 10,
        flexWrap: "wrap",
        color: "white",
    },
    pads: {
        padding: 10,
    },
    StatMarker: {
        textTransform: "uppercase",
        fontWeight: "bold",
        padding: 10,
        color: "white",
    },
    Sprites: {
        width: "96px",
        height: "96px",
        maxWidth: 10,
        maxHeight: 10,
    },
});

export default ItemDetails;
