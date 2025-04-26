
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Как правильно ухаживать за кожей лица зимой",
    excerpt: "Советы и рекомендации по уходу за кожей в холодное время года. Узнайте, какие средства необходимы и как защитить кожу от агрессивных факторов окружающей среды.",
    date: "20 апреля 2025",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "Уход за кожей"
  },
  {
    id: 2,
    title: "Тренды макияжа 2025: что будет модно в этом году",
    excerpt: "Обзор модных тенденций в макияже на 2025 год. Новые техники, цвета и текстуры, которые помогут быть в тренде и подчеркнуть индивидуальность.",
    date: "15 апреля 2025",
    imageUrl: "https://images.unsplash.com/photo-1599733458572-b3e2a29b7e24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1ha2V1cHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "Макияж"
  },
  {
    id: 3,
    title: "Натуральная косметика: польза и особенности использования",
    excerpt: "Всё, что нужно знать о натуральной косметике. Разбираемся в составах, сертификатах и учимся выбирать действительно полезные средства для ухода.",
    date: "10 апреля 2025",
    imageUrl: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG5hdHVyYWwlMjBjb3NtZXRpY3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "Натуральная косметика"
  },
  {
    id: 4,
    title: "Процедуры для волос: что выбрать для восстановления после зимы",
    excerpt: "Подробный обзор процедур и средств для восстановления волос после зимы. Маски, сыворотки и профессиональные процедуры для красоты и здоровья волос.",
    date: "5 апреля 2025",
    imageUrl: "https://images.unsplash.com/photo-1584297091622-af8e5bd80b13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhhaXIlMjBjYXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "Уход за волосами"
  },
  {
    id: 5,
    title: "SPF-защита: как правильно выбрать и использовать солнцезащитные средства",
    excerpt: "Важность SPF-защиты круглый год и советы по выбору подходящего средства для разных типов кожи. Развенчиваем мифы о солнцезащитных кремах.",
    date: "1 апреля 2025",
    imageUrl: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bnNjcmVlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    category: "Защита кожи"
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Заголовок страницы */}
        <section className="bg-gradient-to-r from-pink-100 to-pink-200 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-pink-800">Блог о красоте и уходе</h1>
            <p className="mt-4 text-lg text-center text-pink-700 max-w-2xl mx-auto">
              Полезные статьи, советы экспертов и обзоры новинок косметики
            </p>
          </div>
        </section>
        
        {/* Список статей блога */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-pink-600 mb-2">
                      <span className="bg-pink-100 px-2 py-1 rounded-full">{post.category}</span>
                      <div className="flex items-center text-gray-500">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-pink-300 text-pink-700 hover:bg-pink-50">
                      Читать полностью
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {/* Подписка на блог */}
            <div className="mt-16 bg-pink-50 p-8 rounded-lg">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-pink-800">Подпишитесь на наши новости</h2>
                <p className="mt-2 text-pink-700">Получайте новые статьи и эксклюзивные советы по уходу первыми</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                  <input 
                    type="email" 
                    placeholder="Ваш email" 
                    className="px-4 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 min-w-[300px]"
                  />
                  <Button className="bg-pink-600 hover:bg-pink-700">Подписаться</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
