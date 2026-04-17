import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/4e3a9452-e3ed-47df-8069-6abb860729ee/files/01fe6015-8597-4c71-b859-d12185987146.jpg";

const menuItems = [
  {
    tag: "Хит",
    tagColor: "#e63946",
    img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80",
    name: "Классическая шаверма",
    price: "250 ₽",
    desc: "Сочное мясо на вертеле, свежие овощи, фирменный соус и тонкий лаваш.",
  },
  {
    tag: "Острая",
    tagColor: "#f4a261",
    img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=600&q=80",
    name: "Острая с чесноком",
    price: "270 ₽",
    desc: "Двойной чесночный соус, острая аджика, хрустящие овощи и нежное мясо.",
  },
  {
    tag: "Большая",
    tagColor: "#2a9d8f",
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80",
    name: "Двойная XL",
    price: "350 ₽",
    desc: "В два раза больше мяса, двойной соус — для настоящего аппетита.",
  },
];

const reviews = [
  { name: "Андрей К.", text: "Лучшая шаверма в городе, без преувеличений! Беру каждую неделю.", stars: 5 },
  { name: "Марина С.", text: "Мясо сочное, порции огромные. Цена более чем адекватная!", stars: 5 },
  { name: "Дмитрий В.", text: "Быстро готовят, всегда свежее. Стал постоянным клиентом.", stars: 5 },
];

