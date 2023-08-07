"use client";

import { useRef, useState } from "react";
import ActionButton from "../Components/ActionButton";

const Contact = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(form.current);
    const name = data.get("name");
    const email = data.get("email");
    const whatsapp = data.get("whatsapp");
    const line = data.get("line");
    const message = data.get("message");

    window.open(
      `https://wa.me/5544999536451?text=Estou%20entrando%20em%20contato%20para%20saber%20mais%20informa%C3%A7oes%20sobre%20investimento%2C%20meus%20dados%20sao%0A*${name}*%20-%20*${email}*%20-%20*${whatsapp}*%20-%20Linha%20de%20Investimento:%20*${line}*%20-%20*${message}*`,
      "_blank"
    ); // open the twitter page on a new window
    // https: window.location.href = `api.whatsapp.com/send?phone=5544988488558&text=Estou%20entrando%20em%20contato%20para%20saber%20mais%20informa%C3%A7oes%20sobre%20investimento%2C%20meus%20dados%20sao%0A*${name}*%20-%20*${email}*%20-%20*${whatsapp}*%20-%20Linha%20de%20Investimento:%20*${line}*%20-%20*${message}*`;
    setLoading(false);
  };
  // const submit = async (e) => {
  //   e.preventDefault();
  //   const data = new FormData(form.current);
  //   const name = data.get("name");
  //   const email = data.get("email");
  //   const whatsapp = data.get("whatsapp");
  //   const line = data.get("line");
  //   const message = data.get("message");
  //   try {
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         whatsapp,
  //         line,
  //         message,
  //       }),
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     });
  //   } catch (error) {
  //     console.log("Err", error);
  //   }
  // };
  // const submit = useCallback(async (e) => {
  //   e.preventDefault();
  //   const data = new FormData(form.current);
  //   // const subject = data.get("subject");
  //   const name = data.get("name");
  //   const email = data.get("email");
  //   const whatsapp = data.get("whatsapp");
  //   const line = data.get("line");
  //   const message = data.get("message");

  //   // const receiver = data.get("receiver");
  //   setLoading(true);
  //   try {
  //     const res = await axios.post("/api/email", {
  //       email,
  //       name,
  //       whatsapp,
  //       line,
  //       message,
  //     });
  //     alert("Success");
  //     console.log(res);
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   setLoading(false);
  // }, []);

  return (
    <section className="text-gray-600 body-font relative bg-white" id="contato">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form ref={form} onSubmit={submit} className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="whatsapp"
                  className="leading-7 text-sm text-gray-600"
                >
                  Whatsapp
                </label>
                <input
                  type="text"
                  id="whatsapp"
                  name="whatsapp"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="line"
                  className="leading-7 text-sm text-gray-600"
                >
                  Linha de Crédito desejada
                </label>
                <select
                  name="line"
                  id="line"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="investimento">Investimento</option>
                  <option value="Aumento Patrimonial">
                    Aumento Patrimonial
                  </option>
                  <option value="Aumento de Capital">Aumento de Capital</option>
                  <option value="Renovação de Frota">Renovação de Frota</option>
                  <option value="Crédito Imobiliário">
                    Crédito Imobiliário
                  </option>
                  <option value="Crédito Rural">Crédito Rural</option>
                  <option value="Crédito Veículos">Crédito Veículos</option>
                </select>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto text-black degrade-primary border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-corporate degrade-primary text-black border-0 py-2 px-8 focus:outline-none transition-all hover:scale-105 hover:shadow-lg shadow-cyan-500/50 rounded text-lg"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <p className="my-3">
                {/* <IconLocation clasName="w-3" /> */}
                Rua Santos Dumont, 3.275 – 19º andar – Sala 1902 <br />
                CENTRO EMPRESARIAL EMPIRE CENTER <br />
                Zona 01 – Maringá, PR <br />
                CEP: 87013-050
              </p>
              <p className="-my-1 mb-5">
                <a className="text-yellow-700 leading-relaxed">
                  contato@selectprimefinancial.com.br
                </a>
                <p className="leading-relaxed">44 3200 1510</p>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
