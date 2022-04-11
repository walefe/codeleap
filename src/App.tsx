import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalStyles from './styles/global'
import { Router } from './routes'
import { Layout } from './pages/_layouts'

import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyles />
      </Layout>
    </Provider>
  )
}

export default App
