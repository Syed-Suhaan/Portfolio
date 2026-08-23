export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto flex max-w-[920px] flex-wrap justify-between gap-3 px-7 pb-12 pt-2 text-[13px] text-muted-foreground">
      <span>© {year} Syed Suhaan</span>
    </footer>
  );
}
