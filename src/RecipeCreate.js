import React, { useState } from "react";

function RecipeCreate(props) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  });
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      [name]: value
    }));
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addRecipe(recipe); //send new recipe to app comp
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input placeholder="Name" name="name" type="text" value={recipe.name} onChange={handleChange} /></td>
            <td><input placeholder="Cuisine" name="cuisine" type="text" value={recipe.cuisine} onChange={handleChange} /></td>
            <td><input placeholder="Photo" name="photo" type="text" value={recipe.photo} onChange={handleChange} /></td>
            <td><textarea placeholder="Ingredients" name="ingredients" type="text" value={recipe.ingredients} onChange={handleChange} /></td>
            <td><textarea placeholder="Preparation" name="preparation" typeof="text" value={recipe.preparation} onChange={handleChange} /></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
