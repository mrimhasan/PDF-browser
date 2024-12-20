import React from "react";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function PDFReader({ selectedPDF }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="reader">
      <h2 className="font-bold text-4xl bg-red-700 mb-2 ps-5" >{selectedPDF.name}</h2>
      <p className="text-red-600 mb-2">{selectedPDF.author}</p>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
        <div style={{ height: '750px' }}>
            {selectedPDF.link && <><Viewer
                fileUrl={selectedPDF.link}
                plugins={[
                    defaultLayoutPluginInstance
                ]}
            /></>}
            {!selectedPDF && <>No PDF !!</>}
        </div>
    </Worker>
    </div>
  );
}

export default PDFReader;
