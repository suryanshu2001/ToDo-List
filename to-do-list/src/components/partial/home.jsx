/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect ,useState} from 'react';
import Todo from './todo';
import Headers from './header';
import AddTodoModal from './addTodoModal';
import { useNavigate } from 'react-router-dom';
import { getTodoListApi, getToken } from '../../services/api.js';


function Home() {
    const navigation= useNavigate()
    const [List, setList] = useState([]);
    const [RefreshList, setRefreshList] = useState();
    useEffect(() => {
      if(!getToken()){
        navigation('/Login')
      }
      fetchTodoList()
    }, [RefreshList])

    async function fetchTodoList() {
        const result = await getTodoListApi()
        if(result.status === 200 && result.data.status===200){
            setList(result.data.data.todos)
            console.log(result)
          }

    }
    
  return <>
  <Headers/>
<div className='container'>
        <div className="col justify-content-md-center mt-4">
            {
                List.map((todo)=><Todo todo={todo} key={todo._id} setRefreshList={setRefreshList}/>)
                
            }

        </div>
</div>
<div style={{position:"fixed",right:50 ,bottom:50,zIndex:1030}}>
        <button 
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        className='btn btn-outline-dark'>
            Add
        </button>
        </div>
        <AddTodoModal setRefreshList={setRefreshList}/>
</>
}

export default Home;