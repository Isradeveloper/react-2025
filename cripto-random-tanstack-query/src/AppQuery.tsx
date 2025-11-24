import './App.css';
import { useRandom } from './hooks/useRandom';

function App() {
  const { randomQuery } = useRandom();

  return (
    <>
      {randomQuery.isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <h1 className='text-3xl font-bold underline'>Number: {randomQuery.data}</h1>
      )}

      <div>{randomQuery.error ? <h1>Error: {JSON.stringify(randomQuery.error)}</h1> : ''}</div>

      <button
        disabled={randomQuery.isFetching}
        onClick={() => randomQuery.refetch()}
      >
        New number
      </button>
    </>
  );
}

export default App;
