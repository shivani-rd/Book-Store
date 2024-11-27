import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import BookCreate from './pages/BookCreate'
import BookCreateImg from './pages/BookCreateImg'
import BookList from './pages/BookList'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import BookEdit from './pages/BookEdit'
import Sidebarmenu from './Sidebarmenu'
import ViewBook from './pages/ViewBook'
function App() {
  return (
    <BrowserRouter>
    <Sidebarmenu>
    <Routes>
      <Route path='/' element={ <Login></Login>}></Route>
      <Route path='/dashboard' element={ <Dashboard></Dashboard>}></Route>
      {/* <Route path='/add/book' element={ <BookCreate></BookCreate>}></Route> */}
      <Route path='/add/book' element={ <BookCreateImg></BookCreateImg>}></Route>
      <Route path='/books' element={ <BookList></BookList>}></Route>
      <Route path='/edit/book/:id' element={ <BookEdit></BookEdit>}></Route>
      <Route path='/view/book/:id' element={ <ViewBook></ViewBook>}></Route>
    </Routes>
    </Sidebarmenu>
    </BrowserRouter>
  )
}

export default App
