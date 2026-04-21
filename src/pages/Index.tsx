import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/659896a1-37d8-4894-b236-acb4401acb80/files/fe3133fe-4be1-4241-8816-07326368c6ca.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Каталог" },
  { id: "about", label: "О компании" },
  { id: "delivery", label: "Доставка" },
  { id: "price", label: "Прайс" },
  { id: "blog", label: "Блог" },
  { id: "contacts", label: "Контакты" },
];

const CATALOG_ITEMS = [
  {
    id: 1,
    name: "Трубопроводная арматура",
    category: "Трубопроводы",
    article: "ТА-2400",
    gost: "ГОСТ 5762-2002",
    docs: ["Паспорт качества", "Сертификат соответствия", "Техническое описание"],
    badge: "Хит продаж",
  },
  {
    id: 2,
    name: "Промышленные фланцы",
    category: "Соединения",
    article: "ФП-1200",
    gost: "ГОСТ 33259-2015",
    docs: ["Паспорт качества", "Сертификат ИСО", "Чертёж"],
    badge: null,
  },
  {
    id: 3,
    name: "Шаровые краны DN50–DN300",
    category: "Арматура",
    article: "ШК-8800",
    gost: "ГОСТ Р 54808-2011",
    docs: ["Паспорт качества", "Протокол испытаний", "Сертификат соответствия"],
    badge: "Под заказ",
  },
  {
    id: 4,
    name: "Задвижки клиновые",
    category: "Запорная арматура",
    article: "ЗК-5500",
    gost: "ГОСТ 5762-2002",
    docs: ["Паспорт качества", "Сертификат соответствия"],
    badge: null,
  },
  {
    id: 5,
    name: "Металлопрокат листовой",
    category: "Металлопрокат",
    article: "МЛ-3300",
    gost: "ГОСТ 19903-2015",
    docs: ["Сертификат качества", "Паспорт металла", "Протокол испытаний"],
    badge: "Склад",
  },
  {
    id: 6,
    name: "Насосные агрегаты",
    category: "Насосы",
    article: "НА-7700",
    gost: "ГОСТ Р 53403-2009",
    docs: ["Паспорт оборудования", "Сертификат ТР ТС", "Техпаспорт"],
    badge: null,
  },
];

const STATS = [
  { value: "23", unit: "года", label: "на рынке" },
  { value: "4 800+", unit: "позиций", label: "в каталоге" },
  { value: "2 600+", unit: "клиентов", label: "по всей России" },
  { value: "48 ч", unit: "", label: "среднее время отгрузки" },
];

const BLOG_POSTS = [
  {
    date: "14 апр 2026",
    tag: "Нормативы",
    title: "Изменения в ГОСТ 5762-2002: что важно знать оптовикам",
    excerpt: "В 2026 году вступили в силу новые требования к маркировке трубопроводной арматуры...",
  },
  {
    date: "02 апр 2026",
    tag: "Логистика",
    title: "Доставка на Север: особенности работы в условиях Крайнего Севера",
    excerpt: "Рассказываем, как мы организуем поставки на объекты в арктической зоне без срывов сроков...",
  },
  {
    date: "21 мар 2026",
    tag: "Производство",
    title: "Как выбрать шаровой кран для высокотемпературных сред",
    excerpt: "Разбираем ключевые параметры при выборе арматуры для трубопроводов с температурой выше 250°C...",
  },
];

