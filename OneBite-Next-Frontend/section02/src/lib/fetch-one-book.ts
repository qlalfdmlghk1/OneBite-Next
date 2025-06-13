import { BookData } from "@/types";

export default async function fetchOneBook(id: number): Promise<BookData | null> {
  const url = `http://localhost:12345/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch book:", error);
    return null;
  }
}
