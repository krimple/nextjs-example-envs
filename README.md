# API calls demo

This is a sample that shows how to access an API
from a next.js client, and how to configure the
client to access its server.

Place the following in `.env.local` in the root of
this project:
```
# for the external API
TOKEN=foobarbazzington
API_ROUTE=https://endpoint.foo

# for vercel deployment, this would be filled in
# for local dev, we overwrite it with the local version
VERCEL_URL=http://localhost:3000
```