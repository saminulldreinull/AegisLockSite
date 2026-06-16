import "./styles.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Missing app root");
}

const assetBase = import.meta.env.BASE_URL;

const screenshotSizes = {
  protection: [1700, 1258],
  reports: [1700, 1258],
  status: [1700, 1258],
  "protection-detail": [1550, 560],
  "reports-detail": [1590, 960],
  "status-detail": [1590, 960],
  "protected-row": [1510, 130],
  "unlock-grace": [660, 155],
  "report-event": [1510, 170],
  "reports-summary": [1510, 300],
  "status-grid": [1510, 560],
} as const;

const screenshot = (
  name: keyof typeof screenshotSizes,
  alt: string,
  priority = false
) => {
  const [width, height] = screenshotSizes[name];

  return `
  <picture>
    <source srcset="${assetBase}screenshots/${name}.webp" type="image/webp" />
    <img
      src="${assetBase}screenshots/${name}.png"
      alt="${alt}"
      width="${width}"
      height="${height}"
      decoding="async"
      ${priority ? 'fetchpriority="high"' : ""}
    />
  </picture>
`;
};

app.innerHTML = `
  <header class="site-nav" aria-label="Primary navigation">
    <a class="brand" href="#top" aria-label="AegisLock home">
      <img src="${assetBase}shield.svg" alt="" width="34" height="34" />
      <span>AegisLock</span>
    </a>
    <nav class="nav-links">
      <a href="#protection">Protection</a>
      <a href="#reports">Reports</a>
      <a href="#agentic">Agentic Work</a>
      <a href="#pricing">Pricing</a>
      <a href="#security">Security</a>
    </nav>
    <a class="nav-cta" href="https://github.com/saminulldreinull/AegisLock" target="_blank" rel="noreferrer">
      GitHub
    </a>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-scene real-showcase" aria-label="AegisLock app screenshots">
        <figure class="product-shot component-shot protected-row-shot">
          ${screenshot("protected-row", "AegisLock protected app row showing Notion, Safe mode, Strict mode, Strict Reopen, and enabled state.", true)}
          <figcaption>Protected app, captured from AegisLock</figcaption>
        </figure>
        <figure class="product-shot component-shot report-peek">
          ${screenshot("report-event", "AegisLock local Access Report event row showing an allowed watchdog event.")}
          <figcaption>Local report event</figcaption>
        </figure>
        <figure class="product-shot component-shot status-peek">
          ${screenshot("status-grid", "AegisLock Security Status component grid showing active protection, configured apps, reports, login item, and watchdog state.")}
          <figcaption>Status checks</figcaption>
        </figure>
      </div>

      <div class="hero-copy">
        <p class="eyebrow">Private app protection for macOS</p>
        <h1 id="hero-title">Keep private apps private on an unlocked Mac.</h1>
        <p class="hero-lede">
          AegisLock hides protected apps before access, unlocks with Touch ID or Mac password, and records local access reports without touching your documents.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="https://github.com/saminulldreinull/AegisLock" target="_blank" rel="noreferrer">Download beta</a>
          <a class="button secondary" href="#security">Read security model</a>
        </div>
        <div class="hero-proof">
          <span>Real app captures</span>
          <span>Safe Hide default</span>
          <span>Touch ID gated</span>
          <span>Agent-aware sessions</span>
        </div>
      </div>
    </section>

    <section class="logo-strip" aria-label="Core workflows">
      <span>Word</span>
      <span>Notion</span>
      <span>Chrome</span>
      <span>Slack</span>
      <span>Codex</span>
      <span>Finder launch</span>
    </section>

    <section class="section comparison-section" aria-labelledby="comparison-title">
      <div class="section-heading compact">
        <p class="eyebrow">Why different</p>
        <h2 id="comparison-title">Built around data safety, not fake lock screens.</h2>
        <p>Protection needs to avoid two failures: letting people click through an overlay, or killing work-in-progress apps.</p>
      </div>
      <div class="comparison-grid" role="list">
        <article role="listitem">
          <span>Weak overlay lockers</span>
          <strong>Looks locked, app still lives underneath.</strong>
          <p>Often easy to bypass with Mission Control, app switching, force quit, or Accessibility edge cases.</p>
        </article>
        <article role="listitem">
          <span>Quit-to-lock tools</span>
          <strong>Stronger interruption, higher data-loss risk.</strong>
          <p>Bad default for Word, Notion, browsers, editors, and any document workflow with unsaved state.</p>
        </article>
        <article role="listitem" class="recommended">
          <span>AegisLock Safe Hide</span>
          <strong>Hide first, authenticate before return.</strong>
          <p>Default path protects visible app surfaces without treating every lock as a destructive close.</p>
        </article>
      </div>
    </section>

    <section id="protection" class="section product-section">
      <div class="section-heading">
        <p class="eyebrow">Protection model</p>
        <h2>Strict when needed. Safe by default.</h2>
        <p>Most app lockers quit apps or place a weak overlay on top. AegisLock protects the visible app surface without destroying unsaved work.</p>
      </div>
      <div class="feature-split">
        <div class="protection-components" aria-label="AegisLock protection UI components">
          <figure class="demo-panel real-panel">
            ${screenshot("protected-row", "Protected app row for Notion with Safe, Strict, Strict Reopen, and enabled state.")}
            <figcaption>Per-app protection mode.</figcaption>
          </figure>
          <figure class="demo-panel real-panel grace-panel">
            ${screenshot("unlock-grace", "Unlock Grace segmented control with While Open, five minutes, fifteen minutes, and Until sleep options.")}
            <figcaption>Unlock duration control.</figcaption>
          </figure>
        </div>
        <div class="copy-stack">
          <article>
            <h3>Safe Hide</h3>
            <p>Best for Word, Notion, Pages, Excel, browsers, and anything with unsaved work. Lock Now hides apps, not quits them.</p>
          </article>
          <article>
            <h3>Strict Reopen</h3>
            <p>Optional per app. It quits and reopens only where data loss risk is acceptable. Stronger interruption, worse for document workflows.</p>
          </article>
          <article>
            <h3>Grace control</h3>
            <p>Choose whether unlock lasts while the app is open, for a few minutes, or until sleep. Every sensitive change requires authentication.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="reports" class="section reports-section">
      <div class="section-heading compact">
        <p class="eyebrow">Access Reports</p>
        <h2>Local evidence, not surveillance.</h2>
        <p>AegisLock records security events locally with a hash chain. No document names, window titles, screenshots, or typed content.</p>
      </div>
      <div class="reports-showcase" aria-label="Access reports interface preview">
        <figure class="reports-browser real-panel dark-real-panel">
          ${screenshot("reports-summary", "Access Reports summary cards with local event count, verified integrity, local storage, search, and filter.")}
          <figcaption>Filters, event count, and integrity state.</figcaption>
        </figure>
        <figure class="reports-browser real-panel dark-real-panel event-panel">
          ${screenshot("report-event", "Access Reports verified local event row with event type, result, actor, app, and hash prefix.")}
          <figcaption>Verified event row from the local audit trail.</figcaption>
        </figure>
      </div>
    </section>

    <section id="agentic" class="section agent-section">
      <div class="agent-visual agent-real">
        <figure class="real-panel status-panel-shot">
          ${screenshot("status-grid", "Security Status cards showing active protection, protected app count, settings integrity, access reports, launch at login, watchdog, and backup.")}
          <figcaption>Status cards from the real app.</figcaption>
        </figure>
        <div class="agent-card highlighted">
          <span class="label">Agentic Work</span>
          <strong>Approval stays native</strong>
          <p>Agents request a time-boxed lease. You approve with system authentication. No silent global unlock.</p>
        </div>
      </div>
      <div class="section-heading left">
        <p class="eyebrow">Agentic Work</p>
        <h2>Let trusted automation work without turning protection off.</h2>
        <p>Codex or another local agent can request temporary access to specific protected apps. You approve once with Touch ID, then AegisLock enforces a short renewable lease with a hard maximum.</p>
      </div>
    </section>

    <section id="security" class="section security-band">
      <div class="security-copy">
        <p class="eyebrow">Security boundary</p>
        <h2>Honest protection for the risk it actually controls.</h2>
        <p>
          AegisLock protects against casual local access in an unlocked user session. It does not claim to stop administrators, root users, malware, Recovery Mode, or anyone who can remove the app and its LaunchAgent.
        </p>
      </div>
      <div class="boundary-list">
        <div><b>Protects</b><span>Shared desk moments, accidental opens, app switching, weak overlay bypasses.</span></div>
        <div><b>Does not protect</b><span>Admin/root attacks, malware, forensic access, remote shell under same user.</span></div>
        <div><b>Hardening</b><span>Watchdog, delete restore, signed settings, local reports, notarized release path.</span></div>
      </div>
    </section>

    <section id="pricing" class="section pricing-section">
      <div class="section-heading">
        <p class="eyebrow">Launch plan</p>
        <h2>Start transparent. Charge when trust is earned.</h2>
        <p>The beta should be free while signing, notarization, and multi-Mac QA finish. Paid plans make sense after Developer ID release.</p>
      </div>
      <div class="pricing-grid">
        <article class="price-card">
          <span class="tier">Beta</span>
          <strong>Free</strong>
          <p>Public testing, reports, Safe Hide, Agentic Work, honest limits.</p>
          <a href="https://github.com/saminulldreinull/AegisLock" target="_blank" rel="noreferrer">Get beta</a>
        </article>
        <article class="price-card featured">
          <span class="tier">Pro</span>
          <strong>29 EUR</strong>
          <p>Early lifetime license after Developer ID signing and notarized release.</p>
          <a href="#top">Coming after notarization</a>
        </article>
        <article class="price-card">
          <span class="tier">Team</span>
          <strong>Custom</strong>
          <p>Policy defaults, deployment docs, team support, and audit export workflow.</p>
          <a href="mailto:hello@aegislock.app">Contact</a>
        </article>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="brand footer-brand">
      <img src="${assetBase}shield.svg" alt="" width="30" height="30" />
      <span>AegisLock</span>
    </div>
    <p>Private Mac app protection. Built for honest security, not impossible promises.</p>
    <div>
      <a href="https://github.com/saminulldreinull/AegisLock" target="_blank" rel="noreferrer">GitHub</a>
      <a href="#security">Security</a>
      <a href="#pricing">Pricing</a>
    </div>
  </footer>
`;

const heroWindow = document.querySelector<HTMLElement>(".protected-row-shot");

window.addEventListener("pointermove", (event) => {
  if (!heroWindow || window.matchMedia("(max-width: 760px)").matches) {
    return;
  }

  const x = (event.clientX / window.innerWidth - 0.5) * 10;
  const y = (event.clientY / window.innerHeight - 0.5) * 8;
  heroWindow.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${2 - y * 0.08}deg) rotateY(${-6 + x * 0.1}deg)`;
});
