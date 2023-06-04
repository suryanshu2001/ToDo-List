import React from "react";
import moment from "moment/moment";
import { useState } from "react";
import { deleteTodoListItemApi,markTodoListItemApi } from "../../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useContext } from "react";
//import { MyContext } from "../../util/contextApi";

function Todo(todo,{setRefreshList}){
  //const { list , setlist } = useContext(MyContext);
  
 const [TodoId, setTodoId] = useState({
    todo_id: "",
   },);
  
    const deleteTaskHandler=async(id) => {
      console.log("delete id", id);
      setTodoId({ todo_id: id });
      console.log("perf id",JSON.stringify(TodoId))
        const result=await deleteTodoListItemApi(TodoId);
        if( result.status === 200 && result.data.status===200){
            toast('Todo Deleted')
            //setRefreshList(new Date())
            //setlist(new Date())
          }
          else{
              toast(JSON.stringify(result.data.data));
              console.log("id is",TodoId)
          }
      }



      async function markTodoHandler(id) {
        setTodoId({ todo_id: id });
        const result=await markTodoListItemApi(TodoId);
        if( result.status === 200 && result.data.status===200){
            toast('Task completed')
            //setRefreshList(new Date())
            //setlist(new Date())
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
    <>{ todo.todo.isCompleted ? <span class="badge bg-success">Completed</span> : <span class="badge bg-danger">Not Compoleted</span>
       
        }
    
    </>
  <span class="form-check form-switch" style={{float:"right"}}>
  <div style={{float:"right"}}><button type="button" className="btn-close" role="document" onClick={()=>deleteTaskHandler(todo.todo._id)}></button>
  </div>
  <>
  {
                todo.todo.isCompleted ? '':'not Completed'&& (
                  <button type="button" class="btn btn-dark" onClick={()=>markTodoHandler(todo.todo._id)}>Done</button>
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