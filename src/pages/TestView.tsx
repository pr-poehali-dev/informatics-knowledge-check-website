
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Timer, ArrowLeft, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const tests = {
  "1": {
    id: 1,
    title: "Основы алгоритмов",
    description: "Базовые алгоритмические структуры, массивы, сортировка",
    difficulty: "Начальный",
    questionsCount: 15,
    timeMinutes: 20,
    questions: [
      {
        id: 1,
        text: "Какая временная сложность алгоритма быстрой сортировки в среднем случае?",
        options: [
          { id: "a", text: "O(n)" },
          { id: "b", text: "O(n log n)" },
          { id: "c", text: "O(n²)" },
          { id: "d", text: "O(log n)" }
        ],
        correctAnswer: "b"
      },
      {
        id: 2,
        text: "Что такое рекурсивный алгоритм?",
        options: [
          { id: "a", text: "Алгоритм, использующий циклы" },
          { id: "b", text: "Алгоритм, вызывающий сам себя" },
          { id: "c", text: "Алгоритм с линейной сложностью" },
          { id: "d", text: "Алгоритм сортировки данных" }
        ],
        correctAnswer: "b"
      },
      {
        id: 3,
        text: "Как называется структура данных, работающая по принципу LIFO?",
        options: [
          { id: "a", text: "Очередь" },
          { id: "b", text: "Стек" },
          { id: "c", text: "Массив" },
          { id: "d", text: "Связный список" }
        ],
        correctAnswer: "b"
      }
    ]
  }
};

const difficultyColors = {
  "Начальный": "bg-green-100 text-green-800",
  "Средний": "bg-blue-100 text-blue-800",
  "Продвинутый": "bg-purple-100 text-purple-800"
};

const TestView = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [testComplete, setTestComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(tests[testId as keyof typeof tests]?.timeMinutes * 60 || 0);

  const test = tests[testId as keyof typeof tests];
  
  if (!test) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16">
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Ошибка</AlertTitle>
            <AlertDescription>
              Тест с указанным идентификатором не найден.
            </AlertDescription>
          </Alert>
          <Button variant="outline" asChild>
            <Link to="/tests/programming">← Вернуться к списку тестов</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const question = test.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / test.questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({
      ...answers,
      [question.id]: value,
    });
  };

  const goToNextQuestion = () => {
    if (currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setTestComplete(true);
    }
  };

  const goToPrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    test.questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    return {
      score: correctCount,
      total: test.questions.length,
      percentage: Math.round((correctCount / test.questions.length) * 100)
    };
  };

  if (testComplete) {
    const result = calculateScore();
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Результаты теста</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">{result.percentage}%</h2>
                <p className="text-muted-foreground">
                  Вы ответили правильно на {result.score} из {result.total} вопросов
                </p>
              </div>
              
              <Progress value={result.percentage} className="h-3" />
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium mb-2">Рекомендации:</h3>
                {result.percentage >= 80 ? (
                  <p>Отличная работа! Вы хорошо знаете тему.</p>
                ) : result.percentage >= 50 ? (
                  <p>Хороший результат, но есть темы для повторения.</p>
                ) : (
                  <p>Рекомендуем дополнительно изучить материалы по этой теме.</p>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <Button variant="outline" asChild className="w-full">
                <Link to="/tests/programming">Другие тесты</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/">На главную</Link>
              </Button>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold">{test.title}</h1>
              <div className="flex items-center mt-1">
                <Badge className={difficultyColors[test.difficulty as keyof typeof difficultyColors]}>
                  {test.difficulty}
                </Badge>
                <span className="ml-2 text-sm text-muted-foreground">
                  <Timer className="inline h-4 w-4 mr-1" />
                  {test.timeMinutes} минут
                </span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="mt-4 sm:mt-0" asChild>
              <Link to="/tests/programming">
                <ArrowLeft className="h-4 w-4 mr-1" /> Назад к тестам
              </Link>
            </Button>
          </div>
          
          <Progress value={progress} className="h-2 mb-6" />
          
          <Card>
            <CardHeader>
              <CardTitle>Вопрос {currentQuestion + 1} из {test.questions.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-lg font-medium mb-4">{question.text}</p>
                <RadioGroup 
                  value={answers[question.id] || ""} 
                  onValueChange={handleAnswer}
                  className="space-y-3"
                >
                  {question.options.map(option => (
                    <div key={option.id} className="flex items-center">
                      <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                      <Label htmlFor={`option-${option.id}`} className="ml-2">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={goToPrevQuestion}
                disabled={currentQuestion === 0}
              >
                Назад
              </Button>
              <Button 
                onClick={goToNextQuestion}
                disabled={!answers[question.id]}
              >
                {currentQuestion < test.questions.length - 1 ? "Дальше" : "Завершить тест"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestView;
