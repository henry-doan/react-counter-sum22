import Counter from './components/counter/Counter';

const App = () => (
  <>
    <h1>Counter App</h1>
    <Counter color='blue' age={5} />
    <Counter color='pink' />
    <Counter color='green' />
    <Counter color='black' />
    <Counter color='purple' />
  </>
)

export default App;
