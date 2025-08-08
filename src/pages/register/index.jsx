import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const FormComponents = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log({ ...data, file });
      setSubmitSuccess(true);
      reset();
      setFile(null);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) {
      // 10MB limit
      setFile(selectedFile);
    } else {
      alert("Fayl hajmi 10MB dan oshmasligi kerak");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Section A: Personal Information */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
          A. Shaxsiy ma'lumotlar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ism *
            </label>
            <input
              {...register("firstName", { required: "Ism kiritilishi shart" })}
              type="text"
              className={`w-full px-3 py-2 border rounded-md ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Familiya *
            </label>
            <input
              {...register("lastName", {
                required: "Familiya kiritilishi shart",
              })}
              type="text"
              className={`w-full px-3 py-2 border rounded-md ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hudud *
            </label>
            <select
              {...register("region", { required: "Hudud tanlanishi shart" })}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.region ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Tanlang</option>
              <option value="tashkent">Toshkent</option>
              <option value="samarkand">Samarqand</option>
              <option value="bukhara">Buxoro</option>
              <option value="andijan">Andijon</option>
            </select>
            {errors.region && (
              <p className="text-red-500 text-xs mt-1">
                {errors.region.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Yosh *
            </label>
            <input
              {...register("age", {
                required: "Yosh kiritilishi shart",
                min: {
                  value: 18,
                  message: "Yoshingiz kamida 18 bo'lishi kerak",
                },
                max: {
                  value: 65,
                  message: "Yoshingiz 65 dan oshmasligi kerak",
                },
              })}
              type="number"
              className={`w-full px-3 py-2 border rounded-md ${
                errors.age ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.age && (
              <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Jinsi *
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  {...register("gender", { required: "Jins tanlanishi shart" })}
                  type="radio"
                  value="male"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Erkak</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  {...register("gender", { required: "Jins tanlanishi shart" })}
                  type="radio"
                  value="female"
                  className="form-radio h-4 w-4 text-pink-600"
                />
                <span className="ml-2 text-gray-700">Ayol</span>
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-xs mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tug'ilgan yili *
            </label>
            <input
              {...register("birthYear", {
                required: "Tug'ilgan yili kiritilishi shart",
                min: { value: 1900, message: "Noto'g'ri yil" },
                max: {
                  value: new Date().getFullYear(),
                  message: "Noto'g'ri yil",
                },
              })}
              type="number"
              className={`w-full px-3 py-2 border rounded-md ${
                errors.birthYear ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.birthYear && (
              <p className="text-red-500 text-xs mt-1">
                {errors.birthYear.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Section B: Address and Education */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
          B. Manzil va Ta'lim
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Yashash manzili *
            </label>
            <input
              {...register("address", { required: "Manzil kiritilishi shart" })}
              type="text"
              className={`w-full px-3 py-2 border rounded-md ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.address && (
              <p className="text-red-500 text-xs mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ta'lim darajasi *
            </label>
            <select
              {...register("education", {
                required: "Ta'lim darajasi tanlanishi shart",
              })}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.education ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Tanlang</option>
              <option value="secondary">O'rta ta'lim</option>
              <option value="specialized">O'rta maxsus</option>
              <option value="higher">Oliy ta'lim</option>
              <option value="master">Magistr</option>
            </select>
            {errors.education && (
              <p className="text-red-500 text-xs mt-1">
                {errors.education.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Section C: Work/Education Place */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
          C. Ish/Ta'lim joyi
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ish joyi yoki O'quv muassasasi *
            </label>
            <input
              {...register("workplace", {
                required: "Ish joyi kiritilishi shart",
              })}
              type="text"
              className={`w-full px-3 py-2 border rounded-md ${
                errors.workplace ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.workplace && (
              <p className="text-red-500 text-xs mt-1">
                {errors.workplace.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Lavozim yoki Yo'nalish
            </label>
            <input
              {...register("position")}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Section D: Portfolio */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
          D. Portfolio
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Portfolio faylini yuklang (PDF, DOC) *
            </label>
            <p className="text-xs text-gray-500 mb-2">Maksimal hajmi: 10MB</p>
            <div className="flex items-center">
              <label className="flex flex-col items-center px-4 py-2 bg-white text-blue-500 rounded-lg border border-blue-500 cursor-pointer hover:bg-blue-50">
                <span className="text-sm font-medium">Fayl tanlash</span>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
              </label>
              {file && (
                <span className="ml-3 text-sm text-gray-700">
                  {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </span>
              )}
            </div>
            {!file && (
              <p className="text-red-500 text-xs mt-1">
                Portfolio fayli yuklanishi shart
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Section E: Motivation */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
          E. Nima uchun aynan siz?
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nima uchun aynan sizni tanlashimiz kerak? *
          </label>
          <textarea
            {...register("motivation", {
              required: "Javob kiritilishi shart",
              minLength: {
                value: 50,
                message: "Javob kamida 50 ta belgidan iborat bo'lishi kerak",
              },
            })}
            rows={5}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.motivation ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="O'zingiz haqingizda va nima uchun aynan sizni tanlashimiz kerak degan savolga javob bering..."
          />
          {errors.motivation && (
            <p className="text-red-500 text-xs mt-1">
              {errors.motivation.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit Section */}
      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={() => {
            reset();
            setFile(null);
          }}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          disabled={isSubmitting}
        >
          Tozalash
        </button>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
          disabled={isSubmitting || !file}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Jo'natilmoqda...
            </span>
          ) : (
            "Ro'yxatdan o'tish"
          )}
        </button>
      </div>

      {submitSuccess && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          Muvaffaqiyatli jo'natildi! Tez orada siz bilan bog'lanamiz.
        </div>
      )}
    </form>
  );
};

function Home() {
  return (
    <div className="w-[70%] m-auto flex flex-col gap-[25px] mt-[20px] max-[768px]:w-[80%] max-[550px]:w-[90%] max-[450px]:w-[95%] pb-10">
      <div className="flex items-center justify-center flex-col gap-[4px]">
        <h1 className="text-[25px] font-bold text-gray-800">
          Davlat xizmatlari ro'yxatdan o'tish portali
        </h1>
        <p className="text-gray-600 max-[450px]:text-[14px] text-center">
          Iltimos, barcha ma'lumotlarni to'g'ri va to'liq kiriting
        </p>
      </div>
      <div>
        <FormComponents />
      </div>
    </div>
  );
}

export default Home;
