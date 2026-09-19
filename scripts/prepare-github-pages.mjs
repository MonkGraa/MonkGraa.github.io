import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";

const routes = [
  ...["teremok", "blackbox", "mekong"].flatMap((slug) => [`cases/${slug}`, `en/cases/${slug}`]),
  "cases/reloc",
  "cases/funpay",
  "en",
  "en/cases/reloc",
  "en/cases/funpay",
  "cases/alanbase",
  "cases/saas",
  "en/cases/alanbase",
  "en/cases/saas",
];

for (const route of routes) {
  const routeDirectory = `dist/client/${route}`;
  await mkdir(routeDirectory, { recursive: true });
  const source = `dist/client/${route}.html`;
  const destination = `${routeDirectory}/index.html`;
  if (route.startsWith("en")) {
    const html = await readFile(source, "utf8");
    await writeFile(
      destination,
      html.replace('<html lang="ru">', '<html lang="en">'),
    );
  } else {
    await copyFile(source, destination);
  }
}
