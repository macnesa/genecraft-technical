import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <section className="">
        <div className="grid  border-white max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Hi, I'm Mac!
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              I am a young individual who has a keen interest in programming. Specifically, I do have a passionate into front-end development, although I also possess strong knowledge of back-end operations, which complements my knowledge as a front-end. As i keep
              enhancing my skills and knowledges, I am excited to explore places where i can utilize my abilities to make a positive impact on the lives
              of many
            </p>    
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex  border-white items-center justify-center">
            
              <img className="w-52 h-52 rounded-full" src="/1679813674065.jpg" alt="Rounded avatar"/>

          </div>
        </div>
      </section>



      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Let's know more about me
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Here you're about to see some list of technologies i expertized of, in the world of programming and non-alike!  
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Front End</h3>
              <p className="text-gray-500 dark:text-gray-400">
              I am a skilled web developer with experience in a variety of frameworks and libraries, including React.js, Vue.js, React Native, jQuery, Next.js, Nuxt.js, Tailwind CSS and others. I pride myself on being able to build high-quality, responsive websites and applications that are both visually appealing and functional
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Back End</h3>
              <p className="text-gray-500 dark:text-gray-400">
              Also with expertise in TypeScript, Express.js, Sequelize, MongoDB, PostgreSQL, Socket.IO, Redis,GraphQL, and others. I have a passion for creating efficient and scalable web applications that solve complex problems. Let's work together to bring your ideas to life!
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Others
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
              With my expert skills in Photoshop, I create visually stunning designs that bring my coding projects to life. Check out my channel to learn more about my programming skills and join me on my journey to create exciting new content!
              </p>
            </div>
            
            
            
          </div>
        </div>
      </section>

      <Link href={"/about"}>
        <div 
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={` mb-3 text-2xl font-semibold`}>
            My Dream{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`max-w-[30ch] text-sm opacity-50`}
          >
            Check out my future dream, over here!
          </p>
        </div>
      </Link>
      
    </main>
  )
}
