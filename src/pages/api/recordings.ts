export const prerender = false;

export async function POST(context: {
    request: Request; locals: { runtime: { env: Env; }; }; 
}) {
    const { env } = context.locals.runtime;
    const payload: {audio: string} = await context.request.json();
    // @ts-ignore - There is a problem with the AI types atm
    const results = await env.AI.run("@cf/openai/whisper-large-v3-turbo", {
        audio: payload.audio
    });
    return Response.json(results);
}