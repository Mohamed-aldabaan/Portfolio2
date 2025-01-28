{
  /* <iframe
src="/zertifikat.pdf"
style={{ width: "100%", height: "600px", border: "none" }}
title="Zertifikat"
/> */
}
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Document, Page, pdfjs } from "react-pdf";
import "./zertifikat.css";

// Setze den Worker-Pfad
pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js";

const PDFGallery = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [error, setError] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pdfFiles = [
    { filePfad: "/pdf/dci.pdf", title: "DCI Zertifikat" },
    { filePfad: "/pdf/arbeitszeugnis.pdf", title: "Arbeitszeugnis" },
    { filePfad: "/pdf/arbeitszeugnis.pdf", title: "Arbeitszeugnis" },
    { filePfad: "/pdf/dci.pdf", title: "Zertifikat 1" },
    { filePfad: "/pdf/dci.pdf", title: "Zertifikat 1" },
  ];

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1); // Standardmäßig auf Seite 1 setzen
  };

  return (
    <div className="flex flex-zertifikat">
      {/* Galerie */}

      <h1 className="left-section">Zertifikat</h1>

      <section className="flex zertifikat-flex">
        {pdfFiles.map((file, index) => (
          <div
            key={index}
            className="zertifikat-item"
            onClick={() => setSelectedPdf(file.filePfad)}
          >
            <Document
              file={file.filePfad}
              onLoadError={(err) => {
                console.error("Fehler beim Laden:", err);
                setError(err.message);
              }}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={1} width={240} />
            </Document>
            <div className="zertifikat-title">{file.title}</div>

            {error && <p style={{ color: "red" }}>Fehler: {error}</p>}
          </div>
        ))}
      </section>

      {/* Vorschau */}
      {selectedPdf && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            overflowY: "auto", // Ermöglicht das Scrollen, wenn das Dokument zu groß ist
          }}
        >
          <div style={{ margin: "30px auto", width: "800px" }}>
            <button
              onClick={() => setSelectedPdf(null)}
              style={{ marginBottom: "10px" }}
            >
              Schließen
            </button>
            <Document
              file={selectedPdf}
              onLoadError={(err) => {
                console.error("Fehler beim Laden der Vorschau:", err);
                setError(err.message);
              }}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "20px",
                    padding: "10px",
                  }}
                >
                  <Page pageNumber={index + 1} width={700} />
                </div>
              ))}
            </Document>
          </div>
        </div>
      )}
    </div>
  );
};
PDFGallery.propTypes = {
  pdfFiles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PDFGallery;
