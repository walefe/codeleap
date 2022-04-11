import { Route, Routes } from 'react-router-dom'

import { SignUp } from '../pages/SignUp'
import { Main } from '../pages/Main'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/feed" element={<Main />} />
    </Routes>
  )
}
