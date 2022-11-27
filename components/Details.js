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

function Details({ route }) {
    const [pokemonList] = useUser();

    //console.log(users);

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
                            <Text style={styles.StatMarker}>
                                Pokémon Details
                            </Text>
                            <Text style={styles.pokemonName}>
                                {pokemonList.pokeDetails[id].name}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Type:{" "}
                                {pokemonList.pokeDetails[id].types[0].type.name}
                                {/* {JSON.stringify(
                                    pokemonList.pokeDetails[id].types[1].type
                                        .name
                                ).length > 0 && (
                                    <Text>
                                        {" "}
                                        /{" "}
                                        {
                                            pokemonList.pokeDetails[id].types[1]
                                                .type.name
                                        }
                                    </Text>
                                )} */}
                            </Text>
                            <Text style={styles.StatMarker}>Sprites:</Text>
                            <View style={styles.spriteRows}>
                                <Text style={styles.StatMarker}>
                                    Default Front Sprite:
                                </Text>
                                <Image
                                    style={styles.Sprites}
                                    source={{
                                        uri: pokemonList.pokeDetails[id].sprites
                                            .front_default,
                                    }}
                                />

                                <Text style={styles.StatMarker}>
                                    Default Back Sprite:
                                </Text>
                                <Image
                                    style={styles.Sprites}
                                    source={{
                                        uri: pokemonList.pokeDetails[id].sprites
                                            .back_default,
                                    }}
                                />
                                <Text style={styles.StatMarker}>
                                    Shiny Front Sprite:
                                </Text>
                                <Image
                                    style={styles.Sprites}
                                    source={{
                                        uri: pokemonList.pokeDetails[id].sprites
                                            .front_shiny,
                                    }}
                                />

                                <Text style={styles.StatMarker}>
                                    Shiny Back Sprite:
                                </Text>
                                <Image
                                    style={styles.Sprites}
                                    source={{
                                        uri: pokemonList.pokeDetails[id].sprites
                                            .back_shiny,
                                    }}
                                />
                            </View>
                            <Text style={styles.StatMarker}>
                                Pokémon ID: {pokemonList.pokeDetails[id].id}
                            </Text>
                            <Text style={styles.StatMarker}>Stats: </Text>
                            <Text style={styles.StatMarker}>
                                Base{" "}
                                {pokemonList.pokeDetails[id].stats[0].stat.name}
                                :{" "}
                                {pokemonList.pokeDetails[id].stats[0].base_stat}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Base{" "}
                                {pokemonList.pokeDetails[id].stats[1].stat.name}
                                :{" "}
                                {pokemonList.pokeDetails[id].stats[1].base_stat}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Base{" "}
                                {pokemonList.pokeDetails[id].stats[2].stat.name}
                                :{" "}
                                {pokemonList.pokeDetails[id].stats[2].base_stat}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Base{" "}
                                {pokemonList.pokeDetails[id].stats[3].stat.name}
                                :{" "}
                                {pokemonList.pokeDetails[id].stats[3].base_stat}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Base{" "}
                                {pokemonList.pokeDetails[id].stats[4].stat.name}
                                :{" "}
                                {pokemonList.pokeDetails[id].stats[4].base_stat}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Base{" "}
                                {pokemonList.pokeDetails[id].stats[5].stat.name}
                                :{" "}
                                {pokemonList.pokeDetails[id].stats[5].base_stat}
                            </Text>
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
    },
    container: {
        flex: 1,
        padding: "1rem",
    },
    spriteRows: {
        flexDirection: "row",
        margin: "0.5rem",
        flexWrap: "wrap",
    },
    pads: {
        padding: "0.5rem",
    },
    redder: {
        padding: "1rem",
        margin: "0.3rem",
        backgroundColor: "#FB1B1B",
        tintColor: "#FB1B1B",
        color: "#fff",
    },
    StatMarker: {
        "text-transform": "uppercase",
        fontWeight: "bold",
        padding: "0.5rem",
    },
    Sprites: {
        width: "96px",
        height: "96px",
        maxWidth: "10rem",
        maxHeight: "10rem",
    },
});

export default Details;
