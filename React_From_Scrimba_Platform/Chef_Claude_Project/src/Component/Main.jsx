import React from "react"
import IngredientsList from "./SubComponent/IngredientsList"
import ClaudeRecipe from "./SubComponent/ClaudeRecipe"
import { getRecipeFromMistral } from "../ai"

export default function Main() 
{
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)
        
    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) 
        {
            const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
            console.log(yCoord)
            window.scroll({
                top: yCoord,
                behavior: "smooth"
            })
        }
    }, [recipe])

    // Ai recipe
    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(event) {
        event.preventDefault();
        const formEl = event.target;
        const formData = new FormData(formEl);
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        formEl.reset();
    }
    
    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    reF={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}