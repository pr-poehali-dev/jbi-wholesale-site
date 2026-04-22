import { useState } from "react";
import Icon from "@/components/ui/icon";

/* ─── IMAGES ─── */
const IMG_HERO = "https://cdn.poehali.dev/projects/659896a1-37d8-4894-b236-acb4401acb80/files/c6096512-a648-4592-8bf1-f09cd1a14ed6.jpg";
const IMG_RINGS = "https://cdn.poehali.dev/projects/659896a1-37d8-4894-b236-acb4401acb80/files/6082f0f9-424c-4732-904c-45976bf247bb.jpg";
const IMG_SLABS = "https://cdn.poehali.dev/projects/659896a1-37d8-4894-b236-acb4401acb80/files/c03ccfe6-e8a0-4a28-b423-6b0d75d8e7be.jpg";
const IMG_BLOCKS = "https://cdn.poehali.dev/projects/659896a1-37d8-4894-b236-acb4401acb80/files/ed6f67fb-8bc1-4dec-9675-8b628e808de4.jpg";

/* ─── NAV ─── */
const NAV = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Продукция" },
  { id: "docs", label: "Документы" },
  { id: "services", label: "Услуги" },
  { id: "about", label: "О заводе" },
  { id: "history", label: "История завода" },
  { id: "promo", label: "Акции %" },
  { id: "contacts", label: "Контакты" },
];

/* ─── CATALOG ─── */
interface Product {
  name: string;
  article?: string;
  desc?: string;
}
interface Category {
  id: string;
  title: string;
  icon: string;
  image: string;
  products: Product[];
}

