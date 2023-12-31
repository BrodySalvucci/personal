import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar({ clickScroll, clickScroll2, pageLoad }: { clickScroll: any, clickScroll2: any, pageLoad: boolean }) {
   
    const router = useRouter();

    const handleProxyClick = () => {
        router.push("https://proxy.brodysalvucci.com");
    };
   
    return (
        <>
            <header className='relative'>
                <nav className={`${pageLoad ? 'animate-fade-in-top' : 'opacity-0'} fixed flex w-full z-50 bg-slate-950/80 p-4 sm:px-24 px-4 justify-between items-center`}>
                    <Link href='/'>
                        <img draggable={false} className='h-12 w-12 rounded-full' rel="icon" src="/me.jpg" />
                    </Link>
                    <ul className='flex flex-row gap-x-2'>
                        <li>
                            <button className='text-white font-kanit text-lg p-2 hover:bg-slate-800 duration-300 rounded-md' onClick={clickScroll}>
                                About Me
                            </button>
                        </li>
                        <li>

                        <button className='text-white font-kanit text-lg p-2 hover:bg-slate-800 duration-300 rounded-md' onClick={handleProxyClick}>
                                Proxy
                            </button>
                            {/* <button className='text-white font-kanit text-lg p-2 hover:bg-slate-800 duration-300 rounded-md' onClick={clickScroll2}>
                                Projects
                            </button> */}
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
