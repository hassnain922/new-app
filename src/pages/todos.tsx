  import { useState, useEffect } from "react"
  import DisplayTodo from "../components/Todo/DisplayTodo"
  import useSWR from 'swr'

//  interface TodoObject {
//     completed: boolean;
//     title: string;
//     userId: number;
//     id: number;
//  }

  const fetcher = (url: string):any => fetch(url).then(r => r.json())


 const Todos = () => {
     const [todos, setTodos] = useState<any[]>([])
     const [todo, setTodo] = useState<string>('')
     const {data, isLoading,error} = useSWR ('https://jsonplaceholder.typicode.com/todos', fetcher)

     console.log('error',error)
     console.log('isLoading',isLoading)
     console.log('data',data)

    //  

     useEffect(() =>{
        if(!isLoading && data?.length){
                setTodos([...data])
             }else{
                setTodos([])

             }

     
        // callApi()
     }, [data])

    //  const callApi = () => {
      
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //        .then(response=> response.json())
    //        .then(json => setTodos([...json]))
    //  }

     const addTodo = () =>{
        // console.log('todo',todo)
        
       let obj: object = {
         completed: false,
         title: todo,
         userId: 1,
         id: todos?.length + 1

       }

        todos.push(todo)
        setTodos([... todos])   //object & array safe refference
        setTodo('')
     }
   
     return (
        <>
        <h1>Todo</h1>
        <input
              placeholder="Input Task" 
              onChange={(e)=> setTodo(e?.target ?.value)}
              value={todo}
         />&nbsp;
        <button onClick={addTodo}>Add Todo</button>
        <br />
        <br />
        <br />
        <ol>
        {todos?.map((v,i)=>{
            return (
                <DisplayTodo todo={v} key={i}/>
            )
          })}
         </ol>
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
        </>
    )
}

export default Todos