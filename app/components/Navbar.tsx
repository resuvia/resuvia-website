"use client";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "red",
        color: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "5px solid yellow",
      }}
    >
      <h2 style={{ color: "white", margin: 0 }}>🚀 Resuvia</h2>

      <div>
        <a href="#" style={{ color: "white", marginRight: "20px" }}>Home</a>
        <a href="#" style={{ color: "white", marginRight: "20px" }}>Services</a>
        <a href="#" style={{ color: "white", marginRight: "20px" }}>Pricing</a>
        <a href="#" style={{ color: "white" }}>Contact</a>
      </div>
    </nav>
  );
}