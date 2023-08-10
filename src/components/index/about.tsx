import Typewriter from 'typewriter-effect';
import Techicon from '@/components/techicon';

export default function About({ refID, inView }: { refID: any; inView: boolean }) {
    return (
        <>
            <section className='relative bg-slate-950 pb-8'>
                <h1 className={`text-white font-bold sm:text-6xl text-4xl font-kanit text-center pb-8`}>
                    A little about me.
                </h1>
                <div className='flex flex-col max-w-6xl w-full mx-auto '>
                    <div className='bg-slate-900 self-center w-3/4 rounded-md overflow-hidden border-2 border-blue-700 hover:-translate-y-1 duration-300 p-4 mb-16'>
                        <p ref={refID} className={`text-white text-md font-kanit`}>
                            {inView && (
                                <Typewriter
                                    options={{
                                        delay: 30,
                                        strings: ["Greetings, I'm Brody Salvucci, a 15-year-old resident of North Carolina with an extensive passion for development. My journey into the world of coding began at the young age of 8, when I found myself captivated by the intricacies of technology. I took my first steps by crafting creations on platforms like Roblox, honing my skills and channeling my enthusiasm into tangible projects. Now, as a freshman, I'm diving deeper into the realms of web and software development. My aspiration is to secure a fulfilling role that revolves around these domains. What I cherish the most is that moment of triumph after dedicating countless hours to untangle a complex challenge and finally overcoming it. Along this path, I've witnessed the fruits of my labor being embraced by others. One notable accomplishment was a Discord bot that found its way into over 100 servers, offering essential utilities. The joy of seeing people genuinely engage with and rely on my creation was nothing short of exhilarating. It's moments like these that drive my commitment to innovation and continuous improvement. Although I don't have much projects to show for my work I look forword to creating more in my freshman year!"],
                                        loop: false,
                                        autoStart: true,
                                        deleteSpeed: 604800000,
                                    }}
                                />
                            )}
                        </p>
                    </div>
                    <h2 className={`text-white font-semibold sm:text-2xl text-lg xl:px-0 px-8 font-kanit`}>
                        I&apos;m currently learning a number of languages, frameworks and libraries.
                    </h2>
                    <ul className='flex flex-row flex-wrap gap-2 mt-2 rounded-md w-fit xl:px-0 px-8'>
                        <Techicon href='https://www.typescriptlang.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' delay={0.1} rounded={true} />
                        <Techicon href='https://www.javascript.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' delay={0.2} rounded={true} />
                        <Techicon href='https://html.com/html5/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' delay={0.3} />
                        <Techicon href='https://www.w3schools.com/css/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' delay={0.4} />
                        <Techicon href='https://nodejs.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' delay={0.5} />
                        <Techicon href='https://nextjs.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' delay={0.6} />
                        <Techicon href='https://reactjs.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' delay={0.7} />
                        <Techicon href='https://discord.js.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg' delay={0.8} rounded={true} />
                        <Techicon href='https://www.mongodb.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' delay={0.9} />
                        <Techicon href='https://fastify.io/' src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/g9j04tdrsj5wwzw76d.png' delay={1.0} />
                        <Techicon href='https://tailwindcss.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' delay={1.1} />
                        <Techicon href='https://www.framer.com/motion/' src='https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/5q2uj9zv.png' delay={1.2} />
                    </ul>
                    <h2 className={`text-white font-semibold sm:text-2xl text-lg font-kanit text-right pt-24 xl:px-0 px-8`}>
                        Here are some of the tools and services I use during and after development.
                    </h2>
                    <ul className='flex flex-row flex-wrap gap-2 mt-2 self-end rounded-md w-fit xl:px-0 px-8'>
                        <Techicon href='https://code.visualstudio.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' delay={0.1} />
                        <Techicon href='https://replit.com/' src='/replit-logo.webp' delay={0.2} />
                        <Techicon href='https://www.putty.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg' delay={0.3} />
                        <Techicon href='https://winscp.net/' src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/8qx6q91yedkiub4285.png' delay={0.4} />
                        <Techicon href='https://www.namecheap.com/' src='/namecheap-logo.png' delay={0.5} />
                        <Techicon href='https://www.cloudflare.com/' src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/me2uv8xk95n010sdwz.png' delay={0.6} />
                    </ul>
                </div>
            </section>
        </>
    )
}
