import { copyFile, mkdir } from "node:fs/promises";

const routes = ["cases/reloc", "cases/funpay"];

for (const route of routes) {
  const routeDirectory = `dist/client/${route}`;
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(`dist/client/${route}.html`, `${routeDirectory}/index.html`);
}
