import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import 'App.less'

import detail from 'page/Detail'
import main from 'page/Main'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/detail/:id' exact render={detail} />
        <Route path='/' exact render={main} />
      </BrowserRouter>
    </div>
  )
}

export default App;
