const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=%E3%81%A8%E3%81%86%E3%81%B5%E5%B7%A5%E6%88%BF%E3%81%BE%E3%81%94%E3%81%93%E3%82%8D%E5%B1%8B+%E5%9F%BC%E7%8E%89%E7%9C%8C%E3%81%95%E3%81%84%E3%81%9F%E3%81%BE%E5%B8%82%E5%B2%A9%E6%A7%BB%E5%8C%BA%E6%9C%AB%E7%94%B02587";

const days = [
  { day: "月", label: "Monday" },
  { day: "水", label: "Wednesday" },
  { day: "土", label: "Saturday" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ページの先頭へ">
          <span className="brand-mark">ま</span>
          <span>
            <small>明治9年創業</small>
            とうふ工房 まごころ屋
          </span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="soy-pattern" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">工場直売のおたのしみ</p>
          <h1>
            おいしく、
            <br />
            もったいなく。
          </h1>
          <p className="hero-lead">
            まだまだおいしく食べられる商品を、
            <br />
            うれしい価格でお届けします。
          </p>

          <div className="event-card">
            <span className="event-ribbon">毎週開催</span>
            <div className="day-row" aria-label="月曜日、水曜日、土曜日">
              {days.map((item) => (
                <div className="day-badge" key={item.day}>
                  <span>{item.day}</span>
                  <small>{item.label}</small>
                </div>
              ))}
            </div>
            <p className="start-time">
              <strong>16:00</strong>
              <span>スタート</span>
            </p>
            <p className="sellout">※商品がなくなり次第終了です</p>
          </div>

          <a className="primary-button" href={MAP_URL} target="_blank" rel="noreferrer">
            <span className="pin" aria-hidden="true">●</span>
            Googleマップで場所を見る
            <span aria-hidden="true">›</span>
          </a>
          <p className="parking-note">駐車場あり・お車でどうぞ</p>
        </div>

        <div className="hero-visual" aria-label="まごころ屋の豆腐と豆乳どーなつ">
          <div className="sun" aria-hidden="true" />
          <figure className="food-photo main-food">
            <img
              src="/images/food-hero.png"
              alt="なめらかな寄せ豆腐"
            />
          </figure>
          <figure className="food-photo sub-food">
            <img
              src="/images/food-hero.png"
              alt="豆乳どーなつ"
            />
          </figure>
          <div className="hand-note">できたての工場から</div>
        </div>
      </section>

      <section className="about section">
        <p className="section-kicker">MOTTAINAI MARKET</p>
        <h2>
          夕方4時、
          <br />
          まごころ屋に集合。
        </h2>
        <p className="body-copy">
          形がふぞろいだったり、賞味期限が近かったり。
          品質には問題のない「まだおいしい」商品を、お得に販売する小さな市です。
        </p>
        <div className="point-grid">
          <article>
            <span>01</span>
            <b>何があるかは<br />その日のお楽しみ</b>
          </article>
          <article>
            <span>02</span>
            <b>お財布にも<br />地球にもうれしい</b>
          </article>
          <article>
            <span>03</span>
            <b>工場直売の<br />おいしさ</b>
          </article>
        </div>
        <p className="notice">
          ※販売商品・価格・数量は日によって異なります。お取り置きはできません。
        </p>
      </section>

      <section className="story section">
        <div className="story-card">
          <p className="section-kicker">SINCE 1876</p>
          <h2>岩槻で、明治9年から。</h2>
          <p>
            代々受け継がれた職人の技を大切に、
            毎日まじめに豆腐と向き合っています。
            地域の食卓に、できたてのおいしさを。
          </p>
          <div className="product-strip">
            <span>豆腐</span><i>・</i><span>油揚げ</span><i>・</i>
            <span>お惣菜</span><i>・</i><span>豆乳どーなつ</span>
          </div>
        </div>
      </section>

      <section className="access section" id="access">
        <p className="section-kicker">ACCESS</p>
        <h2>とうふ工房<br />まごころ屋</h2>
        <div className="address-card">
          <div className="map-illustration" aria-hidden="true">
            <span className="map-road road-one" />
            <span className="map-road road-two" />
            <span className="map-pin"><i>ま</i></span>
          </div>
          <div className="address-content">
            <p className="postal">〒339-0021</p>
            <p className="address">埼玉県さいたま市<br />岩槻区末田2587</p>
            <dl>
              <div><dt>通常営業時間</dt><dd>9:00〜17:00</dd></div>
              <div><dt>定休日</dt><dd>日曜日</dd></div>
              <div><dt>駐車場</dt><dd>あり</dd></div>
            </dl>
            <a className="primary-button dark" href={MAP_URL} target="_blank" rel="noreferrer">
              Googleマップを開く <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <a className="phone-link" href="tel:0487981766">
          <small>お問い合わせ</small>
          048-798-1766
        </a>
      </section>

      <footer>
        <span className="brand-mark">ま</span>
        <p>とうふ工房 まごころ屋</p>
        <small>運営：有限会社 須賀食品</small>
      </footer>

      <div className="sticky-cta">
        <div>
          <small>毎週 月・水・土</small>
          <strong>16:00〜 開催！</strong>
        </div>
        <a href={MAP_URL} target="_blank" rel="noreferrer">場所を見る</a>
      </div>
    </main>
  );
}
