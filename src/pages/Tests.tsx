
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CodeIcon, DatabaseIcon, NetworkIcon, ServerIcon, MonitorIcon, ShieldIcon } from "lucide-react";

const allCategories = [
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
  {
    id: 4,
    title: "Архитектура компьютера",
    description: "Аппаратное обеспечение, процессоры, память",
    icon: <ServerIcon className="h-10 w-10 text-primary" />,
    testsCount: 12,
    path: "/tests/hardware",
  },
  {
    id: 5,
    title: "Операционные системы",
    description: "Windows, Linux, macOS, командные оболочки",
    icon: <MonitorIcon className="h-10 w-10 text-primary" />,
    testsCount: 14,
    path: "/tests/os",
  },
  {
    id: 6,
    title: "Информационная безопасность",
    description: "Защита информации, криптография, уязвимости",
    icon: <ShieldIcon className="h-10 w-10 text-primary" />,
    testsCount: 10,
    path: "/tests/security",
  },
];

const Tests = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Все категории тестов</h1>
            <p className="text-muted-foreground max-w-3xl mb-10">
              Выберите категорию, которая вас интересует, и проверьте свои знания с помощью наших интерактивных тестов по информатике.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCategories.map((category) => (
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
                      <Link to={category.path}>Начать тестирование</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tests;
