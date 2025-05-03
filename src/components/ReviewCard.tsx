
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  title: string;
  company?: string;
  review: string;
  rating?: number;
  imageSrc?: string;
}

const ReviewCard = ({ name, title, company, review, rating = 5, imageSrc }: ReviewCardProps) => {
  return (
    <div className="deal-card flex flex-col h-full">
      <div className="flex items-center mb-4">
        {imageSrc ? (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
            <span className="text-xl font-bold text-gray-500">{name.charAt(0)}</span>
          </div>
        )}
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-600">{title}{company && `, ${company}`}</p>
        </div>
      </div>

      <div className="flex mb-3">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-kloudfox-yellow text-kloudfox-yellow" />
          ))}
      </div>

      <p className="italic text-gray-700 flex-grow">{review}</p>
    </div>
  );
};

export default ReviewCard;
