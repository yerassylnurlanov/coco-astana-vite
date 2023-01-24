import { Provider } from 'react-redux'
import { MainPage } from '@/pages/main'
import { Header } from '../header'
import { store } from '../store'

import './App.css'
export const App = ()=> {

  return (
    <Provider store={store}>
        <div>
            <Header />
            <MainPage />
        </div>
    </Provider>
  )
}

export default App
