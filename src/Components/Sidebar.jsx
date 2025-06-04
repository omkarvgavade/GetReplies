export const Sidebar = ({ onProspectClick }) => {
  const menuItems = [
    { id: "prospect", label: "Prospect", active: true },
  ];

  return (
    <div className="w-48 bg-gray-100 h-screen border-r border-gray-200">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">GetReplies</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => item.id === "prospect" && onProspectClick()}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-800"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
