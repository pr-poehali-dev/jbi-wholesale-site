import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/659896a1-37d8-4894-b236-acb4401acb80/files/c6096512-a648-4592-8bf1-f09cd1a14ed6.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "products", label: "Продукция" },
  { id: "docs", label: "Документы" },
  { id: "services", label: "Услуги" },
  { id: "about", label: "О заводе" },
  { id: "promo", label: "Акции %" },
  { id: "contacts", label: "Контакты" },
];

const PRODUCT_CATEGORIES = [
  {
    title: "Кольца и колодцы",
    icon: "Circle",
    items: ["Кольца стеновые КС", "Водосточные колодцы", "Крышки колодцев", "Плиты днища ПД", "Плиты перекрытия", "Кабельные колодцы ККС", "Люки чугунные"],
  },
  {
    title: "Инженерные сети",
    icon: "Network",
    items: ["Каналы и тоннели 3.006.1-8", "Лотки Л и ЛП", "Балки серии Б", "Плиты каналов", "Коллекторы РК", "Опорные подушки"],
  },
  {
    title: "Дорожное строительство",
    icon: "Construction",
    items: ["Плиты дорожные ПД", "Изделия для ж/д", "Блоки упора У", "Блоки бортовые", "Плиты аэродромные"],
  },
  {
    title: "Фундаменты и стены",
    icon: "Building2",
    items: ["Фундаментные блоки ФБС", "Перемычки ПБ", "Блоки стеновые", "Плиты перекрытий ПК", "Сваи забивные"],
  },
  {
    title: "Для водоснабжения",
    icon: "Droplets",
    items: ["Трубы безнапорные", "Трубы железобетонные", "Муфты и раструбы", "Оголовки труб"],
  },
  {
    title: "Прочие изделия",
    icon: "Package",
    items: ["Лестницы и стремянки", "Опорные плиты", "Блоки заборные", "Элементы ограждений", "Изделия на заказ"],
  },
];

const STATS = [
  { value: "25+", label: "лет на рынке" },
  { value: "500+", label: "наименований" },
  { value: "1000+", label: "клиентов" },
  { value: "48 ч", label: "срок отгрузки" },
];

const SERVICES = [
  { icon: "Truck", title: "Доставка по региону", desc: "Собственный автопарк спецтехники. Доставляем любые объёмы в удобное время." },
  { icon: "Crane", title: "Погрузка кранами", desc: "Автокраны и погрузчики для крупногабаритных изделий. Работаем на объектах." },
  { icon: "ClipboardList", title: "Изделия на заказ", desc: "Изготовим нестандартные ЖБИ по вашим чертежам и техническим условиям." },
  { icon: "Headphones", title: "Техническая поддержка", desc: "Консультации по подбору изделий для проектов любой сложности." },
];

const DOCS = [
  { name: "Сертификат соответствия ГОСТ 8020-2016", type: "PDF", size: "1.2 МБ" },
  { name: "Декларация о соответствии ТР ТС 014/2011", type: "PDF", size: "0.8 МБ" },
  { name: "Свидетельство о регистрации ИСО 9001:2015", type: "PDF", size: "2.1 МБ" },
  { name: "Лицензия на производство ЖБИ", type: "PDF", size: "1.5 МБ" },
  { name: "Паспорт качества на кольца КС 10.9", type: "PDF", size: "0.6 МБ" },
  { name: "Протокол испытаний — плиты дорожные", type: "PDF", size: "0.9 МБ" },
];

