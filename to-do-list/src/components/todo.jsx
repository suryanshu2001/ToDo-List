import React from "react";
import moment from "moment/moment";
import { useState } from "react";
import { deleteTodoListItemApi } from "../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Todo(todo){
    const [Todo_Id, setTodo_Id] = useState("")
    setTodo_Id(todo._id);
    console.log(todo);


    /*const deleteTaskHandler=async(Todo_Id,{setRefreshList}) => {
        const result=await deleteTodoListItemApi(Todo_Id);
        if( result.status === 200 && result.data.status===200){
            toast('Todo Deleted')
            setRefreshList(new Date())
          }
          else{
              toast(result.data.message);
          }
      }*/

    return(
        <div className="card text-white bg-warning mb-3 pad2x" style={{ maxWidth: "20rem" }}>
  <div className="card-header">{todo.isCompleted ? 'completed':'not Completed'}
  <span style={{float:"right"}}><button type="button" class="btn-close" {/*onClick={deleteTaskHandler}*/}>
          <span aria-hidden="true"></span>
        </button>
  </span>
  <span class="form-check form-switch" style={{float:"right"}}>
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
      </span>
      
      </div>
  <div className="card-body">
    <h4 className="card-title">{ todo.todo.desc }</h4>
    <p className="card-text">
     {moment(todo.date).fromNow()}
    </p>
  </div>
</div>
    )
}
export default Todo;