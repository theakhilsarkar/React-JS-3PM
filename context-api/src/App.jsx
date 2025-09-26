
import './App.css'
import CounterProvider from '../src/context/CounterProvider'
import Counter from './components/Counter';

function App() {
  return (
    <>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </>
  )
}

export default App;


/*

component -> props
c-a --> c-b --> c-c --> c-d

prop drilling - unnecessary prop passing from one component to another

state management system

1. useState --> setCount - traditional - simple web app
2. useContext --> its create commone store of state, and provide all component - mid level
3. redux toolkit --> scalable app
its create a comon store of state, and provide all component to access
its also contain all logic to manage that state

logic + ui

src
 pages/screens/views
  home
    home.jsx
    home.css
  components
    small parts of ui
 context
   CounterContext.jsx
   EcommerceContext.jsx
   LibraryContext.jsx

*/














