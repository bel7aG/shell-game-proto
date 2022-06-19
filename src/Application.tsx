import { AppProvider } from 'contexts'

import AppRouter from 'app-router'
import Layout from 'layout'

const Application = () => {
  return (
    <AppProvider>
      <Layout>
        <AppRouter />
      </Layout>
    </AppProvider>
  )
}

export default Application
