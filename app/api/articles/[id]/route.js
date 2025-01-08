const axios = require("axios");

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  const id = params.id;

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles/${id}`
    );

    const article = response.data;

    return new Response(JSON.stringify(article), { status: 200 });
  } catch (error) {
    console.error("Error fetching article:", error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
