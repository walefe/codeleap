import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from './styles/global'
import { Router } from './routes'
import { Layout } from './pages/_layouts'

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </Layout>
  )
}

export default App
