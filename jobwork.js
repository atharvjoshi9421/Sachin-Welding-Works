// Product Data
const products = [
  {
    title: "Aluminium Job Work",
    description:
      "Sachin Welding Works specializes in high-precision aluminium fabrication and welding. We handle aluminium with expert care, offering cutting, bending, TIG welding, polishing, and custom fabrication services. This job work is ideal for frames, trays, structures, machine components, industrial parts, and decorative items. Every project is delivered with smooth finishing, excellent strength, and corrosion resistance.",
    images: [
      "products/23.jpeg",
      "products/24.jpeg",
      "products/25.jpeg"
    ]
  },

  {
    title: "Stainless Steel Job Work",
    description: "Stainless steel fabrication is one of our core strengths. We provide cutting, bending, TIG/MIG welding, fabrication, polishing, and customized manufacturing using premium-grade stainless steel. This service includes the production of palkis, kitchen sinks, barricades, railings, trolleys, racks, cabinets, industrial setups, and food-grade equipment. All products are rust-proof, durable, hygienic, and finished with a premium aesthetic.",
    images: [
      "products/22.jpeg",
      "products/1.jpeg",
      "products/14.jpeg"
    ]
  },

  {
    title: "Stainless Steel Pipeline",
    description: "We offer professional SS pipeline fabrication and installation for industrial, commercial, and residential use. Our work includes leak-proof TIG welding, accurate joint fitting, proper alignment, and structural support installation. These pipelines are widely used in dairy units, chemical plants, hotels, water systems, and fabrication workshops. The pipelines are designed to be corrosion-free, long-lasting, and low-maintenance.",
    images: [
      "products/18.jpeg",
      "products/26.jpeg",
      "products/27.jpeg"
    ]
  },

  {
    title: "Stainless steel railing Work",
    description: "We manufacture and install high-quality stainless steel railings for staircases, balconies, terraces, and commercial buildings. Our railings are strong, rust-resistant, elegant, and built for long life, with finishing options like Gloss, Matte, and Mirror Polish.",
    images: [
      "products/21.jpeg",
      "products/20.jpeg",
      "products/15.jpeg"
    ]
  },

  {
    title: "All Metals Sculpture Work",
    description: "Sachin Welding Works also creates custom metal sculptures with artistic precision. We work with aluminium, stainless steel, mild steel, brass, copper, and mixed metals to create unique sculptures. These sculptures are ideal for gardens, hotels, offices, events, interior décor, branding, and customized artistic projects. Every sculpture is crafted to be structurally strong, visually striking, and long-lasting.",
    images: [
      "products/19.jpeg",
      "products/7.jpeg",
      "products/8.jpeg"
    ]
  },
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
