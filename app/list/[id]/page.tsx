import { getBookListByName } from "../../../api";

interface Book {}

interface BookDetailResponse {}

interface DetailPageProps {
  params: {
    id: string;
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const bookListDetail: BookDetailResponse = await getBookListByName(params.id);

  console.log(bookListDetail);

  return <div>test</div>;
}
