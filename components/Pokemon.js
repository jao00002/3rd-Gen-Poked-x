import React from "react";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../context/userContext";
import PokemonListItem from "./PokemonListItem";
import { Audio } from "expo-av";
import { useFonts } from "expo-font";

function Pokemon({ navigation }) {
    const [pokemonList] = useUser();

    //for searching
    const [searchPokemon, setSearchPokemon] = useState("");
    const [filteredPokemon, setFilteredPokemon] = useState([]);

    useEffect(() => {
        if (searchPokemon != null) {
            let newPokemonArray = pokemonList.pokemon.filter((poke) => {
                return (
                    JSON.stringify(poke.name)
                        .toLowerCase()
                        .indexOf(searchPokemon.toLowerCase()) !== -1
                );
            });
            setFilteredPokemon(newPokemonArray);
            //console.log(newPokemonArray);
        }
    }, [searchPokemon]);

    if (!pokemonList) {
        return null;
    }
    //console.log(users.pokemon);

    //#region Sound functions
    const [sound, setSound] = React.useState();
    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            require("../assets/pokemon-a-button.mp3")
        );
        setSound(sound);
        await sound.playAsync();
    }
    //#endregion

    //#region Font

    const [fontsLoaded] = useFonts({
        pkmnem: require("../assets/fonts/pkmnem.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    //#endregion

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <TextInput
                    style={styles.search}
                    placeholder="Search for a Pokémon"
                    onChangeText={(text) => {
                        setSearchPokemon(text);
                    }}
                />
                <FlatList
                    style={styles.header}
                    data={filteredPokemon}
                    extraData={searchPokemon}
                    renderItem={({ item }) => (
                        <PokemonListItem
                            user={item}
                            onPress={() =>
                                navigation.navigate("Details", {
                                    id: item.id,
                                    name: item.name,
                                    url: item.url,
                                })
                            }
                            onPressOut={playSound}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    header: {
        textTransform: "capitalize",
        padding: 10,
        margin: 5,
        backgroundColor: "black",
        fontFamily: "pkmnem",
    },
    container: {
        textTransform: "capitalize",
        backgroundColor: "black",
        flex: 1,
        fontFamily: "pkmnem",
    },
    search: {
        color: "white",
        fontFamily: "pkmnem",
        padding: 15,
        borderColor: "#B7B7CE",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
    },
});

export default Pokemon;
