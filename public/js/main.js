// web/js/main.js
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/produk") // Ganti URL dengan URL RESTful API Anda
      .then((response) => response.json())
      .then((data) => {
        const products = data.data;
        const productList = document.getElementById("product-list");
  
        products.forEach((product) => {
          const productItem = document.createElement("div");
          productItem.classList.add("product-item"); // Tambahkan class "product-item" untuk mengatur tampilan produk
          const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.harga_produk);
          productItem.innerHTML = `
            <img src="data:image/jpeg;base64,${product.gambar_produk}" alt="${product.nama_produk}" />
            <h2>${product.nama_produk}</h2>
            <p>${formattedPrice}</p>
          `;
          productList.appendChild(productItem);
        });
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
  