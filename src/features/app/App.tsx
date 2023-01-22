import { Provider } from 'react-redux'
import { Header } from '../header'
import { store } from '../store'

import './App.css'
export const App = ()=> {

  return (
    <Provider store={store}>
        <div>
            <Header />
        </div>
    </Provider>
  )
}

export default App
