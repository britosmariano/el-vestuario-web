import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";

const sportProducts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1765791277994-33e886a83a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjbG90aGluZyUyMGF0aGxldGljJTIwd2VhcnxlbnwxfHx8fDE3NzAwNTY4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Conjunto Deportivo Premium",
    description:
      "Ropa deportiva de alto rendimiento con tecnología de secado rápido y máxima transpirabilidad.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1695459468644-717c8ae17eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjBzbmVha2Vyc3xlbnwxfHx8fDE3NzAxNTcxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Zapatillas Running Pro",
    description:
      "Calzado deportivo diseñado para máximo confort y rendimiento en cada entrenamiento.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1622810719251-d6ba978fffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBlcXVpcG1lbnQlMjBkdW1iYmVsbHN8ZW58MXx8fHwxNzcwMTc4ODc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Set de Pesas Profesional",
    description:
      "Equipamiento de entrenamiento de fuerza con acabado de calidad y diseño ergonómico.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1746796751590-a8c0f15d4900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWF0JTIwZml0bmVzc3xlbnwxfHx8fDE3NzAxNzg4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Colchoneta Yoga Premium",
    description:
      "Material antideslizante de alta densidad, ideal para yoga, pilates y ejercicios de suelo.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1763058138288-fd3d262d77d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMHNwb3J0cyUyMGJhZ3xlbnwxfHx8fDE3NzAxNzg4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Mochila Deportiva",
    description:
      "Amplio espacio de almacenamiento con compartimentos especializados para equipamiento deportivo.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1646613798518-d87b000104bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHdvbWFuJTIwcnVubmluZ3xlbnwxfHx8fDE3NzAxMjgzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Conjunto Running Mujer",
    description:
      "Diseño ergonómico y materiales de compresión para máximo rendimiento en carrera.",
  },
];

export function SportCatalog() {
  return (
    <div>
      <Hero
        title="Línea Sport"
        subtitle="Equipamiento Deportivo"
        description="Indumentaria y artículos para atletas y entusiastas del deporte"
        backgroundImage="https://images.unsplash.com/photo-1646613798518-d87b000104bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHdvbWFuJTIwcnVubmluZ3xlbnwxfHx8fDE3NzAxMjgzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
        ctaText="Contactar"
        ctaLink="/contact"
        category="sport"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-neutral-900">
              Catálogo Sport
            </h2>
            <p className="text-lg text-neutral-600">
              Descubre nuestra selección de productos deportivos
              de alta durabilidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                category="sport"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-[#dcfce7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl mb-3 text-[#15803d]">
                Tecnología Avanzada
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Materiales de última generación para máximo
                rendimiento
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-3 text-[#15803d]">
                Diseño Funcional
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Ergonomía y estilo en cada producto
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-3 text-[#15803d]">
                Durabilidad
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Productos diseñados para resistir el uso
                intensivo
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}