const CATALOG: Category[] = [
  {
    id: "wells",
    title: "Кольца и колодцы",
    icon: "Circle",
    image: IMG_RINGS,
    products: [
      { name: "Водосточные колодцы", article: "КДВ", desc: "Для систем дождевой канализации и ливнестоков" },
      { name: "Кольца стеновые", article: "КС 10.9", desc: "Стандартные стеновые кольца для колодцев Ø1000 мм" },
      { name: "Кольца стеновые с «четвертью»", article: "КС-Ч", desc: "С упорной четвертью для надёжного соединения" },
      { name: "Крышки колодцев", article: "ПП 10", desc: "Плиты перекрытия с отверстием под люк" },
      { name: "Плиты днища", article: "ПД 10", desc: "Основание колодца с водосборным приямком" },
      { name: "Плиты перекрытия", article: "ПП 15", desc: "Для перекрытия горловин и проёмов" },
      { name: "Опорные плиты", article: "ОП", desc: "Для установки под стеновые кольца" },
      { name: "Кабельные колодцы ККС", article: "ККС-2", desc: "Для прокладки кабельных коммуникаций" },
      { name: "Люки чугунные", article: "ЛМ, ТМ, ВМ", desc: "Чугунные люки классов нагрузки A15–D400" },
      { name: "Лестницы и стремянки", article: "Л, ЛС", desc: "Для спуска в смотровые колодцы" },
    ],
  },
  {
    id: "networks",
    title: "Инженерные сети",
    icon: "GitBranch",
    image: IMG_SLABS,
    products: [
      { name: "Каналы и тоннели", article: "серия 3.006.1-8", desc: "Непроходные и полупроходные кабельные каналы" },
      { name: "Опорные подушки", article: "ОП", desc: "Для укладки трубопроводов и кабелей" },
      { name: "Плиты каналов", article: "ПК", desc: "Перекрытие технических каналов" },
      { name: "Плиты для непроходных каналов", article: "серия 3.006.1-2.87", desc: "По серии 3.006.1-2.87" },
      { name: "Балки", article: "Б", desc: "Несущие балки для промышленных сооружений" },
      { name: "Лотки", article: "Л, ЛП", desc: "Открытые и перекрытые лотки водоотведения" },
      { name: "Коллекторы подземных коммуникаций", article: "РК1101-87", desc: "По серии РК1101-87" },
    ],
  },
  {
    id: "road",
    title: "Дорожное строительство",
    icon: "Construction",
    image: IMG_SLABS,
    products: [
      { name: "Плиты дорожные", article: "ПД 6×2", desc: "Для устройства временных и постоянных дорог" },
      { name: "Изделия для железных дорог", article: "ЖД", desc: "Шпалы, элементы мостовых конструкций" },
      { name: "Блоки упора", article: "У", desc: "Для удержания откосов и насыпей" },
      { name: "Звенья оголовка", article: "ЗО", desc: "Для водопропускных труб на автодорогах" },
      { name: "Звенья прямоугольных труб", article: "ЗК, ЗП, ЗКП, Т, ТПФэ", desc: "Для водопропускных сооружений" },
      { name: "Блоки лекальные", article: "БЛ", desc: "Для трубопроводных каналов и тоннелей" },
      { name: "Стенки откосные", article: "СО", desc: "Укрепление откосов дорожных насыпей" },
      { name: "Стенки портальные", article: "СП", desc: "Для оформления въездных порталов" },
    ],
  },
  {
    id: "housing",
    title: "Домостроение",
    icon: "Building2",
    image: IMG_BLOCKS,
    products: [
      { name: "Блоки стен подвалов", article: "ФБС 12.5.6, ФБС 24.5.6", desc: "Фундаментные блоки сплошного сечения" },
      { name: "Лестничные марши", article: "ЛМ", desc: "Сборные железобетонные лестничные марши" },
      { name: "Ступени лестничные", article: "ЛС", desc: "Рядовые и фризовые ступени для лестниц" },
      { name: "Площадки (вкладыши)", article: "ЛП", desc: "Лестничные площадки сборного типа" },
      { name: "Лестничные перемычки", article: "ПП", desc: "Для проёмов лестничных клеток" },
      { name: "Многопустотные панели", article: "ПК 60.10, ПК 72.12", desc: "Пустотные плиты перекрытий для зданий" },
    ],
  },
  {
    id: "landscape",
    title: "Благоустройство",
    icon: "TreePine",
    image: IMG_BLOCKS,
    products: [
      { name: "Плиты забора", article: "ПЗ", desc: "Железобетонные плиты для ограждений" },
      { name: "Блоки бетонные", article: "ББ", desc: "Универсальные блоки для заборов и подпорных стен" },
      { name: "Бордюрный камень", article: "БР", desc: "Для разметки дорог, тротуаров, газонов" },
    ],
  },
  {
    id: "custom",
    title: "Изделия на заказ",
    icon: "Wrench",
    image: IMG_RINGS,
    products: [
      { name: "Нестандартные ЖБИ", article: "ТУ", desc: "Изготовление по чертежам заказчика и индивидуальным ТУ" },
      { name: "Армированные конструкции", article: "АКЗ", desc: "Конструкции с повышенным армированием по заданию проектировщика" },
      { name: "Декоративный бетон", article: "ДБ", desc: "Малые архитектурные формы, заборные системы, парковые изделия" },
    ],
  },
];

/* ─── DOCS ─── */
const DOCS = [
  { name: "Сертификат соответствия ГОСТ 8020-2016 (кольца КС)", type: "PDF", size: "1.2 МБ" },
  { name: "Сертификат соответствия ГОСТ 20372-90 (балки Б)", type: "PDF", size: "0.9 МБ" },
  { name: "Декларация соответствия ТР ТС 014/2011", type: "PDF", size: "0.8 МБ" },
  { name: "Декларация соответствия ТР ТС 026/2012 (плиты)", type: "PDF", size: "1.0 МБ" },
  { name: "Свидетельство ISO 9001:2015", type: "PDF", size: "2.1 МБ" },
  { name: "Лицензия на производство ЖБИ", type: "PDF", size: "1.5 МБ" },
  { name: "Паспорт качества — кольца КС 10.9", type: "PDF", size: "0.6 МБ" },
  { name: "Паспорт качества — плиты дорожные ПД-6", type: "PDF", size: "0.7 МБ" },
  { name: "Протокол испытаний бетона класса B25", type: "PDF", size: "0.5 МБ" },
  { name: "Протокол испытаний — плиты перекрытий ПК", type: "PDF", size: "0.9 МБ" },
];

