import React from "react";

const UserContext = React.createContext();

function UserProvider(props) {
    const [pokemon, setPokemon] = React.useState();
    const [pokeDetails, setDetails] = React.useState();
    const baseURL = "https://pokeapi.co/api/v2/";

    React.useEffect(() => {
        fetchData();
        //fetchDetails();
        async function fetchData() {
            const data = await fetch(baseURL + "pokemon?limit=151").then(
                (res) => res.json()
            );
            const pokeMap = data.results.map((item, index) => ({
                ...item,
                id: index + 1,
            }));
            const pokeDetail = pokeMap.map((item) => {
                fetchDetails(item.url);
            });
            //console.log(pokeMap);

            setPokemon(pokeMap);
        }
        async function fetchDetails(url) {
            //for each result fetch detail
            //let url = pokemon.url;
            const data = await fetch(url)
                .then((res) => res.json())
                .then(function (pokeDetail) {
                    console.log(pokeDetail);
                });
            //const detailMap = pokemon.map((item) => ({}));
            // console.log(pokemon);
            //console.log(detailMap);
            setDetails(data);
        }
    }, []);

    return <UserContext.Provider value={[pokemon, pokeDetails]} {...props} />;
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
