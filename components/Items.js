import React from "react";
import { useEffect, useState } from "react";
import { FlatList, TextInput, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../context/userContext";
import PokeItem from "./PokeItem";
import { Audio } from "expo-av";
import { useFonts } from "expo-font";

function Items({ navigation }) {
    const [itemList] = useUser();
    const [sound, setSound] = React.useState();

    if (!itemList) {
        return null;
    }

    //for searching
    const [searchItem, setSearchItem] = useState("");
    const [filteredItem, setFilteredItem] = useState([]);

    useEffect(() => {
        if (searchItem != null) {
            let newItemArray = itemList.item.filter((item) => {
                return (
                    JSON.stringify(item.name)
                        .toLowerCase()
                        .indexOf(searchItem.toLowerCase()) !== -1
                );
            });
            setFilteredItem(newItemArray);
            //console.log(newItemArray);
        }
    }, [searchItem]);

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            require("../assets/pokemon-a-button.mp3")
        );
        setSound(sound);
        await sound.playAsync();
    }

    //for font
    const [fontsLoaded] = useFonts({
        pkmnem: require("../assets/fonts/pkmnem.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <TextInput
                    style={styles.search}
                    placeholder="Search for an Item"
                    onChangeText={(text) => {
                        setSearchItem(text);
                    }}
                />
                <FlatList
                    style={styles.header}
                    data={filteredItem}
                    extraData={searchItem}
                    renderItem={({ item }) => (
                        <PokeItem
                            item={item}
                            onPress={() =>
                                navigation.navigate("Item Details", {
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
    },
    container: {
        textTransform: "uppercase",
        backgroundColor: "black",
        flex: 1,
        fontFamily: "pkmnem",
    },
    search: {
        color: "white",
        fontFamily: "pkmnem",
        tintColor: "#FFFFFF",
        padding: 15,
        borderColor: "#B7B7CE",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
    },
});

export default Items;
