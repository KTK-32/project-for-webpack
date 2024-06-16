import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Field } from './object'
import { VisualizeEntity } from './functions.tsx'
import { Block_T } from "./object";

function App() {
  const [count, setCount] = useState(0)
  let fld = new Field
  let Vslfld = VisualizeEntity(fld.entity)


  return (
    <>
      <div style={{whiteSpace: 'pre-line'}} className="game">{Vslfld}</div>
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
    </>
  )
}

export default App
