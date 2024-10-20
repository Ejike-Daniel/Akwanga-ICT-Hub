import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import SuccessModal from "./SuccessModal"; // Import the modal

export default function JoinUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    address: "",
    phone: "",
    email: "",
    sex: "",
    computerOwnership: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form validation function
  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.surname.trim()) newErrors.surname = "Surname is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.phone.trim() || !/^\+?\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Valid phone number is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.sex) newErrors.sex = "Please select your sex";
    if (!formData.computerOwnership)
      newErrors.computerOwnership = "Please select an option";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    // If no errors, show the success message and redirect
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        surname: "",
        address: "",
        phone: "",
        email: "",
        sex: "",
        computerOwnership: "",
      });
    }
  };

  return (
    <section className="relative flex justify-center items-center bg-gray bg-opacity-5">
      {/* Render SuccessModal if form is submitted */}
      {isSubmitted && <SuccessModal onClose={() => setIsSubmitted(false)} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md py-8 px-16 rounded-lg w-full lg:w-[50%] mx-auto my-12"
      >
        <div className="flex justify-center mb-6">
          <img src={logo} alt="logo" className="w-28 h-28" />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2 text-center">
            Personal Information Form
          </h2>
          <p className="text-gray mb-6 text-center">
            Please fill out the form below with the correct information.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <fieldset className="flex flex-col">
              <label htmlFor="firstName" className="mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.firstName}
                placeholder="John"
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="border border-gray rounded p-2 focus:outline-none"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName}</p>
              )}
            </fieldset>

            <fieldset className="flex flex-col">
              <label htmlFor="surname" className="mb-1">
                Surname <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.surname}
                placeholder="Doe"
                onChange={(e) =>
                  setFormData({ ...formData, surname: e.target.value })
                }
                className="border border-gray rounded p-2 focus:outline-none"
              />
              {errors.surname && (
                <p className="text-red-500">{errors.surname}</p>
              )}
            </fieldset>

            <fieldset className="flex flex-col sm:col-span-2">
              <label htmlFor="address" className="mb-1">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="border border-gray rounded p-2 focus:outline-none"
              />
              {errors.address && (
                <p className="text-red-500">{errors.address}</p>
              )}
            </fieldset>

            <fieldset className="flex flex-col">
              <label htmlFor="phone" className="mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+2349067471936"
                className="border border-gray rounded p-2 focus:outline-none"
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </fieldset>

            <fieldset className="flex flex-col">
              <label htmlFor="email" className="mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="someone@example.com"
                className="border border-gray rounded p-2 focus:outline-none"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </fieldset>

            <fieldset className="flex flex-col">
              <label htmlFor="sex" className="mb-1">
                Sex <span className="text-red-500">*</span>
              </label>
              <select
                name="sex"
                id="sex"
                value={formData.sex}
                onChange={(e) =>
                  setFormData({ ...formData, sex: e.target.value })
                }
                className="border border-gray rounded p-2 focus:outline-none"
              >
                <option value="" disabled>
                  Select your sex
                </option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
              {errors.sex && <p className="text-red-500">{errors.sex}</p>}
            </fieldset>

            <fieldset className="flex flex-col">
              <label htmlFor="computerOwnership" className="mb-1">
                Do you have a computer?
              </label>
              <select
                name="computerOwnership"
                id="computerOwnership"
                value={formData.computerOwnership}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    computerOwnership: e.target.value,
                  })
                }
                className="border border-gray rounded p-2 focus:outline-none"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.computerOwnership && (
                <p className="text-red-500">{errors.computerOwnership}</p>
              )}
            </fieldset>
          </div>

          <button
            type="submit"
            className="bg-blue hover:bg-activeBlue text-white font-bold py-2 px-4 rounded mt-6 w-full md:w-[40%] lg:ml-auto transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