const PROMOS = [
  { badge: "АКЦИЯ", title: "Кольца КС 10.9 — скидка 15%", desc: "При заказе от 20 штук. Действует до конца месяца.", color: "#E62638" },
  { badge: "ВЫГОДНО", title: "Плиты дорожные ПД-6 — оптовая цена", desc: "Партии от 50 плит по заводской себестоимости.", color: "#2D61A5" },
  { badge: "БЕСПЛАТНО", title: "Бесплатная доставка при заказе от 200 000 ₽", desc: "В радиусе 100 км от завода. Уточняйте у менеджера.", color: "#1a8a4a" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>("Кольца и колодцы");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-gray)", fontFamily: "Manrope, sans-serif" }}>

      {/* ── TOP BAR ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--blue)" }}>
              <Icon name="Building2" size={22} className="text-white" />
            </div>
            <div>
              <div className="font-extrabold text-base leading-none" style={{ color: "var(--blue)" }}>Завод ЖБИ</div>
              <div className="text-xs font-medium" style={{ color: "var(--red)" }}>железобетонные изделия</div>
            </div>
          </div>

          {/* Address */}
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
            <Icon name="MapPin" size={14} style={{ color: "var(--red)" }} />
            Смоленская обл., г. Сафоново, ул. Шахтёрская, 44
          </div>

          {/* Phone + CTA */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <a href="tel:84814244902" className="block font-bold text-base leading-none hover:opacity-80 transition-opacity" style={{ color: "var(--blue)" }}>
                8 (48142) 4-49-02
              </a>
              <a href="tel:89517159963" className="block text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                8 (951) 715-99-63
              </a>
            </div>
            <button className="btn-red px-4 py-2.5 rounded-md text-sm flex items-center gap-2 whitespace-nowrap">
              <Icon name="Download" size={15} />
              Скачать прайс
            </button>
          </div>
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 shadow-md" style={{ background: "var(--blue)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <div className="hidden lg:flex items-center gap-7">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`nav-item ${activeSection === item.id ? "active" : ""}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2 text-white text-sm font-medium opacity-75">
              <Icon name="Clock" size={14} />
              Пн–Пт, 10:00–18:00
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-white p-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20" style={{ background: "var(--blue-dark)" }}>
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left py-2.5 text-sm font-semibold text-white/85 hover:text-white border-b border-white/10 last:border-0"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="relative overflow-hidden" style={{ minHeight: 480 }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(30,74,130,0.88) 40%, rgba(30,74,130,0.45) 100%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-xl">
            <div className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 anim-1" style={{ background: "var(--red)", color: "#fff" }}>
              С 1998 года
            </div>
            <h1 className="text-white font-extrabold leading-tight mb-4 anim-2" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              Завод железобетонных<br />изделий — ЖБИ оптом
            </h1>
            <p className="text-blue-100 text-base leading-relaxed mb-8 anim-3">
              Производство и продажа ЖБИ: кольца, плиты, фундаментные блоки, дорожные плиты.
              Полный пакет документов ГОСТ на каждую позицию. Отгрузка от 48 часов.
            </p>
            <div className="flex flex-wrap gap-3 anim-4">
              <button onClick={() => scrollTo("products")} className="btn-red px-7 py-3 rounded-md text-sm flex items-center gap-2">
                Смотреть продукцию
                <Icon name="ArrowRight" size={15} />
              </button>
              <button onClick={() => scrollTo("contacts")} className="px-7 py-3 rounded-md text-sm font-semibold border-2 border-white text-white hover:bg-white/10 transition-colors">
                Получить прайс
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative" style={{ background: "rgba(20, 50, 100, 0.85)" }}>
          <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <div key={i} className="text-center text-white">
                <div className="text-2xl font-extrabold leading-none" style={{ color: "#fff" }}>{s.value}</div>
                <div className="text-xs text-blue-200 mt-0.5 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-title mb-1">Продукция</div>
          <div className="red-line" />
          <p className="text-gray-500 text-sm mb-8 max-w-xl">
            Собственное производство. Все изделия сертифицированы. Полный пакет ГОСТ-документов на каждую позицию.
          </p>

          <div className="flex flex-col lg:flex-row gap-5">
            {/* Category sidebar */}
            <div className="lg:w-64 shrink-0 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => setOpenCategory(cat.title)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-lg text-sm font-semibold whitespace-nowrap lg:whitespace-normal transition-all text-left ${
                    openCategory === cat.title
                      ? "text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                  }`}
                  style={openCategory === cat.title ? { background: "var(--blue)" } : {}}
                >
                  <Icon name={cat.icon as "Circle"} size={16} />
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Items panel */}
            <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6">
              {PRODUCT_CATEGORIES.filter((c) => c.title === openCategory).map((cat) => (
                <div key={cat.title}>
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name={cat.icon as "Circle"} size={20} style={{ color: "var(--blue)" }} />
                    <h3 className="font-bold text-lg">{cat.title}</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {cat.items.map((item) => (
                      <div key={item} className="product-card p-4 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5" style={{ background: "#eef3fb" }}>
                          <Icon name="Box" size={15} style={{ color: "var(--blue)" }} />
                        </div>
                        <div>
                          <div className="font-semibold text-sm leading-snug">{item}</div>
                          <button className="text-xs font-semibold mt-1.5 hover:underline" style={{ color: "var(--red)" }}>
                            Запросить цену →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <button className="btn-red px-10 py-3 rounded-md text-sm inline-flex items-center gap-2">
              <Icon name="Download" size={15} />
              Скачать полный прайс-лист
            </button>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS ── */}
      <section id="docs" className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-title mb-1">Документы</div>
          <div className="red-line" />
          <p className="text-gray-500 text-sm mb-8 max-w-xl">
            Вся продукция сертифицирована. Скачайте нужные документы или запросите по email.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DOCS.map((doc, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-50/40 transition-all cursor-pointer group">
                <div className="w-10 h-12 rounded flex items-center justify-center shrink-0 font-bold text-xs text-white" style={{ background: "var(--red)" }}>
                  {doc.type}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm leading-snug truncate">{doc.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{doc.size}</div>
                </div>
                <Icon name="Download" size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-title mb-1">Услуги</div>
          <div className="red-line" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "#eef3fb" }}>
                  <Icon name={s.icon as "Truck"} size={22} style={{ color: "var(--blue)" }} />
                </div>
                <h3 className="font-bold text-base mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-title mb-1">О заводе</div>
              <div className="red-line" />
              <p className="text-gray-600 leading-relaxed mb-5">
                Завод ЖБИ работает с 1998 года. За это время мы выпустили более 500 наименований железобетонных изделий для промышленного и гражданского строительства, дорожного хозяйства и коммунальной инфраструктуры.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Производственная площадка оснащена современным оборудованием. Собственная лаборатория контролирует качество на каждом этапе: от замеса бетона до готового изделия. Всё производство соответствует ГОСТ и техническим регламентам Таможенного союза.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Factory", label: "Своё производство" },
                  { icon: "FlaskConical", label: "Лаборатория ОТК" },
                  { icon: "Award", label: "ГОСТ сертификаты" },
                  { icon: "Truck", label: "Собственный автопарк" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-gray-50">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#eef3fb" }}>
                      <Icon name={f.icon as "Factory"} size={17} style={{ color: "var(--blue)" }} />
                    </div>
                    <span className="text-sm font-semibold">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Director block */}
            <div className="space-y-5">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-xl shrink-0" style={{ background: "var(--blue)" }}>
                    АК
                  </div>
                  <div>
                    <div className="font-bold text-base">Калинин Александр Сергеевич</div>
                    <div className="text-sm text-gray-500">Директор завода</div>
                  </div>
                </div>
                <blockquote className="text-sm text-gray-600 leading-relaxed italic border-l-4 pl-4" style={{ borderColor: "var(--red)" }}>
                  «Мы гарантируем качество каждого изделия, которое выходит с нашего завода. 25 лет работы — это тысячи реализованных проектов и сотни постоянных клиентов по всему региону.»
                </blockquote>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                    <div className="text-3xl font-extrabold leading-none mb-1" style={{ color: "var(--red)" }}>{s.value}</div>
                    <div className="text-xs text-gray-500 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROMOS ── */}
      <section id="promo" className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-title mb-1">Акции и спецпредложения</div>
          <div className="red-line" />
          <div className="grid md:grid-cols-3 gap-5 mt-2">
            {PROMOS.map((p, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-2" style={{ background: p.color }} />
                <div className="p-6">
                  <span className="inline-block text-xs font-bold text-white px-2.5 py-0.5 rounded mb-3" style={{ background: p.color }}>
                    {p.badge}
                  </span>
                  <h3 className="font-bold text-base mb-2 leading-snug">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                  <button className="text-sm font-bold hover:underline" style={{ color: p.color }}>
                    Узнать подробнее →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section id="contacts" className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-title mb-1">Контакты</div>
          <div className="red-line" />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <div className="space-y-5 mb-8">
                {[
                  { icon: "MapPin", label: "Адрес", value: "Смоленская обл., г. Сафоново, ул. Шахтёрская, 44, корп. 5" },
                  { icon: "Phone", label: "Телефон", value: "8 (48142) 4-49-02" },
                  { icon: "Smartphone", label: "Мобильный", value: "8 (951) 715-99-63" },
                  { icon: "Mail", label: "Email", value: "9517159963@mail.ru" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт, 10:00–18:00" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#eef3fb" }}>
                      <Icon name={c.icon as "MapPin"} size={17} style={{ color: "var(--blue)" }} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{c.label}</div>
                      <div className="font-semibold text-sm">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="w-full h-48 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50">
                <div className="text-center text-gray-400">
                  <Icon name="Map" size={32} className="mx-auto mb-2" />
                  <div className="text-sm font-medium">Схема проезда на карте</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-7">
              <h3 className="font-bold text-lg mb-5">Оставить заявку</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 font-semibold block mb-1.5">Имя *</label>
                    <input type="text" className="w-full bg-white border border-gray-300 px-3 py-2.5 text-sm rounded-lg focus:outline-none focus:border-blue-400 transition-colors" placeholder="Иван Петров" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-semibold block mb-1.5">Компания</label>
                    <input type="text" className="w-full bg-white border border-gray-300 px-3 py-2.5 text-sm rounded-lg focus:outline-none focus:border-blue-400 transition-colors" placeholder="ООО Стройка" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-semibold block mb-1.5">Телефон *</label>
                  <input type="tel" className="w-full bg-white border border-gray-300 px-3 py-2.5 text-sm rounded-lg focus:outline-none focus:border-blue-400 transition-colors" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-semibold block mb-1.5">Сообщение</label>
                  <textarea rows={4} className="w-full bg-white border border-gray-300 px-3 py-2.5 text-sm rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none" placeholder="Нужны кольца КС 10.9, 50 штук..." />
                </div>
                <button className="btn-red w-full py-3 rounded-lg text-sm flex items-center justify-center gap-2">
                  <Icon name="Send" size={15} />
                  Отправить заявку
                </button>
                <p className="text-xs text-gray-400 text-center">Ответим в течение 1 рабочего часа</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8" style={{ background: "#1a1f2e" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--blue)" }}>
                <Icon name="Building2" size={16} className="text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Завод ЖБИ</div>
                <div className="text-xs" style={{ color: "#969696" }}>© 1998–2026</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-5">
              {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="text-xs font-semibold hover:text-white transition-colors" style={{ color: "#e8e8e8" }}>
                  {item.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-center" style={{ color: "#969696" }}>
              <div>8 (48142) 4-49-02</div>
              <div className="mt-1">Политика конфиденциальности</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
