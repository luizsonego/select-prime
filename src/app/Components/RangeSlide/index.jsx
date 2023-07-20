"use client";

import { useRef, useState } from "react";

import { roboto } from "@/app/fonts";
import "./styles.css";

const RangeSlide = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(500);
  const [hidden, setHidden] = useState(1);

  function handleRangeChange(event) {
    const { value } = event.target;
    setValue(parseInt(value));
  }

  const handleFormSimulate = () => {
    setHidden(0);
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(form.current);
    const name = data.get("name");
    const email = data.get("email");
    const whatsapp = data.get("whatsapp");
    const line = data.get("line");
    const message = data.get("message");
    const investimento = data.get("valor");

    window.open(
      `https://wa.me/5544988488558?text=Estou%20entrando%20em%20contato%20para%20saber%20mais%20informa%C3%A7oes%20sobre%20investimento%2C%20meus%20dados%20sao%0A*${name}*%20-%20*${email}*%20-%20*${whatsapp}*%20-%20Linha%20de%20Investimento:%20*${line}*%20-%20*${message}*,%20valor%20de%20*${investimento.toLocaleString(
        "pt-BR",
        {
          style: "currency",
          currency: "BRL",
        }
      )}* `,
      "_blank"
    ); // open the twitter page on a new window
    // https: window.location.href = `api.whatsapp.com/send?phone=5544988488558&text=Estou%20entrando%20em%20contato%20para%20saber%20mais%20informa%C3%A7oes%20sobre%20investimento%2C%20meus%20dados%20sao%0A*${name}*%20-%20*${email}*%20-%20*${whatsapp}*%20-%20Linha%20de%20Investimento:%20*${line}*%20-%20*${message}*`;
    setLoading(false);
  };

  return (
    <>
      {hidden === 1 ? (
        <>
          <div className="flex justify-center container mx-auto">
            <div className="range-wrapper">
              <div
                className={`mb-6 text-6xl text-center text-black ${roboto.className}`}
              >
                {new Intl.NumberFormat("pr-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                }).format(value)}
              </div>
              <input
                type="range"
                min="500"
                max="40000"
                step="500"
                value={value}
                className="slider w-[80vw] md:w-[50vw] mx-10 "
                name=""
                onChange={handleRangeChange}
              />
              <datalist className="w-[80vw] md:w-[50vw] mx-10 ">
                {[...Array(35)].map((index) => (
                  <option key={index} value=""></option>
                ))}
              </datalist>
            </div>
          </div>

          <button
            className="bg-black flex mx-auto text-white border-2 py-2 px-8 focus:outline-none rounded text-lg "
            onClick={handleFormSimulate}
          >
            Avançar
          </button>
        </>
      ) : (
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 pt-5 pb-0 mx-auto">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <form
                ref={form}
                onSubmit={submit}
                className="flex flex-wrap -m-2"
              >
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
                      E-mail
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
                      <option value="a">Investimento</option>
                      <option value="a">Aumento Patrimonial</option>
                      <option value="a">Aumento de Capital</option>
                      <option value="a">Renovação de Frota</option>
                      <option value="a">Crédito Imobiliário</option>
                      <option value="a">Crédito Rural</option>
                      <option value="a">Crédito Veículos</option>
                    </select>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="valor"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Valor escolhido
                    </label>
                    <input
                      type="valor"
                      id="valor"
                      name="valor"
                      value={value.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="bg-black flex mx-auto text-white border-2 py-2 px-8 focus:outline-none rounded text-lg ">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RangeSlide;
