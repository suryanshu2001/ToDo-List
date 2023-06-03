import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTodoApi } from "../../services/api";

function AddTodoModal({setRefreshList}){
    const [TodoDesc, setTodoDesc] = useState("")
    const [errors, seterrors] = useState(null);
    const handleTodoSubmit=async()=>{
        seterrors(null);
        console.log("TodoDesc",TodoDesc)
        if(TodoDesc===''){
            toast('Todo is required')
            return;
        }

        const result=await createTodoApi({desc:TodoDesc})

        if( result.status === 200 && result.data.status===200){
              toast('Todo Added')
              setRefreshList(new Date())
              setTodoDesc(null)
                  return;
            }
            else{
                toast(result.data.message);
            }
        }

        

    return (<>
        <div class="modal" id='exampleModal'>
        <ToastContainer/>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add Todo</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div class="modal-body">
        <div className="form-group">
            <textarea name="" 
            className="form-control" 
            rows={3} 
            onChange={(e)=>{setTodoDesc(e.target.value)}}
            placeholder="Write Todo.....">

            </textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" onClick={handleTodoSubmit} data-bs-dismiss="modal">Save changes</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{setTodoDesc('')}}>Close</button>
      </div>
    </div>
  </div>
</div>
</>
    )
}
export default AddTodoModal;