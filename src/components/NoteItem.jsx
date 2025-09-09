import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";

export default function NoteItem({ id, title, body, createdAt }) {
  return (
    <article className="rounded-2xl border bg-white p-4 shadow-sm">
      <header className="mb-1 flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold">
          <Link className="hover:underline" to={`/notes/${id}`}>
            {title}
          </Link>
        </h3>
        <time className="text-sm text-gray-500">
          {showFormattedDate(createdAt)}
        </time>
      </header>
      <p className="text-sm text-gray-700 line-clamp-3">{body}</p>
    </article>
  );
}
