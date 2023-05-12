import Link from 'next/link';


export default function Home() {
  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              My Dream
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            The most important ones for me are, I want to have a strength in the future that can support my life and I can be given the opportunity to get closer to God amidst my busy schedule. That's the most important thing. One more thing, i wish i could go to NYC one day wkwkwk 
            </p>    
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          </div>
        </div>
      <Link href={"/"}> back</Link>
      </section>
      
      
    </main>
  )
}