import { Mail, HardDrive, User } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <section className="m-10 font-raleway w-fit divide-y divide-slate-500 divide-opacity-40 text-paragraph desktop:mx-auto">
			<div>
				<h1 className="text-2xl font-bold">Privacy Policy di aliceorlandini.it</h1>
				<p className="pb-5 font-medium">
					Questa Applicazione raccoglie alcuni Dati Personali dei propri Utenti.
				</p>
			</div>
			<div className="space-y-5 py-5">
				<h2 className="text-xl font-semibold">
					Dati Personali trattati per le seguenti finalità e utilizzando i
					seguenti servizi:
				</h2>
				<div className="flex flex-row items-center space-x-5">
					<Mail size={50} />
					<div>
						<h3 className="text-lg font-bold max-w-56 tablet:max-w-none">Contattare l&#39;Utente</h3>
						<h4 className="font-medium max-w-56 tablet:max-w-none">Modulo di contatto</h4>
						<p className="font-medium max-w-56 tablet:max-w-none">Dati Personali: nome; cognome; email;</p>
					</div>
				</div>
				<div className="flex flex-row items-center space-x-5">
					<HardDrive size={50} />
					<div>
						<h3 className="text-lg font-bold max-w-56 tablet:max-w-none">Hosting ed infrastruttura backend</h3>
						<h4 className="font-medium max-w-56 tablet:max-w-none">Vercel</h4>
						<p className="font-medium max-w-56 tablet:max-w-none">
							Dati Personali: Dati di utilizzo; varie tipologie di Dati secondo
							quanto specificato dalla privacy policy del servizio.
						</p>
					</div>
				</div>
			</div>
			<div className="space-y-5 pt-5">
				<h2 className="text-xl font-bold">Informazioni di contatto:</h2>
				<div className="flex flex-row items-center space-x-5">
					<User size={50} />
					<div>
						<h3 className="text-lg font-bold max-w-56 tablet:max-w-none">Titolare del Trattamento dei Dati</h3>
						<p className="font-medium max-w-56 tablet:max-w-none">Alice Orlandini</p>
						<h4 className="mt-3 font-semibold max-w-56 tablet:max-w-none">Indirizzo email del Titolare:</h4>
						<p className="font-medium max-w-56 tablet:max-w-none">orlandinialice13@gmail.com</p>
					</div>
				</div>
			</div>
		</section>
  );
}