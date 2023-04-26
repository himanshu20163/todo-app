import './updt.css';
import React, { useContext, useState } from 'react'
import { myfirstcontext } from '../App';

const Update = (props) => {
  const {Alldata,setalladata} = useContext(myfirstcontext);

  const[title,settitle] = useState('');
  const[desc,setdesc] = useState('');

  const gettitle = (e)=>{
    settitle(e.target.value);
  }
  const getdesc = (e)=>{
     setdesc(e.target.value);
  }

  return (
    <div className={{height:"100vh",width:"50vh",backgroundColor:"black",
    }} id="updt">
        {/* {Alldata.filter((ele, id) => id === props.usekey)
        .map((ele)=>{
          return(
            <div>
             {console.log(ele.title)}
              </div>
          )
        })
        }  */}
        <h1>sdhvsgdv</h1>
        {console.log(props.userkey)}
        
    </div>
  )
}

export default Update