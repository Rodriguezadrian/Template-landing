import { HashLink as NavLink } from "react-router-hash-link";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    celular: "",
    empresa: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k1xqfqr",
        "template_59tgl3m",
        e.target,
        "sxGVDiZSGwxPb55cG"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setFormData({
            nombre: "",
            email: "",
            celular: "",
            empresa: "",
            mensaje: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    emailjs
      .sendForm(
        "service_k1xqfqr",
        "template_udz1s2c",
        e.target,
        "sxGVDiZSGwxPb55cG"
      )
      .then(
        () => {
          console.log("SUCCESS AUTOREPLY!");
          // Limpiar formulario después de enviar con éxito
          setFormData({
            nombre: "",
            email: "",
            celular: "",
            empresa: "",
            mensaje: "",
          });
        },
        (error) => {
          console.log("FAILED AUTOREPLY", error.text);
        }
      );
  };

  return (
    <>
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              id="contacto"
              className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl"
            >
              Contactanos
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
              Dejanos aqui tu consulta
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium text-gray-900">
                    ejemplo@gmail.com
                  </p>
                </div>
              </div>

              <NavLink smooth to="https://www.instagram.com/usuario/">
                <div className="overflow-hidden hover:bg-red-300 duration-300 bg-white rounded-xl">
                  <div className="p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-instagram flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <p className="mt-6 text-lg font-medium text-gray-900">
                      Seguinos en Instagram
                    </p>
                  </div>
                </div>
              </NavLink>

              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                    Montevideo, Uruguay
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden bg-white rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center mb-8 text-gray-900">
                  Envianos tu mensaje
                </h3>

                <form onSubmit={sendEmail} method="POST" className="mt-14">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Tu nombre{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="nombre"
                          id="nombre"
                          placeholder="Ingresa tu nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Ingresa tu email"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Celular{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="tel"
                          name="celular"
                          id="celular"
                          value={formData.celular}
                          onChange={handleChange}
                          placeholder="Ingresa tu numero"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Nombre de la empresa{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="empresa"
                          id="empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          placeholder="Ingresa el nombre"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Mensaje{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          name="mensaje"
                          id="mensaje"
                          value={formData.mensaje}
                          onChange={handleChange}
                          placeholder=""
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-[#fffff] transition-all duration-200 bg-red-500 border border-transparent rounded-md focus:outline-none hover:bg-red-600"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacto;
