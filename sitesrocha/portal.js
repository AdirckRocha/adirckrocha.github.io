'use strict';
// Set only after the real authenticated HTTPS origin passes external checks.
const PORTAL_URL = 'https://sitesrocha-alexandre.onrender.com/login';
if (PORTAL_URL) {
  const target = new URL(PORTAL_URL);
  if (target.protocol === 'https:' && !target.username && !target.password) {
    const link = document.getElementById('portal-link');
    link.href = target.href;
    link.removeAttribute('aria-disabled');
    link.textContent = 'Entrar no portal →';
    document.getElementById('portal-status').textContent = 'Você será direcionado ao ambiente autenticado.';
  }
}
