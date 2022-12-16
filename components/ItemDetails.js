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
import { useFonts } from "expo-font";
import SvgComponent from "./SvgComponent";

//TODO: Add splash screen, Font, linear gradient, sound
function ItemDetails({ route }) {
    const [itemList] = useUser();

    //console.log(itemList);

    let id = route.params.id;
    //console.log(id);
    let item = itemList.itemDetails.find((item) => item.id == id);

    //#region fonts

    const [fontsLoaded] = useFonts({
        pkmnem: require("../assets/fonts/pkmnem.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }
    //#endregion

    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    {/* <FocusAwareStatusBar style={styles.redder} /> editing this another time*/}
                    <StatusBar barStyle="dark-content" backgroundColor="red" />
                    <ScrollView>
                        <View>
                            <Text style={styles.pokemonName}>
                                {item.names[7].name}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Item ID: {item.id}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Cost: <SvgComponent style={styles.pokedollar} />
                                {item.cost}
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
        textTransform: "uppercase",
        // fontWeight: "bold",
        // fontStyle: "italic",
        padding: 10,
        color: "white",
        fontSize: 30,
        fontFamily: "pkmnem",
    },
    container: {
        flex: 1,
        padding: 10,
    },
    spriteRows: {
        flexDirection: "row",
        margin: 0,
        flexWrap: "wrap",
        color: "white",
    },
    pads: {
        padding: 10,
    },
    StatMarker: {
        textTransform: "uppercase",
        // fontWeight: "bold",
        margin: 0,
        padding: 10,
        color: "white",
        fontFamily: "pkmnem",
    },
    Sprites: {
        width: 50,
        height: 50,
        maxWidth: "100%",
        maxHeight: "100%",
    },
    pokedollar: {
        width: 10,
        height: 10,
    },
});

export default ItemDetails;
