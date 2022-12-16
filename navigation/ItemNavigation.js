import ItemDetails from "../components/ItemDetails";
import Items from "../components/Items";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ItemStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    cardStyle: styles.cards,
                    headerStyle: styles.stackHeader,
                    headerTintColor: "#FFFFFF",
                }}
                name="Items"
                component={Items}
            />
            <Stack.Screen
                options={{
                    cardStyle: styles.cards,
                    headerStyle: styles.stackHeader,
                    headerTintColor: "#FFFFFF",
                }}
                name="Item Details"
                component={ItemDetails}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    cards: {
        backgroundColor: "black",
        padding: 0,
        margin: 0,
        color: "white",
        //"#FB1B1B",
    },
    stackHeader: {
        backgroundColor: "#FB1B1B",
    },
});

export { ItemStackNavigation };
