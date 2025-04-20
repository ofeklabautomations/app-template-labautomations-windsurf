import { serve } from "bun";

// --- Types ---
type Event = {
  api_id: string;
  name: string;
  start_at: string;
  cover_url: string;
  url: string;
};

type EventData = {
  api_id: string;
  event: Event;
};

type LumaApiResponse = {
  entries: EventData[];
};

const LUMA_API_KEY = process.env.LUMA_API_KEY;

async function getEvents(): Promise<EventData[]> {
  if (!LUMA_API_KEY) {
    throw new Error("LUMA_API_KEY environment variable is not set");
  }
  const res = await fetch("https://api.lu.ma/public/v1/calendar/list-events", {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-luma-api-key": LUMA_API_KEY,
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }
  const data = await res.json() as LumaApiResponse;
  return data.entries;
}

async function getUsers(eventApiId: string): Promise<object[]> {
  if (!LUMA_API_KEY) {
    throw new Error("LUMA_API_KEY environment variable is not set");
  }
  const query = new URLSearchParams({
    event_api_id: eventApiId,
    approval_status: "approved",
  });
  let hasMore = true;
  let nextCursor: string | null = null;
  const entries: object[] = [];
  while (hasMore) {
    const res = await fetch(
      `https://api.lu.ma/public/v1/event/get-guests?${query.toString()}${nextCursor ? `&pagination_cursor=${nextCursor}` : ""}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-luma-api-key": LUMA_API_KEY,
        },
      }
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }
    const data = await res.json() as { entries: object[]; has_more: boolean; next_cursor: string | null };
    entries.push(...data.entries);
    hasMore = data.has_more;
    nextCursor = data.next_cursor;
  }
  return entries;
}

serve({
  port: process.env.PORT || 3000,
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ status: "ok" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (url.pathname === "/events" && req.method === "GET") {
      try {
        const events = await getEvents();
        return new Response(JSON.stringify(events), {
          headers: { "Content-Type": "application/json" },
        });
      } catch (err) {
        return new Response(
          JSON.stringify({ error: "Failed to fetch events" }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    if (url.pathname.startsWith("/event-users/") && req.method === "GET") {
      const eventId = url.pathname.split("/")[2];
      if (!eventId) {
        return new Response(JSON.stringify({ error: "Missing eventId" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
      try {
        const users = await getUsers(eventId);
        return new Response(JSON.stringify(users), {
          headers: { "Content-Type": "application/json" },
        });
      } catch (err) {
        return new Response(
          JSON.stringify({ error: "Failed to fetch users" }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    return new Response("Not found", { status: 404 });
  },
});