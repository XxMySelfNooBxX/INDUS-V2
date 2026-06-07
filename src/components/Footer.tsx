export default function Footer() {
    return (
        <footer className="py-10 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-alabaster/10 bg-obsidian">
            <div className="font-mono text-[11px] tracking-[0.2em] text-alabaster/40">
                © 2006 — {new Date().getFullYear()} INDUS INC
            </div>
            <div className="font-mono text-[11px] tracking-[0.2em] text-alabaster/40">
                JAIPUR · ACHHNERA
            </div>
            <div className="font-mono text-[11px] tracking-[0.2em] text-alabaster/40">
                BUSINESS TECHNOLOGISTS
            </div>
        </footer>
    );
}