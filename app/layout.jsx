export const metadata = {
  title: "Chole Bottle Tracker",
  description: "Habit tracker with chole bottle"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
