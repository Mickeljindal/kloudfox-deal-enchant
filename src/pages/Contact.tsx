import { useState } from "react";
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/kf/Section";
import Aurora from "@/components/kf/Aurora";
import Reveal from "@/components/kf/Reveal";
import SEO, { breadcrumbJsonLd, organizationJsonLd } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SITE } from "@/lib/site";

/**
 * Optional server-side endpoint that accepts JSON { name, email, subject, message }
 * and forwards to your transactional-email provider (Brevo, Resend, Postmark, etc.).
 *
 * The endpoint URL is read from Vite's build-time env `VITE_CONTACT_ENDPOINT`.
 * If unset, the form falls back to a `mailto:` compose, which works everywhere
 * and never exposes secrets in the browser bundle.
 *
 * A reference serverless implementation lives at `api/contact.example.ts`.
 */
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject) return;

    if (!CONTACT_ENDPOINT) {
      // No backend configured — open the visitor's mail client with the message pre-filled.
      const body = `Hi Kloudfox team,\n\n${form.message}\n\n— ${form.name} (${form.email})`;
      window.location.href = `mailto:${SITE.contact.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
      setState("sent");
      return;
    }

    setState("sending");
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      setState("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      toast({ title: "Message sent", description: "We'll get back to you within one business day." });
    } catch (err) {
      setState("idle");
      toast({
        title: "Couldn't send",
        description:
          "Something went wrong. Please email us directly at " + SITE.contact.email,
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <SEO
        title="Contact"
        description="Get in touch with Kloudfox. Sales, support, partnerships, and press inquiries — we reply within one business day."
        path="/contact"
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
          organizationJsonLd(),
        ]}
      />

      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050510] text-white">
        <Aurora />
        <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
        <div className="container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-20 relative z-10">
          <Reveal className="max-w-3xl mx-auto text-center">
            <div className="eyebrow mb-4 justify-center text-primary/90">
              <span className="h-1 w-6 rounded-full bg-primary/60" aria-hidden />
              Contact
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-[1.05] tracking-tight text-balance">
              Talk to a <span className="gradient-text">real human.</span>
            </h1>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
              We reply within one business day. For urgent production incidents,
              email <a className="underline underline-offset-4" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <Section tone="default" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-md p-6 md:p-8">
              {state === "sent" ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-1">Message queued</h3>
                  <p className="text-muted-foreground">
                    We'll reply within one business day at <span className="text-foreground font-medium">{form.email || "your inbox"}</span>.
                  </p>
                  <Button className="mt-6" variant="outline" onClick={() => setState("idle")}>
                    Send another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-1.5 block">Your name</label>
                      <Input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Ada Lovelace" />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-1.5 block">Email</label>
                      <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="ada@yourcompany.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium mb-1.5 block">Subject</label>
                    <Input id="subject" name="subject" required value={form.subject} onChange={handleChange} placeholder="What can we help with?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-1.5 block">Message</label>
                    <Textarea id="message" name="message" rows={6} value={form.message} onChange={handleChange} placeholder="Tell us a bit more…" />
                  </div>
                  <Button type="submit" disabled={state === "sending"} className="w-full btn-aurora rounded-xl h-11 font-semibold">
                    {state === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send message
                      </>
                    )}
                  </Button>
                  {!CONTACT_ENDPOINT && (
                    <p className="text-xs text-muted-foreground">
                      This form opens your email client. Prefer to type here directly? Set <code className="font-mono">VITE_CONTACT_ENDPOINT</code> at build time.
                    </p>
                  )}
                </form>
              )}
            </div>
          </Reveal>

          {/* Info card */}
          <Reveal delay={100} className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-md p-6 md:p-8 space-y-6 h-full">
              <div>
                <h3 className="text-lg font-semibold mb-4">Direct channels</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">General & support</div>
                      <a className="text-muted-foreground hover:text-foreground transition-colors" href={`mailto:${SITE.contact.email}`}>
                        {SITE.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">Kloudfox HQ</div>
                      <div className="text-muted-foreground">
                        {SITE.address.addressLocality}, {SITE.address.addressRegion} · {SITE.address.addressCountry}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground leading-relaxed">
                  For security disclosures, please email <a className="underline underline-offset-4" href="mailto:security@kloudfox.com">security@kloudfox.com</a> — encrypted PGP key available on request.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Contact;
