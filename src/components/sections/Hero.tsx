import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Star, Award, Users, Zap, CheckCircle, Play } from "lucide-react";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-40 pb-32">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-20"></div>
      
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Professional Badge */}
          <div className="flex justify-center">
            <Badge className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              Award-Winning Designer
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Creative
              <span className="block text-white">
                Graphic Designer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
              Bringing brands to life through innovative design with over 7 years of professional experience. 
              Specializing in UI/UX, Brand Identity, and Digital Marketing solutions.
            </p>
          </div>

          {/* Skills Showcase */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["UI/UX Design", "Brand Identity", "Digital Marketing", "Print Design", "Motion Graphics", "Web Design"].map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all">
                <CheckCircle className="w-3 h-3 mr-1" />
                {skill}
              </Badge>
            ))}
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-white">7+</div>
              <div className="text-sm text-white mt-2">Years Experience</div>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-white">40+</div>
              <div className="text-sm text-white mt-2">Client Accounts</div>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-white">60%</div>
              <div className="text-sm text-white mt-2">Brand Recognition</div>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-white">4</div>
              <div className="text-sm text-white mt-2">Team Members</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-3xl mx-auto bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-white italic mb-4">
              "John's design work transformed our brand completely. The attention to detail and creative vision 
              exceeded all our expectations. Highly recommended!"
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-violet-400 to-blue-400 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">Sarah Johnson</div>
                <div className="text-sm text-white">CEO, TechStart Inc.</div>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToPortfolio}
              className="text-lg px-10 py-4 bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Zap className="mr-2" size={20} />
              View My Work
              <ArrowDown className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-4 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-4 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </div>

          {/* Recent Work Preview */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-6">Recent Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-full h-32 bg-gradient-to-br from-violet-400 to-blue-400 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-white font-semibold">E-commerce UI</span>
                </div>
                <h4 className="text-white font-medium">Fashion Website Redesign</h4>
                <p className="text-white text-sm">UI/UX Design</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-full h-32 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-white font-semibold">Brand Identity</span>
                </div>
                <h4 className="text-white font-medium">Coffee Startup Brand</h4>
                <p className="text-white text-sm">Brand Design</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-full h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-white font-semibold">Campaign</span>
                </div>
                <h4 className="text-white font-medium">Environmental Campaign</h4>
                <p className="text-white text-sm">Campaign Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/60" size={24} />
      </div>
    </section>
  );
};

export default Hero;
