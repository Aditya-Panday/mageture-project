import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Back-to-basics",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" />
      <meta
        name="description"
        content="Discover Back to Basics Education - Your partner in transforming learning into a passion. Explore our wide range of educational resources, courses, and guides designed to empower students and educators alike. Start your journey towards a brighter future today!"
      />
      <meta
        name="keywords"
        content="Education, Learning, Online Courses, Educational Resources, Student Empowerment"
      />
      <meta name="author" content="Back to Basics Education" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
