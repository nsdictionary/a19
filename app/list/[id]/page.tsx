import { getBookListByName } from "../../../api";
import styles from "../../../styles/bookList.module.css";

interface Book {
  title: string;
  author: string;
  description: string;
  book_image: string;
  amazon_product_url: string;
}

interface BookListItem {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
  books: Book[];
}

interface BookDetailResponse {
  copyright: string;
  num_results: number;
  results: BookListItem;
}
type Params = Promise<{ id: string }>;

export default async function DetailPage(props: { params: Params }) {
  const params = await props.params;
  const decodedId = decodeURIComponent(params.id);
  const bookListDetail: BookDetailResponse = await getBookListByName(decodedId);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{decodedId}</h1>
      <div className={styles.grid}>
        {bookListDetail.results.books.map((book, index) => (
          <div key={`${book.title}-${index}`} className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={book.book_image}
                alt={book.title}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h2 className={styles.bookTitle}>{book.title}</h2>
              <p className={styles.author}>{book.author}</p>
              <p className={styles.description}>{book.description}</p>
              <a
                href={book.amazon_product_url}
                target="_blank"
                className={styles.button}
              >
                Buy now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
