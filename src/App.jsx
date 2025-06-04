import { ProspectModal } from "./Components/ProspectModal";
import { Sidebar } from "./Components/Sidebar";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleProspectClick = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar onProspectClick={handleProspectClick} />
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Welcome to Get Replies Dashboard
          </h1>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-600">
              Click on "Prospect" in the sidebar to open the prospect modal and
              start making calls.
            </p>
          </div>
        </div>
      </div>
      <ProspectModal isOpen={isOpen} onClose={handleClose} />
    </div>
  );
}

export default App;
