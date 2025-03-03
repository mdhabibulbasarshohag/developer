import { useQuery } from "@tanstack/react-query";
import { usePublic } from "../../Api/usePublic";
import { SubTitle } from "../../toots/common/SubTitle";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

const Books = () => {
    const [readMore, setReadMore] = useState(false);
    const api = usePublic();

    const { data: books, isError, isLoading } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const rsc = await api.get('books');
            return rsc.data;
        }
    });

    if (isError) {
        return <p className="text-red-500">Failed to load books. Please try again.</p>;
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const booksData = books?.data?.data ?? [];

    console.log(booksData);

    Aos.init({
        duration: 1000,
    });

    return (
        <div>

            <div>
                <SubTitle>Books {booksData.length}</SubTitle>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4">
                {booksData.map((book) => (
                    <div data-aos="fade-left" className="p-4 border rounded-lg shadow-md" key={book.id}>

                        <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="book image" />

                        <SubTitle>{book?.volumeInfo?.title}</SubTitle>
                        {/* <h2 className="text-lg font-semibold"></h2> */}

                        <p className={`${readMore === book.id ? 'line-clamp-0' : 'line-clamp-3'}`}>{book?.volumeInfo?.description} </p>
                        <button onClick={() => setReadMore(book.id)} className="text-blue-500 underline">Read More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;



// import { useQuery } from "@tanstack/react-query";
// import { usePublic } from "../../Api/usePublic";
// import { SubTitle } from "../../toots/common/SubTitle";
// import { toast } from "react-toastify";
// import { ToastMessage } from "../../components/ToastMessage";
// import { useEffect } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { SubTitle } from './../../toots/common/SubTitle';

// const BookCard = ({ book }) => {
//     const { volumeInfo } = book;

//     return (
//         <div data-aos="fade-left" className="p-4 border rounded-lg shadow-md">
//             <img
//                 src={volumeInfo?.imageLinks?.thumbnail || "/placeholder.jpg"}
//                 alt={volumeInfo?.title || "Book Cover"}
//                 className="w-32 h-48 object-cover"
//             />
//             <h2 className="text-lg font-semibold">{volumeInfo?.title}</h2>
//             <p className="text-sm">{volumeInfo?.description || "No description available."}</p>
//             {volumeInfo?.infoLink && (
//                 <a
//                     href={volumeInfo.infoLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 underline"
//                 >
//                     Read More
//                 </a>
//             )}
//         </div>
//     );
// };

// const Books = () => {
//     const api = usePublic();

//     const { data: books, isError, isLoading } = useQuery({
//         queryKey: ["books"],
//         queryFn: async () => {
//             const response = await api.get("books");
//             return response.data;
//         },
//     });

//     const booksData = books?.data?.data ?? [];

//     useEffect(() => {
//         if (books?.message) {
//             toast.success(books.message);
//         }
//     }, [books]);

//     useEffect(() => {
//         Aos.init();
//     }, []);

//     if (isError) {
//         return <p className="text-red-500">Failed to load books. Please try again.</p>;
//     }

//     if (isLoading) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div>
//             <SubTitle className="text-blue-400">Books</SubTitle>
//             <div>
//                 {booksData.length > 0 ? (
//                     booksData.map((book) => <BookCard key={book.id} book={book} />)
//                 ) : (
//                     <p className="text-gray-500">No books available.</p>
//                 )}
//             </div>
//             <ToastMessage />
//         </div>
//     );
// };

// export default Books;
