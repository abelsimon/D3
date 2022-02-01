import React from 'react'
import './App.scss'

import BasicAreaChart from './BasicAreaChart/BasicAreaChart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {}
         <BasicAreaChart top={10} right={50} bottom={50} left={50} width={1000} height={400} fill="tomato" />
      </header>
    </div>
  )
}

export default App
