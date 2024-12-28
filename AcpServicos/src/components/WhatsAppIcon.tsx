import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppIcon() {
  const phoneNumber = '5511962374443'; 
  const message =
    'Olá, estou entrando em contato através do site e gostaria de mais informações!';

  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
      className="whatsapp-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={40} />
    </a>
  );
}

export default WhatsAppIcon;
