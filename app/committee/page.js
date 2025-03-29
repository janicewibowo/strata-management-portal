"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Mail, Phone, Calendar } from "lucide-react"

export default function CommitteePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [expandedMembers, setExpandedMembers] = useState({
    chair: false,
    secretary: false,
    treasurer: false,
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleMemberInfo = (member) => {
    setExpandedMembers((prev) => ({
      ...prev,
      [member]: !prev[member],
    }))
  }

  // Committee members data
  const committeeMembers = [
    {
      id: "chair",
      name: "Janice",
      role: "Chairperson",
      image: "/chairperson.jpeg",
      color: "#5f3dc4",
      description:
        "Responsible for overseeing the committee's responsibilities and ensuring effective decision-making.",
      contact: "chair@sunriseapartments.com",
      phone: "0400 111 222",
      term: "Since April 2023",
    },
    {
      id: "secretary",
      name: "Alex",
      role: "Secretary",
      image: "/secretary.jpeg",
      color: "#e64980",
      description: "Manages committee records, meeting minutes, and communication with residents.",
      contact: "secretary@sunriseapartments.com",
      phone: "0400 333 444",
      term: "Since June 2023",
    },
    {
      id: "treasurer",
      name: "Taylor",
      role: "Treasurer",
      image: "/treasurer.jpeg",
      color: "#1971c2",
      description: "Oversees financial matters, including levies and maintenance fund allocation.",
      contact: "treasurer@sunriseapartments.com",
      phone: "0400 555 666",
      term: "Since January 2024",
    },
  ]

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
          <div
            style={{
              height: "120px",
              backgroundColor: "#0070f3",
              backgroundImage: "linear-gradient(135deg, #0070f3 0%, #1e3a8a 100%)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "1.5rem 2rem",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                margin: 0,
                textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                fontWeight: "bold",
              }}
            >
              Meet the Committee
            </h1>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                textDecoration: "none",
                fontSize: "0.9rem",
                opacity: 0.9,
              }}
            >
              <ChevronLeft size={16} style={{ marginRight: "4px" }} />
              Back to Home
            </Link>
          </div>
        </div>

        <div style={{ padding: "1.5rem 2rem" }}>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "#333",
              marginBottom: "2rem",
            }}
          >
            The Strata Committee is elected by owners to manage the building and make decisions on behalf of the Owners
            Corporation. Committee members volunteer their time to ensure the building is well-maintained and the
            community thrives.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            {committeeMembers.map((member) => {
              const isExpanded = expandedMembers[member.id]

              return (
                <div
                  key={member.id}
                  style={{
                    borderRadius: "12px",
                    border: "1px solid #eaeaea",
                    overflow: "hidden",
                    transition: "all 0.2s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "8px",
                      backgroundColor: member.color,
                    }}
                  ></div>

                  <div
                    style={{
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "120px",
                        height: "120px",
                        marginBottom: "1rem",
                      }}
                    >
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={`${member.name} - ${member.role}`}
                        width={120}
                        height={120}
                        style={{
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: `3px solid ${member.color}`,
                        }}
                      />
                    </div>

                    <h2
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                        margin: "0 0 0.25rem 0",
                        color: "#222",
                      }}
                    >
                      {member.name}
                    </h2>

                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: "500",
                        color: member.color,
                        marginBottom: "1rem",
                      }}
                    >
                      {member.role}
                    </div>

                    <p
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        color: "#444",
                        marginBottom: "1.25rem",
                      }}
                    >
                      {member.description}
                    </p>

                    <button
                      onClick={() => toggleMemberInfo(member.id)}
                      style={{
                        backgroundColor: isExpanded ? `${member.color}10` : "transparent",
                        border: `1px solid ${member.color}`,
                        borderRadius: "6px",
                        padding: "0.5rem 1rem",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        cursor: "pointer",
                        color: member.color,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        transition: "all 0.2s ease",
                        marginTop: "auto",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${member.color}20`
                      }}
                      onMouseLeave={(e) => {
                        if (!isExpanded) {
                          e.currentTarget.style.backgroundColor = "transparent"
                        } else {
                          e.currentTarget.style.backgroundColor = `${member.color}10`
                        }
                      }}
                    >
                      {isExpanded ? "Hide Contact Info" : "Contact Information"}
                      <span
                        style={{
                          display: "inline-block",
                          width: "8px",
                          height: "8px",
                          borderRight: `2px solid ${member.color}`,
                          borderBottom: `2px solid ${member.color}`,
                          transform: isExpanded ? "rotate(225deg)" : "rotate(45deg)",
                          marginTop: isExpanded ? "2px" : "-2px",
                          transition: "transform 0.2s ease",
                        }}
                      ></span>
                    </button>

                    {isExpanded && (
                      <div
                        style={{
                          marginTop: "1.25rem",
                          padding: "1rem",
                          backgroundColor: "#f9fafc",
                          borderRadius: "8px",
                          width: "100%",
                          animation: "fadeIn 0.3s ease",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            marginBottom: "0.75rem",
                            fontSize: "0.9rem",
                            color: "#444",
                          }}
                        >
                          <Mail size={16} style={{ color: member.color }} />
                          <a
                            href={`mailto:${member.contact}`}
                            style={{
                              color: member.color,
                              textDecoration: "none",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.textDecoration = "underline"
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.textDecoration = "none"
                            }}
                          >
                            {member.contact}
                          </a>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            marginBottom: "0.75rem",
                            fontSize: "0.9rem",
                            color: "#444",
                          }}
                        >
                          <Phone size={16} style={{ color: member.color }} />
                          <a
                            href={`tel:${member.phone.replace(/\s/g, "")}`}
                            style={{
                              color: member.color,
                              textDecoration: "none",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.textDecoration = "underline"
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.textDecoration = "none"
                            }}
                          >
                            {member.phone}
                          </a>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            fontSize: "0.9rem",
                            color: "#444",
                          }}
                        >
                          <Calendar size={16} style={{ color: member.color }} />
                          <span>Committee member {member.term}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div
            style={{
              backgroundColor: "#f0f7ff",
              borderRadius: "10px",
              padding: "1.25rem",
              marginTop: "1rem",
              borderLeft: "4px solid #0070f3",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#e6f0ff",
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
            <div
              style={{
                color: "#003366",
                fontSize: "0.95rem",
                flex: 1,
                fontWeight: "500",
              }}
            >
              <p style={{ margin: "0 0 0.5rem 0" }}>
                <strong>Committee Meetings:</strong> Held on the first Tuesday of each month at 7PM in the common room.
              </p>
              <p style={{ margin: 0 }}>
                Interested in joining the committee? Elections are held annually at the AGM. Contact the secretary for
                more information.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "1.5rem 0",
          color: "#444",
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} Sunrise Apartments • Managed by the Strata Committee
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
