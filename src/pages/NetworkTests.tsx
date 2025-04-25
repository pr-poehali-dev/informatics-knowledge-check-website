
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, ClockIcon, LayersIcon, NetworkIcon } from "lucide-react";

const networkTests = [
  {
    id: 101,
    title: "Основы сетевых протоколов",
    description: "Тест на знание основных протоколов TCP/IP, UDP и их применение",
    difficulty: "Начальный",
    time: 15,
    questionsCount: 10,
  },
  {
    id: 102,
    title: "Модель OSI",
    description: "Проверка знаний о семиуровневой модели OSI и функциях каждого уровня",
    difficulty: "Средний",
    time: 20,
    questionsCount: 15,
  },
  {
    id: 103,
    title: "Настройка локальных сетей",
    description: "Практические вопросы по настройке LAN, VLAN и маршрутизации",
    difficulty: "Продвинутый",
    time: 30,
    questionsCount: 20,
  },
  {
    id: 104,
    title: "Беспроводные сети Wi-Fi",
    description: "Тестирование знаний о стандартах Wi-Fi, безопасности и настройке",
    difficulty: "Средний",
    time: 25,
    questionsCount: 15,
  },
  {
    id: 105,
    title: "Сетевая безопасность",
    description: "Вопросы по защите сетей, файерволам и обнаружению вторжений",
    difficulty: "Продвинутый",
    time: 35,
    questionsCount: 25,
  },
  {
    id: 106,
    title: "IP-адресация и подсети",
    description: "Тест на расчет подсетей, классы IP-адресов и маски подсети",
    difficulty: "Средний",
    time: 25,
    questionsCount: 15,
  },
];

const NetworkTests = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-4">
              <Button variant="ghost" asChild className="mr-4">
                <Link to="/tests">
                  <ArrowLeftIcon className="h-4 w-4 mr-2" /> Назад к категориям
                </Link>
              </Button>
              <h1 className="text-4xl font-bold flex items-center">
                <NetworkIcon className="h-8 w-8 mr-3 text-primary" />
                Тесты по компьютерным сетям
              </h1>
            </div>
            
            <p className="text-muted-foreground max-w-3xl mb-10">
              Проверьте свои знания в области компьютерных сетей: от базовых принципов до продвинутых концепций маршрутизации и безопасности.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {networkTests.map((test) => (
                <Card key={test.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{test.title}</CardTitle>
                    <CardDescription>{test.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center">
                      <Badge 
                        variant="outline" 
                        className={`
                          ${test.difficulty === "Начальный" ? "bg-green-100 text-green-800" : ""}
                          ${test.difficulty === "Средний" ? "bg-yellow-100 text-yellow-800" : ""}
                          ${test.difficulty === "Продвинутый" ? "bg-red-100 text-red-800" : ""}
                        `}
                      >
                        {test.difficulty}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {test.time} минут
                      </div>
                      <div className="flex items-center">
                        <LayersIcon className="h-4 w-4 mr-1" />
                        {test.questionsCount} вопросов
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to={`/test/${test.id}`}>Начать тест</Link>
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

export default NetworkTests;
