export default {
    async fetch(request: Request): Promise<Response> {
        // 1. Ensure it's a POST request from Sanity
        if (request.method !== 'POST') {
            return new Response('Method Not Allowed', { status: 405 });
        }

        // 2. Array of your 6 Cloudflare Pages Deploy Hooks
        const deployHooks = [
            "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/d95aedd5-a075-4e58-86f4-f20bed55a8b2",
            "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/7d181047-b0bf-4c61-9ac5-b501f61f6497",
            "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/e33ed55d-32e0-461a-ac43-3284c80276e0",
            "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/60468066-97da-4767-900e-1db2001bf020",
            "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/c33b8065-50c5-4e77-b672-6e13e5e24f0c",
            "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/d70811a7-e26e-4eee-80de-fb1d892a1cda"
        ];

        try {
            // Optional: Parse the Sanity payload if you want to implement smart routing later
            // const payload = await request.json();

            // 3. Fire all hooks concurrently so you don't block the response
            const triggerRequests = deployHooks.map(hookUrl =>
                fetch(hookUrl, { method: 'POST' })
            );

            await Promise.all(triggerRequests);

            return new Response('All deploy hooks fired successfully', { status: 200 });
        } catch (error) {
            return new Response('Failed to trigger webhooks', { status: 500 });
        }
    },
};