
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestCategories from "@/components/TestCategories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TestCategories />
        
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему ИнфоТест?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Наша платформа предлагает уникальные возможности для изучения и проверки знаний по информатике
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Актуальные материалы</h3>
              <p className="text-muted-foreground">Регулярно обновляемые учебные материалы и тесты по современным технологиям</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Интерактивный подход</h3>
              <p className="text-muted-foreground">Практические задания и тесты различной сложности с мгновенной обратной связью</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Система достижений</h3>
              <p className="text-muted-foreground">Отслеживайте свой прогресс, зарабатывайте баллы и сравнивайте результаты с другими</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
