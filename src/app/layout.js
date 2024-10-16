
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import AuthProvider from "../services/AuthProvider";
import NavBar from "../Components/NavBar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ['400', '500', '700', '900'], subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Hot Meals",
    template: "%s | Hot Meals"
  },
  description: "Find Your Meals rihght now",
  keywords: ["hot meals", "meals", "your-meals"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={roboto.className}>
        <AuthProvider>
          <NavBar></NavBar>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
