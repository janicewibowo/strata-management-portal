"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function AnnouncementsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const announcements = [
    {
      id: 1,
      icon: "🚧",
      title: "Lift maintenance scheduled",
      date: "March 29, 2025",
      summary: "Friday 9AM - 2PM",
      priority: "high",
      details:
        "The lift company will be performing routine maintenance on all lifts. Please use the stairs during this time. If you require assistance, please contact the building manager.",
    },
    {
      id: 2,
      icon: "📅",
      title: "Annual General Meeting",
      date: "April 15, 2025",
      summary: "6PM in the common room",
      priority: "medium",
      details:
        "All owners are encouraged to attend this important meeting. The agenda includes budget approval for the next financial year, committee elections, and discussion of proposed renovations to the lobby area.",
    },
    {
      id: 3,
      icon: "💡",
      title: "Lighting upgrade project",
      date: "April 3-7, 2025",
      summary: "Work between 10AM–4PM",
      priority: "medium",
      details:
        "We'll be upgrading to energy-efficient LED lights in all hallways and staircases. This will reduce our electricity consumption by approximately 40% and improve lighting quality. Expect contractors to be working throughout the building during this period.",
    },
    {
      id: 4,
      icon: "🏊",
      title: "Pool closure for maintenance",
      date: "April 10, 2025",
      summary: "Closed for 48 hours",
      priority: "low",
      details:
        "The swimming pool will be closed for routine cleaning and maintenance. We apologize for any inconvenience this may cause.",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleDetails = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "#e03131";
      case "medium":
        return "#f59f00";
      case "low":
      default:
        return "#1971c2";
    }
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case "high":
        return "Important";
      case "medium":
        return "Notification";
      case "low":
      default:
        return "Information";
    }
  };

  return (
    <div style={{ backgroundColor: "#f5f7fa", minHeight: "100vh", padding: "2rem 1rem", fontFamily: "system-ui" }}>
      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#fff",
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
              background: "linear-gradient(135deg, #0070f3 0%, #1e3a8a 100%)",
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
            <h1 style={{ fontSize: "2rem", margin: 0, fontWeight: "bold", textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}>
              Announcements
            </h1>
            <Link href="/" style={{ color: "white", textDecoration: "none", fontSize: "0.9rem", display: "flex", alignItems: "center", opacity: 0.9 }}>
              <ChevronLeft size={16} style={{ marginRight: "4px" }} />
              Back to Home
            </Link>
          </div>
        </div>

        <div style={{ padding: "1.5rem 2rem" }}>
          <p style={{ fontSize: "1.1rem", color: "#333", marginBottom: "2rem", lineHeight: 1.6 }}>
            Stay updated with the latest news and important information about your building.
            Check this page regularly for maintenance schedules, events, and other announcements.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {announcements.map((a) => {
              const isExpanded = expandedItems[a.id] || false;
              const color = getPriorityColor(a.priority);
              const label = getPriorityLabel(a.priority);

              return (
                <div key={a.id} style={{
                  borderRadius: "12px",
                  border: "1px solid #eaeaea",
                  borderLeft: `4px solid ${color}`,
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                  boxShadow: isExpanded ? "0 8px 24px rgba(0,0,0,0.1)" : "0 4px 12px rgba(0,0,0,0.05)"
                }}>
                  <div
                    onClick={() => toggleDetails(a.id)}
                    style={{
                      backgroundColor: isExpanded ? "#f9fafc" : "white",
                      padding: "1.25rem",
                      display: "flex",
                      gap: "1rem",
                      cursor: "pointer"
                    }}
                  >
                    <div style={{ fontSize: "1.8rem", marginTop: "0.2rem" }}>{a.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <div>
                          <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#222", marginBottom: "0.25rem" }}>{a.title}</div>
                          <div style={{ fontSize: "0.9rem", color: "#555" }}>{a.summary}</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{
                            backgroundColor: `${color}20`,
                            color,
                            padding: "0.25rem 0.5rem",
                            borderRadius: "4px",
                            fontSize: "0.75rem",
                            fontWeight: "bold"
                          }}>{label}</div>
                          <div style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.5rem" }}>{a.date}</div>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDetails(a.id);
                        }}
                        style={{
                          backgroundColor: "transparent",
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          padding: "0.25rem 0.75rem",
                          fontSize: "0.85rem",
                          cursor: "pointer",
                          color: "#555",
                          transition: "all 0.2s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = color;
                          e.currentTarget.style.color = color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "#ddd";
                          e.currentTarget.style.color = "#555";
                        }}
                      >
                        {isExpanded ? "Hide details" : "Show details"}
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div style={{ padding: "0 1.25rem 1.25rem 4.8rem", backgroundColor: "#f9fafc" }}>
                      <div style={{
                        padding: "1rem",
                        backgroundColor: "white",
                        borderRadius: "8px",
                        border: "1px solid #eee",
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        color: "#333"
                      }}>
                        {a.details}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{
            marginTop: "2rem",
            padding: "1.25rem",
            backgroundColor: "#fff8e6",
            borderRadius: "10px",
            borderLeft: "4px solid #f0c000",
            display: "flex",
            gap: "1rem"
          }}>
            <div style={{
              backgroundColor: "#fff5d9",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem"
            }}>
              ℹ️
            </div>
            <p style={{
              margin: 0,
              color: "#664d03",
              fontSize: "0.95rem",
              fontWeight: "500"
            }}>
              For urgent matters, contact the building manager at <strong>0400 123 456</strong> or email <strong>manager@sunriseapartments.com</strong>.
            </p>
          </div>
        </div>
      </main>

      <footer style={{ textAlign: "center", padding: "1.5rem 0", color: "#444", fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} Sunrise Apartments • Managed by the Strata Committee
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
