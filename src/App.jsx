import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import { store } from './store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  )
}
export default App
