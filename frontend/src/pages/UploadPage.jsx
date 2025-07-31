import React from "react";
import ExcelUploader from "../components/ui/ExcelUploader";

const UploadPage = () => {
  const handleExcelUpload = (data) => {
    console.log("Parsed Excel Data:", data);
    // Optional: save to backend/localStorage/etc.
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 border decoration-dashed  p-8">
      <ExcelUploader onUpload={handleExcelUpload} />
    </div>
  );
};

export default UploadPage;
