import React, { useState } from 'react'

import './addtask.css';
import Viewtask from './View';
import { useContext } from 'react';
import { myfirstcontext } from '../App';

const Add = () => {

const {Alldata,setalladata} = useContext(myfirstcontext);
// console.log(ans);
  
  const[title,settitle] = useState('');
  const[desc,setdesc] = useState('');
  const[data,setdata] = useState([]);

  const get_title = (e)=>{
    settitle(e.target.value);
  }
  const get_desc = (e)=>{
     setdesc(e.target.value);
  }

  const fill_data = ()=>{
     const ans = {title,desc,iseditmode:false};
     setalladata([...Alldata,ans]);
     alert("Your task add is sucessfully ");
  }
  return (
    <div className='box' >
       <input type="text" placeholder='Enter your title ' onChange={get_title}></input>
       <input type='text' placeholder='Enter your Description' onChange={get_desc}></input>
       {/* {console.log(title,desc)} */}
       {/* {console.log(data)} */}
       <button id="btn_sub" onClick={fill_data}>Submit</button>
       {/* {ans.val} */}
       {console.log(Alldata)}
    </div>
  )
}

export default Add;