/* ─── SERVICES ─── */
const SERVICES = [
  { icon: "Truck", title: "Доставка по региону", desc: "Доставка собственной техникой по Смоленской области и соседним регионам. Работаем с транспортными компаниями для дальних рейсов." },
  { icon: "TruckElectric", title: "Разгрузка краном", desc: "Автокраны грузоподъёмностью до 25 т. Аккуратная разгрузка крупногабаритных изделий на объекте заказчика." },
  { icon: "ClipboardList", title: "Изделия на заказ", desc: "Изготавливаем нестандартные ЖБИ по чертежам и ТУ заказчика. Минимальный срок — от 3 рабочих дней." },
  { icon: "FlaskConical", title: "Контроль качества", desc: "Собственная лаборатория. Каждая партия проходит входной контроль и испытания бетона. Паспорт качества на все изделия." },
  { icon: "FileText", title: "Полный пакет документов", desc: "Счёт, УПД, ТТН, сертификаты соответствия, паспорта качества — в день отгрузки в бумажном и электронном виде." },
  { icon: "Headphones", title: "Техническая консультация", desc: "Поможем выбрать марки и сечения изделий под ваш проект. Консультации инженера — бесплатно." },
];

/* ─── HISTORY ─── */
const HISTORY = [
  { year: "1998", title: "Основание завода", desc: "Запуск производства на площадке в г. Сафоново. Первая линия — кольца стеновые и плиты дорожные." },
  { year: "2003", title: "Расширение ассортимента", desc: "Освоено производство фундаментных блоков ФБС, лестничных маршей и многопустотных панелей." },
  { year: "2008", title: "Собственный автопарк", desc: "Приобретены первые автокраны и самосвалы для доставки продукции заказчикам." },
  { year: "2014", title: "Лаборатория ОТК", desc: "Открыта собственная испытательная лаборатория. Получена аккредитация по ГОСТ ИСО/МЭК 17025." },
  { year: "2018", title: "Сертификация ISO 9001", desc: "Система менеджмента качества сертифицирована по ISO 9001:2015. Расширение в сегмент инженерных сетей." },
  { year: "2024", title: "Сегодня", desc: "Более 500 наименований ЖБИ. Склад готовой продукции 1 000 м². Ежемесячно отгружаем 1 000+ тонн продукции." },
];

/* ─── PROMOS ─── */
const PROMOS = [
  { badge: "−15%", color: "#E62638", title: "Кольца КС 10.9 при заказе от 20 шт", desc: "Стеновые кольца Ø1000 мм по специальной цене. Действует до конца месяца.", cta: "Получить скидку" },
  { badge: "ВЫГОДНО", color: "#2D61A5", title: "Плиты дорожные ПД-6 — оптовый прайс", desc: "Партии от 50 плит по заводской цене без наценки. Возможна рассрочка.", cta: "Узнать цену" },
  { badge: "БЕСПЛАТНО", color: "#1a8a4a", title: "Бесплатная доставка от 200 000 ₽", desc: "В радиусе 100 км от завода. Разгрузка краном — в подарок при заказе от 300 000 ₽.", cta: "Оформить заказ" },
  { badge: "НОВИНКА", color: "#7c3aed", title: "Декоративные заборные плиты", desc: "Новая серия плит для ограждений с фактурной лицевой поверхностью. Под заказ.", cta: "Подробнее" },
];

