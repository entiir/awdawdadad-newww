import React from "react";

// Layout examples; these are not a live open-interest or positioning feed.
const MARKETS = [
  { symbol: "HYPE", positions: "$549.4M", longs: 73 },
  { symbol: "BTC", positions: "$4.2B", longs: 71 },
  { symbol: "ETH", positions: "$1.8B", longs: 58 },
];

export default function HomePerps({ onOpen, Logo, icons }) {
  return <section className="home-perps-section" aria-label="Perpetual markets">
    <button type="button" className="home-perps-title" onClick={() => onOpen("HYPE")}>Perps {icons.chev(20)}</button>
    <div className="home-perps-carousel">
      {MARKETS.map(market => <button type="button" className="home-perps-card" key={market.symbol} onClick={() => onOpen(market.symbol)} aria-label={`Open ${market.symbol} perpetual market`}>
        <div className="home-perps-card-top"><Logo id={market.symbol} size={34} />
          <div className="home-perps-name"><strong>{market.symbol}</strong><small>{market.positions} in positions</small></div>
          <span className="home-perps-bias">Bullish ↗</span>
        </div>
        <div className="home-perps-sentiment"><span>{market.longs}% Long</span><span className="home-perps-meter" role="img" aria-label={`${market.longs}% long, ${100 - market.longs}% short`}><i style={{ width: market.longs + "%" }} /></span><span>{100 - market.longs}% Short</span></div>
      </button>)}
    </div>
    <small className="home-perps-note">Sample market activity</small>
  </section>;
}
