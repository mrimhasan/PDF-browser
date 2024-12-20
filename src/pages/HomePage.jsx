import React, { useState, useEffect } from "react";
import PDFListView from "../components/PDFListView";
import PDFReader from "../components/PDFReader";
import SearchBar from "../components/SearchBar";
//import pdfData from "../data/pdfData.json";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [pdfData, setpdfData] = useState([]);


  useEffect(() => {
    foo();
  }, [])

  const URL = "https://api.npoint.io/dee51ea017d20efdfcc8";
  async function foo() {
    try {
      let response = await fetch(URL);
      let jsonData = await response.json();
      setpdfData(jsonData);

    } catch (error) {
      throw Error(error);
    }
  }
  const filteredPDFs = pdfData.filter((pdf) =>
    pdf.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <SearchBar onSearch={setSearchTerm} />
      {selectedPDF ? (
        <PDFReader selectedPDF={selectedPDF} />
      ) : (
        <PDFListView pdfs={filteredPDFs} onSelect={setSelectedPDF} />
      )}
    </div>
  );
}

export default HomePage;
