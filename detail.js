document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".product-items").forEach((product) => {
        product.addEventListener("click", () => {
            const name = product.querySelector("p")?.textContent.trim() || "สินค้า";
            const price = product.querySelector("strong")?.textContent.trim() || "สอบถามราคา";
            const image = product.querySelector("img")?.getAttribute("src") || "";
            const description = `รายละเอียดสินค้า ${name} คุณภาพดี ใช้งานง่าย`;

            const modal = document.createElement("div");
            modal.className = "model product-detail-modal";
            modal.innerHTML = `
                <div class="model-bg"></div>
                <div class="model-page">
                    <h2>รายละเอียดสินค้า</h2>
                    <div class="modaldesc-content">
                        <img class="modaldesc-img" src="${image}" alt="${name}">
                        <div class="modaldesc-detail">
                            <p>${name}</p>
                            <p>ราคา: ${price}</p>
                            <p>${description}</p>
                            <div class="btn-control">
                                <button type="button" class="btn detail-close">ปิด</button>
                                <button type="button" class="btn btn-buy">เพิ่มลงตะกร้า</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);
            const closeModal = () => modal.remove();
            modal.querySelector(".detail-close").addEventListener("click", closeModal);
            modal.querySelector(".model-bg").addEventListener("click", closeModal);
            modal.querySelector(".btn-buy").addEventListener("click", () => {
                addToCart({
                    name,
                    price: parsePrice(price),
                    image
                });
                closeModal();
            });
        });
    });
});
