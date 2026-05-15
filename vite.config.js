import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages: projeto em /<repo>/; site user/org em username.github.io usa "/".
// Override: VITE_BASE_PATH
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = Boolean(repo?.endsWith(".github.io"));
const base =
  process.env.VITE_BASE_PATH ??
  (process.env.GITHUB_ACTIONS === "true" && repo && !isUserSite
    ? `/${repo}/`
    : "/");

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
