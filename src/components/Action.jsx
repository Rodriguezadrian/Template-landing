function Action() {
  return (
    <>
      <img className="gradient" src="/svg/wave-footer.svg" />
      <section className="gradient mx-auto text-center py-6">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Accion a realizar
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <h3 className="my-4 text-3xl leading-tight">
         Mensaje principal
        </h3>
        <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Accion!
        </button>
      </section>
    </>
  );
}

export default Action;
