import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: { template: "%s | Mon espace TAMEL", default: "Mon espace" },
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--gray-50)]">{children}</main>
      <Footer />
    </>
  );
}
