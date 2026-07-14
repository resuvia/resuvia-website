"use client";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#ffffff",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🚀 Resuvia</h2>

      <div>
        <a href="#" style={{ marginRight: "20px" }}>Home</a>
        <a href="#" style={{ marginRight: "20px" }}>Services</a>
        <a href="#" style={{ marginRight: "20px" }}>Pricing</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}