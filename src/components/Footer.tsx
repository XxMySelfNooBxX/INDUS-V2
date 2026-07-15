export default function Footer() {
    return (
        <footer className="py-10 px-6 md:px-10 flex flex-col justify-center items-center gap-6 border-t border-alabaster/10 bg-obsidian">
            <div className="font-mono text-[11px] tracking-[0.2em] text-alabaster/40 text-center">
                © 2006 — {new Date().getFullYear()} INDUS INC
            </div>
        </footer>
    );
}