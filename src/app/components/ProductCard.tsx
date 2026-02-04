import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  category: 'sport' | 'work';
}

export function ProductCard({ image, name, description, category }: ProductCardProps) {
  const categoryColor = category === 'sport' ? 'border-[#16a34a]' : 'border-[#2563eb]';
  const categoryBg = category === 'sport' ? 'bg-[#dcfce7]' : 'bg-[#dbeafe]';
  const categoryText = category === 'sport' ? 'text-[#15803d]' : 'text-[#1e40af]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-xl overflow-hidden border border-neutral-200 hover:border-neutral-300 transition-all duration-300 shadow-sm hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 ${categoryBg} rounded-full`}>
          <span className={`text-xs uppercase tracking-wide ${categoryText}`}>
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-neutral-900 group-hover:text-neutral-700 transition-colors">
          {name}
        </h3>
        <p className="text-sm text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
