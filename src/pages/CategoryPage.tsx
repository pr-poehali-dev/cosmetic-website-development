
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Категории и их описания
const categoryData = {
  face: {
    title: "Уход за лицом",
    description: "Кремы, сыворотки, маски и другие средства для ухода за кожей лица",
    banner: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&auto=format&fit=crop"
  },
  makeup: {
    title: "Макияж",
    description: "Тональные средства, помады, туши и тени для создания идеального макияжа",
    banner: "https://images.unsplash.com/photo-1599324908761-8353a9d36b76?w=1200&auto=format&fit=crop"
  },
  body: {
    title: "Уход за телом",
    description: "Лосьоны, скрабы и уходовые средства для кожи вашего тела",
    banner: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=1200&auto=format&fit=crop"
  }
};

// Моковые данные продуктов по категориям
const productsByCategory = {
  face: [
    {
      id: 101,
      title: "Увлажняющий крем для лица",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop",
      price: 1200,
      oldPrice: 1500,
      category: "Уход за лицом"
    },
    {
      id: 102,
      title: "Ночная маска с гиалуроновой кислотой",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop",
      price: 980,
      category: "Уход за лицом"
    },
    {
      id: 103,
      title: "Очищающая пенка для умывания",
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4cb6888?w=600&auto=format&fit=crop",
      price: 750,
      oldPrice: 890,
      category: "Уход за лицом"
    }
  ],
  makeup: [
    {
      id: 201,
      title: "Матирующая помада",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&auto=format&fit=crop",
      price: 850,
      category: "Макияж"
    },
    {
      id: 202,
      title: "Тональный крем с SPF защитой",
      image: "https://images.unsplash.com/photo-1631214524020-8e9c08e20eb8?w=600&auto=format&fit=crop",
      price: 1350,
      oldPrice: 1500,
      category: "Макияж"
    },
    {
      id: 203,
      title: "Палетка теней для век",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop",
      price: 1890,
      category: "Макияж"
    }
  ],
  body: [
    {
      id: 301,
      title: "Гель для душа с экстрактом розы",
      image: "https://images.unsplash.com/photo-1594348352566-397dade3d9bc?w=600&auto=format&fit=crop",
      price: 620,
      oldPrice: 750,
      category: "Уход за телом"
    },
    {
      id: 302,
      title: "Скраб для тела с кофейными зернами",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160beba3?w=600&auto=format&fit=crop",
      price: 950,
      category: "Уход за телом"
    },
    {
      id: 303,
      title: "Увлажняющий лосьон для тела",
      image: "https://images.unsplash.com/photo-1616682510007-2cfba0fb2c1e?w=600&auto=format&fit=crop",
      price: 780,
      oldPrice: 890,
      category: "Уход за телом"
    }
  ]
};

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Проверяем существование категории
  const safeCategory = categoryId && categoryId in categoryData 
    ? categoryId as keyof typeof categoryData 
    : 'face'; // Дефолтная категория
  
  const category = categoryData[safeCategory];
  const products = productsByCategory[safeCategory];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Баннер категории */}
      <section 
        className="relative bg-cover bg-center h-64 flex items-center"
        style={{ backgroundImage: `url(${category.banner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.title}</h1>
          <p className="text-lg max-w-xl">{category.description}</p>
        </div>
      </section>
      
      {/* Список продуктов */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Товары в категории</h2>
            <div className="flex space-x-4">
              <Button variant="outline" className="border-pink-600 text-pink-600">
                Фильтры
              </Button>
              <Button variant="outline" className="border-pink-600 text-pink-600">
                Сортировка
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                oldPrice={product.oldPrice}
                category={product.category}
              />
            ))}
          </div>
          
          {/* Пагинация */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <Button variant="outline" className="border-pink-600 text-pink-600 w-10 h-10 p-0 flex items-center justify-center">
                1
              </Button>
              <Button variant="outline" className="border-pink-600 text-pink-600 w-10 h-10 p-0 flex items-center justify-center">
                2
              </Button>
              <Button variant="outline" className="border-pink-600 text-pink-600 w-10 h-10 p-0 flex items-center justify-center">
                3
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Рекомендации */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Вам также может понравиться</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Показываем продукты из других категорий */}
            {Object.entries(productsByCategory)
              .filter(([key]) => key !== safeCategory)
              .flatMap(([_, products]) => products.slice(0, 1))
              .map(product => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  category={product.category}
                />
              ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/">
              <Button className="bg-pink-600 hover:bg-pink-700">
                Вернуться на главную
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
