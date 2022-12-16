import React from "react";

const UserContext = React.createContext();

function UserProvider(props) {
    const [pokemon, setPokemon] = React.useState();
    const [item, setItem] = React.useState();
    const [pokeDetails, setDetails] = React.useState();
    const [itemDetails, setItemDetails] = React.useState();
    const baseURL = "https://pokeapi.co/api/v2/";
    let pokeDetailArray = [];
    let itemDetailArray = [];

    React.useEffect(() => {
        fetchData();
        async function fetchData() {
            const data = await fetch(baseURL + "pokemon?limit=386").then(
                (res) => res.json()
            );
            const pokeMap = data.results.map((item, index) => ({
                ...item,
                id: index + 1,
            })); //add await to make sure they're in order
            pokeMap.map((item) => {
                fetchDetails(item.url);
            });
            //console.log(pokeMap);
            setPokemon(pokeMap);
        }
        async function fetchDetails(url) {
            //for each result fetch detail
            //let url = pokemon.url;
            await fetch(url)
                .then((res) => res.json())
                .then(function (pokeDetail) {
                    pokeDetailArray.push(pokeDetail);
                });
        }
        setDetails(pokeDetailArray);

        fetchItemData();
        async function fetchItemData() {
            const data = await fetch(baseURL + "item?limit=100").then((res) =>
                res.json()
            );
            const itemMap = data.results.map((item, index) => ({
                ...item,
                id: index + 1,
            })); //add await to make sure they're in order
            itemMap.map((item) => {
                fetchItemDetails(item.url);
            });
            //console.log(itemMap);
            setItem(itemMap);
        }

        async function fetchItemDetails(url) {
            await fetch(url)
                .then((res) => res.json())
                .then(function (itemDetail) {
                    itemDetailArray.push(itemDetail);
                });
        }
        setItemDetails(itemDetailArray);
    }, []);
    return (
        <UserContext.Provider
            value={[{ pokemon, pokeDetails, item, itemDetails }]}
            {...props}
        />
    );
}

//custom hook to get data on any screen
function useUser() {
    const context = React.useContext(UserContext);

    if (!context) {
        throw new Error("Cannot find a context");
    }
    return context;
}

export { UserProvider, useUser };
