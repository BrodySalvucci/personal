import Projectcard from '@/components/projectcard';

export default function Projects() {
    return (
        <>
            <section className='relative bg-slate-900 pb-8'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#020617" fillOpacity="1" d="M0,224L48,224C96,224,192,224,288,192C384,160,480,96,576,106.7C672,117,768,203,864,224C960,245,1056,203,1152,160C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                <div id="projects" className='flex flex-col text-center gap-y-3'>
                    {/* <h1 className={`text-white font-bold sm:text-6xl text-4xl font-kanit pt-24`}>
                        Projects
                    </h1> */}
                    <p className={`text-white font-semibold sm:text-3xl text-xl font-kanit px-4`}>
                        {/* Here are some projects I have worked on in the past. */}
                    </p>

                    <p className={`text-white font-semibold sm:text-3xl text-xl font-kanit px-4`}>
                        More Coming Soon!
                    </p>

                </div>
                {/* <ul className='grid lg:grid-cols-3 grid-cols-1 max-w-5xl w-full mx-auto gap-4 pt-8 pb-16 lg:px-0 md:px-32 px-8'>
                    <Projectcard
                        src='https://cdn.discordapp.com/attachments/1139277832632143932/1139278254583336960/Artboard_1.PNG'
                        title='Starlight CAD'
                        description='Starlight CAD is a revolutionary CAD system for communities that refect real life. This CAD system includes things like an LEO dashboard, a Fire and EMS dashboard, and multiple others. The best part is, it is self hosted and has in game integration with FiveM.'
                      href='personal.brodysalvucci.repl.co'
                        delay={0.1}
                      
                    />
                    <Projectcard
                      src='https://media.discordapp.net/attachments/1139277832632143932/1139277889901178911/key-icon-isolated-on-white-background-free-vector.jpg?width=1790&height=1066'
                        title='Asset Licensing System'
                        description='I made this not to long ago, it was orriginally for developers who want to sell their assets on Roblox but then I opened it up to FiveM.'
                      href='personal.brodysalvucci.repl.co'
                        delay={0.2}
                    />
                    
                    <Projectcard
                        src='https://cdn.discordapp.com/attachments/1139277832632143932/1139281469823516672/Frame_6.png'
                        title='RP Utilities'
                        description='RP Utilities was a one of a kind Discord bot written is Discord.JS. This bot came with a host of commands that you could use to manage your users and your server. This bot was in 100+ servers before I decided to shut it down.'
                        href='personal.brodysalvucci.repl.co'
                        delay={0.3}
                    />
                    
                </ul> */}
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0f172a" fillOpacity="1" d="M0,224L48,234.7C96,245,192,267,288,234.7C384,203,480,117,576,106.7C672,96,768,160,864,192C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </>
    )
}
