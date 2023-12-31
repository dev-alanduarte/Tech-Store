import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/categotry-icon";
import { Category } from "@prisma/client";
import { Headphones, HeadphonesIcon, Keyboard, KeyboardIcon, Monitor, MonitorIcon, MouseIcon, SpeakerIcon, Square, SquareIcon } from "lucide-react";


interface CategoryItemProps {
    category: Category
}
const CategoryItem = ( {category}: CategoryItemProps ) => {

    return (  
            <Badge variant="outline" 
            className="flex items-center justify-center gap-2 rounded-lg py-3"
            >
            {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
                <span className="text-xs font-bold">{category.name}</span>
            </Badge>
    );
    }

export default CategoryItem;