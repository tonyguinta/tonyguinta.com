export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Tony Guinta
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:tonyguinta@gmail.com"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/tonyguinta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/TwoPartyLie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
