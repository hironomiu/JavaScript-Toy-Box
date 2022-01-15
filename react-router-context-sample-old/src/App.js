import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StateProvider } from './context/StateProvider'
import Root from './components/Root'
import ComponentA from './components/ComponentA'
import ShowComponent from './components/ShowComponent'
import Layout from './components/Layout'
import Login from './components/Login'
import Sample from './components/Sample'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <StateProvider>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/sample">
              <Sample />
            </Route>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <Root />
                </Route>
                <Route exact path="/component-a">
                  <ComponentA />
                </Route>
                <Route path="/component-a/:id">
                  <ShowComponent />
                </Route>
              </Switch>
            </Layout>
          </Switch>
        </StateProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
