/* ============================================================
   typing.js — Rotates role titles in the hero section
   HOW TO EDIT:
   - Change the WORDS array to your preferred labels.
   - Speeds/delays can be tuned via the constants below.
   Hooks:
   - Expects #typing-text and #cursor in your HTML.
   ============================================================ */

const typingText = document.querySelector("#typing-text");
const cursorSpan = document.querySelector("#cursor");

// === EDIT THESE WORDS TO CHANGE WHAT TYPES IN THE HERO ===
const WORDS = ["AI Engineer", "NLP Engineer","ML Engineer","Data Scientist","Database Engineer","Data Engineer","Data Analyst"];

// === TIMING (ms) ===
const TYPE_MS = 90;        // per character while typing
const ERASE_MS = 50;       // per character while erasing
const HOLD_MS = 900;       // pause after full word
const BETWEEN_WORD_MS = 600; // pause after erase before next word

// small helper
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function typeWord(word) {
  // type
  for (let i = 1; i <= word.length; i++) {
    typingText.textContent = word.slice(0, i);
    await wait(TYPE_MS);
  }
  await wait(HOLD_MS);

  // erase
  for (let i = word.length; i >= 0; i--) {
    typingText.textContent = word.slice(0, i);
    await wait(ERASE_MS);
  }
  await wait(BETWEEN_WORD_MS);
}

async function startTypingLoop() {
  if (!typingText) return;
  // blink cursor
  if (cursorSpan) setInterval(() => cursorSpan.classList.toggle("on"), 450);

  while (true) {
    for (const w of WORDS) {
      await typeWord(w);
    }
  }
}

document.addEventListener("DOMContentLoaded", startTypingLoop);
