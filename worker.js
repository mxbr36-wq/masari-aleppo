/**
 * Cloudflare Worker — بروكسي مجاني لمساري AI
 * يتجاوز الحجب في سوريا: المتصفح → Cloudflare → Groq
 *
 * التثبيت (مرة واحدة):
 * 1) ادخل https://dash.cloudflare.com وسجّل (مجاني)
 * 2) Workers & Pages → Create → "Create Worker"
 * 3) الصق هذا الكود كاملاً → Deploy
 * 4) Settings → Variables → Add:
 *      GROQ_API_KEY = مفتاحك من Groq
 * 5) انسخ رابط الـ Worker (مثل https://masari-ai.xxxxx.workers.dev)
 * 6) الصقه في chatbot.js مكان WORKER_URL
 */

export default {
  async fetch(request, env) {
    // CORS — يسمح للموقع ينادي الـ Worker من المتصفح
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400'
        }
      });
    }

    if (request.method !== 'POST') {
      return json({ error: 'POST only' }, 405);
    }

    const key = env.GROQ_API_KEY;
    if (!key) {
      return json({ error: 'GROQ_API_KEY not set in Worker secrets' }, 500);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Invalid JSON' }, 400);
    }

    // نمرّر الطلب لـ Groq كما هو (OpenAI-compatible)
    const upstream = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      },
      body: JSON.stringify({
        model: body.model || 'qwen/qwen3.8-27b',
        messages: body.messages || [],
        temperature: body.temperature ?? 0.3,
        max_tokens: body.max_tokens ?? 450
      })
    });

    const text = await upstream.text();
    return new Response(text, {
      status: upstream.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
