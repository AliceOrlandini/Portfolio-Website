import Image from 'next/image';
import ContactForm from '@/app/contatti/_components/contact-form';
import ContactMe2Image from '@/public/assets/contact-me/contact-me-2-1024.png';
import { ReCaptchaProvider } from '@/components/recapthca-provider';
import {
  IubendaProvider,
  IubendaCookieSolutionBannerConfigInterface,
  ConsentAwareWrapper,
  i18nDictionaries
} from '@mep-agency/next-iubenda';
import { Toaster } from 'sonner';

const iubendaBannerConfig: IubendaCookieSolutionBannerConfigInterface = {
  siteId: 4020438,
  cookiePolicyId: 27117967,
  lang: 'it',
  banner: {
    position: 'float-bottom-center',
    rejectButtonDisplay: true
  }
};

const customI18nDictionaries: typeof i18nDictionaries = {
  it: {
    consentAwareWrapper: {
      loading:
        'Dai il consenso ai cookie per visualizzare il form di contatto.',
      consentNotGranted:
        'È stato negato il consenso ai cookie. Li utilizziamo per verificare che tu non sia un robot. Per favore, accetta i cookie per continuare.',
      openPreferencesButtonText: 'Apri preferenze'
    }
  }
};

export default function ContactsPage() {
  return (
    <section>
      <div className='desktop:mx-auto tablet:mx-5 font-raleway bg-primary tablet:px-10 tablet:rounded-xl tablet:grid-cols-2 mx-0 mb-20 grid size-fit max-w-6xl grid-cols-1 px-5 py-10 shadow-lg'>
        <div className='m-auto size-fit text-white'>
          <div className='space-y-5'>
            <h1 className='tablet:text-4xl tablet:p-2 text-3xl font-bold'>
              Teniamoci in Contatto
            </h1>
            <p className='tablet:text-lg tablet:p-2 max-w-xl text-base font-medium'>
              Per qualsiasi domanda, parere o commento, riempi il modulo e ti
              ricontatterò in meno di 24 ore! Mi fa sempre piacere ricevere
              feedback e suggerimenti, quindi non esitare a contattarmi!
            </p>
            <Image
              src={ContactMe2Image}
              alt='Contattami'
              sizes='(max-width: 768px) 30vw, (max-width: 1024px) 50vw, 33.33vw'
              className='mx-auto w-3/4 max-w-xl'
            />
          </div>
        </div>
        <div className='desktop:mt-0 my-10 h-fit rounded-xl bg-white p-10'>
          <ReCaptchaProvider>
            <IubendaProvider
              bannerConfig={iubendaBannerConfig}
              customI18nDictionaries={customI18nDictionaries}
              fallbackLang='it'
            >
              <ConsentAwareWrapper requiredGdprPurposes={['functionality']}>
                <ContactForm />
              </ConsentAwareWrapper>
            </IubendaProvider>
          </ReCaptchaProvider>
        </div>
      </div>
      <Toaster toastOptions={{ className: 'font-raleway' }} />
    </section>
  );
}
