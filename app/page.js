"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const buildingName = process.env.NEXT_PUBLIC_BUILDING_NAME || "Sunrise Apartments"
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeAnnouncement, setActiveAnnouncement] = useState(0)

  // Sample announcements - in a real app, these would come from an API or database
  const announcements = [
    "Annual General Meeting scheduled for June 15th",
    "Pool maintenance this weekend - closed Saturday",
    "New recycling guidelines now available in Documents",
  ]

  useEffect(() => {
    setIsLoaded(true)

    // Rotate announcements every 5 seconds
    const interval = setInterval(() => {
      setActiveAnnouncement((prev) => (prev + 1) % announcements.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
        padding: "2rem 1rem",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          overflow: "hidden",
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <div style={{ position: "relative" }}>
          <Image
            src="/building.jpeg"
            alt="Building photo"
            width={900}
            height={300}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
            }}
            priority
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
              padding: "2rem 2rem 1.5rem",
              color: "white",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                marginBottom: "0.5rem",
                textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Welcome to {buildingName}
            </h1>
          </div>
        </div>

        <div style={{ padding: "1.5rem 2rem" }}>
          {/* Announcement ticker */}
          <div
            style={{
              backgroundColor: "#e6f0ff",
              borderRadius: "8px",
              padding: "0.75rem 1rem",
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              borderLeft: "4px solid #0070f3",
            }}
          >
            <div
              style={{
                backgroundColor: "#0070f3",
                color: "white",
                padding: "0.25rem 0.5rem",
                borderRadius: "4px",
                fontSize: "0.8rem",
                fontWeight: "bold",
                marginRight: "1rem",
              }}
            >
              NEWS
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "0.95rem",
                color: "#003366", // Darker text for better contrast
                fontWeight: "500",
                opacity: 1,
                transition: "opacity 0.3s ease",
              }}
            >
              {announcements[activeAnnouncement]}
            </p>
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                gap: "0.25rem",
              }}
            >
              {announcements.map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: i === activeAnnouncement ? "#0070f3" : "#d1e3ff",
                    transition: "background-color 0.3s ease",
                  }}
                ></span>
              ))}
            </div>
          </div>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "#333", // Darker text for better contrast
              marginBottom: "2rem",
            }}
          >
            This website helps residents and the Strata Committee stay informed and connected. Access important
            documents, view announcements, and contact committee members all in one place.
          </p>

          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "1.25rem",
              position: "relative",
              paddingBottom: "0.5rem",
              color: "#222", // Darker text for better contrast
            }}
          >
            <span
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "60px",
                height: "3px",
                backgroundColor: "#0070f3",
                borderRadius: "2px",
              }}
            ></span>
            Quick Links
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                href: "/committee",
                label: "👥 Meet the Committee",
                desc: "Learn about your elected representatives",
                color: "#5f3dc4",
              },
              {
                href: "/announcements",
                label: "📢 Announcements",
                desc: "Stay updated with the latest news",
                color: "#e64980",
              },
              {
                href: "/documents",
                label: "📄 Building Documents",
                desc: "Access important files and reports",
                color: "#1971c2",
              },
              {
                href: "/contact",
                label: "✉️ Contact the Committee",
                desc: "Get in touch with any questions",
                color: "#2b8a3e",
              },
            ].map((link, index) => (
              <Link href={link.href} key={index} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    padding: "1.25rem",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    transition: "all 0.2s ease",
                    border: "1px solid #eaeaea",
                    height: "100%",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)"
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"
                    e.currentTarget.style.borderColor = link.color
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)"
                    e.currentTarget.style.borderColor = "#eaeaea"
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      color: link.color,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {link.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#333", // Darker text for better contrast
                      fontWeight: "500",
                    }}
                  >
                    {link.desc}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      right: "1rem",
                      width: "6px",
                      height: "6px",
                      borderRight: `2px solid ${link.color}`,
                      borderBottom: `2px solid ${link.color}`,
                      transform: "rotate(-45deg)",
                      opacity: 0.7,
                    }}
                  ></div>
                </div>
              </Link>
            ))}
          </div>

          <div
            style={{
              backgroundColor: "#fff8e6",
              borderRadius: "10px",
              padding: "1.25rem",
              marginTop: "1rem",
              borderLeft: "4px solid #f0c000",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff5d9",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
              }}
            >
              ℹ️
            </div>
            <p
              style={{
                margin: 0,
                fontStyle: "italic",
                color: "#664d03", // Already good contrast
                fontSize: "0.95rem",
                flex: 1,
                fontWeight: "500",
              }}
            >
              If you are a resident, please check this website regularly for updates. For urgent matters, please contact
              the building manager directly.
            </p>
          </div>

          <div
            style={{
              marginTop: "2.5rem",
              textAlign: "center",
              padding: "1rem 0",
              borderTop: "1px solid #eaeaea",
            }}
          >
            <button
              style={{
                backgroundColor: "#0070f3",
                color: "white",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 14px rgba(0, 112, 243, 0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#005cc5"
                e.currentTarget.style.transform = "translateY(-2px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#0070f3"
                e.currentTarget.style.transform = "translateY(0)"
              }}
              onClick={() => (window.location.href = "/login")}
            >
              Resident Login
            </button>
          </div>
        </div>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "1.5rem 0",
          color: "#444", // Darker text for better contrast
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} {buildingName} • Managed by the Strata Committee
      </footer>
    </div>
  )
}

