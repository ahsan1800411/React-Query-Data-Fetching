import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "super-hero",
    fetchSuperHeroes,
    {
      staleTime: 30000,
    }
  );
  console.log({ isLoading, isFetching });
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
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroesPage;
