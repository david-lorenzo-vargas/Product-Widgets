import "./globals.css";

export const metadata = {
  title: 'Product Widgets',
  description: 'Product Widgets',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body>
        <main className="flex h-screen w-screen bg-backgroundGray flex-col items-center justify-center py-30">
          {children}
        </main>
      </body>
    </html>
  )
};

export default RootLayout;
