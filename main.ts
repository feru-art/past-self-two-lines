// V4 — "White charger" (momen: benda kecil / pinjam charger di perpustakaan).
// Node stdlib-only. Menulis teks entry ke /output/entry.txt
// (atau ENTRY_OUTPUT bila diset, untuk pengujian lokal).
import fs from 'node:fs';
import path from 'node:path';

const ENTRY = [
  "On the library's second floor, don't lend your only white charger to your seatmate.",
  "It never came back, so your phone died at 5:40 when the interview call came, and the job closed at 6.",
].join('\n');

const out = process.env.ENTRY_OUTPUT || '/output/entry.txt';
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, ENTRY, 'utf8');
