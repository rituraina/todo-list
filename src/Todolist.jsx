import React from 'react';
const Todolist =(props) =>{

    return ( 
        <>
        <div className="todo_style">
        <li>{ props.text}</li>
        <i
         className  ="fa todo fa-times" 
         aria-hidden="true"
         onClick={()=>{
            props.onSelect(props.id);
         }}
       />
         
        </div>
    </>
    );
};
export default Todolist;
