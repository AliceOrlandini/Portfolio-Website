import ContactForm from '@/app/contatti/_components/contact-form';
import { ReCaptchaProvider } from '@/components/recapthca-provider';
import {
  IubendaProvider,
  IubendaCookieSolutionBannerConfigInterface,
  ConsentAwareWrapper,
  i18nDictionaries
} from '@mep-agency/next-iubenda';

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
      <div className='tablet:mx-5 desktop:mx-auto font-raleway bg-primary tablet:px-10 tablet:rounded-xl tablet:flex-row mx-0 mb-20 flex size-fit flex-col px-5 py-10 shadow-lg'>
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
            <picture>
              <source
                srcSet='
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/contact-me/contact-me-2-480.webp 480w,
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/contact-me/contact-me-2-768.webp 768w,
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/contact-me/contact-me-2-1024.webp 1024w
                  '
                sizes='(max-width: 768px) 30vw, (max-width: 1024px) 50vw, 33.33vw'
                type='image/webp'
              />
              <source
                srcSet='
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/contact-me/contact-me-2-480.png 480w,
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/contact-me/contact-me-2-768.png 768w,
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/contact-me/contact-me-2-1024.png 1024w
                  '
                sizes='(max-width: 768px) 30vw, (max-width: 1024px) 50vw, 33.33vw'
                type='image/png'
              />
              <img
                src='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/contact-me/contact-me-2-1024.png'
                alt='Contattami'
                decoding='async'
                loading='lazy'
                width={1024}
                height={1024}
                className='mx-auto w-3/4 max-w-xl'
              />
            </picture>
          </div>
        </div>
        <div className='desktop:mt-0 desktop:w-1/2 mt-10 h-full rounded-xl bg-white p-10'>
          <ReCaptchaProvider>
            <IubendaProvider
              bannerConfig={iubendaBannerConfig}
              customI18nDictionaries={customI18nDictionaries}
              fallbackLang='it'
            >
              <ConsentAwareWrapper
                requiredGdprPurposes={['functionality']}
                className='max-w-md'
              >
                <ContactForm />
              </ConsentAwareWrapper>
            </IubendaProvider>
          </ReCaptchaProvider>
        </div>
      </div>
    </section>
  );
}
