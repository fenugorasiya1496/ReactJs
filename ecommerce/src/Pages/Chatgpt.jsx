import React from "react";

const popularColors = ["#ff7a18", "#24c6dc", "#6a82fb", "#f5576c", "#3ddc97"];
const quickCards = [
  {
    title: "More Products",
    subtitle: "460 plus items",
    icon: "??",
  },
  {
    title: "5m+",
    subtitle: "Downloads",
    icon: "??",
    badge: "4.6 reviews",
  },
  {
    title: "Listening Has Been Released",
    subtitle: "Popular",
    icon: "??",
  },
];
const featured = [
  {
    title: "New Gen X-Bud",
    description: "Crystal clear",
    media: "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Light Grey Surface Headphone",
    description: "Boosted with bass",
    media: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=500&q=60",
  },
];

export default function NitecShowcase() {
  return (
    <div className="nitec-shell">
      <style>{styles}</style>
      <header className="nitec-banner">
        <div className="brand">nitec.</div>
        <div className="search-box">
          <span>Search products...</span>
          <span className="search-icon">?</span>
        </div>
        <div className="header-actions">
          <button className="circle-button">??</button>
          <button className="circle-button">?</button>
          <div className="profile-pill">
            <img
              src="https://avatars.githubusercontent.com/u/9919?s=160&v=4"
              alt="avatar"
            />
            <span>Ryman Alex</span>
          </div>
        </div>
      </header>

      <main className="nitec-main">
        <section className="hero">
          <div className="hero-badge">?? Music is Classic</div>
          <h1>Sequoia Inspiring Musico.</h1>
          <p>Clear Sounds · Making your dream music come true stay with Sequoia Sounds!</p>
          <div className="hero-action">
            <button className="primary">View All Products</button>
            <div className="hero-step">
              <span>01</span>
              <p>Clear Sounds</p>
            </div>
          </div>
          <div className="social-row">
            <span>Follow us on:</span>
            <div className="social-icons">?? ?? ?? ?</div>
          </div>
        </section>
        <section className="hero-asset">
          <div className="sphere" />
          <img
            src="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=60"
            alt="blue headphones"
          />
        </section>
      </main>

      <section className="quick-row">
        {quickCards.map((card) => (
          <article key={card.title} className="quick-card">
            <div className="card-header">
              <span>{card.icon}</span>
              {card.badge && <span className="badge">{card.badge}</span>}
            </div>
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
          </article>
        ))}
      </section>

      <section className="side-panel">
        <div className="panel-card">
          <h4>Popular Colors</h4>
          <div className="chips">
            {popularColors.map((color) => (
              <span
                key={color}
                className="color-dot"
                style={{ background: color }}
              />
            ))}
          </div>
        </div>
        {featured.map((item) => (
          <article key={item.title} className="panel-card media-card">
            <img src={item.media} alt={item.title} />
            <div>
              <p className="panel-caption">? NEW</p>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

const styles = `
  .nitec-shell {
    font-family: "Inter", "Segoe UI", sans-serif;
    background: radial-gradient(circle at top, #f2f5ff, #eef1f7 30%, #f7f6f0 100%);
    min-height: 100vh;
    padding: 2.5rem;
    color: #111;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .nitec-banner {
    background: rgba(255, 255, 255, 0.9);
    padding: 1rem 1.5rem;
    border-radius: 999px;
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.15);
  }
  .brand {
    font-weight: 700;
    font-size: 1.2rem;
  }
  .search-box {
    flex: 1;
    background: #f6f8ff;
    border-radius: 999px;
    padding: 0.65rem 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #7a7f8b;
  }
  .search-icon {
    font-size: 1.1rem;
  }
  .header-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .circle-button {
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    border: none;
    background: #fff;
    box-shadow: 0 15px 30px rgba(15, 23, 42, 0.12);
    font-size: 1.1rem;
    cursor: pointer;
  }
  .profile-pill {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.35rem 0.85rem;
    border-radius: 999px;
    background: #fff;
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.1);
  }
  .profile-pill img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .nitec-main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
  }
  .hero {
    padding: 2.5rem;
    background: #ffffff;
    border-radius: 1.75rem;
    box-shadow: 0 35px 60px rgba(15, 23, 42, 0.2);
  }
  .hero h1 {
    font-size: 2.6rem;
    margin-bottom: 0.5rem;
  }
  .hero p {
    color: #646870;
    margin-top: 0;
    line-height: 1.5;
  }
  .hero-badge {
    display: inline-flex;
    padding: 0.4rem 0.8rem;
    border-radius: 999px;
    background: #eef2ff;
    color: #4c4efd;
    font-size: 0.85rem;
    margin-bottom: 1.1rem;
  }
  .hero-action {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .primary {
    background: linear-gradient(135deg, #89f7fe, #66a6ff);
    border: none;
    padding: 0.9rem 1.8rem;
    border-radius: 999px;
    font-size: 1rem;
    color: #0a0f1a;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(136, 182, 255, 0.5);
  }
  .hero-step {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    color: #4b4f67;
  }
  .hero-step span {
    font-size: 2rem;
    font-weight: 700;
  }
  .social-row {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #7a7f8b;
  }
  .social-icons {
    display: flex;
    gap: 0.5rem;
  }
  .hero-asset {
    position: relative;
    background: #fdfdfc;
    border-radius: 2rem;
    padding: 1.5rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 30px 60px rgba(15, 23, 42, 0.15);
  }
  .hero-asset img {
    width: 100%;
    max-width: 280px;
    transform: rotate(-5deg);
  }
  .sphere {
    position: absolute;
    width: 220px;
    height: 220px;
    background: radial-gradient(circle, #6a82fb, #1c1f4a);
    border-radius: 50%;
    top: -50px;
    right: -40px;
    opacity: 0.6;
  }
  .quick-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  .quick-card {
    background: #fff;
    border-radius: 1.5rem;
    padding: 1.3rem;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
  }
  .quick-card h3 {
    margin: 0.8rem 0 0.2rem;
    font-size: 1.1rem;
  }
  .quick-card p {
    margin: 0;
    color: #7a7f8b;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .badge {
    background: #ffde73;
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    font-size: 0.75rem;
  }
  .side-panel {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }
  .panel-card {
    background: #fff;
    border-radius: 1.5rem;
    padding: 1.2rem;
    box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.05);
  }
  .chips {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.75rem;
    flex-wrap: wrap;
  }
  .color-dot {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 8px 16px rgba(15, 23, 42, 0.2);
  }
  .media-card {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 0;
    overflow: hidden;
  }
  .media-card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .panel-caption {
    font-size: 0.75rem;
    color: #4c4efd;
    margin: 0;
  }
  .media-card h4 {
    margin: 0;
  }
  .media-card p {
    margin: 0.2rem 0 0;
    color: #7a7f8b;
  }
  @media (max-width: 960px) {
    .nitec-main {
      grid-template-columns: 1fr;
    }
    .hero-asset {
      order: -1;
    }
  }
`;
