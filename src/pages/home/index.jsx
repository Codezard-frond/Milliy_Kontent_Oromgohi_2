import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const NeuroNexusAcademy = () => {
  const [activeMode, setActiveMode] = useState("ai");
  const [particles, setParticles] = useState([]);
  const [time, setTime] = useState(0);

  const modes = {
    ai: {
      color: "#8B5CF6", // Yumshoq binafsha
      bgGradient: "linear-gradient(135deg, #F3E8FF, #E9D5FF, #DDD6FE)",
      cardBg:
        "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(167, 139, 250, 0.08))",
      icon: "🤖",
      title: "AI & ROBOTIKA",
      subtitle: "Sun'iy aql va robotlar!",
      description:
        "O'z robotingni yasa va dasturlashni o'rgan! AI bilan do'st bo'l 🚀",
      features: [
        { icon: "🤖", text: "AI Do'stlari", desc: "Aqlli robotlar" },
        { icon: "🎮", text: "Kod O'yinlari", desc: "O'yin yasab o'rgan" },
        { icon: "🏆", text: "Mukofotlar", desc: "G'alaba qozon!" },
      ],
    },
    game: {
      color: "#10B981", // Yumshoq yashil
      bgGradient: "linear-gradient(135deg, #ECFDF5, #D1FAE5, #A7F3D0)",
      cardBg:
        "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.08))",
      icon: "🎮",
      title: "GAME DEVELOPMENT",
      subtitle: "O'yin yaratish!",
      description:
        "O'z o'yiningni yarat va do'stlaring bilan o'yna! 3D dunyo qur 🌟",
      features: [
        { icon: "🎯", text: "3D O'yinlar", desc: "Ajoyib dunyo" },
        { icon: "👾", text: "Personajlar", desc: "O'z qahramonlaring" },
        { icon: "🏅", text: "Turnirlar", desc: "Raqobat qil!" },
      ],
    },
    web: {
      color: "#3B82F6", // Yumshoq ko'k
      bgGradient: "linear-gradient(135deg, #EFF6FF, #DBEAFE, #BFDBFE)",
      cardBg:
        "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.08))",
      icon: "🌐",
      title: "WEB DEVELOPMENT",
      subtitle: "Veb-sayt yaratish!",
      description:
        "Ajoyib veb-saytlar yasa va dunyoga ko'rsat! Internet qiroli bo'l 👑",
      features: [
        { icon: "💻", text: "Cool Saytlar", desc: "Zamonaviy dizayn" },
        { icon: "📱", text: "Mobil App", desc: "Telefon uchun" },
        { icon: "⚡", text: "Tez Yuklanish", desc: "Super tezlik" },
      ],
    },
    design: {
      color: "#F59E0B", // Yumshoq oltin-sariq
      bgGradient: "linear-gradient(135deg, #FFFBEB, #FEF3C7, #FDE68A)",
      cardBg:
        "linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.08))",
      icon: "🎨",
      title: "CREATIVE DESIGN",
      subtitle: "Ijodiy dizayn!",
      description:
        "Rang-barang suratlar va animatsiyalar yarat! Rassomlik san'ati ✨",
      features: [
        { icon: "🖌️", text: "Digital Art", desc: "Raqamli rasm" },
        { icon: "🎬", text: "Animatsiya", desc: "Harakat berish" },
        { icon: "🌈", text: "Rang Dunyosi", desc: "Cheksiz imkoniyat" },
      ],
    },
  };

  const students = [
    {
      name: "Amir",
      age: "12",
      avatar: "👦",
      achievement: "O'yinlar yaratuvchi",
      quote: "Men Minecraft kabi o'yin yaratdim!",
      bg: "from-blue-300 to-indigo-400",
    },
    {
      name: "Zarina",
      age: "14",
      avatar: "👧",
      achievement: "Web dizayner",
      quote: "Mening saytim 10,000 ta ko'rildi!",
      bg: "from-pink-300 to-rose-400",
    },
    {
      name: "Botir",
      age: "13",
      avatar: "🧑",
      achievement: "AI mutaxassis",
      quote: "Robotim menga matematika o'rgatadi!",
      bg: "from-emerald-300 to-teal-400",
    },
  ];

  useEffect(() => {
    // Create animated particles
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 15 + 8,
      speed: Math.random() * 2 + 1,
      emoji: ["⭐", "✨", "🌟", "💫", "🔥", "💎", "🚀", "🎯"][
        Math.floor(Math.random() * 8)
      ],
    }));
    setParticles(newParticles);

    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden transition-all duration-1000"
      style={{
        background: modes[activeMode].bgGradient,
      }}
    >
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed text-3xl pointer-events-none"
          style={{
            fontSize: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
          }}
          animate={{
            x: [0, Math.sin(time * 0.01 + particle.id) * 40],
            y: [0, Math.cos(time * 0.01 + particle.id) * 25],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + particle.id,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}

      {/* Floating Geometric Shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="fixed pointer-events-none"
          style={{
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 3) * 30}%`,
            width: "50px",
            height: "50px",
            borderRadius: i % 2 === 0 ? "50%" : "20%",
            background: `linear-gradient(45deg, ${modes[activeMode].color}20, transparent)`,
            border: `1px solid ${modes[activeMode].color}40`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="p-6 bg-white/20 backdrop-blur-xl border-b border-white/30">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div
              className="flex items-center gap-4"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-4xl animate-bounce">🎓</div>
              <div>
                <h1 className="text-2xl font-black text-gray-800">
                  NEURAL NEXUS
                </h1>
                <p className="text-gray-600 font-bold">BOLALAR AKADEMIYASI</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 bg-white/30 px-6 py-3 rounded-full backdrop-blur-sm border border-white/40"
              animate={{
                boxShadow: `0 0 20px ${modes[activeMode].color}30`,
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-gray-700 font-bold">
                3000+ Faol O'quvchi
              </span>
            </motion.div>
          </div>
        </header>

        {/* Mode Selection */}
        <div className="p-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl md:text-6xl font-black text-center mb-12 text-gray-800"
              style={{ textShadow: `0 0 20px ${modes[activeMode].color}40` }}
              animate={{
                color: [
                  modes[activeMode].color,
                  "#374151",
                  modes[activeMode].color,
                ],
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              KELAJAK TEXNOLOGIYASI! 🚀
            </motion.h2>

            {/* Mode Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {Object.entries(modes).map(([key, mode]) => (
                <motion.button
                  key={key}
                  className="p-6 rounded-2xl font-black text-lg border-2 relative overflow-hidden group transition-all duration-300"
                  style={{
                    background:
                      activeMode === key
                        ? mode.cardBg
                        : "rgba(255,255,255,0.4)",
                    borderColor:
                      activeMode === key ? mode.color : "rgba(255,255,255,0.5)",
                    boxShadow:
                      activeMode === key
                        ? `0 0 25px ${mode.color}30`
                        : "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: `0 10px 30px ${mode.color}40`,
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveMode(key)}
                >
                  <div className="text-4xl mb-3 group-hover:animate-bounce">
                    {mode.icon}
                  </div>
                  <div
                    className="font-black uppercase text-sm"
                    style={{
                      color: activeMode === key ? mode.color : "#4B5563",
                    }}
                  >
                    {key}
                  </div>

                  {/* Glow effect when active */}
                  {activeMode === key && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{ background: `${mode.color}10` }}
                      animate={{ opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Main Display Card */}
            <motion.div
              className="rounded-3xl p-10 mb-16 text-center relative overflow-hidden backdrop-blur-sm"
              style={{
                background: modes[activeMode].cardBg,
                border: `2px solid ${modes[activeMode].color}40`,
                boxShadow: `0 10px 40px ${modes[activeMode].color}20`,
              }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, ${modes[activeMode].color} 2px, transparent 2px)`,
                  backgroundSize: "30px 30px",
                }}
              />

              <motion.div
                className="text-7xl md:text-8xl mb-6 relative"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {modes[activeMode].icon}
              </motion.div>

              <motion.h2
                className="text-3xl md:text-5xl font-black mb-4"
                style={{
                  color: modes[activeMode].color,
                  textShadow: `0 0 15px ${modes[activeMode].color}30`,
                }}
              >
                {modes[activeMode].title}
              </motion.h2>

              <motion.p className="text-xl md:text-2xl font-bold mb-6 text-gray-700">
                {modes[activeMode].subtitle}
              </motion.p>

              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-medium">
                {modes[activeMode].description}
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6">
                {modes[activeMode].features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50"
                    whileHover={{
                      scale: 1.03,
                      y: -3,
                      boxShadow: `0 15px 30px ${modes[activeMode].color}20`,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h3
                      className="font-black text-lg mb-2"
                      style={{ color: modes[activeMode].color }}
                    >
                      {feature.text}
                    </h3>
                    <p className="text-gray-600 font-medium">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Students Section */}
            <div className="mb-16">
              <motion.h3
                className="text-3xl md:text-5xl font-black text-center mb-10"
                style={{
                  color: modes[activeMode].color,
                  textShadow: `0 0 15px ${modes[activeMode].color}30`,
                }}
              >
                BIZNING YULDUZLARIMIZ ⭐
              </motion.h3>

              <div className="grid md:grid-cols-3 gap-6">
                {students.map((student, i) => (
                  <motion.div
                    key={i}
                    className="p-6 rounded-3xl backdrop-blur-sm border border-white/40 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${modes[activeMode].color}08, rgba(255,255,255,0.3))`,
                    }}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      boxShadow: `0 15px 40px ${modes[activeMode].color}25`,
                    }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-r ${student.bg} flex items-center justify-center text-2xl shadow-lg`}
                      >
                        {student.avatar}
                      </div>
                      <div>
                        <h4 className="font-black text-lg text-gray-800">
                          {student.name}
                        </h4>
                        <p className="text-gray-600 font-medium">
                          {student.age} yosh
                        </p>
                        <p
                          className="font-bold text-sm"
                          style={{ color: modes[activeMode].color }}
                        >
                          {student.achievement}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 font-medium italic">
                      "{student.quote}"
                    </p>

                    {/* Star rating */}
                    <div className="flex gap-1 mt-4">
                      {[...Array(5)].map((_, starI) => (
                        <motion.span
                          key={starI}
                          className="text-lg"
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            delay: starI * 0.1,
                            duration: 3,
                            repeat: Infinity,
                          }}
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              className="text-center p-10 rounded-3xl relative overflow-hidden backdrop-blur-sm"
              style={{
                background: `linear-gradient(135deg, ${modes[activeMode].color}15, rgba(255,255,255,0.3))`,
                border: `2px solid ${modes[activeMode].color}40`,
                boxShadow: `0 15px 50px ${modes[activeMode].color}25`,
              }}
              animate={{
                boxShadow: [
                  `0 15px 50px ${modes[activeMode].color}25`,
                  `0 20px 60px ${modes[activeMode].color}35`,
                  `0 15px 50px ${modes[activeMode].color}25`,
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <motion.h2
                className="text-4xl md:text-6xl font-black mb-6"
                style={{
                  color: modes[activeMode].color,
                  textShadow: `0 0 20px ${modes[activeMode].color}40`,
                }}
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                SEN HAM YULDUZ BO'L! 🌟
              </motion.h2>

              <p className="text-xl md:text-2xl text-gray-700 mb-10 font-bold">
                Bugun boshlang, ertaga ustoz bo'ling! 🚀
              </p>

              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <motion.button
                  className="px-10 py-4 rounded-2xl font-black text-xl text-white relative overflow-hidden"
                  style={{
                    background: `linear-gradient(45deg, ${modes[activeMode].color}, ${modes[activeMode].color}CC)`,
                    boxShadow: `0 8px 25px ${modes[activeMode].color}40`,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: `0 12px 35px ${modes[activeMode].color}50`,
                  }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    boxShadow: [
                      `0 8px 25px ${modes[activeMode].color}40`,
                      `0 10px 30px ${modes[activeMode].color}50`,
                      `0 8px 25px ${modes[activeMode].color}40`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Link to="/register">
                    <span className="relative z-10 flex items-center gap-3">
                      <span className="text-2xl">🎯</span>
                      RO'YXATDAN O'TISH
                    </span>
                  </Link>
                </motion.button>

                <motion.button
                  className="px-10 py-4 rounded-2xl font-black text-xl border-2 relative overflow-hidden backdrop-blur-sm"
                  style={{
                    borderColor: modes[activeMode].color,
                    color: modes[activeMode].color,
                    background: "rgba(255,255,255,0.3)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    backgroundColor: `${modes[activeMode].color}15`,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to="/curslar">
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">📚</span>
                      KURSLAR HAQIDA
                    </span>
                  </Link>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-8 bg-white/20 backdrop-blur-xl border-t border-white/30 mt-16">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              className="flex justify-center items-center gap-4 mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-3xl">🎓</span>
              <h3 className="text-xl font-black text-gray-800">
                NEURAL NEXUS ACADEMY
              </h3>
              <span className="text-3xl">🚀</span>
            </motion.div>
            <p className="text-gray-600 text-base font-bold">
              © 2025 Neural Nexus Academy - Tashkent | Kelajak bu yerdan
              boshlanadi! 🌟
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NeuroNexusAcademy;
