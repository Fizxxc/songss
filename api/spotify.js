// /api/spotify.js
export default async function handler(req, res) {
  const q = req.query.q || "";
  const accessToken = await getSpotifyAccessToken();
  const apiURL = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(q)}`;

  const searchRes = await fetch(apiURL, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  const data = await searchRes.json();
  res.status(200).json(data);
}

async function getSpotifyAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  });
  const data = await res.json();
  return data.access_token;
}
