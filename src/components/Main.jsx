import React from "react"
import { getRecipeFromMistral } from "../ai"
import { RecipeClaude } from "./RecipeClaude"
import { IngredientList } from "./IngredientList"
import { useEffect } from "react"

export function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipeResult, setRecipeResult] = React.useState("")
    const recipeView = React.useRef(null)

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

    React.useEffect(()=>{
        if(recipeResult!==""&&recipeView.current!==null){
            recipeView.current.scrollIntoView({behaviour: "smooth"});
        }
    },[recipeResult])

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
                ref = {recipeView}
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