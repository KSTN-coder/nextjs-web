import ContactForm from "../../components/ContactForm";
import Social from "../../components/Social";

export default function Contact() {
  return (
    <div>
            <main className="container mx-auto p-4">
              <h1 className="text-4xl font-bold text-center my-8">Contact Us</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Social />
                <div>
                  <h2 className="text-2xl font-semibold">ติดต่อเรา</h2>
                  <ContactForm />
                </div>
              </div>
            </main>
          </div>
  );
}
