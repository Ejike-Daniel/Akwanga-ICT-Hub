import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SuccessModal({ onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the home page after 3 seconds
    const timer = setTimeout(() => {
      onClose();
      navigate("/");
    }, 3000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [navigate, onClose]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto text-center">
        <FaCheckCircle className="text-green-600 text-6xl mb-4" />
        <h1 className="text-2xl font-bold text-green-600">
          Your form has been successfully submitted!
        </h1>
      </div>
    </div>
  );
}
