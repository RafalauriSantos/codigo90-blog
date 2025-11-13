import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuração
const BASE_URL = "https://codigo90-blog.vercel.app";
const POSTS_FILE = path.resolve(__dirname, "../src/data/posts.json");
const OUTPUT_FILE = path.resolve(__dirname, "../public/sitemap.xml");

// Lê os posts do arquivo JSON
function loadPosts() {
	try {
		const data = fs.readFileSync(POSTS_FILE, "utf-8");
		return JSON.parse(data);
	} catch (error) {
		console.error("❌ Erro ao ler posts.json:", error.message);
		return { posts: [], pages: [] };
	}
}

// Gera o XML do sitemap
function generateSitemap() {
	const { posts, pages } = loadPosts();
	const today = new Date().toISOString().split("T")[0];

	// URLs das páginas principais
	const pageUrls = pages.map((page) => ({
		loc: page.slug ? `${BASE_URL}/${page.slug}/` : `${BASE_URL}/`,
		lastmod: today,
		changefreq: "weekly",
		priority: page.slug === "" ? 1.0 : 0.9,
	}));

	// URLs dos posts do blog
	const postUrls = posts.map((post) => ({
		loc: `${BASE_URL}/blog/${post.slug}/`,
		lastmod: post.updatedAt || post.publishedAt || today,
		changefreq: "monthly",
		priority: post.featured ? 0.9 : 0.8,
	}));

	// Combina todas as URLs
	const allUrls = [...pageUrls, ...postUrls];

	// Gera o XML
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
	.map(
		(url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
	)
	.join("\n")}
</urlset>`;

	return xml;
}

// Salva o sitemap
function saveSitemap() {
	try {
		const xml = generateSitemap();
		fs.writeFileSync(OUTPUT_FILE, xml, "utf-8");
		console.log("✅ Sitemap gerado com sucesso!");
		console.log(`📍 Local: ${OUTPUT_FILE}`);

		// Conta URLs
		const { posts, pages } = loadPosts();
		console.log(`📊 Total de URLs: ${pages.length + posts.length}`);
		console.log(`   - Páginas: ${pages.length}`);
		console.log(`   - Posts: ${posts.length}`);
	} catch (error) {
		console.error("❌ Erro ao salvar sitemap:", error.message);
		process.exit(1);
	}
}

// Executa
saveSitemap();
