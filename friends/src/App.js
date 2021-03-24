import React from 'react'
import {Switch, Route} from 'react-router-dom'

// Pages
import Home from './components/Home'
import Friends from './components/Friends'

const App = () => {
  return (
    <div>
      <Switch>

        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/friends'>
          <Friends/>
        </Route>

      </Switch>
    </div>
  )
}

export default App
