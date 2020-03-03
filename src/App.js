import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import 'App.less'

import detail from 'page/Detail'
import main from 'page/Main'
import pagination from 'page/Pagination'
import ShoppingList from 'page/demo'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/'  exact render={main} />
        <Route path='/detail'  exact render={detail} />
        <Route path='/pagination'  exact render={pagination} />
        <Route path='/demo'  exact component={ShoppingList} />
      </BrowserRouter>
    </div>
  )
}

export default App;
