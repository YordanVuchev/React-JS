import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  //router.query.newsId;
  return <h1>Detail page</h1>;
}

export default DetailPage;
