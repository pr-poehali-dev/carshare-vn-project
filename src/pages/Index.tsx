import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const cars = [
    {
      id: 1,
      name: 'Lada Granta',
      type: 'Эконом',
      price: 13,
      image: '🚗',
      features: ['Кондиционер', 'ABS', 'Подушки безопасности'],
      available: true,
      coords: { lat: 58.5219, lng: 31.2750 }
    },
    {
      id: 2,
      name: 'Lada Granta',
      type: 'Эконом',
      price: 13,
      image: '🚙',
      features: ['Кондиционер', 'ABS', 'Подушки безопасности'],
      available: true,
      coords: { lat: 58.5180, lng: 31.2690 }
    },
    {
      id: 3,
      name: 'Lada Granta',
      type: 'Эконом',
      price: 13,
      image: '🚘',
      features: ['Кондиционер', 'ABS', 'Подушки безопасности'],
      available: false,
      coords: { lat: 58.5240, lng: 31.2800 }
    },
    {
      id: 4,
      name: 'Hyundai Solaris',
      type: 'Комфорт',
      price: 13,
      image: '🚖',
      features: ['Кондиционер', 'Bluetooth', 'Подогрев сидений'],
      available: true,
      coords: { lat: 58.5200, lng: 31.2720 }
    },
    {
      id: 5,
      name: 'Lada Vesta',
      type: 'Комфорт',
      price: 13,
      image: '🚕',
      features: ['Климат-контроль', 'Мультимедиа', 'Круиз-контроль'],
      available: true,
      coords: { lat: 58.5210, lng: 31.2760 }
    }
  ];

  const tariffs = [
    {
      name: 'Минутный',
      price: '13 ₽/мин',
      features: ['Без абонплаты', 'Гибкий тариф', 'Поминутная оплата'],
      popular: false
    },
    {
      name: 'Суточный',
      price: '2000-2500 ₽/сут',
      features: ['До 200 км включено', 'Безлимитное время', 'Лучшая цена для долгих поездок'],
      popular: true
    }
  ];

  const faqs = [
    {
      question: 'Какие документы нужны для аренды?',
      answer: 'Для аренды необходимы: водительское удостоверение (стаж от 2 лет), паспорт РФ и банковская карта для оплаты.'
    },
    {
      question: 'Как забронировать автомобиль?',
      answer: 'Выберите автомобиль на карте или в каталоге, укажите дату и время начала аренды, подтвердите бронирование. Мы зарезервируем машину на 20 минут.'
    },
    {
      question: 'Что входит в стоимость?',
      answer: 'В стоимость включены: страховка ОСАГО и КАСКО, топливо/зарядка, мойка автомобиля, техобслуживание и круглосуточная поддержка.'
    },
    {
      question: 'Можно ли выехать за пределы города?',
      answer: 'Да, вы можете выезжать в радиусе 200 км от Великого Новгорода. Для более дальних поездок необходимо согласование с поддержкой.'
    },
    {
      question: 'Что делать при ДТП?',
      answer: 'Немедленно свяжитесь с нашей службой поддержки по телефону в приложении. Не покидайте место происшествия. Мы отправим помощь и все оформим.'
    }
  ];

  const rules = [
    {
      icon: 'UserCheck',
      title: 'Возраст и стаж',
      text: 'От 21 года, стаж вождения от 2 лет'
    },
    {
      icon: 'Shield',
      title: 'Страховка',
      text: 'Полное КАСКО включено в стоимость'
    },
    {
      icon: 'Cigarette',
      title: 'Запреты',
      text: 'Курение и перевозка животных запрещены'
    },
    {
      icon: 'Fuel',
      title: 'Топливо',
      text: 'Заправка за наш счет, карта в бардачке'
    }
  ];

  const handleBooking = () => {
    if (!selectedCar || !selectedDate) {
      toast.error('Выберите автомобиль и дату');
      return;
    }
    toast.success(`${selectedCar.name} забронирован на ${selectedDate.toLocaleDateString('ru-RU')}`);
    setBookingOpen(false);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-3xl">⚡</div>
            <span className="text-2xl font-bold text-gradient">VeliGo</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#cars" className="hover:text-primary transition-colors">Автомобили</a>
            <a href="#tariffs" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#rules" className="hover:text-primary transition-colors">Правила</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="glow">
            <Icon name="Download" size={16} className="mr-2" />
            Скачать приложение
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent/20 text-accent border-accent">Каршеринг в Великом Новгороде</Badge>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Свобода <span className="text-gradient">движения</span> в один клик
              </h1>
              <p className="text-xl text-muted-foreground">
                Современный каршеринг с онлайн-бронированием. Более 50 автомобилей доступны 24/7. От эконома до премиума.
              </p>
              <div className="flex gap-4">
                <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="text-lg glow animate-pulse-glow">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Забронировать сейчас
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Бронирование автомобиля</DialogTitle>
                      <DialogDescription>Выберите автомобиль и дату начала аренды</DialogDescription>
                    </DialogHeader>
                    <div className="grid md:grid-cols-2 gap-6 py-4">
                      <div className="space-y-4">
                        <div>
                          <Label>Выберите автомобиль</Label>
                          <Select onValueChange={(value) => {
                            const car = cars.find(c => c.id === parseInt(value));
                            setSelectedCar(car);
                          }}>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите авто" />
                            </SelectTrigger>
                            <SelectContent>
                              {cars.filter(c => c.available).map(car => (
                                <SelectItem key={car.id} value={car.id.toString()}>
                                  {car.image} {car.name} - {car.price}₽/мин
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Время начала</Label>
                          <Input type="time" defaultValue="10:00" />
                        </div>
                        {selectedCar && (
                          <Card className="border-primary">
                            <CardHeader>
                              <CardTitle className="text-lg">{selectedCar.name}</CardTitle>
                              <CardDescription>{selectedCar.type}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                {selectedCar.features.map((f: string, i: number) => (
                                  <div key={i} className="flex items-center gap-2 text-sm">
                                    <Icon name="Check" size={16} className="text-primary" />
                                    {f}
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                      <div>
                        <Label>Дата начала аренды</Label>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                          className="rounded-md border"
                        />
                      </div>
                    </div>
                    <Button onClick={handleBooking} size="lg" className="w-full">
                      Подтвердить бронирование
                    </Button>
                  </DialogContent>
                </Dialog>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Карта авто
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Автомобилей</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Доступность</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">2000+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="text-[20rem] leading-none opacity-20 absolute -top-20 -right-20">🚗</div>
              <div className="relative z-10 space-y-4">
                {cars.slice(0, 3).map((car, i) => (
                  <Card key={car.id} className="card-hover" style={{ animationDelay: `${i * 0.1}s` }}>
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="text-5xl">{car.image}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg">{car.name}</div>
                        <div className="text-sm text-muted-foreground">{car.type}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{car.price}₽</div>
                        <div className="text-xs text-muted-foreground">за минуту</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cars" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Автопарк</Badge>
            <h2 className="text-5xl font-bold mb-4">Наши <span className="text-gradient">автомобили</span></h2>
            <p className="text-xl text-muted-foreground">Комфортные автомобили для ваших поездок по городу</p>
          </div>
          <Tabs defaultValue="all" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="econom">Эконом</TabsTrigger>
              <TabsTrigger value="comfort">Комфорт</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cars.map((car) => (
                  <Card key={car.id} className="card-hover overflow-hidden group">
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-12 flex items-center justify-center">
                      <div className="text-8xl group-hover:scale-110 transition-transform">{car.image}</div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{car.name}</CardTitle>
                          <CardDescription>{car.type}</CardDescription>
                        </div>
                        {car.available ? (
                          <Badge className="bg-green-500/20 text-green-500">Доступен</Badge>
                        ) : (
                          <Badge variant="secondary">Занят</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {car.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <Icon name="Check" size={14} className="text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-border">
                        <div>
                          <div className="text-2xl font-bold text-primary">{car.price}₽</div>
                          <div className="text-xs text-muted-foreground">за час</div>
                        </div>
                        <Button 
                          disabled={!car.available}
                          onClick={() => {
                            setSelectedCar(car);
                            setBookingOpen(true);
                          }}
                        >
                          Забронировать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Тарифы</Badge>
            <h2 className="text-5xl font-bold mb-4">Выгодные <span className="text-gradient">предложения</span></h2>
            <p className="text-xl text-muted-foreground">Выберите оптимальный тариф для ваших поездок</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tariffs.map((tariff, i) => (
              <Card 
                key={i} 
                className={`card-hover relative ${tariff.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}
              >
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary py-4">{tariff.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {tariff.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-6" variant={tariff.popular ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Правила</Badge>
            <h2 className="text-5xl font-bold mb-4">Простые <span className="text-gradient">условия</span></h2>
            <p className="text-xl text-muted-foreground">Всё, что нужно знать перед поездкой</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rules.map((rule, i) => (
              <Card key={i} className="card-hover text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={rule.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{rule.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{rule.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-5xl font-bold mb-4">Частые <span className="text-gradient">вопросы</span></h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы о каршеринге</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-5xl font-bold mb-4">Свяжитесь <span className="text-gradient">с нами</span></h2>
            <p className="text-xl text-muted-foreground">Мы всегда на связи 24/7</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+78162555555" className="text-lg hover:text-primary transition-colors">
                  +7 (8162) 55-55-55
                </a>
              </CardContent>
            </Card>
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-secondary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@veligo.ru" className="text-lg hover:text-secondary transition-colors">
                  info@veligo.ru
                </a>
              </CardContent>
            </Card>
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-accent" />
                </div>
                <CardTitle>Офис</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Великий Новгород<br />ул. Большая Московская, 24
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="text-3xl">⚡</div>
              <span className="text-2xl font-bold text-gradient">VeliGo</span>
            </div>
            <div className="text-muted-foreground">
              © 2024 VeliGo. Каршеринг в Великом Новгороде
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;