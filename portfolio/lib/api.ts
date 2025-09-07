export async function sendMail(data: {
  client: {
    email: string;
  };
  user: {
    name: string;
    surname: string;
    email: string;
    message: string;
  };
}) {
  const backendAPI = process.env.NEXT_PUBLIC_EMAIL_SENDER_BACKEND_URL;
  try {
    const response = await fetch(`${backendAPI}/api/send-mail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      if (response.status === 400) {
        throw new Error(`Richiesta non valida (400) ${errorBody}`);
      }
      if (response.status === 403) {
        throw new Error(`Accesso negato (403) ${errorBody}`);
      }
      if (response.status === 404) {
        throw new Error(`Endpoint non trovato (404) ${errorBody}`);
      }
      if (response.status === 500) {
        throw new Error(`Errore interno del server (500) ${errorBody}`);
      }
      throw new Error(`Errore ${response.status}: ${errorBody}`);
    }
  } catch (err) {
    if (err instanceof Error) {
      throw new Error('Errore di rete: ' + String(err.message));
    }
  }
}
