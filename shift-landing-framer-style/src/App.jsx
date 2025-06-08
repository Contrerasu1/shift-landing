import React from "react";

export default function ShiftLanding() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#0a0f1c", color: "white" }}>
      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "120px 20px 80px", maxWidth: "1200px", margin: "0 auto" }}>
        <img src="/favicon.ico" alt="Shift Logo" width="60" style={{ marginBottom: 32 }} />
        <h1 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: 20, lineHeight: 1.1 }}>
          Encuentra el trabajo <span style={{ color: "#00C4CC" }}>ideal</span> para ti
        </h1>
        <p style={{ fontSize: "1.3rem", color: "#ccc", marginBottom: 40 }}>
          Shift usa IA para hacer match entre tu experiencia y cargos reales, adaptando tu CV automáticamente.
        </p>
        <a
          href="https://wa.me/56999975732?text=Hola,%20quiero%20mi%20match%20laboral%20con%20Shift!"
          style={{ backgroundColor: "#00C4CC", padding: "16px 36px", color: "#00203A", fontWeight: 600, borderRadius: "32px", fontSize: "1.1rem", textDecoration: "none", boxShadow: "0 6px 24px rgba(0,196,204,0.2)" }}
        >
          🚀 Shift me!
        </a>
      </section>

      {/* Feature Sections - Inspired by Framer */}
      {[
        { src: "/A_digital_screenshot_of_Shift's_landing_webpage_fe.png", alt: "Landing Principal" },
        { src: "/A_promotional_web_page_screenshot_for_Shift,_a_Spa.png", alt: "Trabajo Ideal" },
        { src: "/A_website_screenshot_of_the_company_Shift_is_desig.png", alt: "Ahorra Tiempo" },
        { src: "/A_webpage_section_for_Shift,_an_AI-powered_job_mat.png", alt: "Recomendaciones Personalizadas" },
        { src: "/A_digital_photograph_on_a_website_designed_for_opt.png", alt: "Optimiza tu Currículum" },
      ].map((image, index) => (
        <section
          key={index}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "60px 20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            style={{ maxWidth: "100%", borderRadius: "24px", boxShadow: "0 6px 24px rgba(0,0,0,0.3)", marginBottom: 20 }}
          />
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700 }}>{image.alt}</h2>
        </section>
      ))}

      {/* CTA Final */}
      <section style={{ textAlign: "center", padding: "100px 20px", backgroundColor: "#111827" }}>
        <h2 style={{ fontSize: "2.4rem", marginBottom: 20 }}>¿Listo para automatizar tu búsqueda laboral?</h2>
        <p style={{ fontSize: "1.2rem", color: "#ccc", marginBottom: 32 }}>
          Shift analiza tu experiencia, optimiza tu CV y te conecta con cargos reales.
        </p>
        <a
          href="https://wa.me/56999975732?text=Hola,%20quiero%20mi%20match%20laboral%20con%20Shift!"
          style={{ backgroundColor: "#00C4CC", padding: "16px 36px", color: "#00203A", fontWeight: 600, borderRadius: "32px", fontSize: "1.1rem", textDecoration: "none", boxShadow: "0 6px 24px rgba(0,196,204,0.2)" }}
        >
          🚀 Shift me!
        </a>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", fontSize: "0.9rem", color: "#bbb", padding: "60px 20px" }}>
        © 2025 Shift.ai — Todos los derechos reservados<br />
        <a href="https://wa.me/56999975732" style={{ color: "#00C4CC", textDecoration: "none" }}>Contáctanos por WhatsApp</a> |
        <a href="https://www.linkedin.com/company/shiftjobai/" target="_blank" style={{ color: "#00C4CC", textDecoration: "none" }}>Síguenos en LinkedIn</a>
      </footer>
    </main>
  );
}