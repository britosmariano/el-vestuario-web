import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Instagram } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    lineOfInterest: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        lineOfInterest: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1613759612065-d5971d32ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBvZmZpY2V8ZW58MXx8fHwxNzcwMTAwMjIyfDA&ixlib=rb-4.1.0&q=80&w=1080)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Contacto
            </h1>
            <p className="text-xl text-neutral-200 leading-relaxed">
              Estamos aquí para ayudarte. Contactanos y te
              responderemos pronto
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl mb-8 text-neutral-900">
                Envianos un mensaje
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#dcfce7] border border-[#16a34a] rounded-xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-[#16a34a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-2 text-[#15803d]">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-neutral-700">
                    Gracias por contactarnos. Te responderemos
                    pronto.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block mb-2 text-neutral-900"
                    >
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-neutral-900"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                      placeholder="juan@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-neutral-900"
                    >
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                      placeholder="249 412-3456"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lineOfInterest"
                      className="block mb-2 text-neutral-900"
                    >
                      Línea de Interés *
                    </label>
                    <select
                      id="lineOfInterest"
                      name="lineOfInterest"
                      value={formData.lineOfInterest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                    >
                      <option value="">
                        Seleccioná una opción
                      </option>
                      <option value="sport">
                        Sport - Equipamiento Deportivo
                      </option>
                      <option value="work">
                        Work - Equipamiento Profesional
                      </option>
                      <option value="both">Ambas líneas</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-neutral-900"
                    >
                      Mensaje (Opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
                      placeholder="Contanos más sobre lo que necesitas..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pl-8"
            >
              <h2 className="text-3xl mb-8 text-neutral-900">
                Información de Contacto
              </h2>

              <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-neutral-900">
                      Instagram
                    </h3>
                    <p className="text-neutral-600">
                      @articulosdeportivoselvestuario
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-neutral-900">
                      Email
                    </h3>
                    <p className="text-neutral-600">
                      info@elvestuario.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-neutral-900">
                      Teléfono
                    </h3>
                    <p className="text-neutral-600">
                      (249) 455-3218
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-neutral-900">
                      Dirección
                    </h3>
                    <p className="text-neutral-600">
                      9 de Julio 968
                      <br />
                      Tandil, Buenos Aires
                      <br />
                      Argentina
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
                <h3 className="text-xl mb-4 text-neutral-900">
                  Horario de Atención
                </h3>
                <div className="space-y-3 text-neutral-600">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>9:30 - 13:00 y 17:30 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span>Guardia deportiva</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-[#dcfce7] rounded-xl p-6 text-center border border-[#16a34a]/20">
                  <h4 className="mb-2 text-[#15803d]">
                    Línea Sport
                  </h4>
                  <p className="text-sm text-neutral-700">
                    Equipamiento deportivo
                  </p>
                </div>
                <div className="bg-[#dbeafe] rounded-xl p-6 text-center border border-[#2563eb]/20">
                  <h4 className="mb-2 text-[#1e40af]">
                    Línea Work
                  </h4>
                  <p className="text-sm text-neutral-700">
                    Equipamiento profesional
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}