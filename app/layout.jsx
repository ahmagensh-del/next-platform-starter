import './globals.css';

export const metadata = {
  title: 'AuraScan AI',
  description: 'See how others really see you.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="fade-in">
        
        {/* MAIN BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          {/* dark theme */}
          <div className="hidden dark:block w-full h-full bg-[radial-gradient(circle_at_50%_20%,#0a0f1c,#00040a,#000)]" />
          
          {/* light theme */}
          <div className="block dark:hidden w-full h-full bg-[linear-gradient(160deg,#f2f4f6,#e5eaef,#d9dfe7)]" />
        </div>

        {/* PAGE CONTENT */}
        <div className="flex items-center justify-center min-h-screen">
          {children}
        </div>

      </body>
    </html>
  );
}
