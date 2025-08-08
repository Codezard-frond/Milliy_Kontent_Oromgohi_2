import React, { useState } from "react";
import { motion } from "framer-motion";

// Icons for Directions
const directionIcons = {
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  dotnet:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  ai: "https://cdn-icons-png.flaticon.com/512/8618/8618837.png",
  devops: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
  flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  design: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
};

// Icons for Courses
const courseIcons = {
  // Python
  "python-basic": "https://cdn-icons-png.flaticon.com/512/2936/2936886.png",
  django:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "data-science": "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
  "ml-ai": "https://cdn-icons-png.flaticon.com/512/2593/2593308.png",

  // .NET
  csharp:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  aspnet:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  blazor:
    "https://dotnet.microsoft.com/static/images/redesign/logos/blazor.svg",
  api: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",

  // Vue
  "vue-basic": "https://cdn-icons-png.flaticon.com/512/5968/5968269.png",
  nuxt: "https://nuxt.com/assets/design-kit/icon-green.svg",
  "vue-advanced": "https://cdn-icons-png.flaticon.com/512/753/753244.png",

  // AI
  "ai-basic": "https://cdn-icons-png.flaticon.com/512/2593/2593308.png",
  "neural-networks": "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
  "computer-vision": "https://cdn-icons-png.flaticon.com/512/1995/1995485.png",
  nlp: "https://cdn-icons-png.flaticon.com/512/3823/3823923.png",

  // DevOps
  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  kubernetes:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "ci-cd": "https://cdn-icons-png.flaticon.com/512/565/565422.png",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",

  // Flutter
  "flutter-basic":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  "mobile-ui": "https://cdn-icons-png.flaticon.com/512/186/186225.png",
  firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",

  // Design
  "ui-ux": "https://cdn-icons-png.flaticon.com/512/2778/2778919.png",
  figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  photoshop:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  "web-design": "https://cdn-icons-png.flaticon.com/512/3242/3242257.png",
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    phone: "",
    telegram: "",
    email: "",
    education: "",
    about: "",
    direction: "",
    course: "",
  });

  const [loading, setLoading] = useState(false);

  const directions = {
    python: {
      name: "Python",
      icon: "🐍",
      color: "#3776AB",
      gradient: "linear-gradient(135deg, #3776AB, #FFE873)",
      logo: directionIcons.python,
      courses: [
        {
          id: "python-basic",
          name: "Python Asoslari",
          icon: courseIcons["python-basic"],
        },
        { id: "django", name: "Django Framework", icon: courseIcons.django },
        {
          id: "data-science",
          name: "Data Science",
          icon: courseIcons["data-science"],
        },
        { id: "ml-ai", name: "Machine Learning", icon: courseIcons["ml-ai"] },
      ],
    },
    dotnet: {
      name: "Dot Net",
      icon: "⚡",
      color: "#512BD4",
      gradient: "linear-gradient(135deg, #512BD4, #00D4FF)",
      logo: directionIcons.dotnet,
      courses: [
        { id: "csharp", name: "C# Asoslari", icon: courseIcons.csharp },
        { id: "aspnet", name: "ASP.NET Core", icon: courseIcons.aspnet },
        { id: "blazor", name: "Blazor", icon: courseIcons.blazor },
        { id: "api", name: "Web API", icon: courseIcons.api },
      ],
    },
    vue: {
      name: "Vue.js",
      icon: "💚",
      color: "#4FC08D",
      gradient: "linear-gradient(135deg, #4FC08D, #41B883)",
      logo: directionIcons.vue,
      courses: [
        {
          id: "vue-basic",
          name: "Vue.js Asoslari",
          icon: courseIcons["vue-basic"],
        },
        { id: "nuxt", name: "Nuxt.js", icon: courseIcons.nuxt },
        {
          id: "vue-advanced",
          name: "Vue Advanced",
          icon: courseIcons["vue-advanced"],
        },
      ],
    },
    ai: {
      name: "Sun'iy Intellekt",
      icon: "🤖",
      color: "#FF6B6B",
      gradient: "linear-gradient(135deg, #FF6B6B, #4ECDC4)",
      logo: directionIcons.ai,
      courses: [
        { id: "ai-basic", name: "AI Asoslari", icon: courseIcons["ai-basic"] },
        {
          id: "neural-networks",
          name: "Neural Networks",
          icon: courseIcons["neural-networks"],
        },
        {
          id: "computer-vision",
          name: "Computer Vision",
          icon: courseIcons["computer-vision"],
        },
        { id: "nlp", name: "Natural Language", icon: courseIcons.nlp },
      ],
    },
    devops: {
      name: "DevOps",
      icon: "⚙️",
      color: "#326CE5",
      gradient: "linear-gradient(135deg, #326CE5, #00D4AA)",
      logo: directionIcons.devops,
      courses: [
        { id: "docker", name: "Docker", icon: courseIcons.docker },
        { id: "kubernetes", name: "Kubernetes", icon: courseIcons.kubernetes },
        { id: "ci-cd", name: "CI/CD", icon: courseIcons["ci-cd"] },
        { id: "aws", name: "Cloud AWS", icon: courseIcons.aws },
      ],
    },
    flutter: {
      name: "Flutter",
      icon: "📱",
      color: "#02569B",
      gradient: "linear-gradient(135deg, #02569B, #40C4FF)",
      logo: directionIcons.flutter,
      courses: [
        {
          id: "flutter-basic",
          name: "Flutter Asoslari",
          icon: courseIcons["flutter-basic"],
        },
        { id: "dart", name: "Dart tili", icon: courseIcons.dart },
        {
          id: "mobile-ui",
          name: "Mobile UI/UX",
          icon: courseIcons["mobile-ui"],
        },
        { id: "firebase", name: "Firebase", icon: courseIcons.firebase },
      ],
    },
    design: {
      name: "Web Design",
      icon: "🎨",
      color: "#FF6B35",
      gradient: "linear-gradient(135deg, #FF6B35, #F7931E)",
      logo: directionIcons.design,
      courses: [
        { id: "ui-ux", name: "UI/UX Design", icon: courseIcons["ui-ux"] },
        { id: "figma", name: "Figma", icon: courseIcons.figma },
        { id: "photoshop", name: "Photoshop", icon: courseIcons.photoshop },
        {
          id: "web-design",
          name: "Web Design",
          icon: courseIcons["web-design"],
        },
      ],
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDirectionChange = (directionKey) => {
    setFormData((prev) => ({
      ...prev,
      direction: directionKey,
      course: "", // Reset course when direction changes
    }));
  };

  const handleCourseChange = (courseId) => {
    setFormData((prev) => ({ ...prev, course: courseId }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.direction || !formData.course) {
      alert("Iltimos, yo'nalish va kursni tanlang!");
      return;
    }
    setLoading(true);
    console.log("Form data:", formData);
    setTimeout(() => {
      alert("Ro'yxatdan muvaffaqiyatli o'tdingiz! 🎉");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-800 mb-2">
              RO'YXATDAN O'TISH
            </h2>
            <p className="text-red-500 font-medium">
              <span className="text-red-500">*</span> Majburiy maydonlar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-bold text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    👤 Ism <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm"
                  placeholder="Ismingizni kiriting"
                />
              </div>
              <div>
                <label className="block font-bold text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    👤 Familiya <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm"
                  placeholder="Familiyangizni kiriting"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-2">
                <span className="flex items-center gap-2">
                  🎂 Tug'ilgan sana <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-bold text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    📱 Telefon raqam <span className="text-red-500">*</span>
                  </span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold">
                    +998
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{9}"
                    title="9 ta raqamdan iborat bo'lishi kerak (masalan: 901234567)"
                    className="w-full pl-14 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm"
                    placeholder="901234567"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">Format: 901234567</p>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    📱 Telegram <span className="text-red-500">*</span>
                  </span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold">
                    @
                  </span>
                  <input
                    type="text"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    required
                    className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm"
                    placeholder="username"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-bold text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    📧 Email <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    🏫 O'qish joyi <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm"
                  placeholder="Maktab, kollej yoki universitet nomi"
                />
              </div>
            </div>

            {/* Direction Selection */}
            <div>
              <h3 className="text-2xl font-black text-gray-800 mb-6 text-center">
                YO'NALISHNI TANLANG 🎯
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
                {Object.entries(directions).map(([key, direction]) => (
                  <motion.div
                    key={key}
                    className={`relative p-6 rounded-2xl border-3 cursor-pointer transition-all duration-300 ${
                      formData.direction === key
                        ? "border-blue-400 shadow-lg scale-105"
                        : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}
                    style={{
                      background:
                        formData.direction === key
                          ? direction.gradient
                          : "rgba(255,255,255,0.8)",
                    }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleDirectionChange(key)}
                  >
                    {/* Logo */}
                    <div className="flex justify-center mb-4">
                      <img
                        src={direction.logo}
                        alt={direction.name}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "block";
                        }}
                      />
                      <div
                        className="text-4xl hidden"
                        style={{ display: "none" }}
                      >
                        {direction.icon}
                      </div>
                    </div>

                    <h4
                      className={`text-lg font-black text-center ${
                        formData.direction === key
                          ? "text-white"
                          : "text-gray-800"
                      }`}
                    >
                      {direction.name}
                    </h4>

                    {/* Selection indicator */}
                    {formData.direction === key && (
                      <motion.div
                        className="absolute top-2 right-2 text-white text-xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        ✅
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* About */}
            <div>
              <label className="block font-bold text-gray-700 mb-2">
                <span className="flex items-center gap-2">
                  💭 O'zingiz haqingizda
                </span>
              </label>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none"
                placeholder="Qisqacha o'zingiz haqingizda yozing..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-black text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Yuklanmoqda...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-3">
                  🚀 RO'YXATDAN O'TISH
                </span>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="font-bold">🌟 Kelajak bu yerdan boshlanadi! 🌟</p>
        </motion.div>
      </div>
    </div>
  );
};

export default RegistrationForm;
