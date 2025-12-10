export default async function handler(req, res) {
  try {
    const zapierUrl = "https://hooks.zapier.com/hooks/catch/25560989/ukzaj3v/";

    const response = await fetch(zapierUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      return res.status(500).json({ error: "Zapier request failed" });
    }

    res.status(200).json({ status: "ok", forwarded: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
