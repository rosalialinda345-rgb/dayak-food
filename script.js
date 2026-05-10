let cart = [];
let total = 0;

function toggleCart() {
    document.getElementById("cartBox").classList.toggle("active");
}

function tambahKeKeranjang(nama, harga) {
    cart.push({ nama, harga });
    total += harga;
    renderCart();
    showToast("Ditambahkan ke keranjang");
}

function renderCart() {
    let list = document.getElementById("cartItems");
    list.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.nama + " - Rp " + item.harga;
        list.appendChild(li);
    });

    document.getElementById("totalHarga").innerText = "Rp " + total;

    let pesan = "Pesanan:%0A";
    cart.forEach(item => {
        pesan += item.nama + " - Rp " + item.harga + "%0A";
    });

    document.getElementById("checkoutBtn").href =
        "https://wa.me/6285250720929?text=" + pesan;
}

/* SEARCH */
document.getElementById("searchInput").addEventListener("keyup", function () {
    let keyword = this.value.toLowerCase();
    document.querySelectorAll(".menu-card").forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(keyword)
            ? "block"
            : "none";
    });
});

/* FILTER */
function filterMenu(kategori) {
    document.querySelectorAll(".menu-card").forEach(card => {
        if (kategori === "all") {
            card.style.display = "block";
        } else {
            card.style.display = card.classList.contains(kategori)
                ? "block"
                : "none";
        }
    });
}

/* TOAST */
function showToast(msg) {
    let t = document.createElement("div");
    t.className = "toast";
    t.innerText = msg;
    document.body.appendChild(t);

    setTimeout(() => t.remove(), 2000);
}