import React, { useState } from "react";
import { Button, Input, Select, DatePicker, message } from "antd";
import { UserOutlined, MailOutlined, ReadOutlined } from "@ant-design/icons";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    telegram: "",
    email: "",
    education: "",
    about: "",
    direction: "NET",
    course: "NET",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form data:", formData);
    // API ga jo'natish logikasi
    setTimeout(() => {
      message.success("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Ro'yxatdan o'tish</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-red-500 mb-4">
          * Ushbu belgi bilan ajratilgan maydonlarni to'ldirish majburiy
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block font-medium mb-1">
                Ism <span className="text-red-500">*</span>
              </label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                prefix={<UserOutlined />}
                placeholder="Ismingiz"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Familiya <span className="text-red-500">*</span>
              </label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                prefix={<UserOutlined />}
                placeholder="Familiyangiz"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-1">
              Tug'ilgan sana <span className="text-red-500">*</span>
            </label>
            <DatePicker
              format="MM/DD/YYYY"
              className="w-full"
              onChange={(date, dateString) =>
                setFormData((prev) => ({ ...prev, birthDate: dateString }))
              }
              placeholder="mm/dd/yyyy"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block font-medium mb-1">
                Telegram username <span className="text-red-500">*</span>
              </label>
              <Input
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                addonBefore="@"
                placeholder="username"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                prefix={<MailOutlined />}
                type="email"
                placeholder="Email manzilingiz"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-1">
              O'qish joyi <span className="text-red-500">*</span>
            </label>
            <Input
              name="education"
              value={formData.education}
              onChange={handleChange}
              prefix={<ReadOutlined />}
              placeholder="O'qish joyingiz"
              required
            />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Yo'nalishni tanlang</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border p-4 rounded-lg">
                <label className="flex items-center gap-2 mb-3">
                  <input
                    type="radio"
                    name="direction"
                    value="NET"
                    checked={formData.direction === "NET"}
                    onChange={() => handleSelectChange("direction", "NET")}
                    className="h-4 w-4"
                  />
                  <span className="font-bold">NET</span>
                </label>

                <div className="space-y-2 ml-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="course"
                      value="NET"
                      checked={formData.course === "NET"}
                      onChange={() => handleSelectChange("course", "NET")}
                      className="h-4 w-4"
                    />
                    <span>NET</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="course"
                      value="No Coding"
                      checked={formData.course === "No Coding"}
                      onChange={() => handleSelectChange("course", "No Coding")}
                      className="h-4 w-4"
                    />
                    <span>No Coding</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="course"
                      value="Frontend"
                      checked={formData.course === "Frontend"}
                      onChange={() => handleSelectChange("course", "Frontend")}
                      className="h-4 w-4"
                    />
                    <span>Frontend</span>
                  </label>
                </div>
              </div>

              <div className="border p-4 rounded-lg">
                <label className="flex items-center gap-2 mb-3">
                  <input
                    type="radio"
                    name="direction"
                    value="Python"
                    checked={formData.direction === "Python"}
                    onChange={() => handleSelectChange("direction", "Python")}
                    className="h-4 w-4"
                  />
                  <span className="font-bold">Python</span>
                </label>

                <div className="space-y-2 ml-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="course"
                      value="Flutter"
                      checked={formData.course === "Flutter"}
                      onChange={() => handleSelectChange("course", "Flutter")}
                      className="h-4 w-4"
                    />
                    <span>Flutter</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="course"
                      value="Web Dizayn"
                      checked={formData.course === "Web Dizayn"}
                      onChange={() =>
                        handleSelectChange("course", "Web Dizayn")
                      }
                      className="h-4 w-4"
                    />
                    <span>Web Dizayn</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-1">
              O'zingiz haqingizda qisqacha
            </label>
            <Input.TextArea
              name="about"
              value={formData.about}
              onChange={handleChange}
              rows={4}
              placeholder="O'zingiz haqingizda qisqacha ma'lumot"
            />
          </div>

          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 h-12 font-bold"
          >
            Ro'yxatdan o'tish
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
