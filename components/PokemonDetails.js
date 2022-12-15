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

function PokemonDetails({ route }) {
    const [pokemonList] = useUser();

    //console.log(users);

    let id = route.params.id;
    //console.log(id);
    let pokemon = pokemonList.pokeDetails.find((item) => item.id == id);
    //console.log(pokemon);

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
                    <StatusBar barStyle="light-content" backgroundColor="red" />
                    <ScrollView>
                        <View style={styles.pads}>
                            <Text style={styles.StatMarker}>
                                Pokémon Details
                                {/* {pokemon.name} */}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Pokémon ID: {pokemon.id}
                            </Text>
                            <Text style={styles.pokemonName}>
                                {pokemon.name}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Type: {pokemon.types[0].type.name}
                                {
                                    Object.keys(pokemon.types).length > 1 && (
                                        <Text>
                                            {" "}
                                            / {pokemon.types[1].type.name}
                                        </Text>
                                    )
                                    //only if the Pokémon has more than 1 type
                                }
                            </Text>
                            <Text style={styles.StatMarker}>Sprites:</Text>
                            <View style={styles.spriteRows}>
                                <Text style={styles.StatMarker}>
                                    Default Front Sprite:
                                </Text>
                                <Image
                                    style={styles.Sprites}
                                    source={{
                                        uri: pokemon.sprites.front_default,
                                    }}
                                />

                                <Text style={styles.StatMarker}>
                                    Default Back Sprite:
                                </Text>
                                <Image
                                    style={styles.Sprites}
                                    source={{
                                        uri: pokemon.sprites.back_default,
                                    }}
                                />
                                <Text style={styles.StatMarker}>
                                    Shiny Front Sprite:
                                </Text>
                                <Image
                                    style={styles.Sprites}
                                    source={{
                                        uri: pokemon.sprites.front_shiny,
                                    }}
                                />

                                <Text style={styles.StatMarker}>
                                    Shiny Back Sprite:
                                </Text>
                                <Image
                                    style={styles.Sprites}
                                    source={{
                                        uri: pokemon.sprites.back_shiny,
                                    }}
                                />
                            </View>

                            <Text style={styles.StatMarker}>Stats: </Text>
                            <Text style={styles.StatMarker}>
                                Base {pokemon.stats[0].stat.name}:{" "}
                                {pokemon.stats[0].base_stat}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Base {pokemon.stats[1].stat.name}:{" "}
                                {pokemon.stats[1].base_stat}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Base {pokemon.stats[2].stat.name}:{" "}
                                {pokemon.stats[2].base_stat}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Base {pokemon.stats[3].stat.name}:{" "}
                                {pokemon.stats[3].base_stat}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Base {pokemon.stats[4].stat.name}:{" "}
                                {pokemon.stats[4].base_stat}
                            </Text>
                            <Text style={styles.StatMarker}>
                                Base {pokemon.stats[5].stat.name}:{" "}
                                {pokemon.stats[5].base_stat}
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
        padding: 10,
        color: "white",
        fontSize: 20,
        fontFamily: "pkmnem",
    },
    container: {
        flex: 1,
        padding: 10,
        fontFamily: "pkmnem",
    },
    spriteRows: {
        flexDirection: "row",
        margin: 5,
        flexWrap: "wrap",
        color: "white",
        fontFamily: "pkmnem",
    },
    pads: {
        padding: 10,
        fontFamily: "pkmnem",
    },
    StatMarker: {
        "text-transform": "uppercase",
        fontWeight: "bold",
        padding: 10,
        color: "white",
        fontFamily: "pkmnem",
    },
    Sprites: {
        width: "50%",
        height: "50%",
        maxWidth: 100,
        maxHeight: 100,
    },
});

export default PokemonDetails;
