import './index.css'
import React, {useEffect, useState} from 'react';
// TODO: Import RecipeTitle
import RecipeTitle from './RecipeTitle'
// TODO: Import IngredientList
import IngredientList from './IngredientList'


function App() {
    // TODO: Add recipe object
    const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
    };

    // TODO: Create recipe state
    const [ recipe, setRecipe] = useState(initialRecipe);

    // TODO: Add new state property
    const [ prepared, setPrepared] = useState(false);

    // TODO: Create ingredientClick event  listener
    function IngredientClick(index) {
        const updatedRecipe = { ... recipe },
        updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared;
        setRecipe(updatedRecipe)
    }

    // TODO: Add the effect hook
    useEffect(() => {
        setPrepared(recipe.ingredients.every(i => i.prepared));
    }, [recipe]);
    
    return (
        <article>
            <h1>Recipe Manager</h1>

            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title={ recipe.title }  feedback={recipe.feedback}/>

            {/* TODO: Add IngredientList component */}
            <IngredientList ingredients={recipe.ingredients} onClick={ingredientClick} />

            {/* TODO: Add the prep work display*/}
            {prepared ? <h2>Prep work done!</h2> : <h2>Just keep chopping</h2>}

        </article>
    )
}

export default App;
