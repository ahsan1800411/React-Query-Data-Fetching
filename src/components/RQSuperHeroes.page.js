import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Success", data);
  };

  const onError = (error) => {
    console.log("Error", error);
  };

  const { isLoading, data, isError, error, refetch, isFetching } = useQuery(
    "super-hero",
    fetchSuperHeroes,
    {
      // refetchOnWindowFocus: false,
      // refetchOnMount: "always",
      // refetchInterval: 2000,
      // refetchIntervalInBackground: true,
      // enabled: false,
      onError,
      onSuccess,
    }
  );
  console.log({ isLoading, isFetching });
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroesPage;
