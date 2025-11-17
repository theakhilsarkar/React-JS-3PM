import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { store } from './store/store.js';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

)
