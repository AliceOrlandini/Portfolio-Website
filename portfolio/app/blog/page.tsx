import ArticleCard from "@/components/ArticleCard";

export default function PricingPage() {
  return (
    <section className="mx-10 my-10 flex flex-col gap-y-10">
      <h1 className="font-raleway text-2xl desktop:text-5xl font-bold leading-8 desktop:leading-14">Ti va di leggere qualche articolo?</h1>
      <div className="grid grid-cols-12 gap-4 w-full">
        <ArticleCard 
          title="Article 1"
          description="This is the description for article 1"
          href="/blog/1"
          image="https://images.unsplash.com/photo-1744144501170-adec17d0c893?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="col-span-3"/>
        <ArticleCard 
          title="Article 2"
          description="This is the description for article 2"
          href="/blog/2"
          image="https://images.unsplash.com/photo-1728650388218-c10708026ad3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="col-span-3"/>
        <ArticleCard 
          title="Article 3"
          description="This is the description for article 3"
          href="/blog/3"
          image="https://images.unsplash.com/photo-1742218797084-3a201597b019?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="col-span-3"/>
        <ArticleCard 
          title="Article 4"
          description="This is the description for article 4"
          href="/blog/4"
          image="https://images.unsplash.com/photo-1742199009963-c028d0c5a603?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="col-span-3"/>
      </div>
    </section>
  );
}