import { motion } from "framer-motion";
import Socialicon from '@/components/socialicon';

export default function Hero({ pageLoad, titleColor }: { pageLoad: boolean, titleColor: string }) {
  return (
    <>
      <svg className={`${pageLoad ? 'animate-fade-in-top' : 'opacity-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#020617" fillOpacity="1" d="M0,160L48,138.7C96,117,192,75,288,74.7C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <section className='flex max-w-5xl w-full mx-auto'>
        <div className='flex justify-between w-full'>
          <div className='flex flex-col gap-y-1 px-8 w-full xl:py-0 lg:py-32 md:py-40 sm:py-48 min-[425px]:py-56 py-60'>
            <h1 className={`${pageLoad ? 'animate-fadeIn' : 'opacity-0'} text-white font-bold sm:text-6xl text-4xl font-kanit`}>
              Hey, I&apos;m
              <a target='_blank' href='https://join.saturn.live/?link=https://saturn.live/?school_code%3Dnew_bern_nc%26school_color%3D%2523444444%26school_name%3DNew%2BBern%26school_mascot_url%3Dhttps://cdn.joinsaturn.com/school-logos/cccc303a-ab61-4f8e-9702-147553b05ca5.png%26from_user%3D2081521%26from_name%3DBrody%26from_initials%3DBS%26from_avatar_url%3Dhttps://cdn.joinsaturn.com/user-profile-pics/80ef9869-ad38-4ab7-8a00-7fc64ad47d24@2x.jpg%26action%3Duser_schedule%26school_id%3Dnew_bern_nc%26referred_by%3D6e49ec9b-259a-45db-bd29-055124c42532%26created_at%3D2023-08-10%2B18:39:01.330148%26type%3Duser_schedule%26platform%3DNone%26origin%3Dpeople&apn=com.joinsaturn.saturn&isi=1454483188&ibi=com.dcdwebdesign.saturn&ius=saturntech&cid=3089323193642770277&_icp=1'> <span className={`duration-1000 ${titleColor}`}> Brody</span> </a>

            </h1>
            <motion.p initial={{ transform: 'translateX(-20px)', opacity: 0 }} whileInView={{ transform: 'translateX(0)', opacity: 100 }} transition={{ duration: 1, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }} viewport={{ amount: 0.2, once: true }} className={`text-white font-semibold sm:text-2xl text-xl font-kanit`}>
              I&apos;m 15 years old and am very interested in web development.
            </motion.p>
            <ul className='flex flex-row flex-wrap w-fit gap-2'>
              <Socialicon
                href='https://github.com/BrodySalvucci'
                svg={<svg xmlns="http://www.w3.org/2000/svg" className='m-auto mt-2.5 w-7 h-7 fill-white' viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>}
                delay={0.3}
              />
              <Socialicon
                href='https://www.instagram.com/brody_salvucci'
                svg={<svg className='m-auto mt-2.5 w-7 h-7 fill-[#8a3ab9]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>}
                delay={0.4}
              />
            </ul>
          </div>
          <motion.img draggable={false} initial={{ opacity: 0 }} whileInView={{ opacity: 100 }} transition={{ duration: 1, delay: 0.6, ease: [0.39, 0.21, 0.12, 0.96], }} viewport={{ amount: 0.2, once: true }} className={`relative rounded-full lg:h-72 lg:w-72 h-0 w-0 border-2 border-blue-700 xl:-translate-y-14 lg:translate-y-6 mr-8 -translate-y-0 lg:scale-100 scale-0`} alt="image" rel="icon" src="/me.jpg" />
        </div>
      </section>
      <svg id="about" className={`${pageLoad ? 'animate-fade-in-bottom' : 'opacity-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#020617" fillOpacity="1" d="M0,160L48,133.3C96,107,192,53,288,48C384,43,480,85,576,96C672,107,768,85,864,74.7C960,64,1056,64,1152,80C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </>
  )
}
