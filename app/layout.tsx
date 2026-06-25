import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </ThemeProvider>

      </body>
    </html>
  );
}