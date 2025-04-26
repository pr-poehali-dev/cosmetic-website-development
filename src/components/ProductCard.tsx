
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  title, 
  image, 
  price, 
  oldPrice, 
  category 
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <Link to={`/product/${id}`}>
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
          />
          {oldPrice && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
              Скидка
            </div>
          )}
        </div>
      </Link>
      
      <CardContent className="p-4">
        <div className="text-sm text-pink-600 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-gray-900 hover:text-pink-600 transition-colors mb-2">{title}</h3>
        </Link>
        <div className="flex items-center">
          {oldPrice ? (
            <>
              <span className="text-lg font-bold text-gray-900">{price} ₽</span>
              <span className="ml-2 text-sm text-gray-500 line-through">{oldPrice} ₽</span>
            </>
          ) : (
            <span className="text-lg font-bold text-gray-900">{price} ₽</span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-pink-600 hover:bg-pink-700">
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
