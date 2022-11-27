import { FlatList, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../context/userContext";
import UserItem from "./UserItem";

function Users({ navigation }) {
    const [users] = useUser();

    if (!users) {
        return null;
    }
    //console.log(users.pokemon);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.header}>
                <FlatList
                    style={styles.header}
                    data={users.pokemon}
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
});

export default Users;
