import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../context/userContext";
import UserItem from "./UserItem";

function Users({ navigation }) {
    const [users] = useUser();

    const [searchPokemon, setSearchPokemon] = useState("");
    const [filteredPokemon, setFilteredPokemon] = useState([]);

    useEffect(() => {
        if (searchPokemon != null) {
            let newPokemonArray = users.pokemon.filter((poke) => {
                return (
                    JSON.stringify(poke.name)
                        .toLowerCase()
                        .indexOf(searchPokemon.toLowerCase()) !== -1
                );
            });
            setFilteredPokemon(newPokemonArray);
            console.log(newPokemonArray);
        }
    }, [searchPokemon]);

    if (!users) {
        return null;
    }
    //console.log(users.pokemon);
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
                        <UserItem
                            user={item}
                            onPress={() =>
                                navigation.navigate("Details", {
                                    id: item.id,
                                    name: item.name,
                                    url: item.url,
                                })
                            }
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
        "text-transform": "capitalize",
        padding: "1rem",
        margin: "0.3rem",
        backgroundColor: "black",
    },
    container: {
        "text-transform": "capitalize",
        backgroundColor: "black",
        flex: 1,
    },
    search: {
        color: "white",
    },
});

export default Users;
