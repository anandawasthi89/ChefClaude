import Markdown from 'react-markdown'
export function RecipeClaude({recipeResult}) {
    return (
        <section className="recipe-container">
            <div className="recipe">
                <h2>Chef Claude Recommends:</h2>
                <article className="suggested-recipe-container" aria-live="polite">
                <Markdown>{recipeResult}</Markdown>
                </article>
            </div>
        </section>
    )
}