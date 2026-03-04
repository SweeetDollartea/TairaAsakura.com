export function Footer() {
  return (
    <footer className="global-footer" role="contentinfo">
      <p className="global-footer__copyright">© 2025 Taira Asakura</p>
      <nav className="global-footer__social" aria-label="Social links">
        <a
          href="https://x.com/tairaasakura"
          aria-label="X (Twitter)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/Images/Homepage/x.svg" alt="" aria-hidden />
        </a>
        <a
          href="https://www.linkedin.com/in/taira-asakura/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/Images/Homepage/linkedin.svg" alt="" aria-hidden />
        </a>
        <a href="mailto:Asakurataira@gmail.com" aria-label="Email">
          <img src="/Images/Homepage/mail.svg" alt="" aria-hidden />
        </a>
      </nav>
    </footer>
  );
}
