import { FC } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, NotFound } from 'pages'

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
