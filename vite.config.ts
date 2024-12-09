import { telefunc } from "telefunc/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import ViteVercel from "vite-plugin-vercel";

export default defineConfig({
  plugins: [vike({}), react({}), telefunc(), ViteVercel()],
});
