import { Linkedin, Mail, Phone, X } from "lucide-react";
import { CallButton } from "./CallButton";
import { NumberDropdown } from "./NumberDropdown";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const ProspectModal = ({ isOpen, onClose }) => {
  const [selectedNumber, setSelectedNumber] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [callStatus, setCallStatus] = useState("idle");
  const {
    fetchData: fetchDataForNumbers,
    error: numberError,
    data: numbersData,
    loading: numbersLoading,
  } = useFetch();
  const {
    fetchData: callOnNumber,
    error: callOnNumberError,
    data: callOnNumberData,
    loading: callOnNumberLoading,
  } = useFetch();

  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
  };

  const handleFetchNumbers = () => {
    fetchDataForNumbers(
      "https://c9bb-106-51-37-129.ngrok-free.app/api/twilio/numbers",
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
  };

  const handleCall = async () => {
    try {
      if (callStatus === "idle") {
        // getting cors error

        // await callOnNumber(
        //   "http://bb6b-106-51-37-129.ngrok-free.app/api/twilio/call",
        //   {
        //     method: "POST",
        //     body: JSON.stringify({
        //       data: { from: selectedNumber, to: "+918431193377" },
        //     }),
        //   }
        // );
        setTimeout(() => {
          setCallStatus("calling");
        }, 1000);
      } else {
        // getting cors error
        // await callOnNumber(
        //   "http://bb6b-106-51-37-129.ngrok-free.app/api/twilio/call",
        //   {
        //     method: "POST",
        //     body: JSON.stringify({
        //       data: { from: selectedNumber, to: "+918431193377" },
        //     }),
        //   }
        // );
        setTimeout(() => {
          setCallStatus("idle");
        }, 1000);
      }
    } catch (error) {
      console.error("Call failed:", error);
    }
  };

  useEffect(() => {
    // calling on number api error handling to be done here
    console.log(callOnNumberError);
  }, [callOnNumberError]);

  useEffect(() => {
    // fetching phone numbers api error handling to be done here
    console.log(numberError);
  }, [numberError]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"></div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Laura Miller
              </h2>
              <p className="text-gray-600">Acme Corp</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className="h-6 w-6">X</span>
          </button>
        </div>

        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-900">laura.miller@acme.com</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone number
              </label>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">xxxxxxxxxx</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  Reveal
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Linked In
              </label>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4 text-blue-600" />

                <span className="text-gray-900">laura-miller-5999916a</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200">
          <nav className="flex">
            <button className="px-6 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
              Calling
            </button>
          </nav>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            <div className="flex justify-center items-center">
              <div className="w-2/3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Call From:
                </label>
                <NumberDropdown
                  onClick={handleFetchNumbers}
                  onSelect={handleNumberSelect}
                  selectedNumber={selectedNumber}
                  numbers={numbersData}
                />
              </div>
              <div className="w-1/3 ml-4 mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2"></label>
                {selectedNumber && (
                  <CallButton
                    selectedNumber={selectedNumber}
                    onCall={handleCall}
                    callStatus={callStatus}
                    isLoading={callOnNumberLoading}
                  />
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Call Script
              </h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Hey there! At GetReplies AI, we've created an amazing tool
                  that can help you achieve click rates between 35% and 50%,
                  along with response rates of 8% to 15% on your email
                  campaigns. It's all about using advanced personalization to
                  really connect with your audience!
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Voice Mail 1
              </h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Hello! At GetReplies AI, we've developed a fantastic tool
                  designed to boost your email campaigns with click rates
                  ranging from 35% to 50% and response rates between 8% and 15%.
                  It's all about leveraging cutting-edge personalization to
                  truly engage with your audience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