const DELIVERY_ZONES = [
  { name: "Москва и МО", time: "1–2 дня", type: "Собственный транспорт" },
  { name: "ЦФО", time: "2–4 дня", type: "Транспортные компании" },
  { name: "Россия", time: "3–14 дней", type: "Все ТК / ж/д" },
  { name: "Экспорт (СНГ)", time: "по договору", type: "Международная логистика" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [openDocId, setOpenDocId] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen steel-bg text-foreground">

      {/* TOP BAR */}
      <div className="border-b border-border/50" style={{ background: 'hsl(220, 12%, 10%)' }}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Icon name="Phone" size={12} className="orange-accent" />
              +7 (800) 555-01-23
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Icon name="Mail" size={12} className="orange-accent" />
              info@stalprom.ru
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block">Пн–Пт: 08:00–18:00</span>
            <span className="flex items-center gap-1 text-orange-400 font-medium">
              <Icon name="MapPin" size={12} />
              Москва
            </span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary flex items-center justify-center">
                <Icon name="Factory" size={20} className="text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold tracking-widest uppercase leading-none" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  СтальПром
                </div>
                <div className="text-[10px] text-muted-foreground tracking-widest uppercase">
                  промышленное оборудование
                </div>
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`nav-link text-sm font-medium tracking-wide uppercase pb-1 transition-colors ${
                    activeSection === item.id
                      ? "text-primary active"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden sm:block btn-orange px-4 py-2 text-sm rounded-sm">
                Запрос прайса
              </button>
              <button
                className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-primary py-2 border-b border-border/40"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs text-primary font-medium tracking-widest uppercase mb-6 animate-fade-in-delay-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Оптовые поставки · Работаем с юрлицами
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] mb-6 animate-fade-in-delay-2"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              ПРОМЫШЛЕННОЕ
              <br />
              <span className="text-primary">ОБОРУДОВАНИЕ</span>
              <br />
              ОПТОМ
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg animate-fade-in-delay-3">
              Трубопроводная арматура, металлопрокат и промышленные комплектующие.
              Полная документация ГОСТ на каждую позицию. Отгрузка от 48 часов.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-delay-4">
              <button onClick={() => scrollTo("catalog")} className="btn-orange px-8 py-3.5 text-sm rounded-sm flex items-center gap-2">
                Смотреть каталог
                <Icon name="ArrowRight" size={16} />
              </button>
              <button onClick={() => scrollTo("price")} className="btn-outline-orange px-8 py-3.5 text-sm rounded-sm">
                Скачать прайс
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 animate-fade-in-delay-5">
              {STATS.map((s, i) => (
                <div key={i} className="border-l-2 border-primary pl-3">
                  <div className="text-2xl font-bold text-foreground leading-none" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {s.value}
                    {s.unit && <span className="text-sm text-primary ml-1">{s.unit}</span>}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-end animate-fade-in-delay-3">
            <div className="corner-mark p-8 steel-card w-72">
              <div className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Сертификации</div>
              {["ISO 9001:2015", "ГОСТ Р", "ТР ТС 010/2011", "ТР ТС 032/2013", "РОСТЕхНАДЗОР"].map((cert) => (
                <div key={cert} className="flex items-center gap-2 py-2 border-b border-border/40 last:border-0">
                  <Icon name="ShieldCheck" size={14} className="text-primary" />
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATALOG ===== */}
      <section id="catalog" className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs text-primary uppercase tracking-widest mb-2">// Номенклатура</div>
              <h2 className="section-title text-4xl md:text-5xl font-bold text-foreground">
                КАТАЛОГ<br /><span className="text-primary">ПРОДУКЦИИ</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Для каждой позиции доступны ГОСТ, сертификаты качества и полная техническая документация.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {CATALOG_ITEMS.map((item) => (
              <div key={item.id} className="steel-card rounded-sm overflow-hidden hover:border-primary/40 transition-all duration-300">
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{item.category}</div>
                      <h3 className="text-lg font-bold text-foreground leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        {item.name}
                      </h3>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-primary/15 text-primary border border-primary/30 whitespace-nowrap ml-2">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span className="font-mono bg-muted px-2 py-0.5">{item.article}</span>
                    <span className="flex items-center gap-1 text-primary">
                      <Icon name="FileText" size={11} />
                      {item.gost}
                    </span>
                  </div>

                  <div
                    className="border-t border-border/50 pt-4 cursor-pointer"
                    onClick={() => setOpenDocId(openDocId === item.id ? null : item.id)}
                  >
                    <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Icon name="FolderOpen" size={13} className="text-primary" />
                        Документация ({item.docs.length})
                      </span>
                      <Icon name={openDocId === item.id ? "ChevronUp" : "ChevronDown"} size={14} className="text-primary" />
                    </div>

                    {openDocId === item.id && (
                      <div className="mt-3 space-y-2 animate-fade-in">
                        {item.docs.map((doc) => (
                          <button
                            key={doc}
                            className="w-full flex items-center gap-2 text-xs py-2 px-3 bg-muted/50 hover:bg-primary/10 hover:text-primary text-muted-foreground transition-colors text-left rounded-sm"
                          >
                            <Icon name="Download" size={12} />
                            {doc}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-5 pb-4">
                  <button className="w-full btn-outline-orange py-2.5 text-xs rounded-sm flex items-center justify-center gap-2">
                    <Icon name="Send" size={13} />
                    Запросить КП
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="btn-orange px-10 py-3.5 text-sm rounded-sm">
              Полный каталог — 4 800+ позиций
            </button>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-20 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs text-primary uppercase tracking-widest mb-2">// О предприятии</div>
              <h2 className="section-title text-4xl md:text-5xl font-bold mb-6">
                23 ГОДА<br /><span className="text-primary">НАДЁЖНОСТИ</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                СтальПром — крупный оптовый поставщик промышленного оборудования и металлопроката для предприятий нефтегазовой, энергетической и строительной отраслей. С 2002 года мы обеспечиваем производства комплектующими с полным пакетом документации.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Собственный склад 12 000 м² в Москве, сертифицированная лаборатория входного контроля качества. Работаем только с проверенными производителями-резидентами России.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Warehouse", text: "12 000 м² склада" },
                  { icon: "FlaskConical", text: "Лаборатория контроля" },
                  { icon: "Award", text: "ISO 9001:2015" },
                  { icon: "Truck", text: "Собственный автопарк" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 border border-border/50 p-3 rounded-sm steel-card">
                    <div className="w-8 h-8 bg-primary/15 flex items-center justify-center rounded-sm">
                      <Icon name={f.icon} size={16} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              {[
                { year: "2002", event: "Основание компании, первые поставки арматуры" },
                { year: "2007", event: "Открытие собственного склада, 3 000 позиций" },
                { year: "2012", event: "Сертификация ISO 9001, выход на рынок СНГ" },
                { year: "2017", event: "Запуск лаборатории входного контроля качества" },
                { year: "2020", event: "Цифровой каталог с документацией онлайн" },
                { year: "2024", event: "Расширение склада до 12 000 м², 4 800+ позиций" },
              ].map((t, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 border-2 border-primary/30 group-hover:border-primary bg-background flex items-center justify-center transition-colors shrink-0">
                      <span className="text-[10px] font-bold text-primary" style={{ fontFamily: 'Oswald, sans-serif' }}>{t.year}</span>
                    </div>
                    {i < 5 && <div className="w-px h-4 bg-border" />}
                  </div>
                  <div className="pb-4 pt-2 text-sm text-muted-foreground leading-relaxed">
                    {t.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== DELIVERY ===== */}
      <section id="delivery" className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-xs text-primary uppercase tracking-widest mb-2">// Логистика</div>
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-12">
            ДОСТАВКА<br /><span className="text-primary">И ОТГРУЗКА</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {DELIVERY_ZONES.map((z, i) => (
              <div key={i} className="steel-card p-5 rounded-sm hover:border-primary/40 transition-all">
                <div className="w-10 h-10 bg-primary/15 flex items-center justify-center mb-4 rounded-sm">
                  <Icon name="MapPin" size={18} className="text-primary" />
                </div>
                <h3 className="font-bold text-base mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>{z.name}</h3>
                <div className="text-primary text-xl font-bold mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>{z.time}</div>
                <div className="text-xs text-muted-foreground">{z.type}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 border-t border-border pt-12">
            {[
              {
                icon: "PackageCheck",
                title: "Контроль отгрузки",
                text: "Каждая партия сопровождается паспортом качества и товарной накладной. Видеофиксация упаковки по запросу.",
              },
              {
                icon: "Clock",
                title: "Срок готовности",
                text: "Стандарт — 48 часов после оплаты. Срочные заказы — от 24 часов для складских позиций.",
              },
              {
                icon: "FileCheck",
                title: "Полный пакет документов",
                text: "Счёт, УПД, ТТН, сертификаты соответствия и паспорта качества — в электронном виде в день отгрузки.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-primary/15 flex items-center justify-center shrink-0 rounded-sm">
                  <Icon name={item.icon} size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICE ===== */}
      <section id="price" className="py-20 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs text-primary uppercase tracking-widest mb-2">// Прайс-листы</div>
              <h2 className="section-title text-4xl md:text-5xl font-bold mb-6">
                АКТУАЛЬНЫЕ<br /><span className="text-primary">ЦЕНЫ</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Прайс-листы обновляются еженедельно. Для получения актуальных цен и индивидуальных скидок при объёмных заказах — оставьте заявку или скачайте Excel.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="btn-orange px-8 py-3.5 text-sm rounded-sm flex items-center gap-2">
                  <Icon name="Download" size={15} />
                  Скачать прайс (Excel)
                </button>
                <button className="btn-outline-orange px-8 py-3.5 text-sm rounded-sm">
                  Запросить КП
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { name: "Трубопроводная арматура", positions: "1 240 позиций", updated: "18 апр 2026" },
                { name: "Металлопрокат", positions: "890 позиций", updated: "18 апр 2026" },
                { name: "Насосы и компрессоры", positions: "640 позиций", updated: "14 апр 2026" },
                { name: "Фланцы и соединения", positions: "520 позиций", updated: "14 апр 2026" },
                { name: "Электрооборудование", positions: "410 позиций", updated: "07 апр 2026" },
              ].map((p, i) => (
                <div key={i} className="steel-card flex items-center justify-between p-4 rounded-sm hover:border-primary/40 transition-all group cursor-pointer">
                  <div>
                    <div className="font-medium text-sm" style={{ fontFamily: 'Oswald, sans-serif' }}>{p.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{p.positions} · обновлён {p.updated}</div>
                  </div>
                  <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="Download" size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section id="blog" className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-xs text-primary uppercase tracking-widest mb-2">// База знаний</div>
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-12">
            БЛОГ<br /><span className="text-primary">И СТАТЬИ</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <article key={i} className="steel-card rounded-sm overflow-hidden cursor-pointer hover:border-primary/40 transition-all group">
                <div className="diagonal-stripe h-2" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-primary/15 text-primary border border-primary/20">
                      {post.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-base mb-3 leading-snug group-hover:text-primary transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-1 text-xs text-primary font-medium uppercase tracking-wider">
                    Читать далее <Icon name="ArrowRight" size={12} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACTS ===== */}
      <section id="contacts" className="py-20 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="text-xs text-primary uppercase tracking-widest mb-2">// Связаться</div>
              <h2 className="section-title text-4xl md:text-5xl font-bold mb-6">
                КОНТАКТЫ<br /><span className="text-primary">И РЕКВИЗИТЫ</span>
              </h2>

              <div className="space-y-5 mb-8">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (800) 555-01-23 (бесплатно)" },
                  { icon: "Mail", label: "Email", value: "info@stalprom.ru" },
                  { icon: "MapPin", label: "Адрес склада", value: "г. Москва, ул. Промышленная, 14с2" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 08:00–18:00, Сб: 09:00–14:00" },
                ].map((c, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-9 h-9 bg-primary/15 flex items-center justify-center shrink-0 rounded-sm">
                      <Icon name={c.icon} size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{c.label}</div>
                      <div className="font-medium">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="steel-card p-5 rounded-sm">
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Реквизиты</div>
                {[
                  ["ООО «СтальПром»", ""],
                  ["ИНН", "7701234567"],
                  ["ОГРН", "1027700001234"],
                  ["р/с", "40702810000001234567"],
                  ["Банк", "АО «Альфа-Банк», г. Москва"],
                ].map(([label, val], i) => (
                  <div key={i} className="flex justify-between text-sm py-1.5 border-b border-border/30 last:border-0">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-medium text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="steel-card rounded-sm p-8">
              <h3 className="section-title text-2xl font-bold mb-6">ОСТАВИТЬ ЗАЯВКУ</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wide block mb-1.5">Имя *</label>
                    <input type="text" className="w-full bg-muted border border-border px-3 py-2.5 text-sm rounded-sm focus:border-primary focus:outline-none transition-colors" placeholder="Иван Петров" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wide block mb-1.5">Компания</label>
                    <input type="text" className="w-full bg-muted border border-border px-3 py-2.5 text-sm rounded-sm focus:border-primary focus:outline-none transition-colors" placeholder="ООО Завод" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wide block mb-1.5">Телефон *</label>
                  <input type="tel" className="w-full bg-muted border border-border px-3 py-2.5 text-sm rounded-sm focus:border-primary focus:outline-none transition-colors" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wide block mb-1.5">Сообщение</label>
                  <textarea rows={4} className="w-full bg-muted border border-border px-3 py-2.5 text-sm rounded-sm focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Опишите потребность или укажите артикул..." />
                </div>
                <button className="btn-orange w-full py-3.5 text-sm rounded-sm flex items-center justify-center gap-2">
                  <Icon name="Send" size={15} />
                  Отправить заявку
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Ответим в течение 2 часов в рабочее время
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <Icon name="Factory" size={16} className="text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold tracking-widest uppercase text-sm" style={{ fontFamily: 'Oswald, sans-serif' }}>СтальПром</div>
                <div className="text-[10px] text-muted-foreground">© 2002–2026</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
              {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="hover:text-primary transition-colors uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {item.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-muted-foreground text-center md:text-right">
              <div>ИНН 7701234567 · ОГРН 1027700001234</div>
              <div className="mt-1">Политика конфиденциальности</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}