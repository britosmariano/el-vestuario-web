import { motion } from "motion/react";
import { Target, Users, Award, TrendingUp } from "lucide-react";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
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
              Sobre Nosotros
            </h1>
            <p className="text-xl text-neutral-200 leading-relaxed">
              Acompañamos a deportistas y equipos de trabajo
              para rendir al máximo desde 2020
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-neutral-900">
              Nuestra Historia
            </h2>
            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                El Vestuario nació en 2020 con una visión clara:
                acompañar a atletas y clubes en su preparación
                para rendir al máximo. Desde nuestros inicios,
                hemos mantenido nuestro compromiso con la
                excelencia y la satisfacción del cliente.
              </p>
              <p>
                Nuestra empresa se distingue por ofrecer dos
                líneas especializadas que responden a
                necesidades específicas:{" "}
                <span className="text-[#B1D046] font-bold">
                  Sport
                </span>
                , dedicada a indumentaria deportiva y artículos
                para atletas y entusiastas del deporte; y{" "}
                <span className="text-[#2B527F] font-bold">
                  Work
                </span>
                , enfocada en uniformes y equipamiento
                profesional para empresas y equipos de trabajo.
              </p>
              <p>
                A partir de 2026, El Vestuario inicia una nueva
                etapa de crecimiento, incorporando una línea
                integral de indumentaria y artículos de
                seguridad en el trabajo, ampliando su propuesta
                para acompañar a empresas y trabajadores en
                entornos laborales cada vez más exigentes.
              </p>
              <p>
                Con años de experiencia en el sector, hemos
                construido relaciones sólidas con proveedores de
                confianza y desarrollado un profundo
                conocimiento de las necesidades de nuestros
                clientes. Cada producto en nuestro catálogo es
                seleccionado cuidadosamente para garantizar
                durabilidad, funcionalidad y calidad.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo diario
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl border border-neutral-200"
            >
              <div className="w-16 h-16 bg-[#dbeafe] rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#2563eb]" />
              </div>
              <h3 className="mb-3 text-neutral-900">
                Servicio
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Atención personalizada y asesoramiento experto
                en cada consulta
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-xl border border-neutral-200"
            >
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-neutral-900" />
              </div>
              <h3 className="mb-3 text-neutral-900">
                Confianza
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Transparencia y honestidad en todas nuestras
                relaciones comerciales
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-xl border border-neutral-200"
            >
              <div className="w-16 h-16 bg-[#dcfce7] rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#16a34a]" />
              </div>
              <h3 className="mb-3 text-neutral-900">
                Innovación
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Constantemente buscamos nuevos productos y
                soluciones para nuestros clientes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-xl border border-neutral-200"
            >
              <div className="w-16 h-16 bg-[#EFE9DD] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#7A5C3E]" />
              </div>
              <h3 className="mb-3 text-neutral-900">Calidad</h3>
              <p className="text-neutral-600 leading-relaxed">
                Seleccionamos solo productos que cumplen con los
                más altos estándares
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl md:text-6xl mb-3 bg-gradient-to-r from-[#16a34a] to-[#2563eb] bg-clip-text text-transparent">
                6+
              </div>
              <p className="text-xl text-neutral-600">
                Años de Experiencia
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-5xl md:text-6xl mb-3 bg-gradient-to-r from-[#16a34a] to-[#2563eb] bg-clip-text text-transparent">
                20+
              </div>
              <p className="text-xl text-neutral-600">
                Entidades Satisfechas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl md:text-6xl mb-3 bg-gradient-to-r from-[#16a34a] to-[#2563eb] bg-clip-text text-transparent">
                2
              </div>
              <p className="text-xl text-neutral-600">
                Líneas Especializadas
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 md:py-24 bg-neutral-900 text-white"
        style={{ backgroundColor: "#2B2B2B" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              ¿Quieres conocer más?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Estamos aquí para ayudarte a encontrar el
              equipamiento perfecto
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-4 rounded-lg transition-colors"
            >
              Contactanos
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}