import styles from "../../styles/home.module.css";

interface BookListItem {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

interface BookListResponse {
  results: BookListItem[];
  num_results: number;
  status: string;
  copyright: string;
}

import { getBookList } from "../../api";
import Link from "next/link";

export default async function Home() {
  const bookList: BookListResponse = await getBookList();

  return (
    <div>
      <div className={styles.title}>
        THE NEW YORK TIMES BEST SELLER EXPLORER
      </div>
      <div className={styles.cardContainer}>
        {bookList.results.map((book) => (
          <div key={book.list_name_encoded} className={styles.card}>
            <Link
              href={`/list/${book.list_name_encoded}`}
            >{`${book.display_name} →`}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
