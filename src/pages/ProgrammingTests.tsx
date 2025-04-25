
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, FileCheck, UserCheck } from "lucide-react";

const programmingTests = [
  {
    id: 1,
    title: "Основы алгоритмов",
    description: "Базовые алгоритмические структуры, массивы, сортировка",
    difficulty: "Начальный",
    questionsCount: 15,
    timeMinutes: 20,
    path: "/test/1",
  },
  {
    id: 2,
    title: "Введение в Python",
    description: "Синтаксис, типы данных, функции и основные библиотеки",
    difficulty: "Начальный",
    questionsCount: 20,
    timeMinutes: 25,
    path: "/test/2",
  },
  {
    id: 3,
    title: "Структуры данных",
    description: "Списки, стеки, очереди, хеш-таблицы, деревья",
    difficulty: "Средний",
    questionsCount: 18,
    timeMinutes: 30,
    path: "/test/3",
  },
  {
    id: 4,
    title: "Объектно-ориентированное программирование",
    description: "Классы, объекты, наследование, полиморфизм",
    difficulty: "Средний",
    questionsCount: 22,
    timeMinutes: 35,
    path: "/test/4",
  },
  {
    id: 5,
    title: "Алгоритмы поиска и сортировки",
    description: "Бинарный поиск, быстрая сортировка, сортировка слиянием",
    difficulty: "Продвинутый",
    questionsCount: 15,
    timeMinutes: 40,
    path: "/test/5",
  },
];

const difficultyColors = {
  "Начальный": "bg-green-100 text-green-800",
  "Средний": "bg-blue-100 text-blue-800",
  "Продвинутый": "bg-purple-100 text-purple-800",
};

const ProgrammingTests = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h1 className="text-4xl font-bold mb-4">Тесты по программированию</h1>
              <p className="text-muted-foreground max-w-3xl">
                Проверьте свои знания в области программирования с помощью наших интерактивных тестов. От базовых алгоритмов до продвинутых концепций.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmingTests.map((test) => (
                <Card key={test.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{test.title}</CardTitle>
                      <Badge className={difficultyColors[test.difficulty as keyof typeof difficultyColors]}>
                        {test.difficulty}
                      </Badge>
                    </div>
                    <CardDescription className="mt-2">{test.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center">
                        <FileCheck className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{test.questionsCount} вопросов</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{test.timeMinutes} минут</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to={test.path}>Начать тест</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-10">
              <Button variant="outline" asChild>
                <Link to="/tests">← Назад к категориям</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProgrammingTests;
