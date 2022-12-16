import ItemDetails from "../components/ItemDetails";
import Items from "../components/Items";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const ItemStackNavigation = () => {
    const [fontsLoaded] = useFonts({
        pkmnem: require("../assets/fonts/pkmnem.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    cardStyle: styles.cards,
                    headerStyle: styles.stackHeaderBG,
                    headerTitleStyle: styles.stackHeaderTitle,
                    headerTintColor: "#FFFFFF",
                }}
                name="Items"
                component={Items}
            />
            <Stack.Screen
                options={{
                    cardStyle: styles.cards,
                    headerStyle: styles.stackHeaderBG,
                    headerTitleStyle: styles.stackHeaderTitle,
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
        fontFamily: "pkmnem",
        //"#FB1B1B",
    },
    stackHeaderTitle: {
        fontFamily: "pkmnem",
    },
    stackHeaderBG: {
        backgroundColor: "#FB1B1B",
    },
});

export { ItemStackNavigation };
