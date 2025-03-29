"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  FileText,
  Download,
  Calendar,
  FileSpreadsheet,
  FileCog,
  FileCheck,
} from "lucide-react";

export default function DocumentsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: "all", name: "All Documents" },
    { id: "bylaws", name: "By-Laws & Policies" },
    { id: "minutes", name: "Meeting Minutes" },
    { id: "financial", name: "Financial Reports" },
    { id: "maintenance", name: "Maintenance Records" },
  ];

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
  ];

  const filteredDocuments =
    activeCategory === "all"
      ? documents
      : documents.filter((doc) => doc.category === activeCategory);

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
        {/* ...same content as before... */}

        {/* ⛑ Tip box */}
        <div
          style={{
            marginTop: "2rem",
            padding: "1.25rem",
            backgroundColor: "#fff8e6",
            borderRadius: "10px",
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
              color: "#664d03",
              fontSize: "0.95rem",
              flex: 1,
              fontWeight: "500",
            }}
          >
            Can&apos;t find what you&apos;re looking for? Contact the Secretary at{" "}
            <strong>secretary@sunriseapartments.com</strong> to request specific documents.
          </p>
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
  );
}
