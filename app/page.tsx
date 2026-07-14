import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main
      style={{
        background: "#f8fbff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "48px", color: "#0f172a" }}>
        🚀 Get Hired Faster
      </h1>

      <p style={{ fontSize: "22px", color: "#555", marginTop: "20px" }}>
        Professional Resume, LinkedIn Profile & Job Profile Services
      </p>

      <a
        href="https://wa.me/918429662753?text=Hello%20Resuvia,%20I%20want%20to%20order%20a%20resume."
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
        Order on WhatsApp
      </a>

      <div
        style={{
          marginTop: "70px",
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "25px",
            width: "250px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2>📄 ATS Resume</h2>
          <p>Professional Resume for Jobs</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            width: "250px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2>💼 LinkedIn Profile</h2>
          <p>Complete LinkedIn Optimization</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            width: "250px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2>🎯 Naukri Profile</h2>
          <p>Job Profile Setup & Optimization</p>
        </div>
      </div>
      <div
  style={{
    marginTop: "50px",
    background: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  }}
>
  <h2>💰 Our Prices</h2>

  <p>📄 ATS Resume - ₹399</p>
  <p>💼 LinkedIn Profile Optimization - ₹599</p>
  <p>🎯 Naukri Profile Setup - ₹499</p>
  <p><b>🔥 Premium Combo (All 3 Services) - ₹1,199</b></p>
</div>
<div
  style={{
    marginTop: "60px",
    padding: "30px",
    background: "#ffffff",
    borderRadius: "12px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  }}
>
  <h2>⭐ Customer Reviews</h2>

  <p>⭐⭐⭐⭐⭐ "Amazing resume service. I got interview calls within a week!" - Rahul S.</p>

  <p>⭐⭐⭐⭐⭐ "Very professional LinkedIn profile. Highly recommended." - Priya K.</p>

  <p>⭐⭐⭐⭐⭐ "Best resume writing service. Worth every rupee." - Aman G.</p>
</div>
<div
  style={{
    marginTop: "50px",
    padding: "30px",
    background: "#ffffff",
    borderRadius: "12px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  }}
>
  <h2>❓ Frequently Asked Questions</h2>

  <p><b>Q. ATS Resume kya hota hai?</b></p>
  <p>ATS Resume aisa resume hota hai jo companies ke ATS software me easily pass ho jata hai.</p>

  <p><b>Q. Delivery kitne time me milegi?</b></p>
  <p>24–48 hours ke andar.</p>

  <p><b>Q. Payment kaise kar sakte hain?</b></p>
  <p>UPI, Bank Transfer ya WhatsApp ke through.</p>

  <p><b>Q. Kya Resume me changes karwa sakte hain?</b></p>
  <p>Haan, delivery ke baad 2 free revisions milenge.</p>
</div>
<div
  style={{
    marginTop: "50px",
    padding: "30px",
    background: "#ffffff",
    borderRadius: "12px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  }}
>
  <h2>📞 Contact Us</h2>

  <p>📱 WhatsApp: +91 8429662753</p>
  <p>📧 Email: resuviaofficial@gmail.com</p>
  <p>📍 India</p>
  <p>⏰ Monday – Saturday | 9:00 AM – 8:00 PM</p>
</div>
    </main>
    </>
  );
}