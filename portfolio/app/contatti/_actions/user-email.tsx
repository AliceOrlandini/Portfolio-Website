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

export const UserEmail = () => {
  const previewText = `Messaggio inviato con successo!`;

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
                Grazie per avermi contattata! Ti risponderò al più presto.
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

export default UserEmail;

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
