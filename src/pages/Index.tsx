import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const categories = [
    {
      title: 'Пуговицы',
      description: 'Классические и дизайнерские решения для любой одежды',
      icon: 'Circle',
      applications: ['Рубашки', 'Пальто', 'Костюмы']
    },
    {
      title: 'Молнии',
      description: 'От невидимых до декоративных элементов',
      icon: 'Zap',
      applications: ['Платья', 'Куртки', 'Сумки']
    },
    {
      title: 'Нитки',
      description: 'Профессиональные нити для швейного производства',
      icon: 'CircleDot',
      applications: ['Вышивка', 'Пошив', 'Ремонт']
    },
    {
      title: 'Фурнитура',
      description: 'Кнопки, крючки, застежки и декор',
      icon: 'Sparkles',
      applications: ['Аксессуары', 'Декор', 'Отделка']
    }
  ];

  const navigationItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'catalog', label: 'Каталог', icon: 'Grid3x3' },
    { id: 'cart', label: 'Корзина', icon: 'ShoppingCart' },
    { id: 'about', label: 'О бренде', icon: 'Info' },
    { id: 'delivery', label: 'Доставка', icon: 'Truck' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FBFBFD] to-[#F5F5F7]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-[10%]">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-semibold text-[#1D1D1F]">FURNITURA</div>
            <div className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`text-sm transition-colors ${
                    currentPage === item.id
                      ? 'text-[#0A4DA6] font-medium'
                      : 'text-[#424245] hover:text-[#1D1D1F]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {currentPage === 'home' && (
        <>
          <section className="pt-32 pb-20 px-6 lg:px-[10%]">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h1 
                    className="text-[56px] leading-[1.1] font-semibold text-[#1D1D1F] animate-fade-up"
                    style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
                  >
                    Швейная фурнитура<br />для профессионалов
                  </h1>
                  <p 
                    className="text-xl text-[#424245] max-w-[600px] leading-[1.5] animate-fade-up"
                    style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
                  >
                    Широкий выбор качественной фурнитуры для создания уникальных дизайнерских решений
                  </p>
                  <div 
                    className="animate-fade-up"
                    style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
                  >
                    <Button 
                      onClick={() => setCurrentPage('catalog')}
                      className="bg-[#0A4DA6] hover:bg-[#083A7E] text-white rounded-xl px-7 py-6 text-base transition-all duration-300"
                    >
                      Смотреть каталог
                    </Button>
                  </div>
                </div>
                <div 
                  className="relative animate-scale-in"
                  style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
                >
                  <img
                    src="https://cdn.poehali.dev/projects/502a5c65-214d-45a4-8252-28e3c34b8c91/files/739a4f37-11e5-4607-b2b1-9179fe83c426.jpg"
                    alt="Швейная фурнитура"
                    className="w-full h-auto rounded-3xl shadow-2xl shadow-black/5"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-6 lg:px-[10%]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-semibold text-[#1D1D1F] mb-4 text-center">
                Широкий выбор фурнитуры
              </h2>
              <p className="text-lg text-[#424245] text-center mb-16 max-w-2xl mx-auto">
                От классических элементов до уникальных дизайнерских решений
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                  <Card
                    key={category.title}
                    className="p-8 bg-white hover:shadow-xl transition-all duration-300 border-0 animate-fade-up cursor-pointer group"
                    style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'both' }}
                  >
                    <div className="mb-6 w-12 h-12 rounded-xl bg-[#0A4DA6]/10 flex items-center justify-center group-hover:bg-[#0A4DA6]/20 transition-colors">
                      <Icon name={category.icon} size={24} className="text-[#0A4DA6]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                      {category.title}
                    </h3>
                    <p className="text-[#424245] mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.applications.map((app) => (
                        <span
                          key={app}
                          className="text-xs px-3 py-1 rounded-full bg-[#F5F5F7] text-[#424245]"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {currentPage === 'catalog' && (
        <section className="pt-32 pb-20 px-6 lg:px-[10%]">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-semibold text-[#1D1D1F] mb-6">Каталог</h1>
            <p className="text-xl text-[#424245] mb-12">Выберите категорию фурнитуры</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card
                  key={category.title}
                  className="p-10 bg-white hover:shadow-xl transition-all duration-300 border-0 cursor-pointer"
                >
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-[#0A4DA6]/10 flex items-center justify-center">
                    <Icon name={category.icon} size={32} className="text-[#0A4DA6]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-3">
                    {category.title}
                  </h3>
                  <p className="text-[#424245] mb-4">
                    {category.description}
                  </p>
                  <Button variant="ghost" className="text-[#0A4DA6] p-0 h-auto hover:bg-transparent">
                    Подробнее →
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {currentPage === 'cart' && (
        <section className="pt-32 pb-20 px-6 lg:px-[10%]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-[#F5F5F7] flex items-center justify-center mx-auto mb-6">
              <Icon name="ShoppingCart" size={48} className="text-[#424245]" />
            </div>
            <h1 className="text-5xl font-semibold text-[#1D1D1F] mb-4">Корзина пуста</h1>
            <p className="text-xl text-[#424245] mb-8">Добавьте товары из каталога</p>
            <Button 
              onClick={() => setCurrentPage('catalog')}
              className="bg-[#0A4DA6] hover:bg-[#083A7E] text-white rounded-xl px-7 py-6 text-base"
            >
              Перейти в каталог
            </Button>
          </div>
        </section>
      )}

      {currentPage === 'about' && (
        <section className="pt-32 pb-20 px-6 lg:px-[10%]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-semibold text-[#1D1D1F] mb-6">О бренде</h1>
            <div className="space-y-6 text-lg text-[#424245] leading-relaxed">
              <p>
                Мы специализируемся на поставке профессиональной швейной фурнитуры для дизайнеров, ателье и производств.
              </p>
              <p>
                Наш ассортимент включает широкий выбор качественных материалов от проверенных производителей, 
                что позволяет воплощать любые творческие идеи в жизнь.
              </p>
              <p>
                Индивидуальный подход к каждому клиенту и быстрая доставка — наши главные приоритеты.
              </p>
            </div>
          </div>
        </section>
      )}

      {currentPage === 'delivery' && (
        <section className="pt-32 pb-20 px-6 lg:px-[10%]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-semibold text-[#1D1D1F] mb-12">Доставка</h1>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: 'Truck', title: 'Курьерская служба', text: '1-3 дня по городу' },
                { icon: 'Package', title: 'Почта России', text: '5-10 дней по РФ' },
                { icon: 'Store', title: 'Самовывоз', text: 'Бесплатно из офиса' }
              ].map((item) => (
                <Card key={item.title} className="p-8 text-center bg-white border-0">
                  <div className="w-16 h-16 rounded-2xl bg-[#0A4DA6]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} size={32} className="text-[#0A4DA6]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">{item.title}</h3>
                  <p className="text-[#424245]">{item.text}</p>
                </Card>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-8 border-0">
              <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-4">Условия доставки</h3>
              <ul className="space-y-3 text-[#424245]">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-[#0A4DA6] mt-1 flex-shrink-0" />
                  <span>Бесплатная доставка при заказе от 5000 рублей</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-[#0A4DA6] mt-1 flex-shrink-0" />
                  <span>Отслеживание заказа в личном кабинете</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-[#0A4DA6] mt-1 flex-shrink-0" />
                  <span>Возможность выбора удобного времени доставки</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {currentPage === 'contacts' && (
        <section className="pt-32 pb-20 px-6 lg:px-[10%]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-semibold text-[#1D1D1F] mb-12">Контакты</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white border-0">
                <div className="mb-6 w-12 h-12 rounded-xl bg-[#0A4DA6]/10 flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-[#0A4DA6]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">Телефон</h3>
                <p className="text-[#424245]">+7 (495) 123-45-67</p>
                <p className="text-sm text-[#424245] mt-2">Пн-Пт: 9:00 - 18:00</p>
              </Card>
              <Card className="p-8 bg-white border-0">
                <div className="mb-6 w-12 h-12 rounded-xl bg-[#0A4DA6]/10 flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-[#0A4DA6]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">Email</h3>
                <p className="text-[#424245]">info@furnitura.ru</p>
                <p className="text-sm text-[#424245] mt-2">Ответим в течение 24 часов</p>
              </Card>
              <Card className="p-8 bg-white border-0 md:col-span-2">
                <div className="mb-6 w-12 h-12 rounded-xl bg-[#0A4DA6]/10 flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-[#0A4DA6]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">Адрес офиса</h3>
                <p className="text-[#424245]">г. Москва, ул. Примерная, д. 123, офис 45</p>
                <p className="text-sm text-[#424245] mt-2">Самовывоз по предварительной договоренности</p>
              </Card>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-white border-t border-gray-200 py-12 px-6 lg:px-[10%]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-semibold text-[#1D1D1F] mb-4">FURNITURA</div>
              <p className="text-sm text-[#424245]">Профессиональная швейная фурнитура</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1D1D1F] mb-3">Каталог</h4>
              <ul className="space-y-2 text-sm text-[#424245]">
                {categories.map((cat) => (
                  <li key={cat.title}>{cat.title}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1D1D1F] mb-3">Информация</h4>
              <ul className="space-y-2 text-sm text-[#424245]">
                <li>О компании</li>
                <li>Доставка и оплата</li>
                <li>Гарантии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1D1D1F] mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-[#424245]">
                <li>+7 (495) 123-45-67</li>
                <li>info@furnitura.ru</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center text-sm text-[#424245]">
            © 2024 FURNITURA. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;