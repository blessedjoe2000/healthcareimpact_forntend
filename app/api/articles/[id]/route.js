const axios = require("axios");

export const dynamic = "force-dynamic";

async function GET(request, { params }) {
  const id = params.id;

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles/${id}`
    );

    return {
      json: () => response.data,
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    return {
      json: () => ({ message: "Error fetching article" }),
      status: 500,
    };
  }
}

module.exports = { GET };
