import parse from 'html-react-parser';
import logo from '../../assets/svg/logo.svg';
import bankLogo from '../../assets/svg/dev_bank.svg';
import partner from '../../assets/svg/partner.jpg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="center-cont">
        <nav className="info">
          <div className="info__rights">
            <img src={logo} alt="logo: Registres" className="info__logo" />
            <p className="info__descr descr_registres">
              Автоматизированная информационная
              <br />
              система «Реестры»
            </p>
            <p className="info__descr descr_registres">
              © АИС «Реестры», 2022.
              <br />
              Все права защищены.
            </p>
          </div>

          <div className="info__tech-supp">
            <h4 className="info__title ">Техническая поддержка</h4>
            <a href="tel:+375251112233" className="info__descr">
              +375 25 111 22 33
            </a>
            <a href="tel:+375292224455" className="info__descr">
              +375 29 222 44 55
            </a>
            <a href="mailto:dev@agsr.by" className="info__descr">
              dev@agsr.by
            </a>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
              className="info__descr descr_link"
              rel="noreferrer"
              target="_blank"
            >
              Связаться с поддержкой
            </a>
          </div>

          <div className="info__contacts">
            <h4 className="info__title ">Контакты</h4>
            <a href="tel:+375331122245" className="info__descr">
              +375 33 112 22 45
            </a>
            <a href="tel:+375292224488" className="info__descr">
              +375 29 222 44 88
            </a>
            <a href="mailto:dev@agsr.by" className="info__descr">
              dev@agsr.by
            </a>
            <p className="info__descr">г. Минск, ул. К.Цеткин, д. 24-705</p>
          </div>
        </nav>

        <div className="partners">
          <img src={bankLogo} alt="logo: Bank" className="partners__logo" />
          <img src={partner} alt="logo: partner" className="partners__logo" />
          <img src={partner} alt="logo: partner" className="partners__logo" />
          <img src={partner} alt="logo: partner" className="partners__logo" />
          <img src={partner} alt="logo: partner" className="partners__logo" />
        </div>

        <div className="developer">
          <p className="developer__descr">© АИС «Реестры»</p>
          <p className="developer__descr">
            {parse(`Разработчик: ОАО&nbsp;«Агентство&nbsp;сервисизации&nbsp;и реинжиниринга» (г.
            Минск, ул.&nbsp;К.&nbsp;Цеткин, д.&nbsp;24–705&nbsp;dev@agsr.by)`)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
