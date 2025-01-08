import axios from "axios";

export const dynamic = "force-dynamic";

export async function PUT(req, { params }) {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`;

  try {
    const id = params.id;

    const response = await axios.get(url);
    const articles = response.data;

    const article = articles.find((article) => article.id === parseInt(id));

    if (!article)
      return new Response(JSON.stringify("Article not found"), { status: 404 });

    article.clicks = parseInt(article.clicks) + 1;

    await axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles/${article.id}`,
      article
    );

    return new Response(JSON.stringify(article), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating article click count", error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
