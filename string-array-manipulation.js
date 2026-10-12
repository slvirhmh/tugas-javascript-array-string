// ===== Case 1: User Data Cleaner =====
const rawNames = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

// 1. Bersihkan whitespace di awal & akhir string
const cleaned = rawNames.trim();

// 2. Ubah jadi array nama
const namesArray = cleaned.split(",");

// 3. Format tiap nama: lowercase tanpa spasi liar
const formattedNames = namesArray.map((name) =>
  name.trim().toLowerCase().split(/\s+/).join("_")
);

// 4. Gabungkan kembali jadi string
const result1 = formattedNames.join(" | ");

console.log("Case 1:", result1);
// Output: riyanda_azis | arifian_saputra | hasan_harahap


// ===== Case 2: E-Commerce Product Filter =====
const products = [
  { name: "Laptop", price: 1000, active: true },
  { name: "Mouse", price: 20, active: false },
  { name: "Keyboard", price: 50, active: true },
];

// 1. Saring produk yang active: true
const activeProducts = products.filter((product) => product.active);

// 2. Array baru berisi nama produk huruf kapital
const upperCaseNames = activeProducts.map((product) =>
  product.name.toUpperCase()
);

// 3. Hitung total harga produk aktif
const totalPrice = activeProducts.reduce(
  (total, product) => total + product.price,
  0
);

console.log("Case 2 - Produk aktif:", activeProducts);
console.log("Case 2 - Nama kapital:", upperCaseNames);
console.log("Case 2 - Total harga:", totalPrice);
