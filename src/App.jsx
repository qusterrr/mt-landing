import React from "react";

function App() {
  const featureCards = [
    {
      title: "Real Market Dynamics",
      text:
        "MoonTrade mirrors live crypto market behavior: spreads, order book depth, liquidity pressure, and execution speed. It feels like trading on a real exchange, only without financial damage."
    },
    {
      title: "Zero-Risk Learning",
      text:
        "Trade without risking real money. Experiment with new ideas, refine your strategy, and learn from mistakes in a safe, simulated environment."
    },
    {
      title: "Competitive Leaderboards",
      text:
        "Join tournaments, climb the rankings, and track your performance against other traders in real time."
    }
  ];

  const markets = [
    { name: "Bitcoin", price: "$68,011.83", change: "+4.71%" },
    { name: "Solana", price: "$132.41", change: "−0.60%" },
    { name: "Dash", price: "$47.03", change: "+3.17%" },
    { name: "XRP", price: "$2.07", change: "+1.66%" },
    { name: "Ethereum", price: "$3,421.50", change: "+2.19%" },
    { name: "Litecoin", price: "$92.14", change: "+0.87%" }
  ];

    const stepsTop = [
    {
      number: "1",
      title: "Create your account",
      text:
        "Sign up in a few seconds and create your MoonTrade profile. No KYC, no documents, no awkward selfies with your passport.",
      imageSrc: "images/create-account.png",
      imageAlt: "MoonTrade profile screen with user avatar and ROI"
    },
    {
      number: "2",
      title: "Set up your profile",
      text:
        "Pick a nickname, choose an avatar, and set your trading preferences to build your profile.",
      imageSrc: "images/setup-acc.png",
      imageAlt: "MoonTrade profile edit screen with nickname and bio"
    },
    {
      number: "3",
      title: "Join tournaments or trade solo",
      text:
        "Jump into daily, weekly, and long-term challenges or practice in regular trading mode at your own pace.",
      imageSrc: "images/screen-tournaments.png",
      imageAlt: "MoonTrade tournaments screen with daily and weekly challenges"
    }
  ];

  const stepsBottom = [
    {
      number: "4",
      title: "Choose the trading mode",
      text:
        "Switch between regular trading and tournament mode, just like in the mobile app. Same interface, higher stakes — but still simulated.",
      imageSrc: "images/trading-mode.png",
      imageAlt: "MoonTrade events screen with different trading modes"
    },
    {
      number: "5",
      title: "Pick your market",
      text:
        "Select pairs like BTC/USDT, XRP/USDT, TRX/USDT and test your strategy in a realistic environment where orders actually move the book.",
      imageSrc: "images/screen-trade.png",
      imageAlt: "MoonTrade trading screen with BTCUSDT order book"
    },
    {
      number: "6",
      title: "Trade & climb the leaderboard",
      text:
        "Place orders, move the spread and liquidity inside the simulated order book, and watch your ROI push you toward the top of the leaderboard.",
      imageSrc: "images/screen-leaderboard.png",
      imageAlt: "MoonTrade leaderboard screen with top players and ROI"
    }
  ];


  const faqs = [
    {
      q: "1. Is MoonTrade using real money?",
      a:
        "No. All trading inside MoonTrade is fully simulated. You never deposit real money and you never risk real capital."
    },
    {
      q: "2. Where do the prices come from?",
      a:
        "MoonTrade mirrors real crypto market prices in near real time, based on major exchanges. Your trades behave like they would in real markets — only without financial risk."
    },
    {
      q: "3. Is the order book real?",
      a:
        "MoonTrade uses a live, interactive simulated order book where your trades directly affect the market state. Your orders move the spread, shift liquidity, and influence other players."
    },
    {
      q: "4. Do I need to verify my identity?",
      a:
        "No. MoonTrade does not use real money and does not require identity verification. You can start trading right away without submitting documents."
    },
    {
      q: "5. Can I earn rewards in MoonTrade?",
      a:
        "Yes. By actively trading, improving market liquidity, and participating in tournaments, you can earn in-game rewards, ranks, and achievements."
    },
    {
      q: "6. Can I access MoonTrade on mobile or desktop?",
      a:
        "MoonTrade is currently available on Android. iOS and browser versions are in active development so you will be able to trade from your phone, tablet, or desktop."
    }
  ];

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="container header-inner">
          <div className="header-left">
            <div className="logo-wrapper">
              <img
                src="images/moontrade-logo.png"
                alt="MoonTrade logo"
                className="logo-image"
              />
              <div className="logo-text-block">
                <span className="logo-main-text">MoonTrade</span>
                <span className="logo-sub-text">
                  Learn to trade with zero risk
                </span>
              </div>
            </div>
          </div>
          <nav className="nav">
            <a href="#product" className="nav-link">
              Product
            </a>
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#how-it-works" className="nav-link">
              How it works
            </a>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
          </nav>
          {/* no header CTA, pure informational landing */}
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="product" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-text">
              <h1 className="hero-title">
                MoonTrade – Learn to Trade With Zero Risk
              </h1>
              <p className="hero-subtitle">
                A realistic, gamified trading simulator designed to help you
                learn, practice, and improve — without risking real money.
              </p>

              <p className="hero-note">
                A focused preview of the MoonTrade environment: real interface, real mechanics, fully simulated markets.
Explore how the platform feels.
              </p>
            </div>

            <div className="hero-media">
              <div className="hero-phone-strip">
                <div className="phone-card phone-card-left">
                  <img
                    src="images/screen-profile.png"
                    alt="MoonTrade profile screen with ROI and avatar"
                    className="phone-image"
                  />
                </div>
                <div className="phone-card phone-card-center">
                  <img
                    src="images/screen-trade.png"
                    alt="MoonTrade trading interface with BTCUSDT order book"
                    className="phone-image"
                  />
                </div>
                <div className="phone-card phone-card-right">
                  <img
                    src="images/screen-leaderboard.png"
                    alt="MoonTrade leaderboard with top players"
                    className="phone-image"
                  />
                </div>
              </div>
              <div className="hero-glow-line" />
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section id="features" className="section section-why">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Choose MoonTrade?</h2>
              <p className="section-subtitle">
                Learn, practice, and compete in a realistic, gamified trading
                environment.
              </p>
            </div>

            <div className="feature-grid">
              {featureCards.map((card) => (
                <article key={card.title} className="feature-card">
                  <h3 className="feature-card-title">{card.title}</h3>
                  <p className="feature-card-text">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ALL CRYPTOS */}
        <section className="section section-cryptos">
          <div className="container cryptos-grid">
            <div className="cryptos-text">
              <h2 className="section-title">All Cryptos, One Platform</h2>
              <p className="section-subtitle">
                Trade major cryptocurrencies inside a unified, seamless
                interface — simulated, risk-free, and perfect for learning and
                experimentation.
              </p>
              <ul className="cryptos-benefits">
                <li>Work with popular pairs and realistic prices.</li>
                <li>Use a single interface for both trading and tournaments.</li>
                <li>Experience an interactive order book and real-feeling fills.</li>
              </ul>
            </div>

            <div className="cryptos-list">
              {markets.map((m) => (
                <div key={m.name} className="cryptos-row">
                  <div className="cryptos-left">
                    <div className="crypto-icon-circle">
                      {m.name[0]}
                    </div>
                    <div className="crypto-name-block">
                      <span className="crypto-name">{m.name}</span>
                      <span className="crypto-label">Simulated market</span>
                    </div>
                  </div>
                  <div className="cryptos-right">
                    <span className="crypto-price">{m.price}</span>
                    <span className="crypto-change">{m.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
                <section id="how-it-works" className="section section-how">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">How It Works</h2>
              <p className="section-subtitle">
                A simple, fast, and safe way to learn crypto trading in a few
                clear steps.
              </p>
            </div>

            <div className="how-grid">
              {stepsTop.map((step) => (
                <article key={step.title} className="how-card">
                  <div className="how-number">{step.number}</div>
                  <div className="how-content">
                    <div className="how-text-block">
                      <h3 className="how-title">{step.title}</h3>
                      <p className="how-text">{step.text}</p>
                    </div>
                    <div className="how-image-block">
                      <img
                        src={step.imageSrc}
                        alt={step.imageAlt}
                        className="how-image"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="how-grid how-grid-bottom">
              {stepsBottom.map((step) => (
                <article key={step.title} className="how-card">
                  <div className="how-number">{step.number}</div>
                  <div className="how-content">
                    <div className="how-text-block">
                      <h3 className="how-title">{step.title}</h3>
                      <p className="how-text">{step.text}</p>
                    </div>
                    <div className="how-image-block">
                      <img
                        src={step.imageSrc}
                        alt={step.imageAlt}
                        className="how-image"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* TOURNAMENTS / EVENTS SECTION */}
        <section className="section section-events">
          <div className="container events-grid">
            <div className="events-media">
              <div className="phone-card phone-card-events">
                <img
                  src="images/screen-events.png"
                  alt="MoonTrade events and tournaments screen"
                  className="phone-image"
                />
              </div>
              <div className="phone-card phone-card-tournaments">
                <img
                  src="images/screen-tournaments.png"
                  alt="MoonTrade tournaments list with daily and weekly challenges"
                  className="phone-image"
                />
              </div>
            </div>
            <div className="events-text">
              <h2 className="section-title">Tournaments, Challenges, Progress</h2>
              <p className="section-subtitle">
                Daily, weekly, and monthly challenges keep you engaged. Every
                trade moves your ranking, and every tournament is a shot at the
                top of the leaderboard.
              </p>
              <ul className="events-list">
                <li>Daily, weekly, and long-term trading challenges.</li>
                <li>Transparent leaderboards and ROI for every player.</li>
                <li>Meaningful progression without risking real money.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section section-faq">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Your Questions, Answered</h2>
              <p className="section-subtitle">
                Everything you need to know before you start trading in the
                simulator.
              </p>
            </div>

            <div className="faq-grid">
              {faqs.map((item) => (
                <div key={item.q} className="faq-item">
                  <h3 className="faq-question">{item.q}</h3>
                  <p className="faq-answer">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-left">
            <span className="footer-logo-text">MoonTrade</span>
            <span className="footer-copy">
              © {new Date().getFullYear()} MoonTrade. All rights reserved.
            </span>
          </div>
          <div className="footer-links">
            <a href="#product" className="footer-link">
              Product
            </a>
            <a href="#features" className="footer-link">
              Features
            </a>
            <a href="#how-it-works" className="footer-link">
              How it works
            </a>
            <a href="#faq" className="footer-link">
              FAQ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
