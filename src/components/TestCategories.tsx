
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LayoutGridIcon, CodeIcon, DatabaseIcon, NetworkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Основы программирования",
    description: "Алгоритмы, структуры данных, языки программирования",
    icon: <CodeIcon className="h-10 w-10 text-primary" />,
    testsCount: 25,
    path: "/tests/programming",
  },
  {
    id: 2,
    title: "Компьютерные сети",
    description: "Протоколы, топологии, настройка сетей",
    icon: <NetworkIcon className="h-10 w-10 text-primary" />,
    testsCount: 18,
    path: "/tests/networks",
  },
  {
    id: 3,
    title: "Базы данных",
    description: "Реляционные БД, SQL, проектирование данных",
    icon: <DatabaseIcon className="h-10 w-10 text-primary" />,
    testsCount: 15,
    path: "/tests/databases",
  },
];

const TestCategories = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Категории тестов</h2>
            <p className="text-muted-foreground">Выберите интересующую вас тему и проверьте свои знания</p>
          </div>
          <Button asChild variant="outline">
            <Link to="/tests">
              Все категории <LayoutGridIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{category.icon}</div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="bg-primary/10">
                  {category.testsCount} тестов
                </Badge>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={category.path}>Перейти к тестам</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestCategories;
