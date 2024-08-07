// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Spinner from './components/spinner'
// import { Link } from 'react-router-dom'
// import { AiOutlineEdit } from 'react-icons/ai'
// import { BsInfoCircle } from 'react-icons/bs'
// import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

// const Home = () => {
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(false);
//     useEffect(() => {
//         setLoading(true);
//         async function fetchData() {
//             try{
//                 const response = await axios.get("http://localhost:3000/api/all");
//                 setBooks(response.data.book);
//                 setLoading(false);
//                 console.log("log1");
//             }catch(error){
//                 console.log(error);
//                 setLoading(false);
//             }

//           }
//           fetchData();
//           console.log("log2")

//     }, []);
//     return (
//         <div className='p-4'>
//             <div className='flex justify-between item.center'>
//                 <h1 className='text-3xl my-8'>Book List</h1>
//                 <Link to='/books/create'>
//                     <MdOutlineAddBox className='text-sky-800 text-4xl' />
//                 </Link>
//             </div>
//             {loading ? (
//                 <Spinner />
//             ) : (
//                 <table className='w-full border-seperate border-spacing-2'>
//                     <thead>
//                         <tr>
//                             <th className='border border-slate-600 rounded-md'>No</th>
//                             <th className='border border-slate-600 rounded-md'>title</th>
//                             <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
//                             <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
//                             <th className='border border-slate-600 rounded-md '>Operations</th>
//                         </tr>
//                     </thead>
//                     {

//                         (books && books.length) ? <tbody>
//                             {
//                                   books.map((book, index) => {
//                                     <tr key={book._id} className='h-8'>
//                                         <td className='border border-slate-700 ronded-md text-center'>
//                                             {index + 1}
//                                         </td>
//                                         <td className='border border-slate-700 ronded-md text-center'>
//                                             {book.title}
//                                         </td>
//                                         <td className='border border-slate-700 ronded-md text-center max-md-hidden'>
//                                             {book.author}
//                                         </td>
//                                         <td className='border border-slate-700 ronded-md text-center max-md-hidden'>
//                                             {book.publishYear}
//                                         </td>
//                                         <td className='border border-slate-700 ronded-md text-center'>
//                                             <div className='flex justify-center gap-x-4'>
//                                                 <Link to={`/books/details/${book._id}`}>
//                                                     <BsInfoCircle className='text-2xl text-green-800' />
//                                                 </Link>
//                                                 <Link to={`/books/edit/${book._id}`}>
//                                                     <BsInfoCircle className='text-2xl text-yellow-600' />
//                                                 </Link>
//                                                 <Link to={`/books/delete/${book._id}`}>
//                                                     <BsInfoCircle className='text-2xl text-red-600' />
//                                                 </Link>
//                                             </div>
//                                         </td>
//                                     </tr>

//                                 })
//                             }
//                         </tbody> :<tbody></tbody>
//                     }
//                     <tbody>

//                     </tbody>

//                 </table>
//             )} 
//         </div>
//     )
// }

// export default Home





// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Spinner from './components/spinner'
// import { Link } from 'react-router-dom'
// import { AiOutlineEdit } from 'react-icons/ai'
// import { BsInfoCircle } from 'react-icons/bs'
// import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

// const Home = () => {
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(true); // Start with loading as true

//     useEffect(() => {
//         axios
//             .get("http://localhost:3000/books")
//             .then((response) => {
//                 setBooks(response.data.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setLoading(false);
//             })
//     }, []);

//     return (
//         <div className='p-4'>
//             <div className='flex justify-between items-center'>
//                 <h1 className='text-3xl my-8'>Book List</h1>
//                 <Link to='/books/create'>
//                     <MdOutlineAddBox className='text-sky-800 text-4xl' />
//                 </Link>
//             </div>
//             {loading ? (
//                 <Spinner />
//             ) : (
//                 <table className='w-full border-separate border-spacing-2'>
//                     <thead>
//                         <tr>
//                             <th className='border border-slate-600 rounded-md'>No</th>
//                             <th className='border border-slate-600 rounded-md'>Title</th>
//                             <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
//                             <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
//                             <th className='border border-slate-600 rounded-md'>Operations</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {books.map((book, index) => (
//                             <tr key={book._id} className='h-8'>
//                                 <td className='border border-slate-700 rounded-md text-center'>
//                                     {index + 1}
//                                 </td>
//                                 <td className='border border-slate-700 rounded-md text-center'>
//                                     {book.title}
//                                 </td>
//                                 <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
//                                     {book.author}
//                                 </td>
//                                 <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
//                                     {book.publishYear}
//                                 </td>
//                                 <td className='border border-slate-700 rounded-md text-center'>
//                                     <div className='flex justify-center gap-x-4'>
//                                         <Link to={`/books/details/${book._id}`}>
//                                             <BsInfoCircle className='text-2xl text-green-800' />
//                                         </Link>
//                                         <Link to={`/books/edit/${book._id}`}>
//                                             <AiOutlineEdit className='text-2xl text-yellow-800' />
//                                         </Link>
//                                         <Link to={`/books/delete/${book._id}`}>
//                                             <MdOutlineDelete className='text-2xl text-red-800' />
//                                         </Link>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     )
// }

// export default home





import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './components/spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import BooksTable from './components/home/BooksTable'
import BookCard from './components/home/BookCard'

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:3000/api/all");
                setBooks(response.data.book);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='p-4'>
            <div className='flex justify-center item-center gap-x-4'>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('table')}>
                    Table
                </button>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('Card')}>
                    card
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Book List</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            {loading ?  <Spinner />: showType === 'table' ? (<BooksTable books={books} />):(<BookCard books={books}/>)}
        </div>
    );
};

export default Home
