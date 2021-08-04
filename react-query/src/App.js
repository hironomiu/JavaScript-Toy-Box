import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ComponentA />
          </Route>
          <Route exact path="/component-b">
            <ComponentB />
          </Route>
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
