"use client";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#ffffff",
        color: "#111827",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ color: "#2563EB", margin: 0 }}>🚀 Resuvia</h2>

      <div>
        <a href="#" style={{ color: "#111827", marginRight: "20px", textDecoration: "none"}}>Home</a>
        <a href="#" style={{ color: "#111827", marginRight: "20px", textDecoration: "none" }}>Services</a>
        <a href="#" style={{ color: "#111827", marginRight: "20px", textDecoration: "none" }}>Pricing</a>
        <a href="#" style={{ color: "#111827" }}>Contact</a>
      </div>
    </nav>
  );
}