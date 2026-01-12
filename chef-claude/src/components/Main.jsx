import { useState } from "react";

function Main() {
  const [ingredients, setIngredients] = useState([]);

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function clearList() {
    setIngredients([]);
  }

  const ingredientsListItems = ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));

  return (
    <main className="px-4 py-5 space-y-5">
      {/* Ingredient Form */}
      <form action={handleSubmit} className="flex justify-center gap-5">
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
          className="border-[#D1D5DB] px-3 py-2 shadow grow min-w-30 max-w-100 rounded-md"
        />
        <button className="rounded-md bg-[#141413] text-[#FAFAF8] w-30 border-0 text-sm hover:cursor-pointer">
          + Add ingredient
        </button>
      </form>

      {/* Ingredient Section */}
      {ingredients.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-2">Ingredients on hand:</h2>
          <ul className="ml-10 list-disc mb-12" aria-live="polite">
            {ingredientsListItems}
          </ul>
          {ingredients.length > 3 && (
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center rounded-lg bg-[#F0EFEB] py-2.5 px-7">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Ready for a recipe?</h3>
                <p className="text-[#6B7290] text-sm">
                  Generate a recipe from your list of ingredients.
                </p>
              </div>
              <button className="rounded-md bg-[#D17557] shadow text-[#FAFAF8] px-4 py-2 text-sm cursor-pointer">
                Get a recipe
              </button>
            </div>
          )}
          {/* Clear Ingredients */}
          <button
            onClick={clearList}
            className="px-5 py-1 rounded-xl bg-[#141413] text-[#FAFAF8] cursor-pointer hover:bg-gray-700 mt-10"
          >
            Clear
          </button>
        </section>
      )}
    </main>
  );
}

export default Main;
