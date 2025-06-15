import { BookData } from "@/types";

export default async function fetchRandomBooks(): Promise<BookData[]> {
  const url = `https://onebite-books-server-main-plum-five.vercel.app/book/random`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch random books");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching random books:", error);
    return [];
  }
}
