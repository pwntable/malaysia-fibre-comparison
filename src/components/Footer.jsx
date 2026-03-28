export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-4">
        <p className="text-sm font-medium">
          “This comparison is based only on the currently provided dataset and may not represent every latest package or promotion.”
        </p>
        <div className="w-16 h-px bg-slate-700"></div>
        <p className="text-xs text-slate-500">
          Built with React and Tailwind CSS. Hosted on GitHub Pages.
        </p>
      </div>
    </footer>
  );
}
