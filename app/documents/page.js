"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, FileText, Download, Calendar, FileSpreadsheet, FileCog, FileCheck } from "lucide-react"

export default function DocumentsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Document categories
  const categories = [
    { id: "all", name: "All Documents" },
    { id: "bylaws", name: "By-Laws & Policies" },
    { id: "minutes", name: "Meeting Minutes" },
    { id: "financial", name: "Financial Reports" },
    { id: "maintenance", name: "Maintenance Records" },
  ]

  // Document data
  const documents = [
    {
      id: 1,
      title: "Building By-Laws",
      description: "Official by-laws governing the building and resident conduct",
      category: "bylaws",
      date: "Updated January 2025",
      fileSize: "1.2 MB",
      fileType: "PDF",
      icon: <FileCog size={24} />,
      color: "#e64980",
      url: "/bylaws.pdf",
    },
    {
      id: 2,
      title: "Pet Policy",
      description: "Guidelines for pet ownership within the building",
      category: "bylaws",
      date: "Updated March 2024",
      fileSize: "450 KB",
      fileType: "PDF",
      icon: <FileCog size={24} />,
      color: "#e64980",
      url: "/pet-policy.pdf",
    },
    {
      id: 3,
      title: "AGM Minutes 2025",
      description: "Minutes from the Annual General Meeting held on February 15, 2025",
      category: "minutes",
      date: "February 15, 2025",
      fileSize: "850 KB",
      fileType: "PDF",
      icon: <FileText size={24} />,
      color: "#1971c2",
      url: "/agm-minutes.pdf",
    },
    {
      id: 4,
      title: "Committee Meeting Minutes - March",
      description: "Minutes from the monthly committee meeting",
      category: "minutes",
      date: "March 5, 2025",
      fileSize: "620 KB",
      fileType: "PDF",
      icon: <FileText size={24} />,
      color: "#1971c2",
      url: "/committee-minutes-march.pdf",
    },
    {
      id: 5,
      title: "Annual Budget 2025",
      description: "Approved budget for the current financial year",
      category: "financial",
      date: "January 1, 2025",
      fileSize: "1.5 MB",
      fileType: "PDF",
      icon: <FileSpreadsheet size={24} />,
      color: "#2b8a3e",
      url: "/annual-budget.pdf",
    },
    {
      id: 6,
      title: "Quarterly Financial Statement",
      description: "Financial statement for Q1 2025",
      category: "financial",
      date: "April 1, 2025",
      fileSize: "980 KB",
      fileType: "PDF",
      icon: <FileSpreadsheet size={24} />,
      color: "#2b8a3e",
      url: "/q1-financial-statement.pdf",
    },
    {
      id: 7,
      title: "Lift Maintenance Report",
      description: "Recent maintenance report for building elevators",
      category: "maintenance",
      date: "March 15, 2025",
      fileSize: "1.1 MB",
      fileType: "PDF",
      icon: <FileCheck size={24} />,
      color: "#5f3dc4",
      url: "/lift-maintenance.pdf",
    },
    {
      id: 8,
      title: "Fire Safety Inspection",
      description: "Annual fire safety compliance report",
      category: "maintenance",
      date: "February 28, 2025",
      fileSize: "2.3 MB",
      fileType: "PDF",
      icon: <FileCheck size={24} />,
      color: "#5f3dc4",
      url: "/fire-safety-report.pdf",
    },
  ]

  // Filter documents based on active category
  const filteredDocuments =
    activeCategory === "all" ? documents : documents.filter((doc) => doc.category === activeCategory)

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
              Building Documents
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
              marginBottom: "1.5rem",
            }}
          >
            Access important building documents, including by-laws, meeting minutes, and financial reports. All
            documents are available for download in PDF format.
          </p>

          {/* Category filters */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "2rem",
              padding: "0.5rem",
              backgroundColor: "#f9fafc",
              borderRadius: "8px",
            }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  border: "none",
                  backgroundColor: activeCategory === category.id ? "#0070f3" : "transparent",
                  color: activeCategory === category.id ? "white" : "#555",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.id) {
                    e.currentTarget.style.backgroundColor = "#e6f0ff"
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.id) {
                    e.currentTarget.style.backgroundColor = "transparent"
                  }
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Documents list */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {filteredDocuments.map((document) => (
              <div
                key={document.id}
                style={{
                  borderRadius: "12px",
                  border: "1px solid #eaeaea",
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)"
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"
                  e.currentTarget.style.borderColor = document.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)"
                  e.currentTarget.style.borderColor = "#eaeaea"
                }}
              >
                <div
                  style={{
                    padding: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: `${document.color}15`,
                        color: document.color,
                        borderRadius: "8px",
                        padding: "0.75rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {document.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "500",
                          color: "#666",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {document.fileType} • {document.fileSize}
                      </div>
                      <div
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                          color: "#222",
                        }}
                      >
                        {document.title}
                      </div>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      color: "#444",
                      marginBottom: "1rem",
                      flex: 1,
                    }}
                  >
                    {document.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.85rem",
                      color: "#666",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Calendar size={14} />
                    <span>{document.date}</span>
                  </div>

                  <a
                    href={document.url}
                    download
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      padding: "0.75rem 1rem",
                      backgroundColor: "transparent",
                      color: document.color,
                      border: `1px solid ${document.color}`,
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      marginTop: "auto",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = document.color
                      e.currentTarget.style.color = "white"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.color = document.color
                    }}
                  >
                    <Download size={16} />
                    Download Document
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <div
              style={{
                padding: "2rem",
                textAlign: "center",
                backgroundColor: "#f9fafc",
                borderRadius: "8px",
                color: "#666",
              }}
            >
              No documents found in this category.
            </div>
          )}
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
    </div>
  )
}

