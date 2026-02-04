import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Trophy,
  Briefcase,
  Shield,
  Zap,
} from "lucide-react";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1646613798518-d87b000104bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHdvbWFuJTIwcnVubmluZ3xlbnwxfHx8fDE3NzAxMjgzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight font-bebas">
              El Vestuario
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 mb-8 leading-relaxed">
              <span>Indumentaria y equipamiento </span>
              <span className="font-bold">para rendir al máximo</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/sport"
                className="inline-flex items-center justify-center gap-2 bg-[#B1D046] hover:bg-[#5F7F2A] text-white px-8 py-4 rounded-lg transition-all group"
              >
                Ver Línea Sport
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 bg-[#2B527F] hover:bg-[#1F3F63] text-white px-8 py-4 rounded-lg transition-all group"
              >
                Ver Línea Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Lines Section */}
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
              Nuestras Líneas de Producto
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Dos líneas especializadas para satisfacer todas
              tus necesidades
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sport Line */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative h-[500px] rounded-2xl overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1765791277994-33e886a83a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjbG90aGluZyUyMGF0aGxldGljJTIwd2VhcnxlbnwxfHx8fDE3NzAwNTY4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#97B658] via-[#97B658]/60 to-transparent" />
              </div>

              <div className="relative h-full p-8 flex flex-col justify-end text-white">
                <img
                  src={`${import.meta.env.BASE_URL}/images/logo-sport-sin-fondo.png`}
                  alt="El Vestuario logo"
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-3xl mb-3">Sport</h3>
                <p className="text-lg text-neutral-100 mb-6 leading-relaxed">
                  Todo lo que necesita un deportista
                </p>
                <Link
                  to="/sport"
                  className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all group/link"
                >
                  Explorar Sport
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Work Line */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative h-[500px] rounded-2xl overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1636414722386-a73bd3fc368c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjB0ZWFtfGVufDF8fHx8MTc3MDE0NzgwNHww&ixlib=rb-4.1.0&q=80&w=1080)`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B527F] via-[#2B527F]/60 to-transparent" />
              </div>

              <div className="relative h-full p-8 flex flex-col justify-end text-white">
                <img
                    src={`${import.meta.env.BASE_URL}/images/logo-work-sin-fondo.png`}
                    alt="El Vestuario logo"
                    className="w-8 h-8 object-contain"
                  />
                <h3 className="text-3xl mb-3">Work</h3>
                <p className="text-lg text-neutral-100 mb-6 leading-relaxed">
                  Todo lo que necesita un trabajador
                </p>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all group/link"
                >
                  Explorar Work
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Confianza, calidad y rendimiento excepcional en
              cada producto
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-8 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-neutral-900" />
              </div>
              <h3 className="mb-3">Atención Personalizada</h3>
              <p className="text-neutral-600 leading-relaxed">
                Nuestro equipo está listo para asesorarte en
                cada paso
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-[#dbeafe] rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-[#2563eb]" />
              </div>
              <h3 className="mb-3">Rendimiento Excepcional</h3>
              <p className="text-neutral-600 leading-relaxed">
                Productos seleccionados para tener el máximo
                rendimiento
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-[#dcfce7] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#16a34a]" />
              </div>
              <h3 className="mb-3">Durabilidad Garantizada</h3>
              <p className="text-neutral-600 leading-relaxed">
                Artículos de alta durabilidad que resisten el uso intensivo por mas
                tiempo
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 md:py-24 text-white"
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
              ¿Listo para equiparte?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Contáctanos hoy y descubre cómo podemos ayudarte
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-4 rounded-lg transition-all group"
            >
              Contáctanos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}