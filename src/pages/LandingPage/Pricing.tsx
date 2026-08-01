import imgEstrelas from '../../estrelas.png'
import imgCreditCards from '../../creditcards.png'
import imgSeal from '../../entregagratis.png'
import selo60dias from '../../60dias.png'
import { PRICING_PACKAGES } from './data'

// ─── Pricing ──────────────────────────────────────────────────────────────────

export default function Pricing() {
  return (
    <>
    {/* FAIXA 1: FRETE GRÁTIS (Layout Clean Fundo Branco) */}
        <div style={{ 
          backgroundColor: '#ffffff', 
          padding: '60px 20px 30px 20px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '30px',
          width: '100%'
        }}>
          {/* Imagem do Selo */}
          <img src={imgSeal} alt="Fast and Free Shipping" style={{ width: '140px', height: 'auto' }} />
          
          {/* Textos de Destaque */}
          <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: 'var(--color-deep)', fontSize: '32px', margin: '0 0 5px 0', fontWeight: '800' }}>
              Every 6 Bottles Order
            </h2>
            <h2 style={{ color: 'var(--color-accent)', fontSize: '32px', margin: '0 0 12px 0', fontWeight: '800', textDecoration: 'underline' }}>
              Gets FREE Shipping Too!
            </h2>
            <p style={{ color: '#666666', fontSize: '18px', margin: 0, fontWeight: '500' }}>
              *97% Of Customers Order 6 Bottles (Our Recommended Option)
            </p>
          </div>
        </div>

       
    <section id="pricing" style={{ padding: '100px 24px 24px 24px', backgroundColor: '#f9f9f9', color: '#333' }}>
      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto', 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        alignItems: 'stretch',
        gap: '20px' 
      }}>
        
        {PRICING_PACKAGES.map((pkg) => (
          <div 
        key={pkg.id} 
        style={{
          width: '100%',
          flex: pkg.highlight ? '1 1 340px' : '1 1 280px',
          maxWidth: pkg.highlight ? '400px' : '320px',
          margin: pkg.highlight ? '0 24px' : '0',
          backgroundColor: pkg.highlight ? '#fdf8ce' : '#ffffff',
          border: pkg.highlight ? '4px solid var(--color-deep)' : '1px solid #e0e0e0',
          borderRadius: '10px',
          padding: pkg.highlight ? '44px 32px' : '38px 26px',
          textAlign: 'center',
          /* Sombra mais forte por padrão no banner do meio */
          boxShadow: pkg.highlight ? '0 16px 34px rgba(0,0,0,0.2)' : '0 6px 14px rgba(0,0,0,0.08)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          /* Card do meio fica maior e elevado para se destacar */
          transform: pkg.highlight ? 'scale(1.1) translateY(-10px)' : 'scale(1)',
          /* Prepara a div para uma animação suave de 0.3 segundos */
          transition: 'all 0.3s ease', 
          zIndex: pkg.highlight ? 2 : 1
        }}
        onMouseEnter={(e) => {
          if (pkg.highlight) {
            /* Efeito exclusivo para o banner do meio: cresce um pouco mais e a sombra dobra */
            e.currentTarget.style.transform = 'scale(1.14) translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 26px 48px rgba(0,0,0,0.3)';
            e.currentTarget.style.zIndex = '10'; // Traz o banner para frente
          } else {
            /* Efeito sutil para os banners laterais: Crescem apenas 2% */
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
            e.currentTarget.style.zIndex = '5';
          }
        }}
        onMouseLeave={(e) => {
          /* Quando o mouse sai, volta ao estado de destaque (ou normal, no caso dos laterais) */
          e.currentTarget.style.transform = pkg.highlight ? 'scale(1.1) translateY(-10px)' : 'scale(1)';
          e.currentTarget.style.boxShadow = pkg.highlight ? '0 16px 34px rgba(0,0,0,0.2)' : '0 6px 14px rgba(0,0,0,0.08)';
          e.currentTarget.style.zIndex = pkg.highlight ? '2' : '1';
        }}
      >
            
            {/* Barra de Bônus (Aparece só no card do meio) */}
            {pkg.highlight && (
              <>
                {/* Seta apontando para a barra */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '11px solid transparent',
                    borderRight: '11px solid transparent',
                    borderTop: '11px solid #ff4d4d',
                  }}
                />
                {/* Barra vermelha de bônus — dentro do contorno escuro do card */}
                <div style={{
                  margin: '-44px -32px 22px -32px',
                  backgroundColor: '#ff4d4d',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: 'clamp(13px, 2vw, 15px)',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  padding: '11px 14px',
                  borderRadius: '6px 6px 0 0',
                  textAlign: 'center',
                }}>
                  $163 E-Book Bonus
                </div>
              </>
            )}

            {/* Rótulo (Basic / Best Value / Most Popular) */}
            <p style={{
              fontSize: '12px',
              fontWeight: 800,
              color: pkg.highlight ? '#b8860b' : 'var(--color-accent)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              margin: '0 0 8px 0'
            }}>
              {pkg.badgeLabel}
            </p>

            {/* Títulos */}
            <h3 style={{ fontSize: pkg.highlight ? 'clamp(25px, 4.5vw, 30px)' : 'clamp(22px, 3.8vw, 27px)', color: 'var(--color-deep)', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 800 }}>
              {pkg.title}
            </h3>
            <p style={{ fontSize: '13px', color: '#666', margin: '0 0 20px 0' }}>{pkg.subtitle}</p>

            {/* Imagem do Produto */}
            <img src={pkg.image} alt={pkg.title} style={{
              height: pkg.highlight ? 'clamp(170px, 24vw, 230px)' : 'clamp(160px, 20vw, 195px)',
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
              borderRadius: '14px',
              boxShadow: '10px 8px 20px rgba(0,0,0,0.2)',
              marginBottom: '20px',
              display: 'block',
              alignSelf: 'center',
            }} />

            {/* Preço Principal */}
            <div style={{ color: 'var(--color-deep)', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
              <span style={{ fontSize: pkg.highlight ? 'clamp(52px, 10vw, 68px)' : 'clamp(44px, 8.5vw, 57px)', fontWeight: 'bold', lineHeight: '1' }}>${pkg.price}</span>
              <span style={{ fontSize: pkg.highlight ? '17px' : '15px', marginLeft: '4px' }}>/ Bottle</span>
            </div>

            {/* Vantagens (Perks) */}
            <div style={{ marginBottom: '24px', flexGrow: 1 }}>
              {pkg.perks.map((perk, i) => (
                <div key={i} style={{
                  border: '1.5px dashed #aaa',
                  borderRadius: '6px',
                  padding: pkg.highlight ? '11px' : '9px',
                  marginBottom: '8px',
                  fontSize: pkg.highlight ? '14px' : '13px',
                  fontWeight: 'bold',
                  backgroundColor: pkg.highlight ? '#fcf49a' : '#fff'
                }}>
                  <span style={{ color: '#4caf50', marginRight: '6px' }}>✔</span> {perk}
                </div>
              ))}
            </div>

            {/* Botão de Compra - ATUALIZADO COM TAG DO GOOGLE ADS */}
            <button
              onClick={(e) => {
                e.preventDefault();
                try {
                  if (typeof (window as any).gtag_report_conversion === 'function') {
                    (window as any).gtag_report_conversion(pkg.link);
                  } else {
                    window.location.href = pkg.link;
                  }
                } catch (error) {
                  window.location.href = pkg.link;
                }
              }}
              style={{
                backgroundColor: '#ffd700',
                background: 'linear-gradient(to bottom, #ffe800, #ffb300)',
                color: '#000',
                border: '1px solid #d49a00',
                borderRadius: '9px',
                padding: '15px',
                fontSize: 'clamp(18px, 3.5vw, 22px)',
                fontWeight: '900',
                cursor: 'pointer',
                marginBottom: '14px',
                boxShadow: '0 6px 10px rgba(0,0,0,0.22)',
                width: '100%',
                transition: 'all 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 12px 18px rgba(0,0,0,0.42)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 10px rgba(0,0,0,0.22)';
              }}
            >
              BUY NOW
            </button>

            {/* Totais e Frete */}
            <div style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
              TOTAL: <del style={{ color: '#888', marginRight: '8px' }}>{pkg.oldTotal}</del> 
              <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{pkg.newTotal}</span>
            </div>

            <div style={{ fontSize: '13px', color: '#555' }}>
              {pkg.shipping}
            </div>

          </div>
        ))}

      </div>
      {/* IMAGEM DOS CARTÕES: Centralizada abaixo das ofertas */}
        <div style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: '60px',
          paddingBottom: '10px'
        }}>
          <img 
            src={imgCreditCards} 
            alt="Cartões Aceitos" 
            style={{ width: '100%', maxWidth: '320px', height: 'auto' }} 
          />
        </div>
      {/* AVALIAÇÕES DOS CLIENTES */}
      <div style={{ 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        marginTop: '30px', 
        paddingBottom: '0px', 
        fontFamily: "'Montserrat', Arial, sans-serif" 
      }}>
        <p style={{ fontSize: '24px', color: '#1a1a1a', margin: '0', marginBottom: '-25px' }}>
          Our customers say
        </p>
        
        <img 
          src={imgEstrelas} 
          alt="4.5 de 5 estrelas" 
          style={{ 
            width: '100%', 
            maxWidth: '220px', 
            height: 'auto',
            /* Puxa os textos fortemente para cima e para baixo para colar nas estrelas */
            marginTop: '-60px', 
            marginBottom: '-53px',
            position: 'relative',
            zIndex: 2
          }} 
        />
        
        <p style={{ fontSize: '20px', color: '#1a1a1a', margin: '0', marginTop: '-25px' }}>
          based on <strong style={{ fontWeight: '900' }}>14,369 reviews!</strong>
        </p>
      </div>

    </section>
  
    {/* SEÇÃO DE GARANTIA (Fundo Escuro com Caixa Branca) */}
        <div style={{ backgroundColor: 'var(--color-deep)', padding: '60px 20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
          
          {/* Caixa Branca Central */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '40px',
            maxWidth: '850px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            flexWrap: 'wrap'
          }}>
            
            {/* Lado Esquerdo: Imagem do Selo */}
            <div style={{ flexShrink: 0, textAlign: 'center', width: '100%', maxWidth: '160px', margin: '0 auto' }}>
              <img src={selo60dias} alt="60-Day Money Back Guarantee" style={{ width: '100%', height: 'auto' }} />
            </div>

            {/* Lado Direito: Textos */}
            <div style={{ flex: 1, minWidth: '250px' }}>
              <h3 style={{ color: 'var(--color-deep)', fontSize: '26px', margin: '0 0 12px 0', fontWeight: '800', fontFamily: 'Arial, sans-serif' }}>
                100% Satisfaction<br/>
                60-Day Money Back Guarantee
              </h3>
              <p style={{ color: '#444444', fontSize: '16px', lineHeight: '1.6', margin: 0, fontFamily: 'Arial, sans-serif' }}>
                Your order today is covered by our iron-clad <strong>60-day 100% money-back guarantee</strong>. If you are not impressed with the results, then just write to us and we'll refund every single cent.
              </p>
            </div>

          </div>
        </div>
    </>
  );
}