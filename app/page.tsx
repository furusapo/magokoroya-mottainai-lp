const ADDRESS = "〒339-0021 埼玉県さいたま市岩槻区末田2587";
const MAP_URL =
  "https://www.google.com/maps/dir/?api=1&destination=%E5%9F%BC%E7%8E%89%E7%9C%8C%E3%81%95%E3%81%84%E3%81%9F%E3%81%BE%E5%B8%82%E5%B2%A9%E6%A7%BB%E5%8C%BA%E6%9C%AB%E7%94%B02587";
const MAP_EMBED =
  "https://www.google.com/maps?q=%E5%9F%BC%E7%8E%89%E7%9C%8C%E3%81%95%E3%81%84%E3%81%9F%E3%81%BE%E5%B8%82%E5%B2%A9%E6%A7%BB%E5%8C%BA%E6%9C%AB%E7%94%B02587&output=embed";

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a href="#top" className="logo-link" aria-label="ページの先頭へ">
          <img
            src="/images/suga-foods-logo.png"
            alt="有限会社 須賀食品"
            width="325"
            height="80"
          />
        </a>
        <a className="header-map" href={MAP_URL} target="_blank" rel="noreferrer">
          <span aria-hidden="true">⌖</span> アクセス
        </a>
      </header>

      <section className="campaign section campaign-top" aria-labelledby="campaign-title">
        <div className="section-heading">
          <p>THIS WEEK&apos;S INFORMATION</p>
          <h1 id="campaign-title">開催のお知らせ</h1>
        </div>
        <figure className="campaign-visual">
          <img
            src="/images/mottainai-sale.png"
            alt="とうふ工房まごころ屋 もったいないセール。本日16時スタート、30〜50%OFF、数量限定、なくなり次第終了"
            width="1286"
            height="1278"
          />
        </figure>
        <p className="fine-print">
          ※対象商品・販売数は日によって異なります。売り切れの際はご了承ください。
        </p>
      </section>

      <section className="intro section" aria-labelledby="intro-title">
        <div className="section-heading">
          <p>ABOUT THE MARKET</p>
          <h2 id="intro-title">おいしさはそのまま。<br />うれしい価格で。</h2>
        </div>
        <p className="lead">
          とうふ工房まごころ屋が、まだおいしく食べられる商品を特別価格で販売する「もったいない市」です。
        </p>

        <div className="feature-list">
          <article>
            <span>01</span>
            <div>
              <h3>毎週 月・木・土曜日</h3>
              <p>週3日、夕方16:00から開催します。</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>30〜50%OFF</h3>
              <p>対象商品を、うれしい特別価格で。</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>数量限定</h3>
              <p>商品がなくなり次第、その日の販売は終了です。</p>
            </div>
          </article>
        </div>
      </section>

      <section className="access section" id="access" aria-labelledby="access-title">
        <div className="section-heading">
          <p>ACCESS</p>
          <h2 id="access-title">場所はこちら</h2>
        </div>
        <figure className="store-photo">
          <img
            src="/images/magokoroya-store.png"
            alt="とうふ工房まごころ屋の店舗外観"
            width="672"
            height="814"
          />
        </figure>
        <div className="shop-card">
          <p className="card-label">SHOP INFORMATION</p>
          <img
            src="/images/suga-foods-logo.png"
            alt="有限会社 須賀食品"
            width="325"
            height="80"
          />
          <p className="shop-name">とうふ工房 まごころ屋</p>
          <address>{ADDRESS}</address>
          <dl>
            <div>
              <dt>もったいない市</dt>
              <dd>毎週 月・木・土 16:00〜</dd>
            </div>
            <div>
              <dt>終了時間</dt>
              <dd>商品がなくなり次第終了</dd>
            </div>
            <div>
              <dt>駐車場</dt>
              <dd>あり</dd>
            </div>
          </dl>
          <a className="button button-dark" href={MAP_URL} target="_blank" rel="noreferrer">
            現在地から経路を見る <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="map-block">
          <p className="card-label">MAP</p>
          <div className="map-wrap">
            <iframe
              src={MAP_EMBED}
              title="とうふ工房まごころ屋周辺の地図"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="message section" aria-labelledby="message-title">
        <p className="message-kicker">ごあいさつ</p>
        <h2 id="message-title">これまでも、これからも。<br />まっすぐ豆腐と向き合う。</h2>
        <div className="message-body">
          <p>
            須賀食品は明治９年の創業以来、豆腐造りに取り組んで140年余りがたちます。
          </p>
          <p>
            代々受け継がれた伝統の味を守るため、手間を惜しまず、毎日豆腐と向き合っております。
          </p>
          <p>
            現在は、昔ながらの職人の技術と最新の技術の融合を図り、多様化するお客様のニーズに合った商品づくりを目指して日々精進しております。
          </p>
          <p>
            令和の時代も、社会に貢献できる老舗の豆腐屋として躍進してまいります。
          </p>
        </div>
        <p className="signature">四代目　代表取締役　須賀大雄</p>
      </section>

      <footer>
        <img
          src="/images/suga-foods-logo.png"
          alt="有限会社 須賀食品"
          width="325"
          height="80"
        />
        <p>とうふ工房 まごころ屋</p>
        <small>〒339-0021 埼玉県さいたま市岩槻区末田2587</small>
      </footer>

      <nav className="sticky-nav" aria-label="ページ下部の固定メニュー">
        <a href="#top"><span aria-hidden="true">⌂</span><small>トップ</small></a>
        <a href="#access"><span aria-hidden="true">⌖</span><small>店舗情報</small></a>
        <a className="sticky-main" href={MAP_URL} target="_blank" rel="noreferrer">
          <span aria-hidden="true">↗</span><small>経路を見る</small>
        </a>
      </nav>
    </main>
  );
}
