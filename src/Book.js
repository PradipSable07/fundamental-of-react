import React from "react";

const Book = (props) => {
	const { Image, BookName, AuthorName, numbers } = props;
	// const getSingleBook = () => {
	// 	getBook(id);
	// };

	return (
		<article className='book'>
			<span className='productid'>{`#${numbers + 1}`}</span>
			<img src={Image} alt={BookName} />
			<h2>{BookName}</h2>
			<h4>{AuthorName}</h4>
			{/* <button>Buy Now</button> */}
		</article>
	);
};

export default Book;
