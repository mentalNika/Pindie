import data from "./data";

const getGamesByCategory = (category) => {
    return data.filter((game) => {
        return game.category.find((item) => {
            return item.name === category
        });
    }) ;
};

export default getGamesByCategory;