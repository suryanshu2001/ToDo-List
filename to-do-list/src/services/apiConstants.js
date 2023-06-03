import {API_URL} from '../config/config.js';


export const LOGIN=`http://localhost:8000/api/login`;
export const REGISTER="http://localhost:8000/api/register";
export const CREATE_TODO="http://localhost:8000/api/todo";
export const TODO_LIST="http://localhost:8000/api/list";
export const DELETE_ITEM="http://localhost:8000/api/removeTodo";
console.log(`${API_URL}`);