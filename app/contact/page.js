"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, User, MessageSquare, Send, Mail, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    unit: "",
    subject: "",
    message: "",
    submitted: false,
    submitting: false,
    error: null,
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, submitting: true }))

    try {
      // Create FormData object
      const formData = new FormData()
      formData.append("name", formState.name)
      formData.append("email", formState.email)
      formData.append("unit", formState.unit)
      formData.append("subject", formState.subject)
      formData.append("message", formState.message)

      // Send the form data to the API
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Server responded with an error")
      }

      const result = await response.json()

      setFormState((prev) => ({
        ...prev,
        submitted: true,
        submitting: false,
        name: "",
        email: "",
        unit: "",
        subject: "",
        message: "",
      }))

      // Reset the success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, submitted: false }))
      }, 5000)
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        submitting: false,
        error: "There was an error submitting your message. Please try again.",
      }))

      // Clear error after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, error: null }))
      }, 5000)
    }
  }

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
              Contact the Committee
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
            Have a question or concern? Use the form below to contact the Strata Committee. We aim to respond to all
            inquiries within 48 hours.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Contact Form */}
            <div>
              <h2
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1.25rem",
                  position: "relative",
                  paddingBottom: "0.5rem",
                  color: "#222",
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
                Send a Message
              </h2>

              {formState.submitted ? (
                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "#e6f7ef",
                    borderRadius: "8px",
                    borderLeft: "4px solid #2b8a3e",
                    marginBottom: "1.5rem",
                    animation: "fadeIn 0.3s ease",
                  }}
                >
                  <h3
                    style={{
                      margin: "0 0 0.5rem 0",
                      color: "#2b8a3e",
                      fontSize: "1.1rem",
                    }}
                  >
                    Message Sent Successfully!
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "#2b6a3e",
                      fontSize: "0.95rem",
                    }}
                  >
                    Thank you for your message. A committee member will get back to you soon.
                  </p>
                </div>
              ) : formState.error ? (
                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "#fff5f5",
                    borderRadius: "8px",
                    borderLeft: "4px solid #e03131",
                    marginBottom: "1.5rem",
                    animation: "fadeIn 0.3s ease",
                  }}
                >
                  <h3
                    style={{
                      margin: "0 0 0.5rem 0",
                      color: "#e03131",
                      fontSize: "1.1rem",
                    }}
                  >
                    Error
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "#c92a2a",
                      fontSize: "0.95rem",
                    }}
                  >
                    {formState.error}
                  </p>
                </div>
              ) : null}

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      color: "#444",
                    }}
                  >
                    <User size={16} style={{ color: "#0070f3" }} />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "8px",
                      border: "1px solid #ddd",
                      fontSize: "1rem",
                      transition: "all 0.2s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#0070f3"
                      e.target.style.boxShadow = "0 0 0 3px rgba(0, 112, 243, 0.15)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ddd"
                      e.target.style.boxShadow = "none"
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      color: "#444",
                    }}
                  >
                    <Mail size={16} style={{ color: "#0070f3" }} />
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "8px",
                      border: "1px solid #ddd",
                      fontSize: "1rem",
                      transition: "all 0.2s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#0070f3"
                      e.target.style.boxShadow = "0 0 0 3px rgba(0, 112, 243, 0.15)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ddd"
                      e.target.style.boxShadow = "none"
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                        fontSize: "0.95rem",
                        fontWeight: "500",
                        color: "#444",
                      }}
                    >
                      <span style={{ fontSize: "16px", color: "#0070f3" }}>🏢</span>
                      Unit Number
                    </label>
                    <input
                      type="text"
                      name="unit"
                      value={formState.unit}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                        fontSize: "1rem",
                        transition: "all 0.2s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#0070f3"
                        e.target.style.boxShadow = "0 0 0 3px rgba(0, 112, 243, 0.15)"
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#ddd"
                        e.target.style.boxShadow = "none"
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                        fontSize: "0.95rem",
                        fontWeight: "500",
                        color: "#444",
                      }}
                    >
                      <span style={{ fontSize: "16px", color: "#0070f3" }}>📋</span>
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                        fontSize: "1rem",
                        backgroundColor: "white",
                        transition: "all 0.2s ease",
                        appearance: "none",
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0.75rem center",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#0070f3"
                        e.target.style.boxShadow = "0 0 0 3px rgba(0, 112, 243, 0.15)"
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#ddd"
                        e.target.style.boxShadow = "none"
                      }}
                    >
                      <option value="">Select a topic</option>
                      <option value="maintenance">Maintenance Request</option>
                      <option value="noise">Noise Complaint</option>
                      <option value="common-areas">Common Areas</option>
                      <option value="bylaws">By-Laws Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      color: "#444",
                    }}
                  >
                    <MessageSquare size={16} style={{ color: "#0070f3" }} />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "8px",
                      border: "1px solid #ddd",
                      fontSize: "1rem",
                      resize: "vertical",
                      fontFamily: "inherit",
                      transition: "all 0.2s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#0070f3"
                      e.target.style.boxShadow = "0 0 0 3px rgba(0, 112, 243, 0.15)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ddd"
                      e.target.style.boxShadow = "none"
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formState.submitting}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.875rem 1.5rem",
                    backgroundColor: "#0070f3",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    cursor: formState.submitting ? "not-allowed" : "pointer",
                    transition: "all 0.2s ease",
                    opacity: formState.submitting ? 0.7 : 1,
                    boxShadow: "0 4px 14px rgba(0, 112, 243, 0.25)",
                  }}
                  onMouseEnter={(e) => {
                    if (!formState.submitting) {
                      e.currentTarget.style.backgroundColor = "#005cc5"
                      e.currentTarget.style.transform = "translateY(-2px)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#0070f3"
                    e.currentTarget.style.transform = "translateY(0)"
                  }}
                >
                  <Send size={16} />
                  {formState.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1.25rem",
                  position: "relative",
                  paddingBottom: "0.5rem",
                  color: "#222",
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
                Contact Information
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    padding: "1.25rem",
                    backgroundColor: "#f9fafc",
                    borderRadius: "12px",
                    border: "1px solid #eaeaea",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      margin: "0 0 1rem 0",
                      color: "#222",
                    }}
                  >
                    Committee Members
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: "#5f3dc420",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#5f3dc4",
                          fontWeight: "bold",
                          fontSize: "1rem",
                        }}
                      >
                        JC
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: "600",
                            color: "#333",
                          }}
                        >
                          Janice – Chairperson
                        </div>
                        <a
                          href="mailto:chair@sunriseapartments.com"
                          style={{
                            fontSize: "0.85rem",
                            color: "#0070f3",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.textDecoration = "underline"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.textDecoration = "none"
                          }}
                        >
                          chair@sunriseapartments.com
                        </a>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: "#e6499020",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#e64980",
                          fontWeight: "bold",
                          fontSize: "1rem",
                        }}
                      >
                        AS
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: "600",
                            color: "#333",
                          }}
                        >
                          Alex – Secretary
                        </div>
                        <a
                          href="mailto:secretary@sunriseapartments.com"
                          style={{
                            fontSize: "0.85rem",
                            color: "#0070f3",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.textDecoration = "underline"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.textDecoration = "none"
                          }}
                        >
                          secretary@sunriseapartments.com
                        </a>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: "#1971c220",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#1971c2",
                          fontWeight: "bold",
                          fontSize: "1rem",
                        }}
                      >
                        TT
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: "600",
                            color: "#333",
                          }}
                        >
                          Taylor – Treasurer
                        </div>
                        <a
                          href="mailto:treasurer@sunriseapartments.com"
                          style={{
                            fontSize: "0.85rem",
                            color: "#0070f3",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.textDecoration = "underline"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.textDecoration = "none"
                          }}
                        >
                          treasurer@sunriseapartments.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "1.25rem",
                    backgroundColor: "#f9fafc",
                    borderRadius: "12px",
                    border: "1px solid #eaeaea",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      margin: "0 0 1rem 0",
                      color: "#222",
                    }}
                  >
                    Building Manager
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <Phone size={18} style={{ color: "#0070f3" }} />
                      <div>
                        <div
                          style={{
                            fontSize: "0.85rem",
                            color: "#666",
                          }}
                        >
                          Phone
                        </div>
                        <a
                          href="tel:0400123456"
                          style={{
                            fontSize: "0.95rem",
                            color: "#333",
                            textDecoration: "none",
                            fontWeight: "500",
                          }}
                        >
                          0400 123 456
                        </a>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <Mail size={18} style={{ color: "#0070f3" }} />
                      <div>
                        <div
                          style={{
                            fontSize: "0.85rem",
                            color: "#666",
                          }}
                        >
                          Email
                        </div>
                        <a
                          href="mailto:manager@sunriseapartments.com"
                          style={{
                            fontSize: "0.95rem",
                            color: "#333",
                            textDecoration: "none",
                            fontWeight: "500",
                          }}
                        >
                          manager@sunriseapartments.com
                        </a>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <Clock size={18} style={{ color: "#0070f3" }} />
                      <div>
                        <div
                          style={{
                            fontSize: "0.85rem",
                            color: "#666",
                          }}
                        >
                          Office Hours
                        </div>
                        <div
                          style={{
                            fontSize: "0.95rem",
                            color: "#333",
                            fontWeight: "500",
                          }}
                        >
                          Mon-Fri: 9AM - 5PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "1.25rem",
                    backgroundColor: "#fff5f5",
                    borderRadius: "12px",
                    border: "1px solid #ffe3e3",
                    borderLeft: "4px solid #e03131",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      margin: "0 0 0.5rem 0",
                      color: "#c92a2a",
                    }}
                  >
                    Emergency Contact
                  </h3>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      margin: "0 0 0.75rem 0",
                      color: "#e03131",
                    }}
                  >
                    For urgent after-hours emergencies only:
                  </p>

                  <a
                    href="tel:0400999999"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "1.1rem",
                      color: "#c92a2a",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    <Phone size={18} />
                    0400 999 999
                  </a>
                </div>
              </div>
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

