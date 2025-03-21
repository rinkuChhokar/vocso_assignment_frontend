import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Auth0 Demo App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
