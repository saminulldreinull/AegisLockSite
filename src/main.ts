import "./styles.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Missing app root");
}

const assetBase = import.meta.env.BASE_URL;

app.innerHTML = `
  <header class="site-nav" aria-label="Primary navigation">
    <a class="brand" href="#top" aria-label="AegisLock home">
      <img src="${assetBase}shield.svg" alt="" width="34" height="34" />
      <span>AegisLock</span>
    </a>
    <nav class="nav-links">
      <a href="#protection">Protection</a>
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
      <div class="hero-scene" aria-hidden="true">
        <div class="mac-window hero-window protection-window">
          <div class="traffic"><span></span><span></span><span></span></div>
          <div class="segmented">
            <span class="selected">Protection</span><span>Authentication</span><span>Reports</span>
          </div>
          <div class="window-title">Protected Apps</div>
          <div class="search">Search apps</div>
          <div class="app-row active">
            <div class="app-icon notion">N</div>
            <div class="app-meta">
              <strong>Notion</strong>
              <span>notion.id</span>
              <small>/Applications/Notion.app</small>
            </div>
            <div class="mode-switch"><b>Safe</b><span>Strict</span></div>
            <div class="enabled-check"></div>
          </div>
          <div class="app-row">
            <div class="app-icon word">W</div>
            <div class="app-meta">
              <strong>Microsoft Word</strong>
              <span>com.microsoft.Word</span>
              <small>Safe Hide keeps documents open</small>
            </div>
            <div class="mode-switch"><b>Safe</b><span>Strict</span></div>
            <div class="enabled-check"></div>
          </div>
          <div class="grace-box">
            <strong>Unlock Grace</strong>
            <div><span class="chip on">While Open</span><span class="chip">5 minutes</span><span class="chip">Until Sleep</span></div>
          </div>
        </div>

        <div class="mac-window hero-window status-window">
          <div class="traffic"><span></span><span></span><span></span></div>
          <div class="status-grid">
            <div><i class="good"></i><strong>Protection Active</strong><span>Monitoring protected apps</span></div>
            <div><i class="good"></i><strong>Access Reports</strong><span>Recent events verified</span></div>
            <div><i class="warn"></i><strong>Release Signature</strong><span>Developer ID required for public release</span></div>
            <div><i class="good"></i><strong>Watchdog</strong><span>Installed and running</span></div>
          </div>
        </div>

        <div class="approval-popover">
          <div class="touch-mark"></div>
          <strong>Allow Agentic Work?</strong>
          <span>Codex requests temporary access to Notion.</span>
          <div class="lease">Lease 10 min <b>Max 60 min</b></div>
        </div>
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

    <section id="protection" class="section product-section">
      <div class="section-heading">
        <p class="eyebrow">Protection model</p>
        <h2>Strict when needed. Safe by default.</h2>
        <p>Most app lockers quit apps or place a weak overlay on top. AegisLock protects the visible app surface without destroying unsaved work.</p>
      </div>
      <div class="feature-split">
        <div class="demo-panel safe-panel">
          <div class="mini-toolbar"><span></span><span></span><span></span><b>Safe Hide</b></div>
          <div class="flow">
            <div class="flow-step">Protected app opens</div>
            <div class="flow-arrow"></div>
            <div class="flow-step hidden-step">App hidden before content is useful</div>
            <div class="flow-arrow"></div>
            <div class="flow-step auth-step">Touch ID</div>
            <div class="flow-arrow"></div>
            <div class="flow-step">App shown again</div>
          </div>
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

    <section class="section reports-section">
      <div class="section-heading compact">
        <p class="eyebrow">Access Reports</p>
        <h2>Local evidence, not surveillance.</h2>
        <p>AegisLock records security events locally with a hash chain. No document names, window titles, screenshots, or typed content.</p>
      </div>
      <div class="reports-browser" aria-label="Access reports interface preview">
        <div class="reports-top">
          <span class="search-pill">Search reports</span>
          <span class="filter-pill active">All</span>
          <span class="filter-pill">Locks</span>
          <span class="filter-pill">Agentic</span>
          <span class="filter-pill">Warnings</span>
        </div>
        <div class="report-line"><i class="good"></i><strong>App Unlocked</strong><span>Notion</span><time>19:08</time></div>
        <div class="report-line"><i class="warn"></i><strong>Agentic Requested</strong><span>Codex, Notion</span><time>19:04</time></div>
        <div class="report-line"><i class="good"></i><strong>Watchdog Started</strong><span>Installed and running</span><time>18:56</time></div>
        <div class="report-line"><i class="good"></i><strong>Protection Mode Changed</strong><span>Safe Hide</span><time>18:44</time></div>
      </div>
    </section>

    <section id="agentic" class="section agent-section">
      <div class="agent-visual">
        <div class="agent-card">
          <span class="label">Local request</span>
          <code>127.0.0.1:48731</code>
          <p>Bundle IDs, reason, max time.</p>
        </div>
        <div class="agent-line"></div>
        <div class="agent-card highlighted">
          <span class="label">Native approval</span>
          <strong>Touch ID required</strong>
          <p>No silent agent bypass.</p>
        </div>
        <div class="agent-line"></div>
        <div class="agent-card">
          <span class="label">Lease active</span>
          <code>heartbeat + max cap</code>
          <p>Expires if agent stops.</p>
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

const heroWindow = document.querySelector<HTMLElement>(".protection-window");

window.addEventListener("pointermove", (event) => {
  if (!heroWindow || window.matchMedia("(max-width: 760px)").matches) {
    return;
  }

  const x = (event.clientX / window.innerWidth - 0.5) * 10;
  const y = (event.clientY / window.innerHeight - 0.5) * 8;
  heroWindow.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${2 - y * 0.08}deg) rotateY(${-6 + x * 0.1}deg)`;
});
