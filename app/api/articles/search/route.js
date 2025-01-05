import axios from "axios";

export async function GET(req) {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`;

  try {
    const response = await axios.get(url);
    const articles = response.data;

    const { searchParams } = new URL(req.url);

    let searchQuery = searchParams.get("query");
    searchQuery = searchQuery.toLowerCase();

    if (!searchQuery) {
      return new Response(JSON.stringify([]), { status: 200 });
    }

    searchQuery = searchQuery.toLowerCase();

    const searchedArticles = articles?.filter((article) => {
      return (
        article?.title.toLowerCase().includes(searchQuery) ||
        article?.mainContent.toLowerCase().includes(searchQuery)
      );
    });

    return new Response(JSON.stringify(searchedArticles), { status: 200 });
  } catch (error) {
    console.error("Error searcing articles", error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
