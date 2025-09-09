# 📒 Aplikasi Catatan Pribadi (SPA)

Proyek ini adalah aplikasi catatan sederhana berbasis **React + Vite + TailwindCSS** dengan dukungan **React Router**.  
Pengguna dapat membuat, mencari, menghapus, mengarsipkan, serta membuka detail catatan di halaman terpisah.

## 🌐 Demo

- Live Demo: [Aplikasi Catatan Pribadi (SPA)](https://submission-05-arsip-spa.vercel.app/)
- Repository: [GitHub Repo](https://github.com/zidanindratama/submission-05-arsip-spa)

## ✨ Fitur Utama

- **Halaman Daftar Catatan**

  - Menampilkan catatan aktif dari data awal.
  - Conditional rendering: jika kosong, muncul pesan _“Tidak ada catatan”_.
  - Mendukung pencarian dengan query parameter `?q=`.

- **Halaman Detail Catatan**

  - Ditampilkan berdasarkan `id` catatan dari URL.
  - Tombol **Arsipkan / Batal Arsip**.
  - Tombol **Hapus** untuk menghapus catatan.

- **Menambahkan Catatan**

  - Form input dengan _controlled component_.
  - Data catatan disimpan sementara di memori.
  - Halaman khusus di `/notes/new`.

- **Arsip Catatan**

  - Halaman `/archives` menampilkan catatan yang diarsipkan.
  - Conditional rendering: jika kosong, muncul pesan _“Arsip kosong”_.

- **Pencarian Catatan**

  - Input pencarian tersedia di halaman daftar (aktif & arsip).
  - Query pencarian shareable via URL.

- **Halaman 404**
  - Jika URL tidak dikenal, aplikasi menampilkan halaman khusus 404.

## 📂 Struktur Proyek

```
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── Header.jsx
│   ├── NoteItem.jsx
│   ├── NoteList.jsx
│   └── SearchBar.jsx
├── pages/
│   ├── Home.jsx
│   ├── Archives.jsx
│   ├── Detail.jsx
│   ├── NewNote.jsx
│   └── NotFound.jsx
└── utils/
    ├── index.js
    └── local-data.js
```

## 🚀 Teknologi

- [React](https://react.dev/) – Library UI berbasis komponen.
- [React Router](https://reactrouter.com/) – Routing SPA.
- [Vite](https://vitejs.dev/) – Bundler cepat dengan HMR.
- [TailwindCSS](https://tailwindcss.com/) – Styling utility-first.

## ▶️ Cara Menjalankan

1. Clone repository:

   ```bash
   git clone https://github.com/zidanindratama/submission-05-arsip-spa
   cd submission-05-arsip-spa
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Jalankan aplikasi:

   ```bash
   npm run dev
   ```

4. Akses di browser:

   ```
   http://localhost:5173
   ```
