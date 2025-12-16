export default async function handler(req, res) {
  try {
    const zapierUrl = "https://hooks.zapier.com/hooks/catch/25560989/ukzaj3v/";

    const response = await fetch(zapierUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const text = await response.text();

    if (!response.ok) {
      return res.status(500).json({
        ok: false,
        error: "Zapier request failed",
        status: response.status,
        zapierResponse: text
      });
    }

    return res.status(200).json({
      ok: true,
      forwarded: true,
      zapierResponse: text
    });

  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: err.message
    });
  }
}
