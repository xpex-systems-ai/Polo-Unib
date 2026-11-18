import { readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';

const expected = '16e64eb4d62c8226ba1d235ee0d843036fe5f81d29e3bd97f349c1c406c1940c';
const path = resolve(import.meta.dirname, '../public/assets/hero/polo-ai-earth.webp');
let data;
try { data = readFileSync(path); }
catch {
  console.error('PENDENTE: imagem do robo ausente. Adicione polo-ai-earth.webp na branch antes de validar o preview.');
  process.exitCode = 1;
}
if (data) {
  const size = statSync(path).size;
  const sha256 = createHash('sha256').update(data).digest('hex');
  const isWebP = data.toString('ascii', 0, 4) === 'RIFF' && data.toString('ascii', 8, 12) === 'WEBP';
  console.log(JSON.stringify({ size, sha256, isWebP, path }, null, 2));
  if (size !== 108200 || sha256 !== expected || !isWebP) {
    console.error('FALHA: asset difere do original validado.');
    process.exitCode = 1;
  } else console.log('PASS: asset original validado.');
}
