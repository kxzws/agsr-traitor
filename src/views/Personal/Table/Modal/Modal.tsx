import { IModalProps } from '../../../../types/interfaces';
import close from '../../../../assets/svg/close.svg';
import './Modal.scss';

const Modal = (props: IModalProps) => {
  const { item, isOpen, onClose } = props;

  return (
    <>
      <div
        className={`overlay ${isOpen ? null : 'invisible'}`}
        onClick={() => {
          onClose();
        }}
      />
      <div className={`modal ${isOpen ? null : 'invisible'}`}>
        <header className="modal__header">
          <h3 className="modal__title">Информация о ЭС</h3>
          <button
            type="button"
            className="modal__close-btn"
            onClick={() => {
              onClose();
            }}
          >
            <img src={close} alt="close modal" className="modal__close-img" />
          </button>
        </header>

        <div className="modal__body">
          <div className="modal__row">
            <p className="modal__subtitle">Наименование ЭС:</p>
            <p className="modal__text">{item?.name}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">Метка данных (идентификатор):</p>
            <p className="modal__text">{item?.mark}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">Описание ЭС:</p>
            <p className="modal__text">{item?.description}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">Ссылка на получение доступа к ЭС:</p>
            <p className="modal__text">{item?.anchor}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">Описание ЭС (документ):</p>
            <p className="modal__text">{item?.descriptionDoc}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">Описание ЭС (swagger3.0):</p>
            <p className="modal__text">{item?.descriptionSwagger}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">Образец запроса к ЭС:</p>
            <p className="modal__text">{item?.reqSample}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">Образец ответа от ЭС:</p>
            <p className="modal__text">{item?.ansSample}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">Метка условий доступа к ГИС:</p>
            <p className="modal__text">{item?.accessMark}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">Описание условий доступа к ГИС:</p>
            <p className="modal__text">{item?.accessDescription}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">Наименование ГИС:</p>
            <p className="modal__text">{item?.GIS}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">Номер регистрации ГИС:</p>
            <p className="modal__text">{item?.registrationNumber}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">Дата регистрации ГИС:</p>
            <p className="modal__text">{item?.registrationDate}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">Место размещения ГИС (ЦОД):</p>
            <p className="modal__text">{item?.location}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">Метка условий доступа к ГИС:</p>
            <p className="modal__text">{item?.GISAccessMark}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">Описание условий доступа:</p>
            <p className="modal__text">{item?.GISAccessDescription}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">УНП владельца ГИС:</p>
            <p className="modal__text">{item?.GISUNP}</p>
          </div>
          <div className="modal__row">
            <p className="modal__subtitle">Наменование владельца ГИР:</p>
            <p className="modal__text">{item?.GISOwner}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
