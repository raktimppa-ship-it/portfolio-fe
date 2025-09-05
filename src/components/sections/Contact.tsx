import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, Linkedin, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to your FastAPI backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "john.doe@email.com",
      href: "mailto:john.doe@email.com"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "(123) 456-7890",
      href: "tel:+1234567890"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "New York, NY",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      icon: <Linkedin size={20} />
    },
    {
      name: "Behance",
      url: "https://behance.net/johndoe",
      icon: <ExternalLink size={20} />
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/johndoe",
      icon: <ExternalLink size={20} />
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, collaboration, etc."
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2" size={20} />
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="p-8 shadow-card">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth group"
                    >
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-white">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium group-hover:text-primary transition-smooth">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-8 shadow-card">
                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-smooth group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg gradient-secondary flex items-center justify-center text-white">
                          {social.icon}
                        </div>
                        <span className="font-medium group-hover:text-primary transition-smooth">
                          {social.name}
                        </span>
                      </div>
                      <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-smooth" />
                    </a>
                  ))}
                </div>
              </Card>

              {/* Availability */}
              <Card className="p-8 shadow-card">
                <h3 className="text-2xl font-semibold mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Current Status:</span>
                    <Badge variant="secondary" className="gradient-secondary text-white">
                      Available for Projects
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Typically responds within 24 hours
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;