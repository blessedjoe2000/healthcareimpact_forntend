import axios from "axios";

export const dynamic = "force-dynamic";

export async function GET() {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`;

  try {
    const response = await axios.get(url);
    const articles = response.data;

    return new Response(JSON.stringify(articles), { status: 200 });
  } catch (error) {
    console.error("Error searcing articles");
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
