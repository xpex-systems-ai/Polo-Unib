import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, '..');

const sourceFiles = [
  'src/data/courses.ts',
  'src/components/home/ModalityCards.tsx',
];

const cardAssetPattern = /['"](?<asset>\/assets\/cards\/[^'"]+)['"]/g;
const legacyJpgPattern = /\/assets\/cards\/[^'"\s)]+\.jpe?g\b/gi;

const validatedAssets = new Set();
const missingAssets = [];
const legacyJpgReferences = [];

for (const sourceFile of sourceFiles) {
  const absoluteSource = path.join(appRoot, sourceFile);
  const content = readFileSync(absoluteSource, 'utf8');

  for (const match of content.matchAll(legacyJpgPattern)) {
    legacyJpgReferences.push(`${sourceFile}: ${match[0]}`);
  }

  for (const match of content.matchAll(cardAssetPattern)) {
    const asset = match.groups.asset;
    validatedAssets.add(asset);

    const publicPath = path.join(appRoot, 'public', asset.replace(/^\//, ''));
    if (!existsSync(publicPath)) {
      missingAssets.push(`${sourceFile}: ${asset}`);
    }
  }
}

if (legacyJpgReferences.length > 0) {
  console.error('Referências legadas .jpg/.jpeg encontradas em /assets/cards/:');
  for (const reference of legacyJpgReferences) {
    console.error(`- ${reference}`);
  }
}

if (missingAssets.length > 0) {
  console.error('Assets referenciados não encontrados em public/assets/cards/:');
  for (const asset of missingAssets) {
    console.error(`- ${asset}`);
  }
}

if (validatedAssets.size === 0) {
  console.error('Nenhum asset /assets/cards/ foi encontrado para validação.');
  process.exit(1);
}

if (legacyJpgReferences.length > 0 || missingAssets.length > 0) {
  process.exit(1);
}

console.log('Assets de cards validados com sucesso:');
for (const asset of [...validatedAssets].sort()) {
  console.log(`- ${asset}`);
}
