import { View, Text, FlatList } from "react-native";
import { useUser } from "../context/userContext";
import UserItem from "./UserItem";

function Users({ navigation }) {
    const [users] = useUser();

    if (!users) {
        return null;
    }

    return (
        <FlatList
            data={users}
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
    );
}

export default Users;
