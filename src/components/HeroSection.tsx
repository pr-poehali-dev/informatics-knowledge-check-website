
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-primary/90 to-primary py-16 md:py-24 text-primary-foreground">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Проверьте свои знания<br />по информатике
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-primary-foreground/90">
          Интерактивная платформа с тестами разной сложности, учебными материалами и соревнованиями для учеников и профессионалов.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/tests" className="flex items-center gap-2">
              Начать тестирование <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <Link to="/study">
              Учебные материалы
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
