// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Spinner from './components/spinner'
// import BackButton from './components/backButton';

// const ShowBook = () => {
//     const [book, setBook] = useState({});
//     const [loading, setLoading] = useState(false);
//     const { id } = useParams();
  
//     useEffect(() => {
//       setLoading(true);
//       axios
//         .get(`http://localhost:3000/api/all/${id}`)
//         .then((response) => {
//           setBook(response.data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.log(error);
//           setLoading(false);
//         });
//     }, []);
  
//   return (
//     <div className='P-4'>
//     <BackButton />
//     <h1 className='text-3xl my-4'>Show Book</h1>
//     {loading?(
//         <Spinner /> 
//     ):(
//        <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4'>
//         <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Id</span>
//             <span>{book._id}</span>
//         </div>
//         <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Title</span>
//             <span>{book.title}</span>
//         </div>
//         <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Author</span>
//             <span>{book.author}</span>
//         </div>
//         <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>PublihedYear</span>
//             <span>{book.publishedYear}</span>
//         </div>
//         <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Create Time</span>
//             <span>{new Date(book.createdAt).toString()}</span>
//         </div>
//         <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
//             <span>{new Date(book.updatedAt).toString()}</span>
//         </div>

//        </div>
//     )}
//     </div>
//   )
// }

// export default ShowBook    

                           



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Spinner from './components/spinner';
// import BackButton from './components/backButton';

// const ShowBook = () => {
//   const [book, setBook] = useState({});
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();
  
//   useEffect(() => {
//     async function fetchBook() {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/all/${id}`); // Use /all/:id
//         setBook(response.data);
//       } catch (error) {
//         console.error('Error fetching book:', error);
//       } finally {
//         setLoading(false);
//       }
//     }
    
//     fetchBook();
//   }, [id]);

//   return (
//     <div className='p-4'>
//       <BackButton />
//       <h1 className='text-3xl my-4'>Show Book</h1>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Id</span>
//             <span>{book._id}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Title</span>
//             <span>{book.title}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Author</span>
//             <span>{book.author}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Published Year</span>
//             <span>{book.publishedYear}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Created At</span>
//             <span>{book.createdAt ? new Date(book.createdAt).toString() : 'N/A'}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Last Updated At</span>
//             <span>{book.updatedAt ? new Date(book.updatedAt).toString() : 'N/A'}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShowBook;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from './components/spinner';
import BackButton from './components/backButton';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  
  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(`http://localhost:3000/api/all/${id}`);
        // console.log('response == ', response);
        
        setBook(response.data.book);
      } catch (error) {
        console.error('Error fetching book:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchBook();
  }, [id]);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Published Year</span>
            <span>{book.publishedYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Created At</span>
            <span>{book.createdAt ? new Date(book.createdAt).toString() : 'N/A'}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Updated At</span>
            <span>{book.updatedAt ? new Date(book.updatedAt).toString() : 'N/A'}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;

