export function onRequest({ request }) {
  return new Response(request.headers.get("CF-Connecting-IP") + "\n");
}
