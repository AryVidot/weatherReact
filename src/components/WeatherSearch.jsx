import React from "react";

const WeatherSearch = (props) => {
  // const [query, setQuery] = useState("")

  return (
    <div className="search-ctnr">
      <form className="search-box" onSubmit={props.api_call} method="post">
        <input
          name="location"
          type="text"
          className="search-bar"
          autoComplete="off"
          // required
          placeholder="Search City..."
          // onChange={(e) => setQuery(e.target.value)}
          // value={query}
          //   onKeyPress={search}
        />
        <button type="submit">GO</button>
      </form>
    </div>
  );
};

export default WeatherSearch;
