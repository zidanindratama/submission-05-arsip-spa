import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";

export default function Archives() {
  const [params] = useSearchParams();
  const q = (params.get("q") ?? "").toLowerCase();

  const notes = useMemo(() => {
    const data = getArchivedNotes();
    if (!q) return data;
    return data.filter((n) => n.title.toLowerCase().includes(q));
  }, [q]);

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Arsip</h2>
      <NoteList notes={notes} emptyText="Arsip kosong" />
    </section>
  );
}
