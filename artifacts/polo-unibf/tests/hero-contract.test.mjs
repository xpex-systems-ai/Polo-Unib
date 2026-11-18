import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const hero = readFileSync(resolve(import.meta.dirname, '../src/components/home/HeroSection.tsx'), 'utf8');

test('hero usa paleta institucional', () => {
  assert.match(hero, /#003b5c/i);
  assert.match(hero, /#00B86B/i);
});

test('arte do robô tem fallback institucional', () => {
  assert.match(hero, /\/assets\/hero\/polo-ai-earth\.webp/);
  assert.match(hero, /onError=\{/);
  assert.match(hero, /setImage\(FALLBACK_ASSET\)/);
});

test('hero tem comportamento responsivo e movimento reduzido', () => {
  assert.match(hero, /sm:min-h-\[330px\]/);
  assert.match(hero, /md:min-h-\[540px\]/);
  assert.match(hero, /useReducedMotion/);
  assert.match(hero, /motion-reduce:animate-none/);
});

test('CTA e acessibilidade básica', () => {
  assert.match(hero, /text-\[#003B5C\]/);
  assert.match(hero, /focus-visible:outline/);
  assert.match(hero, /alt=\{/);
});

test('imagem principal usa prioridade de carregamento', () => {
  assert.match(hero, /loading="eager"/);
  assert.match(hero, /fetchPriority="high"/);
});
