import { useQuery } from '@tanstack/react-query';
import './App.css';

const getCryptoNumber = async (): Promise<number> => {
  const response = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new',
  ).then((res) => res.json());

  return Number(response);
};

function App() {
  const {
    data: number,
    isFetching,
    error,
    refetch,
  } = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getCryptoNumber,
  });

  return (
    <>
      {isFetching ? <h1>Loading...</h1> : <h1 className='text-3xl font-bold underline'>Number: {number}</h1>}

      <div>{error ? <h1>Error: {JSON.stringify(error)}</h1> : ''}</div>

      <button
        disabled={isFetching}
        onClick={() => refetch()}
      >
        New number
      </button>
    </>
  );
}

export default App;
