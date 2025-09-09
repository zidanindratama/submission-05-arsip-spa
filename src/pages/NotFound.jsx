import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border bg-white p-8 text-center">
      <h1 className="mb-2 text-2xl font-bold">404</h1>
      <p className="mb-6 text-gray-600">Halaman tidak ditemukan.</p>
      <Link className="rounded-lg bg-gray-900 px-4 py-2 text-white" to="/">
        Kembali ke beranda
      </Link>
    </div>
  );
}
