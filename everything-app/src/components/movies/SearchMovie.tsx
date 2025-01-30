import { FormEvent, useState } from "react";

interface ISearchMovieProps {
  search: (s: string) => void;
}

export const SearchMovie = (props: ISearchMovieProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.search(searchText);
    setSearchText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button>Sök</button>
    </form>
  );
};
