import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

export default function NewNote() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    addNote({ title, body });
    navigate("/", { replace: true });
  }

  return (
    <section className="mx-auto max-w-2xl">
      <h1 className="mb-4 text-2xl font-bold">Catatan Baru</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <label className="mb-1 block text-sm font-medium">Judul</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Judul catatan"
            className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Isi</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Tulis isi catatan..."
            className="h-48 w-full resize-y rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
            required
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-lg border px-4 py-2 hover:bg-gray-50"
          >
            Batal
          </button>
          <button className="rounded-lg bg-gray-900 px-4 py-2 text-white hover:opacity-90">
            Simpan
          </button>
        </div>
      </form>
    </section>
  );
}
