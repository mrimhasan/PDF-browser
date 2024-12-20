import React from "react";
import ML from "../assets/ML.png";
function PDFListView({ pdfs, onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {pdfs.map((pdf, indx) => (
        <div
          key={indx}
          className="border p-4 rounded hover:shadow cursor-pointer"
          onClick={() => onSelect(pdf)}
        >
          <img src={ML} alt={pdf.name} className="w-full h-40 object-cover bg-black" />
          <h3 className="font-bold text-lg">{pdf.name}</h3>
          <p className="text-gray-600">{pdf.author}</p>
        </div>
      ))}
    </div>
  );
}

export default PDFListView;
