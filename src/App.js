import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Add from './Components/Add';
import View from './Components/View';

export const myfirstcontext = createContext();

function App() {

  const viewtask = ()=>{
    console.log(Alldata);
  }
  const [task, settask] = useState();
  const [viewdata, setviewdata] = useState();
  const [Alldata, setalladata] = useState([]);
  return (
    <myfirstcontext.Provider value={{Alldata,setalladata}}>
      <div className="App">
        <div className='Add_task'>
          <h3>Add a new Task</h3>
          <button onClick={() => {
            settask(<Add />)
          }}>Add Task</button>
          {task}

        </div>
        <div className='view_task'>
          <h3>View the task </h3>
          <button onClick={()=>{
            setviewdata(<View />)
          }}>View Task</button>
          {viewdata}
        </div>
      </div>
    </myfirstcontext.Provider>
  );
}

export default App;
