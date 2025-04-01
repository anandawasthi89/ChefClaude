export function IngredientList({ ingredients,getRecipe,ref }) {
    return (
        <section className="ingredient-flex-box">
            <div className="ingredient-container">
                {ingredients.length > 0 && <h1 className="list-heading">Ingredients on hand</h1>}
                <ul className="list">
                    {ingredients}
                </ul>
                {ingredients.length > 3 && <div className="recipe-finder">
                    <div ref={ref} className="recipe-finder-label">
                        <p className="recipe-finder-heading">Ready for a recipe?</p>
                        <p className="recipe-finder-subheading">Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={getRecipe}>Get a recipe</button>
                </div>}
            </div>
        </section>
    )
}