import { NextResponse } from "next/server";

const WEBHOOK =
  process.env.N8N_WEBHOOK_URL ||
  "https://n8n.appareljunction.com/webhook-test/76dd1e2d-ac62-44d8-b02e-cb2f64703815";

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "Lead endpoint ready. POST JSON here to relay to the n8n webhook.",
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as any));

    // light metadata
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";
    const ua = req.headers.get("user-agent") || "";
    const referer = req.headers.get("referer") || "";

    const forward = await fetch(WEBHOOK, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...body,
        _meta: { ip, ua, referer, at: new Date().toISOString() },
      }),
    });

    const text = await forward.text();
    return NextResponse.json(
      { ok: forward.ok, status: forward.status, webhookResponse: text },
      { status: forward.ok ? 200 : 502 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 }
    );
  }
}

