import { useState } from 'react'
import './App.css'

import SideBar from './components/sidebar/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="app">
      <SideBar/>
      <div>
          <h1>Go React</h1>
          <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
          </button>
          <p>
              Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>

      </div>
    </div>
  )
}

export default App
