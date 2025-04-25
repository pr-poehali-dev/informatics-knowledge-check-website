
import { Link } from "react-router-dom";
import { LaptopIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <LaptopIcon className="h-6 w-6" />
              <span className="text-xl font-bold">ИнфоТест</span>
            </Link>
            <p className="text-primary-foreground/80">
              Платформа для проверки и улучшения знаний по информатике
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li><Link to="/tests" className="text-primary-foreground/80 hover:text-primary-foreground">Тесты</Link></li>
              <li><Link to="/study" className="text-primary-foreground/80 hover:text-primary-foreground">Материалы</Link></li>
              <li><Link to="/leaderboard" className="text-primary-foreground/80 hover:text-primary-foreground">Рейтинг</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Категории</h3>
            <ul className="space-y-2">
              <li><Link to="/tests/programming" className="text-primary-foreground/80 hover:text-primary-foreground">Программирование</Link></li>
              <li><Link to="/tests/networks" className="text-primary-foreground/80 hover:text-primary-foreground">Компьютерные сети</Link></li>
              <li><Link to="/tests/databases" className="text-primary-foreground/80 hover:text-primary-foreground">Базы данных</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">О нас</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground">О проекте</Link></li>
              <li><Link to="/contacts" className="text-primary-foreground/80 hover:text-primary-foreground">Контакты</Link></li>
              <li><Link to="/faq" className="text-primary-foreground/80 hover:text-primary-foreground">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 mt-6 text-center text-primary-foreground/70">
          <p>© {new Date().getFullYear()} ИнфоТест. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
