import { FlatList, ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../context/userContext";
import PokeItem from "./PokeItem";

function Items({ navigation }) {
    const [itemList] = useUser();

    if (!itemList) {
        return null;
    }
    console.log(itemList.item);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <FlatList
                    style={styles.header}
                    data={itemList.item}
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
});

export default Items;
