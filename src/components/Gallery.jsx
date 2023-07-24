import { useGlobalContext } from "../context/context";
import { useSearchImages } from "../hooks/reactQueryCustomHooks";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const { isLoading, isError, data } = useSearchImages(searchTerm);

  if (isLoading) {
    return (
      <div className="image-container">
        <h4>Loading...</h4>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="image-container">
        <h4>There was an error...</h4>
      </div>
    );
  }

  const results = data.results;

  if (results.length < 1) {
    return (
      <div className="image-container">
        <h4>No results found...</h4>
      </div>
    );
  }

  return (
    <div className="image-container">
      {results.map((image) => {
        const url = image?.urls?.regular;
        return (
          <img
            key={image.id}
            className="img"
            alt={image.alt_description}
            src={url}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
