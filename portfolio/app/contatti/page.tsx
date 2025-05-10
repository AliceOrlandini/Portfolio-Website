import FormContacts from "@/components/FormContacts";
import { ReCaptchaProvider } from "@/components/reCAPTCHAProvider";
import { IubendaProvider, IubendaCookieSolutionBannerConfigInterface, ConsentAwareWrapper, i18nDictionaries } from '@mep-agency/next-iubenda';

const iubendaBannerConfig: IubendaCookieSolutionBannerConfigInterface = {
  siteId: 4020438,
  cookiePolicyId: 27117967,
  lang: 'it',
  banner: {
    position: 'float-bottom-center',
    rejectButtonDisplay: true,
  }
};

const customI18nDictionaries: typeof i18nDictionaries = {
  it: {
    consentAwareWrapper: {
      loading: 'Dai il consenso ai cookie per visualizzare il form di contatto.',
      consentNotGranted:
        'È stato negato il consenso ai cookie. Li utilizziamo per verificare che tu non sia un robot. Per favore, accetta i cookie per continuare.',
      openPreferencesButtonText: 'Apri preferenze',
    }
  }
};

export default function ContactsPage() {
  return (
      <section>
        <div className="mx-0 tablet:mx-5 desktop:mx-auto size-fit mb-20 font-raleway flex flex-col bg-primary py-10 px-5 tablet:px-10 shadow-lg tablet:rounded-xl tablet:flex-row">
          <div className="m-auto size-fit text-white">
            <div className="space-y-5">
              <h1 className="text-3xl tablet:text-4xl font-bold tablet:p-2">Teniamoci in Contatto</h1>
              <p className="text-base tablet:text-lg tablet:p-2 font-medium max-w-xl">
                Per qualsiasi domanda, parere o commento, riempi il modulo e ti ricontatterò in meno di 24 ore! Mi fa sempre piacere ricevere feedback e suggerimenti, quindi non esitare a contattarmi!
              </p>
              <picture>
                <source
                  srcSet="
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/contact-me/contact-me-2-480.webp 480w,
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/contact-me/contact-me-2-768.webp 768w,
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/contact-me/contact-me-2-1024.webp 1024w
                  "
                  sizes="(max-width: 768px) 30vw, (max-width: 1024px) 50vw, 33.33vw"
                  type="image/webp"
                />
                <source
                  srcSet="
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/contact-me/contact-me-2-480.png 480w,
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/contact-me/contact-me-2-768.png 768w,
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/contact-me/contact-me-2-1024.png 1024w
                  "
                  sizes="(max-width: 768px) 30vw, (max-width: 1024px) 50vw, 33.33vw"
                  type="image/jpeg"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/contact-me/contact-me-2-1024.png"
                  alt="Contattami"
                  decoding="async"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-3/4 max-w-xl mx-auto"
                />
              </picture>
            </div>
          </div>
          <div className="mt-10 h-full bg-white rounded-xl p-10 desktop:mt-0 desktop:w-1/2">
            <ReCaptchaProvider>
              <IubendaProvider bannerConfig={iubendaBannerConfig} customI18nDictionaries={customI18nDictionaries} fallbackLang='it'>
                <ConsentAwareWrapper requiredGdprPurposes={['functionality']} className="max-w-md">
                  <FormContacts />
              </ConsentAwareWrapper>
              </IubendaProvider>
            </ReCaptchaProvider>
          </div>
        </div>
      </section>
  );
}