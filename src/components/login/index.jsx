// import React, { useState } from "react";
// import {
//   UserOutlined,
//   LockOutlined,
//   EyeInvisibleOutlined,
//   EyeTwoTone,
// } from "@ant-design/icons";

// function Login() {
//   const [visible, setVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login data:", formData);
//     // Add your login logic here
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200">
//       <div className="w-full max-w-md px-8 py-12 mx-4 bg-white rounded-2xl shadow-xl">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-indigo-700 mb-2">
//             Milliy Kontent Platformasi
//           </h1>
//           <p className="text-gray-600">Iltimos, hisobingizga kiring</p>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label
//               className="block text-gray-700 text-sm font-medium mb-2"
//               htmlFor="username"
//             >
//               Foydalanuvchi nomi
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <UserOutlined className="text-gray-500" />
//               </div>
//               <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                 placeholder="Foydalanuvchi nomingiz"
//                 value={formData.username}
//                 onChange={handleChange}
//                 autoComplete="username"
//                 required
//               />
//             </div>
//           </div>

//           <div className="mb-8">
//             <label
//               className="block text-gray-700 text-sm font-medium mb-2"
//               htmlFor="password"
//             >
//               Parol
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <LockOutlined className="text-gray-500" />
//               </div>
//               <input
//                 id="password"
//                 name="password"
//                 type={visible ? "text" : "password"}
//                 className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                 placeholder="Parolingiz"
//                 value={formData.password}
//                 onChange={handleChange}
//                 autoComplete="current-password"
//                 required
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                 onClick={() => setVisible(!visible)}
//               >
//                 {visible ? (
//                   <EyeTwoTone className="text-gray-500" />
//                 ) : (
//                   <EyeInvisibleOutlined className="text-gray-500" />
//                 )}
//               </button>
//             </div>
//           </div>

//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center">
//               <input
//                 id="remember-me"
//                 name="remember-me"
//                 type="checkbox"
//                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//               />
//               <label
//                 htmlFor="remember-me"
//                 className="ml-2 block text-sm text-gray-700"
//               >
//                 Eslab qolish
//               </label>
//             </div>
//             <div className="text-sm">
//               <a
//                 href="#"
//                 className="font-medium text-indigo-600 hover:text-indigo-500"
//               >
//                 Parolni unutdingizmi?
//               </a>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
//           >
//             Kirish
//           </button>
//         </form>

//         <div className="mt-8 text-center">
//           <p className="text-gray-600 text-sm">
//             Hisobingiz yo'qmi?{" "}
//             <a
//               href="#"
//               className="font-medium text-indigo-600 hover:text-indigo-500"
//             >
//               Ro'yxatdan o'tish
//             </a>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;

import React, { useState } from "react";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { useAxios } from "../../hooks";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const [visible, setVisible] = useState(false);
  const [username, setUsernam] = useState();
  const [password, setPassword] = useState();
  const axios = useAxios();
  const navigate = useNavigate();
  const postData = (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    axios({
      url: "/api/token/",
      method: "POST",
      data,
    })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data?.access);
        notification.success({
          message: "Muvaffaqiyatli",
          description: "Tizimga kirildi",
          placement: "topRight",
        });
        navigate("/information");
      })
      .catch((error) => {
        console.log(error);
        notification.error({
          message: "Muvaffaqiyatsiz",
          description: "Foydalanuvchi topilmadi",
          placement: "topRight",
        });
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200">
      <div className="w-full max-w-md px-8 py-12 mx-4 bg-white rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-700 mb-2">Login</h1>
          <p className="text-gray-600">Hisobingizga kiring</p>
        </div>

        <form>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="username"
            >
              Foydalanuvchi nomi
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserOutlined className="text-gray-500" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Foydalanuvchi nomingiz"
                autoComplete="username"
                onChange={(e) => setUsernam(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Parol
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockOutlined className="text-gray-500" />
              </div>
              <input
                type={visible ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Parolingiz"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setVisible(!visible)}
              >
                {visible ? (
                  <EyeTwoTone className="text-gray-500" />
                ) : (
                  <EyeInvisibleOutlined className="text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            onClick={(e) => postData(e)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            Kirish
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
