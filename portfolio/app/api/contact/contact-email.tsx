import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  surname: string;
  email: string;
  message: string;
}

export const ContactEmail = ({
  name,
  surname,
  email,
  message
}: ContactEmailProps) => {
  const previewText = `Nuovo messaggio ricevuto da ${name} ${surname}`;

  return (
    <Html>
      <Head />

      <Body style={main}>
        <Preview>{previewText}</Preview>
        <Container style={container}>
          <Section style={logoSection}>
            <Img
              src='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.png'
              width='50'
              height='50'
              alt='Logo'
            />
          </Section>
          <Section style={{ paddingBottom: '20px' }}>
            <Row>
              <Text style={heading}>
                Hai ricevuto un nuovo messaggio da {name} {surname}:
              </Text>
              <Text style={messageSection}>{message}</Text>
              <Text style={{ ...paragraph, paddingBottom: '16px' }}>
                Puoi rispondere a {name} al suo indirizzo email: {email}.
              </Text>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section>
            <Row>
              <Text style={footer}>
                Alice Orlandini - Blog Personale in cui parlo di tecnologie,
                esperienze e ripetizioni
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

const main = {
  backgroundColor: '#fcfff0',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
  maxWidth: '100%'
};

const logoSection = {
  display: 'flex',
  padding: '20px 0',
  alignItems: 'center',
  justifyContent: 'center'
};

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848'
};

const paragraph = {
  fontSize: '20px',
  lineHeight: '1.4',
  color: '#484848'
};

const messageSection = {
  fontSize: '20px',
  lineHeight: '1.4',
  color: '#fcfff0',
  padding: '24px',
  maxWidth: '512px',
  margin: '10px 0',
  backgroundColor: '#703f85',
  borderRadius: '4px'
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0'
};

const footer = {
  color: '#9ca299',
  fontSize: '14px',
  marginBottom: '10px'
};
