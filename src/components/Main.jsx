import React from "react"
import { getRecipeFromMistral } from "../ai"
import { RecipeClaude } from "./RecipeClaude"
import { IngredientList } from "./IngredientList"

export function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipeResult, setRecipeResult] = React.useState("")

    async function getRecipe() {

        const generatedRecipe = await getRecipeFromMistral(ingredients.map(
            ingredient => ingredient.key
        ))
        console.log(generatedRecipe)
        setRecipeResult(generatedRecipe)
    }

    function handleSubmit(formdata) {
        const newingredient = formdata.get("ingredient")
        if (newingredient !== "") {
            setIngredients(
                (prevIngredients) => ([...prevIngredients, <li key={newingredient}>{newingredient}</li>])
            )
        }
    }

    return (
        <main>
            <form className="addingredient" action={handleSubmit}>
                <input
                    className="textfield"
                    placeholder="  e.g. Oregano"
                    aria-label="add ingredient"
                    name="ingredient"
                />
                <button className="addbutton">+ Add Ingredient</button>
            </form>
            <IngredientList
                ingredients={ingredients}
                getRecipe={getRecipe}
            />
            {recipeResult &&
                <RecipeClaude
                    recipeResult={recipeResult}
                />}
        </main>
    )
}