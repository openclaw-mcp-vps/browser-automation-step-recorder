import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StepRecorder — Record Browser Actions into Automation Scripts',
  description: 'Browser extension that records user actions and generates Puppeteer/Playwright scripts with smart selectors. Built for QA engineers, developers, and no-code automation users.',
  keywords: 'browser automation, puppeteer, playwright, qa automation, script recorder, test automation',
  openGraph: {
    title: 'StepRecorder — Record Browser Actions into Automation Scripts',
    description: 'Record browser interactions and generate optimized Puppeteer/Playwright scripts instantly.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7264127f-804e-46e1-bcf1-d75e7e6a1a59"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
