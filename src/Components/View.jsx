import React, { useContext, useState } from 'react'
import { myfirstcontext } from '../App';
import Update from './Update';
import './view.css'

const View = () => {
  const {Alldata,setalladata} = useContext(myfirstcontext);
  const [update,setupdate] = useState([]);

  const delete_box = (e)=>{
    let ans = Alldata.filter((ele, id) => {
      return  id != e  ;
    })
    // console.log(ans);
    setalladata(ans);
    console.log(Alldata);
  }

  const update_data = (e)=>{
    console.log(e);
    let res = Alldata[e];
    console.log(res);
    // let get_title = document.getElementById("inpt_tile").disabled = false;
    // Alldata.forEach((element, index) => {
    //   if(element === e) {
    //     Alldata[index] = element;
    //   }
    //   });
    alert("Your data is updated");
  }

  const gettitle = (e) =>{

    console.log(e.target.id);
    console.log(e.target.value);
    Alldata[e.target.id]['title'] = e.target.value;
    // document.getElementById(e.target.id).value=e.target.value;
    // Alldata[e.target.id][title]=e.target.value;
   
  }

  const getdesc = (e) =>{
    console.log(e.target.id);
    var i=e.target.id.substring(3);
    // dec  57686

    console.log(i);
    Alldata[i]['desc'] = e.target.value;
    // document.getElementById(e.target.id).value=e.target.value;
  }
  
  const markdata = (e)=>{
    //console.log(e.target.id);
    var i=e.target.id.substring(4);
    //console.log(i);
    let box = document.getElementById(`box${i}`).style.backgroundColor = "green";
    alert("task is completed");
    console.log(box);
  }

  return (

    <div>
      {console.log(Alldata)}
      {Alldata.map((e,i)=>{
      return (
      <div>
        <div className="view_box" key={i} id={`box${i}`}>
        <input type='checkbox' id={`mark${i}`} onClick={markdata} checked="checked"></input>
        <input type='text' readOnly={false} id={i} style={{border:"none",width:"120px"}} defaultValue={e.title} onChange={gettitle}/>
        <input type='text' readOnly={false} id={`dec${i}`} style={{border:"none",width:"120px"}} defaultValue={e.desc} onChange={getdesc}/>
        <input type='button' id="btn_updt" value='Update' onClick={ ()=> update_data(i) } />
          {update}    
        <input type='button' id="btn_del" value="Delete" onClick={ () => delete_box(i) }/>
        </div>
      </div>)
    })}
    {/* <p>himanshu</p> */}
    </div>
  )
}

export default View