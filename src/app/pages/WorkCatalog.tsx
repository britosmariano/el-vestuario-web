import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';

const workProducts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1681812490697-efdcb9be343b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrJTIwdW5pZm9ybSUyMHByb2Zlc3Npb25hbCUyMGNsb3RoaW5nfGVufDF8fHx8MTc3MDE3ODg3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Uniformes Corporativos',
    description: 'Uniformes profesionales de alta calidad con bordado personalizado para tu empresa.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1768158988512-ad31657fe5b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBlcXVpcG1lbnQlMjBoYXJkJTIwaGF0fGVufDF8fHx8MTc3MDE3ODg3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Equipo de Seguridad',
    description: 'Cascos y equipamiento de protección certificado para máxima seguridad laboral.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1612787114413-a5e60ede7db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjB2ZXN0JTIwd29yayUyMGNsb3RoZXN8ZW58MXx8fHwxNzcwMTc4ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Chalecos de Seguridad',
    description: 'Chalecos reflectantes de alta visibilidad, ideales para trabajos en construcción y vías.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1613325267798-05214c4d65f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrJTIwYm9vdHMlMjBzYWZldHklMjBzaG9lc3xlbnwxfHx8fDE3NzAxNzg4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Botas de Seguridad',
    description: 'Calzado de trabajo resistente con punta de acero y suela antideslizante.',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1636414722386-a73bd3fc368c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjB0ZWFtfGVufDF8fHx8MTc3MDE0NzgwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Ropa de Trabajo Industrial',
    description: 'Vestimenta resistente y duradera para entornos industriales exigentes.',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1613759612065-d5971d32ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBvZmZpY2V8ZW58MXx8fHwxNzcwMTAwMjIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Equipamiento de Oficina',
    description: 'Uniformes corporativos elegantes para ambientes profesionales y oficinas.',
  },
];

export function WorkCatalog() {
  return (
    <div>
      <Hero
        title="Línea Work"
        subtitle="Equipamiento Profesional"
        description="Uniformes y equipamiento de seguridad para empresas y equipos de trabajo"
        backgroundImage="https://images.unsplash.com/photo-1636414722386-a73bd3fc368c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjB0ZWFtfGVufDF8fHx8MTc3MDE0NzgwNHww&ixlib=rb-4.1.0&q=80&w=1080"
        ctaText="Contactar"
        ctaLink="/contact"
        category="work"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-neutral-900">
              Catálogo Work
            </h2>
            <p className="text-lg text-neutral-600">
              Equipamiento profesional y uniformes para empresas de todos los sectores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                category="work"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-[#dbeafe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl mb-3 text-[#1e40af]">Certificaciones</h3>
              <p className="text-neutral-700 leading-relaxed">
                Productos certificados que cumplen con las normativas de seguridad
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-3 text-[#1e40af]">Personalización</h3>
              <p className="text-neutral-700 leading-relaxed">
                Bordados y estampados personalizados con el logo de tu empresa
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-3 text-[#1e40af]">Pedidos Grandes</h3>
              <p className="text-neutral-700 leading-relaxed">
                Capacidad para satisfacer pedidos corporativos de cualquier tamaño
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