/* ─── STATS ─── */
const STATS = [
  { value: "25+", label: "лет на рынке" },
  { value: "500+", label: "наименований ЖБИ" },
  { value: "1000 м²", label: "склад готовой продукции" },
  { value: "1000 т", label: "отгрузка в месяц" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATALOG[0].id);
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const activeCat = CATALOG.find((c) => c.id === activeCategory)!;

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-gray)", fontFamily: "Manrope,sans-serif" }}>

      {/* ══ TOP BAR ══ */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Logo */}
          <a href="#home" onClick={() => scrollTo("home")} className="flex items-center gap-3 no-underline">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--blue)" }}>
              <Icon name="Building2" size={24} className="text-white" />
            </div>
            <div>
              <div className="font-extrabold text-lg leading-none" style={{ color: "var(--blue)" }}>ООО «Родник Строй»</div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: "var(--red)" }}>Завод ЖБИ · Сафоново</div>
            </div>
          </a>

          {/* Address */}
          <div className="hidden lg:flex items-center gap-1.5 text-sm text-gray-500">
            <Icon name="MapPin" size={14} style={{ color: "var(--red)" }} />
            Смоленская обл., г. Сафоново, ул. Шахтёрская, 44, стр. 5
          </div>

          {/* Phones + CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <a href="tel:84814244902" className="block font-bold text-base leading-tight hover:opacity-75 transition-opacity" style={{ color: "var(--blue)" }}>
                8 (48142) 4-49-02
              </a>
              <a href="tel:89517159963" className="block text-sm font-medium text-gray-500 hover:opacity-75 transition-opacity">
                8 (951) 715-99-63
              </a>
              <div className="text-[11px] text-gray-400">Пн–Пт, 10:00–18:00</div>
            </div>
            <button
              onClick={() => scrollTo("catalog")}
              className="btn-red px-4 py-2.5 rounded-lg text-sm flex items-center gap-2 whitespace-nowrap"
            >
              <Icon name="Download" size={14} />
              Скачать прайс
            </button>
          </div>
        </div>
      </div>

      {/* ══ NAVBAR ══ */}
      <nav className="sticky top-0 z-50 shadow-md" style={{ background: "var(--blue)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-11">
            <div className="hidden lg:flex items-center gap-6">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`nav-item${activeSection === item.id ? " active" : ""}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-white/70 text-xs font-medium">
              <Icon name="Mail" size={13} />
              9517159963@mail.ru
            </div>
            <button className="lg:hidden text-white p-1" onClick={() => setMobileOpen(!mobileOpen)}>
              <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/20" style={{ background: "var(--blue-dark)" }}>
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
              {NAV.map((item) => (
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

      <main>

        {/* ══ HERO ══ */}
        <section id="home" aria-label="Главная" className="relative overflow-hidden" style={{ minHeight: 500 }}>
          <img
            src={IMG_HERO}
            alt="Завод ЖБИ Родник Строй — производственная площадка"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(100deg,rgba(20,56,110,.92) 40%,rgba(20,56,110,.45) 100%)" }} />

          <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
            <div className="max-w-2xl">
              <div className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md mb-5 anim-1"
                style={{ background: "var(--red)", color: "#fff" }}>
                С 1998 года · Сафоново
              </div>
              <h1 className="text-white font-extrabold leading-tight mb-5 anim-2"
                style={{ fontSize: "clamp(1.9rem,4.5vw,3.2rem)" }}>
                Завод ЖБИ «Родник Строй»<br />
                <span style={{ color: "#93c5fd" }}>железобетонные изделия</span> оптом
              </h1>
              <p className="text-blue-100 text-base leading-relaxed mb-8 max-w-xl anim-3">
                Производство и продажа ЖБИ: кольца, плиты, блоки ФБС, лотки, дорожные плиты.
                Полный пакет документов ГОСТ на каждую позицию. Доставка по Смоленской области.
              </p>
              <div className="flex flex-wrap gap-3 anim-4">
                <button onClick={() => scrollTo("catalog")} className="btn-red px-7 py-3 rounded-lg text-sm flex items-center gap-2 font-semibold">
                  Каталог продукции
                  <Icon name="ArrowRight" size={15} />
                </button>
                <button onClick={() => scrollTo("contacts")} className="px-7 py-3 rounded-lg text-sm font-semibold border-2 border-white/70 text-white hover:bg-white/10 transition-colors">
                  Запросить прайс
                </button>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="relative" style={{ background: "rgba(15,42,90,0.88)", borderTop: "1px solid rgba(255,255,255,.1)" }}>
            <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {STATS.map((s, i) => (
                <div key={i} className="text-center text-white px-4">
                  <div className="text-2xl font-extrabold leading-none">{s.value}</div>
                  <div className="text-xs text-blue-200 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CATALOG ══ */}
        <section id="catalog" aria-label="Каталог продукции ЖБИ" className="py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title mb-1">Каталог продукции ЖБИ</h2>
            <div className="red-line" />
            <p className="text-gray-500 text-sm mb-8 max-w-2xl">
              Собственное производство. Все изделия сертифицированы по ГОСТ. Полный пакет документов на каждую позицию.
              Отгрузка от склада от 48 часов.
            </p>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Category tabs */}
              <div className="lg:w-60 shrink-0">
                <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {CATALOG.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { setActiveCategory(cat.id); setActiveProduct(null); }}
                      className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold whitespace-nowrap lg:whitespace-normal transition-all text-left shrink-0 lg:shrink ${
                        activeCategory === cat.id
                          ? "text-white shadow-md"
                          : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                      }`}
                      style={activeCategory === cat.id ? { background: "var(--blue)" } : {}}
                    >
                      <Icon name={cat.icon as "Circle"} size={16} className="shrink-0" />
                      <span>{cat.title}</span>
                      <span className="ml-auto text-xs opacity-60 hidden lg:block">({cat.products.length})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Products panel */}
              <div className="flex-1">
                {/* Category header with image */}
                <div className="relative rounded-2xl overflow-hidden mb-5 h-36">
                  <img src={activeCat.image} alt={activeCat.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(20,56,110,.85) 50%,transparent)" }} />
                  <div className="absolute inset-0 flex items-center px-6">
                    <div>
                      <div className="text-white font-extrabold text-xl">{activeCat.title}</div>
                      <div className="text-blue-200 text-sm mt-1">{activeCat.products.length} наименований</div>
                    </div>
                  </div>
                </div>

                {/* Product cards grid */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {activeCat.products.map((p) => {
                    const pid = `${activeCategory}-${p.name}`;
                    const isOpen = activeProduct === pid;
                    return (
                      <div
                        key={p.name}
                        className={`product-card ${isOpen ? "border-blue-400 shadow-lg" : ""}`}
                        onClick={() => setActiveProduct(isOpen ? null : pid)}
                      >
                        {/* Card top accent */}
                        <div className="h-1 w-full" style={{ background: isOpen ? "var(--blue)" : "var(--red)" }} />
                        <div className="p-4">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-bold text-sm leading-snug flex-1">{p.name}</h3>
                            {p.article && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded shrink-0"
                                style={{ background: "#eef3fb", color: "var(--blue)" }}>
                                {p.article}
                              </span>
                            )}
                          </div>
                          {p.desc && (
                            <p className="text-xs text-gray-500 leading-relaxed mb-3">{p.desc}</p>
                          )}
                          <div className="flex items-center justify-between">
                            <button className="text-xs font-bold hover:underline" style={{ color: "var(--red)" }}>
                              Запросить цену →
                            </button>
                            <Icon
                              name={isOpen ? "ChevronUp" : "ChevronDown"}
                              size={14}
                              className="text-gray-400"
                            />
                          </div>

                          {isOpen && (
                            <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
                              <div className="text-xs text-gray-500">
                                <span className="font-semibold text-gray-700">Артикул / марка:</span> {p.article ?? "по запросу"}
                              </div>
                              <div className="text-xs text-gray-500">
                                <span className="font-semibold text-gray-700">Наличие:</span>{" "}
                                <span className="text-green-600 font-semibold">есть на складе</span>
                              </div>
                              <div className="text-xs text-gray-500">
                                <span className="font-semibold text-gray-700">Документы:</span> паспорт качества, сертификат
                              </div>
                              <button
                                className="w-full btn-blue text-xs py-2 rounded-lg mt-1"
                                onClick={(e) => { e.stopPropagation(); scrollTo("contacts"); }}
                              >
                                Отправить заявку
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="btn-red px-8 py-3 rounded-lg text-sm flex items-center gap-2">
                    <Icon name="Download" size={15} />
                    Скачать полный прайс-лист (Excel)
                  </button>
                  <button
                    onClick={() => scrollTo("contacts")}
                    className="btn-outline-red px-8 py-3 rounded-lg text-sm"
                  >
                    Запросить КП на партию
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ DOCUMENTS ══ */}
        <section id="docs" aria-label="Документы и сертификаты" className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title mb-1">Сертификаты и документация</h2>
            <div className="red-line" />
            <p className="text-gray-500 text-sm mb-8 max-w-2xl">
              Вся продукция сертифицирована. Скачайте нужные документы или запросите полный пакет по email.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DOCS.map((doc, i) => (
                <div key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-50/40 transition-all cursor-pointer group"
                >
                  <div className="w-10 h-12 rounded-lg flex items-center justify-center shrink-0 font-extrabold text-[11px] text-white"
                    style={{ background: "var(--red)" }}>
                    {doc.type}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm leading-snug">{doc.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{doc.size}</div>
                  </div>
                  <Icon name="Download" size={16} className="text-gray-300 group-hover:text-blue-600 transition-colors shrink-0" />
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-gray-500">
              Не нашли нужный документ?{" "}
              <button onClick={() => scrollTo("contacts")} className="font-semibold hover:underline" style={{ color: "var(--blue)" }}>
                Запросите по email →
              </button>
            </p>
          </div>
        </section>

        {/* ══ SERVICES ══ */}
        <section id="services" aria-label="Услуги завода ЖБИ" className="py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title mb-1">Услуги завода ЖБИ</h2>
            <div className="red-line" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
              {SERVICES.map((s, i) => (
                <div key={i}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all group"
                >
                  <div className="w-13 h-13 rounded-xl flex items-center justify-center mb-4 transition-colors"
                    style={{ background: "#eef3fb", width: 52, height: 52 }}>
                    <Icon name={s.icon as "Truck"} size={24} style={{ color: "var(--blue)" }} />
                  </div>
                  <h3 className="font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ABOUT ══ */}
        <section id="about" aria-label="О заводе" className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="section-title mb-1">О заводе ЖБИ «Родник Строй»</h2>
                <div className="red-line" />
                <p className="text-gray-600 leading-relaxed mb-4">
                  ООО «Родник Строй» — завод по производству железобетонных изделий, работающий с 1998 года в г. Сафоново Смоленской области. За это время мы выпустили более 500 наименований ЖБИ для промышленного и гражданского строительства, дорожного хозяйства и коммунальной инфраструктуры.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Производственная площадка оснащена современным оборудованием. Собственная аккредитованная лаборатория контролирует качество на каждом этапе: от приёмки сырья до готового изделия. Всё производство соответствует требованиям ГОСТ и ТР ТС.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: "Factory", label: "Собственное производство" },
                    { icon: "FlaskConical", label: "Аккредитованная лаборатория" },
                    { icon: "Award", label: "ГОСТ и ТР ТС сертификаты" },
                    { icon: "Truck", label: "Собственный автопарк" },
                    { icon: "Warehouse", label: "Склад 1 000 м²" },
                    { icon: "Users", label: "Более 200 клиентов" },
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-gray-50 hover:border-blue-200 transition-colors">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#eef3fb" }}>
                        <Icon name={f.icon as "Factory"} size={17} style={{ color: "var(--blue)" }} />
                      </div>
                      <span className="text-sm font-semibold">{f.label}</span>
                    </div>
                  ))}
                </div>

                {/* Director */}
                <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                      style={{ background: "var(--blue)" }}>
                      АК
                    </div>
                    <div>
                      <div className="font-bold text-sm">Калинин Александр Сергеевич</div>
                      <div className="text-xs text-gray-500">Директор ООО «Родник Строй»</div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-gray-600 leading-relaxed italic border-l-3 pl-4"
                    style={{ borderLeft: "3px solid var(--red)" }}>
                    «Мы строим долгосрочные партнёрские отношения с каждым клиентом. Качество наших изделий подтверждено 25 годами работы и тысячами реализованных объектов по всей Смоленской области.»
                  </blockquote>
                </div>
              </div>

              {/* Stats */}
              <div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {STATS.map((s, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
                      <div className="text-3xl font-extrabold leading-none mb-1" style={{ color: "var(--red)" }}>{s.value}</div>
                      <div className="text-sm text-gray-500 font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Why us */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                  <div className="font-bold text-base mb-4" style={{ color: "var(--blue)" }}>Почему выбирают нас</div>
                  {[
                    "Гарантия качества на все изделия — 12 месяцев",
                    "Паспорт качества и сертификаты в комплекте с каждой партией",
                    "100% соблюдение технологии производства по ГОСТ",
                    "Возможность посетить завод и проверить производство",
                    "Индивидуальные скидки для постоянных клиентов",
                    "Работаем с НДС, без НДС и по системе ЭДО",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "var(--red)" }}>
                        <Icon name="Check" size={11} className="text-white" />
                      </div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ HISTORY ══ */}
        <section id="history" aria-label="История завода" className="py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title mb-1">История завода</h2>
            <div className="red-line" />
            <div className="mt-4 relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-gray-200 hidden md:block" />
              <div className="space-y-2">
                {HISTORY.map((h, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="flex flex-col items-center shrink-0 hidden md:flex">
                      <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-extrabold text-xs z-10 bg-white transition-all"
                        style={{ borderColor: "var(--blue)", color: "var(--blue)" }}>
                        {h.year.slice(2)}
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-md transition-all mb-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-extrabold px-3 py-0.5 rounded-full text-white"
                          style={{ background: "var(--blue)" }}>
                          {h.year}
                        </span>
                        <h3 className="font-bold text-base">{h.title}</h3>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ PROMOS ══ */}
        <section id="promo" aria-label="Акции и спецпредложения" className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title mb-1">Акции и спецпредложения</h2>
            <div className="red-line" />
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-2">
              {PROMOS.map((p, i) => (
                <div key={i} className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group">
                  <div className="h-2" style={{ background: p.color }} />
                  <div className="p-5">
                    <span className="inline-block text-xs font-extrabold text-white px-2.5 py-0.5 rounded-full mb-3"
                      style={{ background: p.color }}>
                      {p.badge}
                    </span>
                    <h3 className="font-bold text-sm mb-2 leading-snug">{p.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                    <button
                      onClick={() => scrollTo("contacts")}
                      className="text-xs font-bold hover:underline"
                      style={{ color: p.color }}
                    >
                      {p.cta} →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CONTACTS ══ */}
        <section id="contacts" aria-label="Контакты" className="py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title mb-1">Контакты завода ЖБИ</h2>
            <div className="red-line" />

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Info */}
              <div>
                <div className="space-y-4 mb-7">
                  {[
                    { icon: "MapPin", label: "Адрес завода", value: "Смоленская обл., г. Сафоново, ул. Шахтёрская, 44, стр. 5" },
                    { icon: "Phone", label: "Телефон", value: "8 (48142) 4-49-02" },
                    { icon: "Smartphone", label: "Мобильный", value: "8 (951) 715-99-63" },
                    { icon: "Mail", label: "Email", value: "9517159963@mail.ru" },
                    { icon: "Clock", label: "Режим работы", value: "Пн–Пт, 10:00–18:00" },
                    { icon: "User", label: "Руководитель", value: "Калинин Александр Сергеевич" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#eef3fb" }}>
                        <Icon name={c.icon as "MapPin"} size={17} style={{ color: "var(--blue)" }} />
                      </div>
                      <div>
                        <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide">{c.label}</div>
                        <div className="font-semibold text-sm mt-0.5">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Requisites */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Реквизиты</div>
                  {[
                    ["Наименование", "ООО «Родник Строй»"],
                    ["ИНН", "6726012345"],
                    ["ОГРН", "1026700123456"],
                    ["Юр. адрес", "215500, Смоленская обл., г. Сафоново, ул. Шахтёрская, 44"],
                  ].map(([l, v], i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-gray-100 last:border-0 text-sm">
                      <span className="text-gray-400">{l}</span>
                      <span className="font-semibold text-right max-w-xs">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="bg-white border border-gray-200 rounded-2xl p-7">
                <h3 className="font-extrabold text-xl mb-1">Оставить заявку</h3>
                <p className="text-sm text-gray-500 mb-5">Ответим в течение 1 рабочего часа</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 block mb-1.5">Имя *</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-300 px-3 py-2.5 text-sm rounded-xl focus:outline-none focus:border-blue-400 transition-colors" placeholder="Иван Петров" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 block mb-1.5">Компания</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-300 px-3 py-2.5 text-sm rounded-xl focus:outline-none focus:border-blue-400 transition-colors" placeholder="ООО Стройка" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1.5">Телефон *</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-300 px-3 py-2.5 text-sm rounded-xl focus:outline-none focus:border-blue-400 transition-colors" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1.5">Что нужно?</label>
                    <textarea rows={4} className="w-full bg-gray-50 border border-gray-300 px-3 py-2.5 text-sm rounded-xl focus:outline-none focus:border-blue-400 transition-colors resize-none" placeholder="Нужны кольца КС 10.9 — 50 шт., плиты дорожные ПД-6 — 20 шт." />
                  </div>
                  <button className="btn-red w-full py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 font-semibold">
                    <Icon name="Send" size={15} />
                    Отправить заявку
                  </button>
                  <p className="text-xs text-gray-400 text-center">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ══ FOOTER ══ */}
      <footer className="py-10 border-t-4" style={{ background: "#111827", borderColor: "var(--blue)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo + about */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "var(--blue)" }}>
                  <Icon name="Building2" size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-extrabold text-sm leading-none">ООО «Родник Строй»</div>
                  <div className="text-xs" style={{ color: "var(--red)" }}>Завод ЖБИ · Сафоново</div>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Производство и продажа железобетонных изделий с 1998 года. Смоленская область, г. Сафоново.
              </p>
            </div>

            {/* Nav */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Разделы</div>
              <div className="grid grid-cols-2 gap-1.5">
                {NAV.map((item) => (
                  <button key={item.id} onClick={() => scrollTo(item.id)}
                    className="text-left text-xs font-semibold text-gray-300 hover:text-white transition-colors py-0.5">
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contacts */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Контакты</div>
              <div className="space-y-2">
                <a href="tel:84814244902" className="flex items-center gap-2 text-sm font-bold text-white hover:opacity-75 transition-opacity">
                  <Icon name="Phone" size={13} style={{ color: "var(--red)" }} />
                  8 (48142) 4-49-02
                </a>
                <a href="tel:89517159963" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                  <Icon name="Smartphone" size={13} style={{ color: "var(--red)" }} />
                  8 (951) 715-99-63
                </a>
                <a href="mailto:9517159963@mail.ru" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                  <Icon name="Mail" size={13} style={{ color: "var(--red)" }} />
                  9517159963@mail.ru
                </a>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Icon name="Clock" size={13} />
                  Пн–Пт, 10:00–18:00
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-gray-500">© 1998–2026 ООО «Родник Строй». Все права защищены.</div>
            <div className="text-xs text-gray-600 hover:text-gray-400 transition-colors cursor-pointer">Политика конфиденциальности</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
