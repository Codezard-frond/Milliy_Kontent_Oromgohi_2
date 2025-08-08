import React, { useState, useEffect } from "react";
import { useAxios } from "../hooks";

const CoursesTable = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [data, setData] = useState({
    results: [],
    count: 0,
    next: null,
    previous: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const axios = useAxios();

  const toggleCourse = (id, e) => {
    e.stopPropagation();
    setSelectedCourses((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchCourses = (page = 1) => {
    setLoading(true);
    axios({
      url: `/courses/?page=${page}`,
      method: "GET",
    })
      .then((data) => {
        setData({
          results: data?.results,
          count: data?.count,
          next: data?.next,
          previous: data?.previous,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Kurslarni yuklashda xatolik yuz berdi");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCourses(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (data.next) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (data.previous) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-[90%] m-auto my-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Kurslar Ro'yxati</h1>

      {loading ? (
        <div className="text-center py-10">Yuklanmoqda...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-10">{error}</div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full bg-white border rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">№</th>
                  <th className="p-3 text-left">Kurs Nomi</th>
                  <th className="p-3 text-left">O'qituvchi</th>
                  <th className="p-3 text-left">Narxi</th>
                  <th className="p-3 text-left">Davomiyligi</th>
                  <th className="p-3 w-10 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {data?.results?.map((course, index) => (
                  <tr
                    key={course?.id}
                    className="hover:bg-gray-50 cursor-pointer border-t"
                    onClick={() => openModal(course)}
                  >
                    <td className="p-3">
                      {(currentPage - 1) * 10 + index + 1}
                    </td>
                    <td className="p-3 font-medium">{course?.name}</td>
                    <td className="p-3">{course?.instructor}</td>
                    <td className="p-3">{course?.price} so'm</td>
                    <td className="p-3">{course?.duration} hafta</td>
                    <td
                      className="p-3 text-right"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        checked={selectedCourses.includes(course?.id)}
                        onChange={(e) => toggleCourse(course?.id, e)}
                        className="h-4 w-4 accent-blue-500"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile List */}
          <div className="md:hidden space-y-2">
            {data?.results?.map((course, index) => (
              <div
                key={course?.id}
                className="bg-white p-3 rounded-lg border flex items-center gap-3"
                onClick={() => openModal(course)}
              >
                <input
                  type="checkbox"
                  checked={selectedCourses.includes(course?.id)}
                  onChange={(e) => toggleCourse(course?.id, e)}
                  onClick={(e) => e.stopPropagation()}
                  className="h-4 w-4 flex-none accent-blue-500"
                />
                <div className="flex-1">
                  <div className="font-medium">
                    #{(currentPage - 1) * 10 + index + 1} {course?.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {course?.instructor} • {course?.duration} hafta
                  </div>
                  <div className="text-sm font-medium">
                    {course?.price} so'm
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrevPage}
              disabled={!data?.previous}
              className={`px-4 py-2 rounded ${
                data?.previous
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Oldingi
            </button>
            <span>
              Sahifa {currentPage} (Jami: {Math.ceil(data.count / 10)})
            </span>
            <button
              onClick={handleNextPage}
              disabled={!data?.next}
              className={`px-4 py-2 rounded ${
                data?.next
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Keyingi
            </button>
          </div>
        </>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 mx-2 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">Kurs haqida batafsil</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {selectedCourse && (
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Kurs Nomi</span>
                  <span className="font-medium">{selectedCourse.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">O'qituvchi</span>
                  <span className="font-medium">
                    {selectedCourse.instructor}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Narxi</span>
                  <span className="font-medium">
                    {selectedCourse.price} so'm
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Davomiyligi</span>
                  <span className="font-medium">
                    {selectedCourse.duration} hafta
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Boshlanish sanasi</span>
                  <span className="font-medium">
                    {selectedCourse.start_date}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Dars vaqtlari</span>
                  <span className="font-medium">{selectedCourse.schedule}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Kurs turi</span>
                  <span className="font-medium">
                    {selectedCourse.is_online ? "Online" : "Offline"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Status</span>
                  <span
                    className={`font-medium ${
                      selectedCourse.is_active
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {selectedCourse.is_active ? "Faol" : "Nofaol"}
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium text-gray-500 mb-2">
                    Kurs tavsifi:
                  </h3>
                  <p className="text-gray-700">{selectedCourse.description}</p>
                </div>
                {selectedCourse.image && (
                  <div className="mt-4">
                    <h3 className="font-medium text-gray-500 mb-2">
                      Kurs rasmi:
                    </h3>
                    <img
                      src={selectedCourse.image}
                      alt={selectedCourse.name}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}
              </div>
            )}

            <button
              onClick={closeModal}
              className="mt-6 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesTable;
