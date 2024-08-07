import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './home'
import CreateBook from './CreateBook'
import ShowBook from './ShowBook'
import EditBook from './editBook'
import DeleteBook from './deleteBook'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books/Create' element={<CreateBook/>}/>
    <Route path='/books/details/:id' element={<ShowBook/>}/>
    <Route path='/books/edit/:id' element={<EditBook/>}/>
    <Route path='/books/delete/:id' element={<DeleteBook/>}/>
   </Routes>
  )
}

export default App