// Tokenul și chat_id pentru Telegram
const TELEGRAM_BOT_TOKEN = '7345913311:AAG5pjU2d7mSML1ds-9yr8lme7GjI-zmE_E';
const TELEGRAM_CHAT_ID = '5960470289';

// Funcție pentru a trimite mesajul către API-ul Telegram
async function sendTelegramMessage(message) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const payload = {
    chat_id: TELEGRAM_CHAT_ID,
    text: message,
    parse_mode: 'HTML'
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (result.ok) {
      alert('Mesaj trimis cu succes!');
    } else {
      alert('Eroare la trimiterea mesajului.');
      console.error(result);
    }
  } catch (error) {
    alert('A apărut o eroare.');
    console.error(error);
  }
}

// Adaugă un event listener pe formular
document.getElementById('invitationForm').addEventListener('submit', (event) => {
  event.preventDefault();

  // Colectează datele din formular
  const formData = new FormData(event.target);
  const name = formData.get('name') || 'N/A';
  const phone = formData.get('phone') || 'N/A';
  const attending = formData.get('attending') ? 'DA' : 'NU';
  const accommodation = formData.get('accommodation') ? 'DA' : 'NU';
  const companions = formData.get('companions') ? 'DA' : 'NU';
  const children = formData.get('children') ? 'DA' : 'NU';
  const numAdults = parseInt(formData.get('num_adults'), 10) || 0;
  const numChildren = parseInt(formData.get('num_children'), 10) || 0;
  const childrenMenu = formData.get('children-menu') === 'menu' ? 'Meniu' : formData.get('children-menu') === 'chair' ? 'Doar scaun' : 'N/A';
  const customMessage = formData.get('custom_message') || '';

  const totalGuests = companions === 'DA' ? numAdults + numChildren : 0;

  // Creează mesajul
  const message = `
    Confirmare Invitație
    Nume: ${name}
    Telefon: ${phone}
    Participare: ${attending}
    Cazare: ${accommodation}
    Însoțitori: ${companions}
    Copii: ${children}
    Număr total persoane: ${totalGuests}
    Număr adulți: ${numAdults}
    Număr copii: ${numChildren}
    Preferințe copii: ${childrenMenu}
    Mesaj personalizat: ${customMessage}
  `;

  // Trimite mesajul prin Telegram
  sendTelegramMessage(message);
});
