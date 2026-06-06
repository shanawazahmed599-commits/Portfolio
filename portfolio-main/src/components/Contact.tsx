import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, MapPin, Linkedin, Github } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const GlowCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative overflow-hidden bg-slate-950/40 border border-slate-800/80 rounded-2xl transition-all duration-500 backdrop-blur-sm group ${className}`}
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(59, 235, 245, 0.08), transparent 80%)`,
          opacity: isFocused ? 1 : 0,
        }}
      />
      
      {/* Outer border glow effect */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl border border-transparent transition-all duration-500 z-0"
        style={{
          background: isFocused 
            ? `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, rgba(59, 235, 245, 0.35), transparent 80%)`
            : 'none',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        } as React.CSSProperties}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_rus0kuj',
        'template_tlvoipb',
        e.currentTarget,
        'GucQZNTsN9ZVLCPg7'
      );

      if (result.text === 'OK') {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Background Effect */}
      <div className="absolute inset-0 bg-radial-gradient opacity-50" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss data science opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display text-xl font-semibold mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <a
                  href="mailto:shanawazahmed599@gmail.com"
                  className="block group hover:translate-y-[-2px] transition-transform duration-300"
                >
                  <GlowCard className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium group-hover:text-primary transition-colors text-slate-200">shanawazahmed599@gmail.com</p>
                      </div>
                    </div>
                  </GlowCard>
                </a>

                <GlowCard className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-slate-200">India 🇮🇳</p>
                    </div>
                  </div>
                </GlowCard>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 lg:mt-0">
              <p className="text-sm text-muted-foreground mb-4">Connect on social media</p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/shanawazahmed599" target="_blank" rel="noopener noreferrer" className="social-icon hover:scale-110 hover:shadow-lg hover:shadow-primary/10 transition-transform">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/shanawazahmed599-commits" target="_blank" rel="noopener noreferrer" className="social-icon hover:scale-110 hover:shadow-lg hover:shadow-primary/10 transition-transform">
                  <Github size={20} />
                </a>
                <a href="mailto:shanawazahmed599@gmail.com" className="social-icon hover:scale-110 hover:shadow-lg hover:shadow-primary/10 transition-transform">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlowCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    placeholder=" "
                    className="peer w-full h-14 px-4 pt-5 pb-1 rounded-lg bg-slate-950/50 border border-slate-800 hover:border-slate-700/80 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_rgba(59,235,245,0.15)] transition-all duration-300 text-slate-200"
                  />
                  <label
                    htmlFor="from_name"
                    className="absolute left-4 top-4 text-slate-500 transition-all duration-300 pointer-events-none origin-[0_0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-primary peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:text-primary"
                  >
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    required
                    placeholder=" "
                    className="peer w-full h-14 px-4 pt-5 pb-1 rounded-lg bg-slate-950/50 border border-slate-800 hover:border-slate-700/80 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_rgba(59,235,245,0.15)] transition-all duration-300 text-slate-200"
                  />
                  <label
                    htmlFor="from_email"
                    className="absolute left-4 top-4 text-slate-500 transition-all duration-300 pointer-events-none origin-[0_0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-primary peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:text-primary"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder=" "
                    className="peer w-full h-14 px-4 pt-5 pb-1 rounded-lg bg-slate-950/50 border border-slate-800 hover:border-slate-700/80 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_rgba(59,235,245,0.15)] transition-all duration-300 text-slate-200"
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-4 top-4 text-slate-500 transition-all duration-300 pointer-events-none origin-[0_0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-primary peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:text-primary"
                  >
                    Subject
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-slate-950/50 border border-slate-800 hover:border-slate-700/80 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_rgba(59,235,245,0.15)] transition-all duration-300 text-slate-200 resize-none min-h-[140px]"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-4 text-slate-500 transition-all duration-300 pointer-events-none origin-[0_0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-primary peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:text-primary"
                  >
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
