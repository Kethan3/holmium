import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/ping", (c) => {
  return c.json({
    pong: "Hello, World",
  });
});

app.get("/platform", (c) => {
  return c.json({
    platform: process.platform,
  });
});

app.get('/generate',(c)=>{
  return c.json({
    randomNumber : Math.floor(Math.random()*100)
  })
})

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
