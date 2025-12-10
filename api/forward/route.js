export async function POST(request) {
  const zapierUrl = "https://hooks.zapier.com/hooks/catch/25560989/ukzaj3v/";
  const body = await request.json();

  const zapResp = await fetch(zapierUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!zapResp.ok) {
    return new Response(JSON.stringify({ error: "Zapier request failed" }), { status: 500 });
  }

  return new Response(JSON.stringify({ status: "ok" }), { status: 200 });
}
