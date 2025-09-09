import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/local-data";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return (
      <div className="rounded-xl border bg-white p-8 text-center">
        <p className="mb-2 text-lg font-semibold">Catatan tidak ditemukan</p>
        <button
          className="rounded-lg bg-gray-900 px-4 py-2 text-white"
          onClick={() => navigate(-1)}
        >
          Kembali
        </button>
      </div>
    );
  }

  function onDelete() {
    if (confirm("Hapus catatan ini?")) {
      deleteNote(id);
      navigate("/", { replace: true });
    }
  }

  function onToggleArchive() {
    if (note.archived) {
      unarchiveNote(id);
      navigate("/", { replace: true });
    } else {
      archiveNote(id);
      navigate("/archives", { replace: true });
    }
  }

  return (
    <article className="space-y-4">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{note.title}</h1>
          <time className="text-sm text-gray-500">
            {showFormattedDate(note.createdAt)}
          </time>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onToggleArchive}
            className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
          >
            {note.archived ? "Batal arsip" : "Arsipkan"}
          </button>
          <button
            onClick={onDelete}
            className="rounded-lg bg-red-600 px-3 py-2 text-sm text-white hover:opacity-90"
          >
            Hapus
          </button>
        </div>
      </header>
      <div className="rounded-xl border bg-white p-4">
        <p className="whitespace-pre-wrap text-gray-800">{note.body}</p>
      </div>
    </article>
  );
}
