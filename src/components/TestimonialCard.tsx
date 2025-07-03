
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

const TestimonialCard = ({ name, location, rating, comment, avatar }: TestimonialCardProps) => {
  return (
    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-gray-600 text-sm">{location}</p>
          </div>
        </div>
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-gray-700 italic">"{comment}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
