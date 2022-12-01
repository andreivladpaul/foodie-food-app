import axios from 'axios';

export async function getRecipes(search) {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}&number=6&diet=vegetarian`);
        return response;
    } catch (error) {
        alert('Something when wrong, try again!');
    }
};

export async function getRandomRecipe() {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&diet=vegetarian`);
        return response;
    } catch (error) {
        alert('Something when wrong, try again!');
    }
}

export async function getDeatil(params) {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${params}/information?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegetarian`);
        return response;
    } catch (error) {
        alert('Something when wrong, try again!');
    }
}
