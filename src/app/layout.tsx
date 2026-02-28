import '../styles/index.css';

export const metadata = {
  title: "S'installer au Maroc",
  description: "Accompagnement pour s’installer au Maroc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
