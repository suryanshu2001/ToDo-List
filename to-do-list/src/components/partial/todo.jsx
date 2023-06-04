import React from "react";
import moment from "moment/moment";
import { useState } from "react";
import { deleteTodoListItemApi } from "../../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Todo(todo,setRefreshList){
  const [TodoId, setTodoId] = useState({
    todo_id: "",
   });
  console.log('this is todo id',JSON.stringify(todo.todo._id))
    const deleteTaskHandler=async(todo) => {

      setTodoId(todo.todo._id);
        const result=await deleteTodoListItemApi(TodoId);
        if( result.status === 200 && result.data.status===200){
            toast('Todo Deleted')
            //setRefreshList(new Date())
          }
          else{
              toast(JSON.stringify(result.data.data));
              console.log("id is",TodoId)
          }
      }

    return(
    <div className="container">
      <ToastContainer/>
        <div className="card text-white bg-warning mb-3 pad2x" style={{ maxWidth: "20rem" }}>
  <div className="card-header">
    <>{ todo.isCompleted ? 'completed'&& (
                      <span class="badge bg-success">{todo.isCompleted ? 'completed':'not Completed'}</span>
                    ):'not Completed'&& (
                      <span class="badge bg-danger">{todo.isCompleted ? 'completed':'not Completed'}</span>
                    ) 
                    
                }
    
    </>
  <span class="form-check form-switch" style={{float:"right"}}>
  <div style={{float:"right"}}><button type="button" className="btn-close" role="document" onClick={deleteTaskHandler}></button>
  </div>
  <>
  {
                todo.isCompleted ? 'completed':'not Completed'&& (
                  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    ) 
                    }
  </>
        
      </span>
      </div>
  <div className="card-body">
    <h4 className="card-title">{ todo.todo.desc }</h4>
    <p className="card-text">
     {moment(todo.todo.date).fromNow()}
    </p>
  </div>
</div>
  </div>
    )
}
export default Todo;