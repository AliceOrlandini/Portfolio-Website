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
  const backendAPI = process.env.EMAIL_SENDER_BACKEND_URL;
  const response = await fetch(`${backendAPI}/api/send-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error(`${response.statusText}`);
  }
  const result = await response.json();
  return result;
}