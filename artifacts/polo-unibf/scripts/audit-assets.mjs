import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, '..');
const srcRoot = path.join(appRoot, 'src');

const requiredAssets = [
  '/assets/fachada-unibf-cristalina-go.jpg',
  '/assets/logos/unibf-cristalina-go-logo.png',
];

const sourceExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.html']);
const assetPattern = /['"](?<asset>\/assets\/[^'"]+)['"]/g;
const legacyCardJpgPattern = /\/assets\/cards\/[^'"\s)]+\.jpe?g\b/gi;

const validatedAssets = new Set(requiredAssets);
const missingAssets = [];
const legacyJpgReferences = [];

function collectSourceFiles(directory) {
  const entries = readdirSync(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectSourceFiles(absolutePath));
      continue;
    }

    if (sourceExtensions.has(path.extname(entry.name))) {
      files.push(absolutePath);
    }
  }

  return files;
}

function toRelativeSource(absoluteSource) {
  return path.relative(appRoot, absoluteSource).split(path.sep).join('/');
}

function assertAssetExists(sourceFile, asset) {
  const publicPath = path.join(appRoot, 'public', asset.replace(/^\//, ''));
  if (!existsSync(publicPath)) {
    missingAssets.push(`${sourceFile}: ${asset}`);
  }
}

for (const absoluteSource of collectSourceFiles(srcRoot)) {
  const sourceFile = toRelativeSource(absoluteSource);
  const content = readFileSync(absoluteSource, 'utf8');

  for (const match of content.matchAll(legacyCardJpgPattern)) {
    legacyJpgReferences.push(`${sourceFile}: ${match[0]}`);
  }

  for (const match of content.matchAll(assetPattern)) {
    const asset = match.groups.asset;
    validatedAssets.add(asset);
    assertAssetExists(sourceFile, asset);
  }
}

for (const asset of requiredAssets) {
  assertAssetExists('required production asset', asset);
}

if (legacyJpgReferences.length > 0) {
  console.error('Referências legadas .jpg/.jpeg encontradas em /assets/cards/:');
  for (const reference of legacyJpgReferences) {
    console.error(`- ${reference}`);
  }
}

if (missingAssets.length > 0) {
  console.error('Assets referenciados não encontrados em public/assets/:');
  for (const asset of missingAssets) {
    console.error(`- ${asset}`);
  }
}

if (validatedAssets.size === 0) {
  console.error('Nenhum asset /assets/ foi encontrado para validação.');
  process.exit(1);
}

if (legacyJpgReferences.length > 0 || missingAssets.length > 0) {
  process.exit(1);
}

console.log('Assets de produção validados com sucesso:');
for (const asset of [...validatedAssets].sort()) {
  console.log(`- ${asset}`);
}
