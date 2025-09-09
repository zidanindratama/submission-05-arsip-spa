import { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getActiveNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";

export default function Home() {
  const [params] = useSearchParams();
  const q = (params.get("q") ?? "").toLowerCase();

  const notes = useMemo(() => {
    const data = getActiveNotes();
    if (!q) return data;
    return data.filter((n) => n.title.toLowerCase().includes(q));
  }, [q]);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Catatan Aktif</h2>
        <Link to="/notes/new" className="text-sm underline">
          Tambah baru
        </Link>
      </div>
      <NoteList notes={notes} emptyText="Tidak ada catatan" />
    </section>
  );
}
