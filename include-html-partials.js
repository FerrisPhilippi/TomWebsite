import fs from 'fs';

export default function includeHtmlPartials() {
	return {
		name: 'include-html-partials',
		// apply: 'build',
		transformIndexHtml(html) {
			const regex = /<partial\s+path="(.*?)"\s*\/?>/g;
			let resultHtml = html;
			while (resultHtml.match(regex)) {
				resultHtml = resultHtml.replace(regex, (match, path) => {
					const snippetPath = path.startsWith('/') ? path : `${path}`;
					try {
						const content = fs.readFileSync(snippetPath, 'utf-8');
						let moduleTag = '';
						if (process.env.NODE_ENV === 'development') {
							moduleTag =
								'<div class="dev-module-tag"><span>' +
								path.substring(path.lastIndexOf('/') + 1, path.indexOf('.html')) +
								'</span></div>';
						}
						return content;
					} catch (error) {
						console.error(`Fehler beim Laden des Snippets "${path}":`, error);
						return match;
					}
				});
			}
			return resultHtml;
		},
	};
}
