import ReactDOM from 'react-dom/client'
import { Provider } from './context/books.jsx'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <App />
  </Provider>
)
