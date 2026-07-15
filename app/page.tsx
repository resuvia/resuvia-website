export default function Home() {
  return (
    <main
      style={{
        background: "#f8fbff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        padding: "80px 40px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          color: "#0f172a",
          fontWeight: "bold",
        }}
      >
        🚀 Get Your Dream Job Faster
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#555",
          marginTop: "20px",
        }}
      >
        Professional ATS Resume, LinkedIn & Naukri Profile Services
      </p>

      <p
        style={{
          color: "#2563EB",
          fontSize: "18px",
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        Trusted by Job Seekers Across India 🇮🇳
      </p>

      <a
        href="https://wa.me/918429662753"
        style={{
          display: "inline-block",
          marginTop: "30px",
          background: "#25D366",
          color: "white",
          padding: "16px 35px",
          borderRadius: "10px",
          textDecoration: "none",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        🚀 Get Started on WhatsApp
      </a>

      {/* Services Section */}

<div
  style={{
    marginTop: "80px",
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  }}
>
  <div
    style={{
      background: "#ffffff",
      padding: "30px",
      width: "250px",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    }}
  >
    <h2 style={{ color: "#111827" }}>📄 ATS Resume</h2>
    <p style={{ color: "#4B5563" }}>Professional Resume for Jobs</p>
    <h3 style={{ color: "#2563EB" }}>₹399</h3>
  </div>

  <div
    style={{
      background: "#ffffff",
      padding: "30px",
      width: "250px",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    }}
  >
    <h2 style={{ color: "#111827" }}>💼 LinkedIn Profile</h2>
    <p style={{ color: "#4B5563" }}>Complete LinkedIn 
     Optimization</p>
    <h3 style={{ color: "#2563EB" }}>₹599</h3>
  </div>

  <div
    style={{
      background: "#ffffff",
      padding: "30px",
      width: "250px",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    }}
  >
    <h2 style={{ color: "#111827" }}>🎯 Naukri Profile</h2>
    <p style={{ color: "#4B5563" }}>Profile Setup &
     Optimization</p>
    <h3 style={{ color: "#2563EB" }}>₹499</h3>
  </div>
</div>

<div
  style={{
    marginTop: "80px",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "40px",
      color: "#111827",
      marginBottom: "10px",
    }}
  >
    💰 Our Pricing
  </h2>

  <p
    style={{
      fontSize: "18px",
      color: "#555",
    }}
  >
    Affordable plans for everyone
  </p>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginTop: "40px",
    flexWrap: "wrap",
  }}
>
  <div style={{ background: "#fff", padding: "25px", width: "250px", borderRadius: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
    <h3 style={{ color: "#111827" }}>📄 ATS Resume</h3>
    <p style={{ color: "#4B5563" }}>Professional Resume</p>
    <h2 style={{ color: "#2563EB" }}>₹399</h2>
  </div>

  <div style={{ background: "#fff", padding: "25px", width: "250px", borderRadius: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
    <h3 style={{ color: "#111827" }}>💼 LinkedIn Profile</h3>
    <p style={{ color: "#4B5563" }}>Complete LinkedIn 
     Optimization</p>
    <h2 style={{ color: "#2563EB" }}>₹599</h2>
  </div>

  <div style={{ background: "#fff", padding: "25px", width: "250px", borderRadius: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
    <h3 style={{ color: "#111827" }}>🎯 Naukri Profile</h3>
    <p style={{ color: "#4B5563" }}>Profile Setup & Optimization</p>
    <h2 style={{ color: "#2563EB" }}>₹499</h2>
  </div>
</div>

    </main>
  );
}