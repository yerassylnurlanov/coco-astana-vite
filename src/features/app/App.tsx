import { Provider } from 'react-redux'
import { store } from '../store'
import { Header } from '@features/header'

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
