const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'app/about/page.tsx',
  'app/service-veeva/page.tsx',
  'app/service-wolvio/page.tsx',
  'app/why-wolvio/page.tsx',
  'app/case-studies/page.tsx',
  'app/industries/industries-client.tsx',
  'app/insights/insights-client.tsx',
  'app/careers/careers-client.tsx',
  'app/contact-us/page.tsx'
];

for (const file of filesToProcess) {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping missing file: ${file}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Calculate import path relative to app/components
  const depth = file.split('/').length - 2;
  const importPrefix = depth === 0 ? './' : '../'.repeat(depth);
  const importPath = `${importPrefix}components/ScrollReveal`;
  
  // Add import if not present
  if (!content.includes('ScrollReveal')) {
    // find last import via regex
    const lastImportMatch = [...content.matchAll(/^import .*;/gm)].pop();
    if (lastImportMatch) {
      const insertionIndex = lastImportMatch.index + lastImportMatch[0].length;
      content = content.slice(0, insertionIndex) + `\nimport ScrollReveal from "${importPath}";` + content.slice(insertionIndex);
    } else {
       content = `import ScrollReveal from "${importPath}";\n` + content;
    }
  }

  // Replace <div className="site-container..."> with <ScrollReveal...> inside <section>
  // and match the closing </div> before </section>
  // Regex 1: Openings
  content = content.replace(/(<section[^>]*>\s*)<div className="site-container([^"]*)">/g, '$1<ScrollReveal className="site-container$2">');
  
  // Regex 2: Closures
  content = content.replace(/<\/div>(\s*)<\/section>/g, '</ScrollReveal>$1</section>');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}
