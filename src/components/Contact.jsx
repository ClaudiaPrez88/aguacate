import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log("Message submited: " + JSON.stringify(data));
  };

  return (
    <>
      <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input_list">
          <ul>
            <li>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Tu nombre"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Nombre es requerido</span>
              )}
            </li>
            {/* End li */}
            <li>
              <input
                {...register(
                  "email",
                  {
                    required: "Email es requerido",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "El valor no coincide con los valores de formato de un email.",
                    },
                  },
                  { required: true }
                )}
                type="email"
                placeholder="Tu Email"
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </li>
            {/* End li */}
            <li>
              <input
                type="number"
                placeholder="Tu número"
                {...register("number", { required: true })}
              />
              {errors.number && (
                <span className="invalid-feedback">Teléfono es requerido.</span>
              )}
            </li>
            {/* End li */}
            <li>
              <input
                type="text"
                placeholder="Asunto"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <span className="invalid-feedback">Asunto es requerido.</span>
              )}
            </li>
            {/* End li */}
          </ul>
        </div>
        {/* End input-list */}

        <div className="message_area">
          <textarea
            {...register("message", { required: true })}
            placeholder="Tu mensaje va aquí"
          ></textarea>
          {errors.message && (
            <span className="invalid-feedback">Mensaje es requerido.</span>
          )}
        </div>
        {/* End message area */}

        <div className="know_tm_button">
          <button type="submit">Enviar</button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>
  );
};

export default Contact;
