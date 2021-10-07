import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes1");
};

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery(
    "super-hero",
    fetchSuperHeroes
  );
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data?.data.map((hero) => {
        return <div>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroesPage;
