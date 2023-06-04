/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect ,useState} from 'react';
import Todo from './todo';
import Headers from './header';
import AddTodoModal from './addTodoModal';
import { useNavigate } from 'react-router-dom';
import { getTodoListApi, getToken } from '../../services/api.js';
import { deleteTodoListItemApi } from '../../services/api.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useContext } from 'react';
//import { MyContext } from '../../util/contextApi';

function Home() {
    const navigation= useNavigate()
    const [List, setList] = useState([]);
    const [RefreshList, setRefreshList] = useState();
    //const { list , setlist } = useContext(MyContext);
    const [TodoId, setTodoId] = useState({
      todo_id: "",
     });
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


        const [currentPage, setcurrentPage] = useState(1)
        const recordsPerPage=4;
        const lastIndex= currentPage * recordsPerPage;
        const firstIndex=lastIndex - recordsPerPage;
        const records=List.slice(firstIndex, lastIndex);
        const nPages=Math.ceil(List.length/recordsPerPage);
        const numbers=[...Array(nPages+1).keys()].slice(1)
        function prePage(){

        }
        function nextPage(){

        }
        function changeCPage(){
          
        }

  
    
  return <>
  <Headers/>
<div className='container'>
        <div className="col justify-content-md-center mt-4">

         {/* <nav>
            <ul className='paggination'>
                <li className='pageItem'>
                   <a href='#' className='page-link' onClick={prePage}>
                        prev
                   </a>
                </li>
                {
                  numbers.map((n,i)=>{
                    <li className={`page-item ${currentPage===n?'active':''}`}key={i}>
                      <a href="#" className='page-item' onClick={()=>changeCPage(n)}>{n}</a>
                    </li>
                  })
                }
                <li className='page-item'>
                  <a href='#' className='page-link' onClick={nextPage}>Next</a>
                </li>
            </ul>
              </nav>*/}
        {
                List.map((todo,index)=>(<Todo todo={todo} setRefreshList={setRefreshList}/>))
                
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