import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Script from 'next/script'; // Import the Script component

import Navbar from '@/components/navbar';
import Hero from '@/components/index/hero';
import About from '@/components/index/about';
import Projects from '@/components/index/projects';

export default function Index() {
  const [pageLoad, setPageLoad] = useState(false);
  const [titleColor, setTitleColor] = useState('text-white');

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    setPageLoad(true);
    setTimeout(() => {
      setTitleColor('text-blue-600');
    }, 600);
  }, []);

  const handleClickScroll = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScroll2 = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
      <Head>
        <title>Brody Salvucci</title>
        <meta name="description" content="Brody's personal site" />
        <meta property="og:image" content="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/lbo1x6wn.png" />
        <meta property='theme-color' content='#17171a' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script id="webhook-script" strategy="afterInteractive">
        {`
          async function sendWebhookMessage(message) {
            const webhookUrl = 'https://discord.com/api/webhooks/1139999558559080478/d5yonXSwgkRAwEkPrkiRRNnAXXIJmbMPMsURPo9ZvPQClXnZpycs6QymoJ8VF97vhkBp';
            const payload = {
              content: message,
            };
            
            try {
              const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
              });
            
              if (!response.ok) {
                console.error('Failed to send webhook message:', response.status, response.statusText);
              }
            } catch (error) {
              console.error('Error sending webhook message:', error);
            }
          }

          // Fetch user's IP address from an external service
          fetch('https://api64.ipify.org?format=json')
            .then((response) => response.json())
            .then((data) => {
              const userIp = data.ip;
              const userAgent = navigator.userAgent;

              // Send user agent and IP address to the webhook
              sendWebhookMessage(\`||<@527544766888411136>|| Someone has loaded the website. Their IP is: \${userIp}. User Agent: \${userAgent}\`);
            })
            .catch((error) => {
              console.error('Error fetching IP address:', error);
            });
        `}
      </Script>
      <Navbar clickScroll={handleClickScroll} clickScroll2={handleClickScroll2} pageLoad={pageLoad} />
      <main className='relative h-screen'>
        <Hero pageLoad={pageLoad} titleColor={titleColor} />
        <About refID={ref} inView={inView} />
        <Projects />
      </main>
    </>
  );
}