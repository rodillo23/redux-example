import {useDispatch, useSelector} from 'react-redux'
import reactLogo from './assets/react.svg'
import './App.css'
import { increment, decrement } from './store/slices/counter/counterSlice'
import { incrementBy } from './store/slices/counter/counterSlice'

function App() {

  const {value} = useSelector( state => state.counter)
  const dispatch = useDispatch()

  const action = {
    payload: 2
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {value}</h1>
      <div className="card">
        <button onClick={ () => dispatch(increment()) }>
          Increment
        </button>
        <button onClick={ () => dispatch(decrement()) }>
          Decrement
        </button>
        <button onClick={ () => dispatch(incrementBy(2)) }>
          Increment by 2
        </button>
        
      </div>
      
    </div>
  )
}

export default App
