import "./zertifikat.css";
import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Zertifikat() {
  const [showFullPdf, setShowFullPdf] = useState(false);

  const handlePdfClick = () => {
    setShowFullPdf(true);
  };
  return (
    <section className="flex zertifikat-flex">
      <h1 className="left-section">Zertifikat</h1>
      {/* style={{width:"30rem"}} */}
      <div className="zertifikat-container">
        {showFullPdf ? (
          <Worker 
            workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
          > 
            <Viewer fileUrl="/zertifikat.pdf" />
          </Worker>
        ) : (
          <div onClick={handlePdfClick} className="zertifikat-preview">
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
            >
              <Viewer fileUrl="/zertifikat.pdf" initialPage={0} />
            </Worker>
          </div>
        )}
        {/* <div className="zertifikat-item">hier kommen meine Zertifikate</div>
        <div className="zertifikat-item">hier kommen meine Zertifikate</div>
        <div className="zertifikat-item">hier kommen meine Zertifikate</div>
        <div className="zertifikat-item">hier kommen meine Zertifikate</div>
        <div className="zertifikat-item">hier kommen meine Zertifikate</div>
        <div className="zertifikat-item">hier kommen meine Zertifikate</div> */}
      </div>
    </section>
  );
}
