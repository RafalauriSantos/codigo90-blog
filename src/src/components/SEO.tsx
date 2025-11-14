import { Helmet } from "react-helmet-async";

interface SEOProps {
	title: string;
	description: string;
	canonical?: string;
	keywords?: string[];
	type?: "website" | "article";
	publishedTime?: string;
	modifiedTime?: string;
	author?: string;
	image?: string;
	articleSection?: string;
	readTime?: number;
}

export function SEO({
	title,
	description,
	canonical,
	keywords = [],
	type = "website",
	publishedTime,
	modifiedTime,
	author = "Código 90",
	image = "https://codigo90-blog.vercel.app/og-image.jpg",
	articleSection,
	readTime,
}: SEOProps) {
	const baseUrl = "https://codigo90-blog.vercel.app";
	const fullUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;
	const fullTitle = `${title} | Código 90`;

	// JSON-LD para artigos
	const articleSchema =
		type === "article"
			? {
					"@context": "https://schema.org",
					"@type": "Article",
					headline: title,
					description: description,
					image: image,
					author: {
						"@type": "Person",
						name: author,
					},
					publisher: {
						"@type": "Organization",
						name: "Código 90",
						logo: {
							"@type": "ImageObject",
							url: `${baseUrl}/logo.png`,
						},
					},
					datePublished: publishedTime,
					dateModified: modifiedTime || publishedTime,
					mainEntityOfPage: {
						"@type": "WebPage",
						"@id": fullUrl,
					},
					articleSection: articleSection,
					...(readTime && {
						timeRequired: `PT${readTime}M`,
					}),
			  }
			: null;

	// JSON-LD para website
	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Código 90",
		url: baseUrl,
		description: "Aprenda programação do zero ao emprego em 90 dias",
		potentialAction: {
			"@type": "SearchAction",
			target: `${baseUrl}/blog?q={search_term_string}`,
			"query-input": "required name=search_term_string",
		},
	};

	return (
		<Helmet>
			{/* Meta Tags Básicas */}
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			{keywords.length > 0 && (
				<meta name="keywords" content={keywords.join(", ")} />
			)}
			<link rel="canonical" href={fullUrl} />

			{/* Open Graph */}
			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={fullUrl} />
			<meta property="og:image" content={image} />
			<meta property="og:site_name" content="Código 90" />
			<meta property="og:locale" content="pt_BR" />

			{/* Open Graph - Article */}
			{type === "article" && (
				<>
					{publishedTime && (
						<meta property="article:published_time" content={publishedTime} />
					)}
					{modifiedTime && (
						<meta property="article:modified_time" content={modifiedTime} />
					)}
					{author && <meta property="article:author" content={author} />}
					{articleSection && (
						<meta property="article:section" content={articleSection} />
					)}
					{keywords.map((keyword) => (
						<meta key={keyword} property="article:tag" content={keyword} />
					))}
				</>
			)}

			{/* Twitter Card */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />

			{/* JSON-LD */}
			<script type="application/ld+json">
				{JSON.stringify(websiteSchema)}
			</script>
			{articleSchema && (
				<script type="application/ld+json">
					{JSON.stringify(articleSchema)}
				</script>
			)}
		</Helmet>
	);
}