const advantages = [
  { icon: "Leaf", text: "Свежие ингредиенты" },
  { icon: "UtensilsCrossed", text: "Большие порции" },
  { icon: "Zap", text: "Быстрое приготовление" },
  { icon: "Clock", text: "Работаем каждый день" },
];

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const zoomScale = 1 + scrollY * 0.0004;

  return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh", fontFamily: "'Montserrat', sans-serif", overflowX: "hidden" }}>
      {/* HEADER */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(13,13,13,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 24px", height: "70px",
      }}>
        <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "18px", color: "#fff", letterSpacing: "-0.5px" }}>
          ШАУРМА <span style={{ color: "#e63946" }}>ВКУС ВОСТОКА</span>
        </div>
        <nav style={{ display: "flex", gap: "28px" }}>
          {["Меню", "О нас", "Отзывы", "Контакты"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: "rgba(255,255,255,0.7)", textDecoration: "none",
              fontWeight: 600, fontSize: "13px", textTransform: "uppercase",
              letterSpacing: "1px", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#e63946")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            >{item}</a>
          ))}
        </nav>
        <a href="tel:+79524861100" style={{
          background: "#e63946", color: "#fff", textDecoration: "none",
          padding: "10px 20px", fontWeight: 700, fontSize: "13px",
          borderRadius: "4px", letterSpacing: "0.5px",
        }}>
          Позвонить
        </a>
      </header>

      {/* HERO */}
      <section ref={heroRef} style={{ position: "relative", height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover", backgroundPosition: "center",
          transform: `scale(${zoomScale})`,
          transition: "transform 0.1s linear",
          willChange: "transform",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.85) 100%)",
        }} />
        <div style={{
          position: "relative", zIndex: 2, textAlign: "center",
          padding: "0 24px", maxWidth: "800px",
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}>
          <div style={{
            display: "inline-block", background: "#e63946",
            color: "#fff", fontSize: "12px", fontWeight: 700,
            letterSpacing: "3px", textTransform: "uppercase",
            padding: "6px 16px", borderRadius: "2px", marginBottom: "24px",
          }}>
            Старая Русса
          </div>
          <h1 style={{
            fontFamily: "'Unbounded', sans-serif", color: "#fff",
            fontSize: "clamp(36px, 7vw, 80px)", fontWeight: 800,
            lineHeight: 1.05, marginBottom: "20px", letterSpacing: "-1px",
          }}>
            Лучшая шаверма<br />
            <span style={{ color: "#e63946" }}>в Старой Руссе</span>
          </h1>
          <p style={{
            color: "rgba(255,255,255,0.85)", fontSize: "clamp(16px, 2.5vw, 22px)",
            fontWeight: 400, marginBottom: "40px", lineHeight: 1.5,
          }}>
            Сочная, горячая, приготовленная прямо при вас
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+79524861100" style={{
              background: "#e63946", color: "#fff", textDecoration: "none",
              padding: "16px 36px", fontWeight: 800, fontSize: "16px",
              borderRadius: "4px", letterSpacing: "0.5px",
              boxShadow: "0 8px 32px rgba(230,57,70,0.4)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(230,57,70,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(230,57,70,0.4)"; }}
            >
              Заказать сейчас
            </a>
            <a href="#меню" style={{
              background: "transparent", color: "#fff", textDecoration: "none",
              padding: "16px 36px", fontWeight: 700, fontSize: "16px",
              borderRadius: "4px", border: "2px solid rgba(255,255,255,0.4)",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
            >
              Смотреть меню
            </a>
          </div>
        </div>
        <div style={{
          position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.5)", fontSize: "12px", letterSpacing: "2px",
          textTransform: "uppercase", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        }}>
          <span>Прокрутите вниз</span>
          <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.3)" }} />
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ background: "#e63946", overflow: "hidden", padding: "14px 0" }}>
        <div style={{
          display: "inline-block", whiteSpace: "nowrap",
          animation: "scroll 18s linear infinite",
          fontWeight: 800, fontSize: "14px", letterSpacing: "3px",
          textTransform: "uppercase", color: "#fff",
        }}>
          {Array(4).fill("* СВЕЖЕЕ МЯСО * БОЛЬШИЕ ПОРЦИИ * БЫСТРО * ВКУСНО * РАБОТАЕМ ЕЖЕДНЕВНО * СТАРАЯ РУССА * ").join("")}
        </div>
      </div>

      {/* ABOUT */}
      <section style={{ padding: "80px 24px", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <p style={{
          color: "rgba(255,255,255,0.5)", fontSize: "13px", fontWeight: 700,
          letterSpacing: "3px", textTransform: "uppercase", marginBottom: "24px",
        }}>О нас</p>
        <h2 style={{
          fontFamily: "'Unbounded', sans-serif", color: "#fff",
          fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 800,
          lineHeight: 1.2, marginBottom: "24px",
        }}>
          Мы не делаем просто шаверму —<br />
          <span style={{ color: "#e63946" }}>мы делаем вкус, за которым возвращаются</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "24px", marginTop: "60px" }}>
          {advantages.map((adv) => (
            <div key={adv.text} style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px", padding: "32px 20px", textAlign: "center",
              transition: "border-color 0.3s",
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#e63946")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
              <Icon name={adv.icon} fallback="Star" size={32} style={{ color: "#e63946", marginBottom: "16px" }} />
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "15px" }}>{adv.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="меню" style={{ padding: "80px 24px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{ color: "#e63946", fontSize: "13px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Наше меню</p>
            <h2 style={{ fontFamily: "'Unbounded', sans-serif", color: "#fff", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800 }}>
              ВЫБИРАЙ СВОЁ
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {menuItems.map((item) => (
              <div key={item.name} style={{
                background: "#161616", borderRadius: "12px", overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)", transition: "transform 0.3s, box-shadow 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(230,57,70,0.15)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                  <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span style={{
                    position: "absolute", top: "16px", left: "16px",
                    background: item.tagColor, color: "#fff",
                    padding: "4px 12px", borderRadius: "3px",
                    fontSize: "12px", fontWeight: 700, letterSpacing: "1px",
                  }}>{item.tag}</span>
                </div>
                <div style={{ padding: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "18px" }}>{item.name}</h3>
                    <span style={{ color: "#e63946", fontWeight: 800, fontSize: "20px" }}>{item.price}</span>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "80px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p style={{ color: "#e63946", fontSize: "13px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Процесс</p>
          <h2 style={{ fontFamily: "'Unbounded', sans-serif", color: "#fff", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800 }}>
            КАК МЫ ГОТОВИМ
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
          {[
            { step: "01", title: "Мясо на вертеле", desc: "Свежее мясо маринуется и жарится на вертикальном вертеле — сочное снаружи и внутри.", img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80" },
            { step: "02", title: "Свежие овощи", desc: "Каждый день нарезаем свежие помидоры, огурцы и зелень — никаких заготовок.", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80" },
            { step: "03", title: "Сборка при вас", desc: "Собираем шаверму прямо на ваших глазах — горячую, свежую, аппетитную.", img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=600&q=80" },
          ].map((step) => (
            <div key={step.step} style={{ position: "relative" }}>
              <div style={{ height: "200px", borderRadius: "8px", overflow: "hidden", marginBottom: "24px" }}>
                <img src={step.img} alt={step.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", top: "16px", left: "16px", fontFamily: "'Unbounded', sans-serif", fontSize: "48px", fontWeight: 800, color: "rgba(230,57,70,0.3)", lineHeight: 1 }}>{step.step}</div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "18px", marginBottom: "10px" }}>{step.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="отзывы" style={{ padding: "80px 24px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{ color: "#e63946", fontSize: "13px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Отзывы</p>
            <h2 style={{ fontFamily: "'Unbounded', sans-serif", color: "#fff", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800 }}>
              ЧТО ГОВОРЯТ ГОСТИ
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {reviews.map((r) => (
              <div key={r.name} style={{
                background: "#161616", borderRadius: "12px", padding: "32px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                  {Array(r.stars).fill(null).map((_, i) => (
                    <span key={i} style={{ color: "#f4a261", fontSize: "18px" }}>★</span>
                  ))}
                </div>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", lineHeight: 1.7, marginBottom: "20px", fontStyle: "italic" }}>
                  «{r.text}»
                </p>
                <div style={{ color: "#e63946", fontWeight: 700, fontSize: "14px" }}>{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="контакты" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#e63946", fontSize: "13px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Контакты</p>
          <h2 style={{ fontFamily: "'Unbounded', sans-serif", color: "#fff", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, marginBottom: "48px" }}>
            ПРИХОДИТЕ К НАМ
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", marginBottom: "48px" }}>
            <div style={{ background: "#161616", borderRadius: "8px", padding: "28px 20px", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Icon name="MapPin" size={24} style={{ color: "#e63946", marginBottom: "12px" }} />
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "15px", marginBottom: "6px" }}>Адрес</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>Старая Русса</div>
            </div>
            <div style={{ background: "#161616", borderRadius: "8px", padding: "28px 20px", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Icon name="Phone" size={24} style={{ color: "#e63946", marginBottom: "12px" }} />
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "15px", marginBottom: "6px" }}>Телефон</div>
              <a href="tel:+79524861100" style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none" }}>+7 (952) 486-11-00</a>
            </div>
            <div style={{ background: "#161616", borderRadius: "8px", padding: "28px 20px", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Icon name="Clock" size={24} style={{ color: "#e63946", marginBottom: "12px" }} />
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "15px", marginBottom: "6px" }}>Часы работы</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>Ежедневно</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+79524861100" style={{
              background: "#e63946", color: "#fff", textDecoration: "none",
              padding: "16px 36px", fontWeight: 800, fontSize: "15px",
              borderRadius: "4px", letterSpacing: "0.5px",
              boxShadow: "0 8px 32px rgba(230,57,70,0.3)",
            }}>
              Позвонить
            </a>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" style={{
              background: "#0077ff", color: "#fff", textDecoration: "none",
              padding: "16px 36px", fontWeight: 800, fontSize: "15px",
              borderRadius: "4px", letterSpacing: "0.5px",
              display: "flex", alignItems: "center", gap: "8px",
            }}>
              <Icon name="Send" size={18} />
              Написать ВКонтакте
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "40px 24px", textAlign: "center",
      }}>
        <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "20px", color: "#fff", marginBottom: "12px" }}>
          ШАУРМА <span style={{ color: "#e63946" }}>ВКУС ВОСТОКА</span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>Старая Русса · +7 (952) 486-11-00</p>
      </footer>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        * { cursor: default; }
        a, button { cursor: pointer !important; }
      `}</style>
    </div>
  );
}