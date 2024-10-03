function Sobrenosotros() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen py-24">
    
        <section className="gradient text-white text-center py-20">
          <h1 className="text-5xl font-bold">Sobre Nosotros</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Somos una empresa dedicada a transformar ideas en soluciones
            digitales con enfoque en calidad, innovación y satisfacción del
            cliente.
          </p>
        </section>

     
        <section className="py-16 px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-red-300">
                Nuestra Misión
              </h2>
              <p className="mt-4 text-gray-700">
                Nuestra misión es ofrecer soluciones tecnológicas innovadoras
                que empoderen a nuestros clientes a alcanzar sus metas y
                objetivos en un mundo digital en constante evolución.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-red-300">
                Nuestra Visión
              </h2>
              <p className="mt-4 text-gray-700">
                Ser reconocidos como líderes en el desarrollo de software y
                soluciones digitales, ofreciendo productos de alta calidad que
                superen las expectativas de nuestros clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Nuestros Valores */}
        <section className="py-16 bg-gray-200">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-red-300 mb-8">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-red-300">Innovación</h3>
                <p className="mt-4 text-gray-700">
                  Creemos en la innovación como motor del progreso, siempre
                  buscando nuevas formas de mejorar nuestros productos y
                  servicios.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-red-300">Calidad</h3>
                <p className="mt-4 text-gray-700">
                  Nos comprometemos a entregar soluciones de la más alta
                  calidad, cumpliendo con los más estrictos estándares de la
                  industria.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-red-300">Integridad</h3>
                <p className="mt-4 text-gray-700">
                  Actuamos con transparencia y honestidad en todas nuestras
                  interacciones, siempre poniendo las necesidades del cliente
                  primero.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="py-16 px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-center text-red-300 mb-8">
            Conoce a Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://randomuser.me/api/portraits/men/10.jpg"
                alt="Juan Pérez"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                Juan Pérez
              </h3>
              <p className="text-gray-500">CEO</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://randomuser.me/api/portraits/women/11.jpg"
                alt="Ana Gómez"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                Ana Gómez
              </h3>
              <p className="text-gray-500">CM</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://randomuser.me/api/portraits/men/12.jpg"
                alt="Carlos Díaz"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                Carlos Díaz
              </h3>
              <p className="text-gray-500">Desarrollador</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://randomuser.me/api/portraits/women/13.jpg"
                alt="Lucía Fernández"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                Lucía Fernández
              </h3>
              <p className="text-gray-500">Diseñadora UX/UI</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Sobrenosotros;
