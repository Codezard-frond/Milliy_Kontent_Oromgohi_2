import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const NeuroNexusAcademy = () => {
  const [activeMode, setActiveMode] = useState("ai");
  const [particles, setParticles] = useState([]);
  const [time, setTime] = useState(0);

  const modes = {
    ai: {
      color: "#ff6b35",
      bgGradient: "linear-gradient(135deg, #ff6b35, #f7931e, #ffeb3b)",
      cardBg: "linear-gradient(135deg, #ff6b3520, #f7931e20)",
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
      color: "#00d4ff",
      bgGradient: "linear-gradient(135deg, #00d4ff, #0099cc, #6c5ce7)",
      cardBg: "linear-gradient(135deg, #00d4ff20, #0099cc20)",
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
      color: "#00b894",
      bgGradient: "linear-gradient(135deg, #00b894, #00cec9, #6c5ce7)",
      cardBg: "linear-gradient(135deg, #00b89420, #00cec920)",
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
      color: "#e84393",
      bgGradient: "linear-gradient(135deg, #e84393, #fd79a8, #fdcb6e)",
      cardBg: "linear-gradient(135deg, #e8439320, #fd79a820)",
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
      bg: "from-blue-400 to-purple-600",
    },
    {
      name: "Zarina",
      age: "14",
      avatar: "👧",
      achievement: "Web dizayner",
      quote: "Mening saytim 10,000 ta ko'rildi!",
      bg: "from-pink-400 to-red-600",
    },
    {
      name: "Botir",
      age: "13",
      avatar: "🧑",
      achievement: "AI mutaxassis",
      quote: "Robotim menga matematika o'rgatadi!",
      bg: "from-green-400 to-blue-600",
    },
  ];

  useEffect(() => {
    // Create animated particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
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
      className="relative min-h-screen overflow-hidden"
      style={{
        background: modes[activeMode].bgGradient,
      }}
    >
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed text-4xl pointer-events-none"
          style={{
            fontSize: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))",
          }}
          animate={{
            x: [0, Math.sin(time * 0.01 + particle.id) * 50],
            y: [0, Math.cos(time * 0.01 + particle.id) * 30],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + particle.id,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}

      {/* Floating Geometric Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="fixed pointer-events-none"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: "60px",
            height: "60px",
            borderRadius: i % 2 === 0 ? "50%" : "20%",
            background: `linear-gradient(45deg, ${modes[activeMode].color}40, transparent)`,
            border: `2px solid ${modes[activeMode].color}80`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="p-6 bg-white/10 backdrop-blur-xl border-b-4 border-white/20">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div
              className="flex items-center gap-4"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-4xl animate-bounce">🎓</div>
              <div>
                <h1 className="text-2xl font-black text-white">NEURAL NEXUS</h1>
                <p className="text-white/80 font-bold">BOLALAR AKADEMIYASI</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full backdrop-blur"
              animate={{
                boxShadow: `0 0 30px ${modes[activeMode].color}50`,
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-white font-bold">3000+ Faol O'quvchi</span>
            </motion.div>
          </div>
        </header>

        {/* Mode Selection */}
        <div className="p-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-5xl md:text-7xl font-black text-center mb-12 text-white"
              style={{ textShadow: `0 0 30px ${modes[activeMode].color}` }}
              animate={{
                color: ["#ffffff", modes[activeMode].color, "#ffffff"],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              KELAJAK TEXNOLOGIYASI! 🚀
            </motion.h2>

            {/* Mode Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {Object.entries(modes).map(([key, mode]) => (
                <motion.button
                  key={key}
                  className="p-6 rounded-3xl font-black text-lg border-4 relative overflow-hidden group"
                  style={{
                    background:
                      activeMode === key
                        ? mode.cardBg
                        : "rgba(255,255,255,0.1)",
                    borderColor: mode.color,
                    boxShadow:
                      activeMode === key ? `0 0 40px ${mode.color}50` : "none",
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotate: [0, -2, 2, 0],
                    boxShadow: `0 0 50px ${mode.color}70`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveMode(key)}
                >
                  <div className="text-5xl mb-3 group-hover:animate-bounce">
                    {mode.icon}
                  </div>
                  <div className="text-white font-black uppercase">{key}</div>

                  {/* Glow effect when active */}
                  {activeMode === key && (
                    <motion.div
                      className="absolute inset-0 rounded-3xl"
                      style={{ background: `${mode.color}20` }}
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Main Display Card */}
            <motion.div
              className="rounded-3xl p-12 mb-16 text-center relative overflow-hidden"
              style={{
                background: modes[activeMode].cardBg,
                border: `4px solid ${modes[activeMode].color}`,
                boxShadow: `0 0 60px ${modes[activeMode].color}40`,
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, ${modes[activeMode].color} 2px, transparent 2px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              <motion.div
                className="text-8xl md:text-9xl mb-8 relative"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                  textShadow: `0 0 40px ${modes[activeMode].color}`,
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {modes[activeMode].icon}
              </motion.div>

              <motion.h2
                className="text-4xl md:text-7xl font-black mb-4 text-white"
                style={{ textShadow: `0 0 20px ${modes[activeMode].color}` }}
              >
                {modes[activeMode].title}
              </motion.h2>

              <motion.p
                className="text-2xl md:text-3xl font-bold mb-8"
                style={{ color: modes[activeMode].color }}
              >
                {modes[activeMode].subtitle}
              </motion.p>

              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-medium">
                {modes[activeMode].description}
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6">
                {modes[activeMode].features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="p-6 rounded-2xl bg-white/20 backdrop-blur border-2"
                    style={{ borderColor: modes[activeMode].color }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: `0 20px 40px ${modes[activeMode].color}30`,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="font-black text-xl text-white mb-2">
                      {feature.text}
                    </h3>
                    <p className="text-white/80 font-medium">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Students Section */}
            <div className="mb-16">
              <motion.h3
                className="text-4xl md:text-6xl font-black text-center mb-12 text-white"
                style={{ textShadow: `0 0 20px ${modes[activeMode].color}` }}
              >
                BIZNING YULDUZLARIMIZ ⭐
              </motion.h3>

              <div className="grid md:grid-cols-3 gap-8">
                {students.map((student, i) => (
                  <motion.div
                    key={i}
                    className="p-8 rounded-3xl backdrop-blur-xl border-4 border-white/30 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${modes[activeMode].color}15, rgba(255,255,255,0.1))`,
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: [0, -1, 1, 0],
                      boxShadow: `0 20px 60px ${modes[activeMode].color}40`,
                    }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.3 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${student.bg} flex items-center justify-center text-3xl shadow-xl`}
                      >
                        {student.avatar}
                      </div>
                      <div>
                        <h4 className="font-black text-2xl text-white">
                          {student.name}
                        </h4>
                        <p className="text-white/70 font-bold">
                          {student.age} yosh
                        </p>
                        <p
                          className="font-bold"
                          style={{ color: modes[activeMode].color }}
                        >
                          {student.achievement}
                        </p>
                      </div>
                    </div>
                    <p className="text-xl text-white/90 font-medium italic">
                      "{student.quote}"
                    </p>

                    {/* Star rating */}
                    <div className="flex gap-2 mt-4">
                      {[...Array(5)].map((_, starI) => (
                        <motion.span
                          key={starI}
                          className="text-2xl"
                          animate={{
                            rotate: [0, 20, -20, 0],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            delay: starI * 0.1,
                            duration: 2,
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
              className="text-center p-12 rounded-3xl relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${modes[activeMode].color}20, rgba(255,255,255,0.1))`,
                border: `4px solid ${modes[activeMode].color}`,
                boxShadow: `0 0 80px ${modes[activeMode].color}50`,
              }}
              animate={{
                boxShadow: [
                  `0 0 80px ${modes[activeMode].color}50`,
                  `0 0 120px ${modes[activeMode].color}70`,
                  `0 0 80px ${modes[activeMode].color}50`,
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.h2
                className="text-5xl md:text-7xl font-black mb-8 text-white"
                style={{ textShadow: `0 0 30px ${modes[activeMode].color}` }}
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    `0 0 30px ${modes[activeMode].color}`,
                    `0 0 50px ${modes[activeMode].color}`,
                    `0 0 30px ${modes[activeMode].color}`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                SEN HAM YULDUZ BO'L! 🌟
              </motion.h2>

              <p className="text-2xl md:text-3xl text-white/90 mb-12 font-bold">
                Bugun boshlang, ertaga ustoz bo'ling! 🚀
              </p>

              <div className="flex flex-col md:flex-row gap-8 justify-center">
                <motion.button
                  className="px-12 py-6 rounded-2xl font-black text-2xl text-white relative overflow-hidden"
                  style={{
                    background: `linear-gradient(45deg, ${modes[activeMode].color}, #ff6b35)`,
                    boxShadow: `0 10px 30px ${modes[activeMode].color}50`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 20px 50px ${modes[activeMode].color}70`,
                    rotate: [0, -2, 2, 0],
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      `0 10px 30px ${modes[activeMode].color}50`,
                      `0 15px 40px ${modes[activeMode].color}70`,
                      `0 10px 30px ${modes[activeMode].color}50`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Link to="/register">
                    <span className="relative z-10 flex items-center gap-3">
                      <span className="text-3xl">🎯</span>
                      RO'YXATDAN O'TISH
                    </span>
                  </Link>

                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.button>

                <motion.button
                  className="px-12 py-6 rounded-2xl font-black text-2xl border-4 relative overflow-hidden backdrop-blur"
                  style={{
                    borderColor: modes[activeMode].color,
                    color: modes[activeMode].color,
                    background: "rgba(255,255,255,0.1)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: `${modes[activeMode].color}20`,
                    rotate: [0, 2, -2, 0],
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/curslar">
                    <span className="flex items-center gap-3">
                      <span className="text-3xl">📚</span>
                      KURSLAR HAQIDA
                    </span>
                  </Link>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-8 bg-black/50 backdrop-blur-xl border-t-4 border-white/20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              className="flex justify-center items-center gap-4 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-4xl">🎓</span>
              <h3 className="text-2xl font-black text-white">
                NEURAL NEXUS ACADEMY
              </h3>
              <span className="text-4xl">🚀</span>
            </motion.div>
            <p className="text-white/80 text-lg font-bold">
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
