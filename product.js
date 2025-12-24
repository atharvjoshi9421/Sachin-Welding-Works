// Product Data
const products = [
  {
    title: "Stainless Steel Rack",
    description:
      "High-strength stainless steel racks designed for storage, industrial use, and commercial applications. These racks are rust-proof, durable, and capable of handling heavy loads, making them ideal for warehouses, kitchens, hospitals, and workshops. Custom sizes and multi-layer options are available.",
    images: [
      "products/57.jpeg",
      "products/58.jpeg",
    ]
  },

  {
    title: "Stainless Steel Palette",
    description: "Heavy-duty stainless steel pallets designed for safe material handling. They offer excellent weight-bearing capacity, hygienic surfaces, and corrosion resistance, suitable for manufacturing units, food industries, and export packaging. They last longer than traditional wooden or plastic pallets.",
    images: [
      "products/52.jpeg",
      "products/53.jpeg",
    ]
  },

  {
    title: "Stainless Steel Cage",
    description: "Stainless steel cages built with strong TIG welds, used for material storage, livestock protection, industrial equipment safety, and security purposes. These cages are durable, ventilated, and rust-resistant, with custom sizes and lockable designs.",
    images: [
      "products/54.jpeg",
      "products/55.jpeg",
      "products/56.jpeg"
    ]
  },

  {
    title: "Aluminium Battery Box",
    description: "Lightweight and corrosion-resistant aluminium battery boxes designed for vehicles, solar systems, industrial machinery, and backup power units. They provide secure housing, heat resistance, and long-lasting protection for batteries. Custom shapes and mounting brackets can be added.",
    images: [
      "products/50.jpeg",
      "products/51.jpeg",
    ]
  },

  {
    title: "Stainless Steel Table",
    description: "Premium stainless steel tables suitable for kitchens, hotels, laboratories, hospitals, and industrial workspaces. They are hygienic, easy to clean, rust-proof, and available with undershelves or drawers for storage. Built for daily heavy use.",
    images: [
      "products/48.jpeg",
      "products/49.jpeg",
    ]
  },

  {
    title: "Stainless Steel Trolley",
    description: "Strong and smooth-moving trolleys designed for transportation of goods. Perfect for hotels, hospitals, industries, warehouses, and catering units. Options include 2-wheel, 4-wheel, platform trolleys, and custom-designed utility trolleys.",
    images: [
      "products/47.jpeg",
    ]
  },
  {
    title: "Stainless Steel Solar Tank",
    description: "High-quality SS solar tanks engineered for solar water heating systems. They provide excellent heat retention, corrosion resistance, and long-term durability. Ideal for homes, commercial buildings, and industrial solar setups.",
    images: [
      "products/45.jpeg",
      "products/46.jpeg",
    ]
  },
  {
    title: "Stainless Steel Chiller Tank",
    description: "SS chiller tanks designed for cooling applications in dairies, beverages, chemical plants, and food industries. They come with insulated construction, leak-proof welding, and hygienic finishing for efficient cooling performance.",
    images: [
      "products/43.jpeg",
      "products/44.jpeg",
    ]
  },
  {
    title: "Stainless Steel Barricade",
    description: "Strong and long-lasting stainless steel barricades used for crowd control, events, public safety, and industrial security. They feature smooth edges, sturdy frames, and weather resistance, making them ideal for indoor and outdoor use.",
    images: [
      "products/2.jpeg",
      "products/42.jpeg",
    ]
  },
  {
    title: "Stainless Steel Steam Tank",
    description: "A Stainless Steel Steam Tank is designed to safely generate, store, and distribute steam for various industrial and commercial applications. Made from high-grade stainless steel, the tank offers excellent heat resistance, corrosion protection, and long-lasting performance. It features precise TIG welding, strong insulation, and a leak-proof structure to ensure efficient steam output and energy savings. Ideal for food processing units, chemical plants, hotels, dairies, and manufacturing industries, this steam tank delivers reliable performance with minimal maintenance.",
    images: [
      "products/59.jpeg",
      "products/60.jpeg",
    ]
  },
  {
    title: "Stainless Steel Wall Guard",
    description: "SS wall guards provide impact protection for hospital corridors, commercial buildings, warehouses, and parking areas. They prevent wall damage while offering a clean, modern, and hygienic look.",
    images: [
      "products/38.jpeg",
      "products/39.jpeg",
  
    ]
  },
  {
    title: "Aluminium Gutter Work",
    description: "Aluminium gutters are lightweight, rust-free, and ideal for rainwater management. We provide fabrication and installation for rooftops, industrial sheds, and commercial buildings. They ensure smooth water flow and long-term durability.",
    images: [
      "products/40.jpeg",
      "products/41.jpeg",
    ]
  },
  {
    title: "All Metal Pipelines",
    description: "We design and install pipelines made from stainless steel, aluminium, mild steel, and brass. Used for industrial fluid transfer, water supply, chemical processing, dairy lines, and plant setups. Pipelines are built with leak-proof TIG welding, accurate alignment, and corrosion resistance.",
    images: [
      "products/18.jpeg",
      "products/26.jpeg",
      "products/27.jpeg"
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
