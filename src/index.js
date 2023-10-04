import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const books = [
	{
		BookName: "Atomic Habits",
		AuthorName: "James Clear",
		Image:
			"https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY545_FMwebp_QL65_.jpg",
		id: 1,
	},
	{
		BookName: "The Midnight Library",
		AuthorName: "Matt Haig",
		Image:
			"https://m.media-amazon.com/images/I/61QX1kV+MEL._AC_UY545_FMwebp_QL65_.jpg",
		id: 2,
	},
	{
		BookName: "How to Win Friends and Influence People",
		AuthorName: " Dale Carnegie ",
		Image:
			"https://m.media-amazon.com/images/I/618XGVFYlwL._AC_UY545_FMwebp_QL65_.jpg",
		id: 3,
	},
];
const BookList = () => {
	return (
		<section className='booklist'>
			{books.map((book) => {
				return <Book {...book} key={book.id} />;
			})}
		</section>
	);
};

const Book = (props) => {
	const { Image, BookName, AuthorName } = props;
	return (
		<article className='book'>
			<img src={Image} alt={BookName} />
			<h2>{BookName}</h2>
			<h4>{AuthorName}</h4>
		</article>
	);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

// handle event in react js
