
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LaptopIcon, BookOpenIcon, TrophyIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <LaptopIcon className="h-6 w-6" />
          <span className="text-xl font-bold">ИнфоТест</span>
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="font-medium hover:text-primary-foreground/80 transition-colors">
            Главная
          </Link>
          <Link to="/tests" className="font-medium hover:text-primary-foreground/80 transition-colors">
            Тесты
          </Link>
          <Link to="/study" className="font-medium hover:text-primary-foreground/80 transition-colors">
            Материалы
          </Link>
          <Link to="/leaderboard" className="font-medium hover:text-primary-foreground/80 transition-colors">
            Рейтинг
          </Link>
        </nav>
        
        <div className="flex gap-3">
          <Button variant="outline" className="bg-primary-foreground text-primary">
            Войти
          </Button>
          <Button className="hidden md:flex bg-accent text-accent-foreground">
            Регистрация
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
