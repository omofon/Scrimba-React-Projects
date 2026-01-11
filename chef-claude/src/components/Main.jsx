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

  return (
    <main className="px-4 py-5 space-y-5">
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
      <ul className="ml-10 list-decimal">
        {ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button
        onClick={clearList}
        className="px-5 py-1 rounded-xl bg-[#141413] text-[#FAFAF8] cursor-pointer hover:bg-gray-700"
      >
        Clear
      </button>
    </main>
  );
}

export default Main;
