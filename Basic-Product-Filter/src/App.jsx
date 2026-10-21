
import "./App.css";
import { useState } from "react";

const products = [
    { id: 1, name: "iPhone 16 Pro", category: "Phones", price: "₦1,450,000" },
    { id: 2, name: "Samsung Galaxy S25", category: "Phones", price: "₦1,200,000" },
    { id: 3, name: "MacBook Air M3", category: "Laptops", price: "₦1,650,000" },
    { id: 4, name: "HP EliteBook", category: "Laptops", price: "₦580,000" },
    { id: 5, name: "Google Pixel 9", category: "Phones", price: "₦950,000" },
    { id: 6, name: "Dell XPS 13", category: "Laptops", price: "₦1,400,000" },
];

function App() {
    const [category, setCategory] = useState("All");

    const filteredProducts =
        category === "All"
            ? products
            : products.filter(
                  (product) => product.category === category
              );

    return (
        <div className="shop">
            <header className="shop-header">
                <a href="#home" className="logo">
                    NEX<span>TECH.</span>
                </a>

                <span className="header-tag">
                    TECH COLLECTION / 2026
                </span>
            </header>

            <section className="shop-intro" id="home">
                <p className="eyebrow">
                    DISCOVER YOUR NEXT DEVICE
                </p>

                <h1>
                    Technology,
                    <br />
                    <span>refined.</span>
                </h1>

                <p className="intro-text">
                    Explore our collection of premium devices
                    designed for work, creativity, and everyday life.
                </p>
            </section>

            <section className="products-section">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">THE COLLECTION</p>
                        <h2>Browse products</h2>
                    </div>

                    <span className="product-count">
                        {filteredProducts.length
                            .toString()
                            .padStart(2, "0")}{" "}
                        PRODUCTS
                    </span>
                </div>

                <div className="filter-bar">
                    <span className="filter-label">CATEGORY</span>

                    <div className="filter-buttons">
                        <button
                            className={`filter-btn ${
                                category === "All" ? "active" : ""
                            }`}
                            onClick={() => setCategory("All")}
                        >
                            All
                        </button>

                        <button
                            className={`filter-btn ${
                                category === "Phones" ? "active" : ""
                            }`}
                            onClick={() => setCategory("Phones")}
                        >
                            Phones
                        </button>

                        <button
                            className={`filter-btn ${
                                category === "Laptops" ? "active" : ""
                            }`}
                            onClick={() => setCategory("Laptops")}
                        >
                            Laptops
                        </button>
                    </div>
                </div>

                <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <div
                            className="product-card"
                            key={product.id}
                        >
                            <div className="product-number">
                                PRODUCT /{" "}
                                {product.id.toString().padStart(2, "0")}
                            </div>

                            <div className="product-icon">
                                {product.category === "Phones"
                                    ? "▯"
                                    : "▱"}
                            </div>

                            <span className="product-category">
                                {product.category}
                            </span>

                            <h3>{product.name}</h3>

                            <div className="product-bottom">
                                <span className="product-price">
                                    {product.price}
                                </span>

                                <span className="product-arrow">
                                    ↗
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <p className="empty-message">
                        No products found in this category.
                    </p>
                )}

                <footer className="products-footer">
                    <span>QUALITY MEETS INNOVATION.</span>
                    <span>NEXTECH. © 2026</span>
                </footer>
            </section>
        </div>
    );
}

export default App;
