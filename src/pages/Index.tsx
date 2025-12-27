import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  const products: Product[] = [
    {
      id: 1,
      title: 'Пуговицы золотые металлические',
      category: 'Пуговицы',
      price: 450,
      image: 'https://cdn.poehali.dev/projects/502a5c65-214d-45a4-8252-28e3c34b8c91/files/f6f08868-f7da-436b-bf3a-460227a098f4.jpg',
      description: 'Премиальные золотые пуговицы для костюмов и пальто'
    },
    {
      id: 2,
      title: 'Пуговицы перламутровые',
      category: 'Пуговицы',
      price: 320,
      image: 'https://cdn.poehali.dev/projects/502a5c65-214d-45a4-8252-28e3c34b8c91/files/f6f08868-f7da-436b-bf3a-460227a098f4.jpg',
      description: 'Элегантные перламутровые пуговицы для рубашек'
    },
    {
      id: 3,
      title: 'Молнии потайные 20см',
      category: 'Молнии',
      price: 180,
      image: 'https://cdn.poehali.dev/projects/502a5c65-214d-45a4-8252-28e3c34b8c91/files/31d5a395-e104-449c-a06f-26f6cc2a3bd5.jpg',
      description: 'Незаметные молнии для платьев и юбок'
    },
    {
      id: 4,
      title: 'Молнии металлические разъемные',
      category: 'Молнии',
      price: 380,
      image: 'https://cdn.poehali.dev/projects/502a5c65-214d-45a4-8252-28e3c34b8c91/files/31d5a395-e104-449c-a06f-26f6cc2a3bd5.jpg',
      description: 'Прочные металлические молнии для курток'
    },
    {
      id: 5,
      title: 'Нитки полиэстер набор 10 катушек',
      category: 'Нитки',
      price: 890,
      image: 'https://cdn.poehali.dev/projects/502a5c65-214d-45a4-8252-28e3c34b8c91/files/4ee5daba-c556-4733-bf40-9d48c31415df.jpg',
      description: 'Профессиональные нитки для любых типов тканей'
    },
    {
      id: 6,
      title: 'Нитки для вышивки мулине',
      category: 'Нитки',
      price: 650,
      image: 'https://cdn.poehali.dev/projects/502a5c65-214d-45a4-8252-28e3c34b8c91/files/4ee5daba-c556-4733-bf40-9d48c31415df.jpg',
      description: 'Яркие нитки для декоративной вышивки'
    },
    {
      id: 7,
      title: 'Кнопки металлические 15мм',
      category: 'Фурнитура',
      price: 280,
      image: 'https://cdn.poehali.dev/projects/502a5c65-214d-45a4-8252-28e3c34b8c91/files/739a4f37-11e5-4607-b2b1-9179fe83c426.jpg',
      description: 'Надежные кнопки для одежды и аксессуаров'
    },
    {
      id: 8,
      title: 'Крючки и петли для одежды',
      category: 'Фурнитура',
      price: 220,
      image: 'https://cdn.poehali.dev/projects/502a5c65-214d-45a4-8252-28e3c34b8c91/files/739a4f37-11e5-4607-b2b1-9179fe83c426.jpg',
      description: 'Классическая застежка для платьев и юбок'
    }
  ];

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

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
                  onClick={() => {
                    setCurrentPage(item.id);
                    setSelectedCategory(null);
                  }}
                  className={`text-sm transition-colors relative ${
                    currentPage === item.id
                      ? 'text-[#0A4DA6] font-medium'
                      : 'text-[#424245] hover:text-[#1D1D1F]'
                  }`}
                >
                  {item.label}
                  {item.id === 'cart' && cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#0A4DA6] text-white text-xs rounded-full flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
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
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-5xl font-semibold text-[#1D1D1F] mb-2">Каталог</h1>
                <p className="text-xl text-[#424245]">
                  {selectedCategory || 'Все товары'}
                </p>
              </div>
              {selectedCategory && (
                <Button
                  variant="ghost"
                  onClick={() => setSelectedCategory(null)}
                  className="text-[#424245]"
                >
                  ← Все категории
                </Button>
              )}
            </div>

            {!selectedCategory && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {categories.map((category) => (
                  <Card
                    key={category.title}
                    onClick={() => setSelectedCategory(category.title)}
                    className="p-8 bg-white hover:shadow-xl transition-all duration-300 border-0 cursor-pointer"
                  >
                    <div className="mb-6 w-16 h-16 rounded-2xl bg-[#0A4DA6]/10 flex items-center justify-center">
                      <Icon name={category.icon} size={32} className="text-[#0A4DA6]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-[#424245]">
                      {products.filter(p => p.category === category.title).length} товаров
                    </p>
                  </Card>
                ))}
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden bg-white border-0 hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden bg-[#F5F5F7]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#424245] mb-2">{product.category}</div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-[#424245] mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-semibold text-[#1D1D1F]">
                        {product.price} ₽
                      </div>
                      <Button
                        onClick={() => addToCart(product)}
                        className="bg-[#0A4DA6] hover:bg-[#083A7E] text-white rounded-xl"
                      >
                        В корзину
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {currentPage === 'cart' && (
        <section className="pt-32 pb-20 px-6 lg:px-[10%]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-semibold text-[#1D1D1F] mb-12">Корзина</h1>
            
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 rounded-full bg-[#F5F5F7] flex items-center justify-center mx-auto mb-6">
                  <Icon name="ShoppingCart" size={48} className="text-[#424245]" />
                </div>
                <h2 className="text-3xl font-semibold text-[#1D1D1F] mb-4">Корзина пуста</h2>
                <p className="text-xl text-[#424245] mb-8">Добавьте товары из каталога</p>
                <Button 
                  onClick={() => setCurrentPage('catalog')}
                  className="bg-[#0A4DA6] hover:bg-[#083A7E] text-white rounded-xl px-7 py-6 text-base"
                >
                  Перейти в каталог
                </Button>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-8">
                  {cart.map((item) => (
                    <Card key={item.id} className="p-6 bg-white border-0">
                      <div className="flex items-center gap-6">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-24 h-24 object-cover rounded-xl"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-[#1D1D1F] mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-[#424245]">{item.category}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-3 bg-[#F5F5F7] rounded-xl px-3 py-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-[#424245] hover:text-[#1D1D1F] w-6 h-6 flex items-center justify-center"
                            >
                              <Icon name="Minus" size={16} />
                            </button>
                            <span className="text-[#1D1D1F] font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-[#424245] hover:text-[#1D1D1F] w-6 h-6 flex items-center justify-center"
                            >
                              <Icon name="Plus" size={16} />
                            </button>
                          </div>
                          <div className="text-xl font-semibold text-[#1D1D1F] w-28 text-right">
                            {item.price * item.quantity} ₽
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#424245] hover:text-red-500 transition-colors"
                          >
                            <Icon name="Trash2" size={20} />
                          </button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="p-8 bg-white border-0">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-semibold text-[#1D1D1F]">Итого:</span>
                    <span className="text-3xl font-semibold text-[#1D1D1F]">
                      {cartTotal} ₽
                    </span>
                  </div>
                  <Button className="w-full bg-[#0A4DA6] hover:bg-[#083A7E] text-white rounded-xl py-6 text-base">
                    Оформить заказ
                  </Button>
                </Card>
              </>
            )}
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