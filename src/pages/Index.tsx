
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

// Моковые данные для примера
const featuredProducts = [
  {
    id: 1,
    title: "Увлажняющий крем для лица",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop",
    price: 1200,
    oldPrice: 1500,
    category: "Уход за лицом"
  },
  {
    id: 2,
    title: "Матирующая помада",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&auto=format&fit=crop",
    price: 850,
    category: "Макияж"
  },
  {
    id: 3,
    title: "Гель для душа с экстрактом розы",
    image: "https://images.unsplash.com/photo-1594348352566-397dade3d9bc?w=600&auto=format&fit=crop",
    price: 620,
    oldPrice: 750,
    category: "Уход за телом"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-pink-50">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Красота начинается с качественной косметики
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Откройте для себя премиальные косметические продукты, которые подчеркнут вашу естественную красоту и позаботятся о здоровье вашей кожи.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-md">
                Смотреть каталог
              </Button>
              <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-md">
                О бренде
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop" 
              alt="Косметические продукты" 
              className="rounded-lg shadow-xl" 
            />
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные категории</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop" 
                alt="Уход за лицом" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-pink-600 bg-opacity-30 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Уход за лицом</h3>
                  <Link to="/category/face" className="inline-block bg-white text-pink-600 px-4 py-2 rounded-md font-medium hover:bg-pink-50 transition-colors">
                    Смотреть
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://images.unsplash.com/photo-1599324908761-8353a9d36b76?w=600&auto=format&fit=crop" 
                alt="Макияж" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-pink-600 bg-opacity-30 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Макияж</h3>
                  <Link to="/category/makeup" className="inline-block bg-white text-pink-600 px-4 py-2 rounded-md font-medium hover:bg-pink-50 transition-colors">
                    Смотреть
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://images.unsplash.com/photo-1571875257727-256c39da42af?w=600&auto=format&fit=crop" 
                alt="Уход за телом" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-pink-600 bg-opacity-30 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Уход за телом</h3>
                  <Link to="/category/body" className="inline-block bg-white text-pink-600 px-4 py-2 rounded-md font-medium hover:bg-pink-50 transition-colors">
                    Смотреть
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные товары</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
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
            <Link to="/products">
              <Button className="bg-pink-600 hover:bg-pink-700">
                Смотреть все товары
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl text-pink-600 mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Натуральные ингредиенты</h3>
              <p className="text-gray-600">Мы используем только лучшие натуральные компоненты, безопасные для вашей кожи</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl text-pink-600 mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2">Не тестируется на животных</h3>
              <p className="text-gray-600">Вся наша продукция имеет сертификат Cruelty-Free и не тестируется на животных</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl text-pink-600 mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставляем по всей России в течение 1-3 рабочих дней</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscription */}
      <section className="py-16 bg-pink-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Подпишитесь на рассылку</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Получайте информацию о новинках, акциях и специальных предложениях первыми
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Введите ваш email" 
              className="flex-1 px-4 py-3 rounded-l-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <Button className="bg-pink-600 hover:bg-pink-700 rounded-l-none">
              Подписаться
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
