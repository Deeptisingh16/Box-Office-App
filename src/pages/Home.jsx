// import { Link } from 'react-router-dom';
import { searchForShows } from '../api/tvmaze';
import { useState } from 'react';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();

    try {
      setApiDataError(null);

      const result = await searchForShows(searchStr);
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
    // const response = await fetch(
    //   `https://api.tvmaze.com/search/shows?q=${searchStr}`
    // );
    // const body = await response.json();

    // https://api.tvmaze.com/search/shows?q=girls
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured: {apiDataError.message}</div>;
    }
    if (apiData) {
      return apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }
    return null;
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          value={searchStr}
          onChange={onSearchInputChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
      {/* <Link to="/starred">GO TO STARRED PAGE </Link> */}
    </div>
  );
};

export default Home;
