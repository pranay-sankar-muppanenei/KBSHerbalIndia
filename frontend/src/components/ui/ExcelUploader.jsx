import React, { useState } from "react";
import * as XLSX from "xlsx";
import { RxCross2 } from "react-icons/rx";

const requiredHeaders = [
  "title", "Category", "Image File Names", "Size Options", "Price(s)",
  "Stock Status", "Description", "Primary benefits", "Primary benefits", "Dosage / Usage", "Primary Ingredients", "How to Use [Brand Name] Aloe Vera Juice ( product name )",
];

const ExcelUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [missingFields, setMissingFields] = useState([]);
  const [error, setError] = useState("");

  const allowedTypes = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel",
    "application/vnd.oasis.opendocument.spreadsheet"
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
      setError("Only .xlsx, .xls, or .ods files are accepted.");
      setSelectedFile(null);
      setMissingFields([]);
      return;
    }

    setError("");
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (evt) => {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      if (jsonData.length === 0) {
        setError("The file is empty.");
        return;
      }

      const headers = jsonData[0];
      const missing = requiredHeaders.filter((field) => !headers.includes(field));
      setMissingFields(missing);
    };

    reader.readAsArrayBuffer(file);
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setMissingFields([]);
    setError("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg border shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Bulk Product Upload</h2>

      <div className="mb-4">
        {!selectedFile ? (
          <label className="block cursor-pointer text-gray-600 text-center">
            <div className="border border-gray-300 rounded px-4 py-2 inline-block hover:bg-gray-100 transition">
              Choose File
              <input
                type="file"
                accept=".xlsx,.xls,.ods"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </label>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <p className="text-sm text-gray-700 truncate max-w-[200px]">{selectedFile.name}</p>
            <button
              onClick={handleCancel}
              className="text-red-500 hover:text-red-700 transition"
              title="Remove file"
            >
              <RxCross2 size={20} />
            </button>
          </div>
        )}

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      {/* 📘 Always show required Excel structure */}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-4 text-sm">
        <p className="font-medium text-blue-800 mb-2">Required Excel Structure:</p>
        <p className="text-blue-700 mb-2">The first row must contain these column headers:</p>
        <div className="overflow-x-auto">
          <table className="table-auto border border-blue-100 w-full text-left text-xs">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                {requiredHeaders.map((header) => (
                  <th key={header} className="border px-2 py-1">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
  {requiredHeaders.map((header, i) => (
    <td key={i} className="border px-2 py-1 text-gray-600">
      {i === 0 ? "Title name" :
       i === 1 ? "Category name" :
       i === 2 ? "image1.jpg, image2.jpg" :
       i === 3 ? "Size1, Size2" :
       i === 4 ? "Price1, Price2" :
       i === 5 ? "In Stock / Out of Stock" :
       i === 6 ? "Product description here" :
       i === 7 ? "Primary benefit 1" :
       i === 8 ? "Primary benefit 2" :
       i === 9 ? "Suggested usage instructions" :
       i === 10 ? "Ingredient1, Ingredient2" :
       i === 11 ? "How to use instructions here" :
       ""}
    </td>
  ))}
</tr>

            </tbody>
          </table>
        </div>
        <p className="text-blue-600 mt-2 italic">Note: All columns are required.</p>
      </div>

      {/* ❌ Show missing fields if any */}
      {missingFields.length > 0 && (
        <div className="bg-red-100 text-red-700 border border-red-300 p-4 rounded text-sm">
          <strong>Missing required fields:</strong> {missingFields.join(", ")}
        </div>
      )}
    </div>
  );
};

export default ExcelUploader;
