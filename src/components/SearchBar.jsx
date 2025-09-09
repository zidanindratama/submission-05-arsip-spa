import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const [params, setParams] = useSearchParams();
  const initial = params.get("q") ?? "";
  const [q, setQ] = useState(initial);

  useEffect(() => {
    setQ(initial);
  }, [initial]);

  function onSubmit(e) {
    e.preventDefault();
    const next = new URLSearchParams(params);
    if (!q) next.delete("q");
    else next.set("q", q);
    setParams(next, { replace: true });
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Cari judul catatan…"
        className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
      />
      <button
        className="rounded-lg bg-gray-900 px-4 py-2 text-white hover:opacity-90"
        type="submit"
      >
        Cari
      </button>
    </form>
  );
}
