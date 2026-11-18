import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const src = (relative) => readFileSync(resolve(import.meta.dirname, '../src', relative), 'utf8');
const lead = src('components/forms/LeadForm.tsx');
const newsletter = src('pages/Newsletter.tsx');
const admin = src('pages/Admin.tsx');
const whatsapp = src('lib/whatsapp.ts');
const events = src('lib/conversion-events.ts');

test('contato e newsletter exigem consentimento antes do handoff', () => {
  assert.match(lead, /if \(!consent\)/);
  assert.match(newsletter, /if \(!consent\)/);
  assert.ok(lead.indexOf('if (!consent)') < lead.indexOf('openWhatsApp(message'));
  assert.ok(newsletter.indexOf('if (!consent)') < newsletter.indexOf("openWhatsApp('Olá!"));
});

test('formulários e admin não persistem PII no navegador', () => {
  for (const file of [lead, newsletter, admin]) {
    assert.doesNotMatch(file, /localStorage|sessionStorage|indexedDB/);
  }
});

test('admin não contém autenticação por senha no frontend', () => {
  assert.doesNotMatch(admin, /VITE_ADMIN_PASSWORD|password|localStorage/);
  assert.match(admin, /temporariamente indisponível/);
});

test('WhatsApp codifica mensagem e usa proteção de janela', () => {
  assert.match(whatsapp, /encodeURIComponent\(message\)/);
  assert.match(whatsapp, /noopener,noreferrer/);
  assert.match(lead, /\.join\('\\n'\)/);
});

test('eventos não incluem identificadores pessoais no payload', () => {
  assert.match(events, /new CustomEvent\('polo:conversion'/);
  assert.match(events, /detail: \{ event, source, timestamp:/);
  assert.doesNotMatch(events, /detail: \{[^}]*\b(nome|telefone|whatsapp|email)\b/);
});

test('handoff não promete recebimento de lead', () => {
  assert.match(lead, /após o envio no aplicativo/);
  assert.match(newsletter, /revise e envie/);
});
