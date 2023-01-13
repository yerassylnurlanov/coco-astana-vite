import { Provider } from 'react-redux'
import { store } from '../store'

import './App.css'
export const App = ()=> {

  return (
    <Provider store={store}>
        <div>
            hello
        </div>
    </Provider>
  )
}

export default App
