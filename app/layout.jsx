import "./globals.css";

export const metadata = {
  title: "SIP Tracker",
  description: "Portfolio Valuation System",
};

export default function RootLayout({
  children,
}) {

  return (

    <html lang="en">

      <body>
        {children}
      </body>

    </html>

  );
}