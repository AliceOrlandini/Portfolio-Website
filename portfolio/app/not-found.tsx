export default function NotFound() {
  return (
    <div className="font-raleway flex flex-col items-center justify-center">
      <h1 className="text-3xl tablet:text-4xl mx-5 text-center font-bold mt-10">Oops! Pagina non trovata</h1>
      <picture>
        <source
          srcSet="
            /assets/404/404-480.webp 480w,
            /assets/404/404-768.webp 768w,
            /assets/404/404-1024.webp 1024w
          "
          sizes="(max-width: 1024px) 70vw, 80vw"
          type="image/webp"
        />
        <source
          srcSet="
            /assets/404/404-480.png 480w,
            /assets/404/404-768.png 768w,
            /assets/404/404-1024.png 1024w
          "
          sizes="(max-width: 1024px) 70vw, 80vw"
          type="image/jpeg"
        />
        <img
          src="/assets/404/404-1024.png"
          alt="FAQ"
          decoding="async"
          loading="lazy"
          width={1024}
          height={1024}
          className="desktop:w-1/2 tablet:w-2/3 mx-auto mt-10 drop-shadow-md"
        />
      </picture>
    </div>
  )
}