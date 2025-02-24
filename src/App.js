import { recipes } from "./data.js";

/*export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}*/

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}
/*function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      {ingredients.map((ingredient)=>(
        <li>
          {ingredient}
        </li>
      ))}
    </div>
  );
}*/
function Recipe({ recipe }) {
  return (
    <div>
      <h2>{recipe.name}</h2>
      {recipe.ingredients.map((ingredient) => (
        <li>{ingredient}</li>
      ))}
    </div>
  );
}
