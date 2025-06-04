export const CallButton = ({
  selectedNumber,
  onCall,
  callStatus,
  isLoading = false,
}) => {
  const getButtonStyle = () => {
    if (callStatus === "calling") {
      return "bg-red-600 hover:bg-red-700 text-white";
    }
    return "bg-green-600 hover:bg-green-700 text-white";
  };

  const getButtonText = () => {
    if (isLoading) return "Loading...";
    if (callStatus === "calling") return "End Call";
    return "Call";
  };
  return (
    <button
      onClick={onCall}
      disabled={!selectedNumber || isLoading}
      className={`px-6 py-2 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${getButtonStyle()}`}
    >
      {getButtonText()}
    </button>
  );
};
