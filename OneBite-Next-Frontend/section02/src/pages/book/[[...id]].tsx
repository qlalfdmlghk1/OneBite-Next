import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query; // URL 파라미터 

  return <h1>Book {id}</h1>;
}
