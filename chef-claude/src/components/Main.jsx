function Main() {
  return (
    <main className="px-4 py-5">
      <form className="flex justify-center gap-3">
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          className="border-[#D1D5DB] px-3 py-2 shadow grow min-w-30 max-w-100 rounded-md"
        />
        <button className="rounded-md bg-[#141413] text-[#FAFAF8] w-30 border-0 text-sm hover:cursor-pointer">
          + Add ingredient
        </button>
      </form>
    </main>
  );
}

export default Main;
