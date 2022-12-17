import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";

import Ionicons from "react-native-vector-icons/Ionicons";

import { UserProvider } from "./context/userContext";
import { PokemonStackNavigation } from "./navigation/PokemonNavigation";
import { ItemStackNavigation } from "./navigation/ItemNavigation";
import * as Font from "expo-font";

const Tab = createBottomTabNavigator();

export default function App() {
    //#region fonts
    const [fontsLoaded] = Font.useFonts({
        pkmnem: require("./assets/fonts/pkmnem.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }
    //#endregion

    return (
        <UserProvider>
            <NavigationContainer>
                <Tab.Navigator
                    style={styles.container}
                    screenOptions={{
                        headerStyle: { backgroundColor: "#FB1B1B" },
                        headerTintColor: "white",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            fontFamily: "pkmnem",
                        },
                        tabBarActiveTintColor: "white",
                        tabBarInactiveBackgroundColor: "#FB1B1B",
                        tabBarActiveBackgroundColor: "#FB1B1B",
                        tabBarInactiveTintColor: "#DFDFDF",
                    }}
                >
                    <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            // headerShown: false,
                            tabBarIcon: ({ focused, size, color }) => (
                                // <Ionicons
                                //     name={"home"}
                                //     size={size}
                                //     color={color}
                                // />
                                <Image
                                    source={require("./assets/rr_3_champion-ribbon.png")}
                                    size={size}
                                    color={color}
                                    // style={styles.ribbonImg}
                                />
                            ),
                            headerTitleAlign: "center",
                            tabBarLabelStyle: styles.tabText,
                        }}
                    />
                    <Tab.Screen
                        name="Pokémon List"
                        component={PokemonStackNavigation}
                        options={{
                            //headerShown: false,
                            tabBarIcon: ({ focused, size, color }) => (
                                <Image
                                    source={require("./assets/ico-a_old_egg.gif")}
                                    size={size}
                                    color={color}
                                    style={styles.eggImg}
                                />
                            ),
                            headerTitleAlign: "center",
                            tabBarLabelStyle: styles.tabText,
                        }}
                    />
                    <Tab.Screen
                        name="Item List"
                        component={ItemStackNavigation}
                        options={{
                            //headerShown: false,
                            tabBarIcon: ({ focused, size, color }) => (
                                <Image
                                    source={require("./assets/itemsbag.png")}
                                    size={size}
                                    color={color}
                                    style={styles.tabImg}
                                />
                            ),
                            headerTitleAlign: "center",
                            tabBarLabelStyle: styles.tabText,
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FB1B1B",
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "pkmnem",
    },
    tabText: {
        fontFamily: "pkmnem",
        fontSize: 15,
    },
    tabImg: {
        height: 30,
        width: 30,
    },
    eggImg: {
        // marginBottom: 25,
        height: 55,
        width: 55,
    },
    ribbonImg: {
        width: 70,
        height: 70,
    },
});
