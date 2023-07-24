import { useGlobalContext } from "../context/context";

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;

    setSearchTerm(searchValue);
  };

  return (
    <div>
      <h1 className="title">Unsplash images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          placeholder={searchTerm || "cat"}
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
