import NoteItem from "./NoteItem";

export default function NoteList({ notes, emptyText = "Tidak ada catatan" }) {
  if (!notes?.length) {
    return (
      <div className="rounded-xl border border-dashed bg-white p-8 text-center text-gray-500">
        {emptyText}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((n) => (
        <NoteItem key={n.id} {...n} />
      ))}
    </div>
  );
}
