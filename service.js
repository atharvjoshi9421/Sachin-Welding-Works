// Product Data
const products = [
  {
    title: "Aluminium Tig Welding",
    description:
      "Aluminium TIG Welding requires high precision because aluminium is a lightweight and heat-sensitive metal.Sachin Welding Works uses advanced TIG welding technology to create clean, strong, and crack-free joints in aluminium components.This service is ideal for aluminium frames, trays, industrial parts, decorative items, and repair work. The team ensures smooth finishing, minimal distortion, and high corrosion resistance in the final product.",
    
    images: [
      "products/28.jpeg",
      "products/29.jpeg",
      "products/30.jpeg"
    ]
  },

  {
    title: "Stainless Steel Tig welding",
    description: "Stainless Steel TIG Welding is one of our core specializations. We ensure high-quality welds that are clean, strong, and visually appealing. This process is used for manufacturing products like palkis, sinks, barricades, trolleys, railings, kitchen equipment, and custom stainless steel fabrications. The welds are durable, rust-resistant, and suitable for both heavy-duty and household applications.",
    images: [
      "products/34.jpeg",
      "products/35.jpeg",
      "products/36.jpeg"
    ]
  },

  {
    title: "MS Tig Welding",
    description: "MS TIG Welding requires proper control to avoid rusting and ensure strong results. We offer reliable MS TIG welding for structural work, fabrication, machine parts, frames, and repairs. Using the right filler materials and techniques, we deliver welds that are long-lasting and maintain good structural strength. Our finishing and grinding processes ensure a clean and professional look.",
    images: [
      "products/16.jpeg",
    ]
  },

  {
    title: "Brass Tig Welding",
    description: "Brass TIG Welding is a specialized skill because brass melts quickly and needs controlled heat management. Sachin Welding Works provides expert brass welding to create smooth, bright, and strong joints. This service is used for decorative items, fittings, industrial components, musical instrument repair, and custom projects. We ensure minimal discoloration and maintain brass’s natural shine.",
    images: [
      "products/30.jpeg",
      "products/28.jpeg",
      "products/29.jpeg"
    ]
  },

  {
    title: "Copper Tig Welding",
    description: "Copper requires high heat conductivity, making TIG welding the best method for precision. We offer copper TIG welding for electrical components, bus bars, fittings, water systems, industrial machinery parts, and more. Our techniques ensure strong bonding, excellent conductivity, and a clean finish without burnt marks.",
    images: [
      "products/4.jpeg",
      "products/31.jpeg",
      "products/32.jpeg"
    ]
  },

  {
    title: "Titanium Tig Welding",
    description: "Titanium TIG Welding demands expert handling as titanium is highly reactive at high temperatures. Sachin Welding Works uses proper shielding and controlled environments to deliver aerospace-quality welds. This service is perfect for medical equipment, automotive parts, sports gear, industrial components, and high-strength custom items. We ensure high strength, corrosion resistance, and perfect weld consistency.",
    images: [
      "products/37.jpeg",
    ]
  }
];

function showProduct(index) {
  const product = products[index];

  document.getElementById("title").innerText = product.title;
  document.getElementById("description").innerText = product.description;

  let items = document.querySelectorAll(".category");
  items.forEach(el => el.classList.remove("active"));
  items[index].classList.add("active");

  const imageGrid = document.getElementById("imageGrid");
  imageGrid.innerHTML = "";

  // Show 3 images
  product.images.forEach(img => {
    imageGrid.innerHTML += `<img src="${img}" />`;
  });

  // Add single Enquire Now button
  imageGrid.innerHTML += `
    <div class="btn-center">
      <a class="enq-btn" href="contact.html?subject=${encodeURIComponent(product.title)}">
        Enquire Now
      </a>
    </div>`;
}


// Load first product on page load
// showProduct(0);


// Read index from URL if available
const urlParams = new URLSearchParams(window.location.search);
const prodIndex = urlParams.get("product");

// If product index available then open that section else default = 0
if (prodIndex !== null) {
  showProduct(parseInt(prodIndex));
} else {
  showProduct(0);
}
