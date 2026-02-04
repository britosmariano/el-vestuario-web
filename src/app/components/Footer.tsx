import { Link } from "react-router-dom";
import { ShoppingBag, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="text-white"
      style={{ backgroundColor: "#2B2B2B" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={`${import.meta.env.BASE_URL}/images/logo.png`}
                alt="El Vestuario logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl tracking-tight">
                El Vestuario
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Tu aliado en ropa deportiva y equipamiento
              profesional. Confianza y rendimiento desde 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/sport"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Sport
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Lines */}
          <div>
            <h3 className="mb-4">Nuestras Líneas</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-neutral-400">
                <p className="flex items-center gap-2">
                  <img
                    src={`${import.meta.env.BASE_URL}/images/logo-sport.png`}
                    alt="El Vestuario logo"
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-white font-bold">
                      Sport:
                  </span>{" "}
                </p>
                Indumentaria y artículos deportivos
              </li>
              <li className="text-neutral-400">
                <p className="flex items-center gap-2">
                  <img
                      src={`${import.meta.env.BASE_URL}/images/logo-work.png`}
                      alt="El Vestuario logo"
                      className="w-8 h-8 object-contain"
                      />
                  <span className="text-white font-bold">
                    Work:
                  </span>{" "}
                </p>
                Uniformes y equipamiento profesional
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-neutral-400">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>info@elvestuario.com</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>(249) 455 3218</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>9 de Julio 968, Tandil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-400">
          <p>
            &copy; 2026 El Vestuario. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}