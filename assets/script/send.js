// Initialize EmailJS (put your Public Key here)
emailjs.init({ publicKey: "YOUR_PUBLIC_KEY" });

const form = document.getElementById("form");
const btn  = document.getElementById("sendBtn");
const resp = document.getElementById("message-response");

function show(msg) { resp.textContent = msg; }

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Honeypot: if bots fill this, silently ignore
  if (form.company && form.company.value) return;

  const serviceId  = form.dataset.service;   // from data-service
  const templateId = form.dataset.template;  // from data-template

  const from_email = form.from_email.value.trim();
  const message    = form.message.value.trim();

  if (!from_email || !message) { show("Please enter email and a message."); return; }

  // Simple throttle: block if sent in last 30s
  const now = Date.now();
  const lastSent = +localStorage.getItem("last_sent_ts") || 0;
  if (now - lastSent < 30_000) { show("Please wait a few seconds before sending again."); return; }

  btn.disabled = true; show("Sending…");

  try {
    await emailjs.send(serviceId, templateId, {
      from_email, message, to_email: "sachinuk145@gmail.com" // optional, add in template too
    });

    show("Thanks! I’ll get back to you soon.");
    form.reset();
    localStorage.setItem("last_sent_ts", String(now));
  } catch (err) {
    console.error(err);
    show("Couldn’t send. Please try again or email me directly.");
  } finally {
    btn.disabled = false;
  }
});
