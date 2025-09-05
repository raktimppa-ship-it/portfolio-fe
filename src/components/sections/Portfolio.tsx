import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users, Clock, Target, Award } from "lucide-react";
import ecommerceProject from "@/assets/ecommerce-project.jpg";
import coffeeBrandProject from "@/assets/coffee-brand-project.jpg";
import environmentalCampaign from "@/assets/environmental-campaign.jpg";

// Create a function to assign unique images based on project ID
const getProjectImage = (projectId: number) => {
  const images = [ecommerceProject, coffeeBrandProject, environmentalCampaign];
  return images[projectId % images.length];
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    // UI/UX Design Projects
    {
      id: 1,
      title: "E-commerce Fashion Website",
      year: "2022",
      category: "UI/UX Design",
      description: "Complete UI redesign for a fashion e-commerce platform, resulting in 20% increase in conversions.",
      detailedDescription: "Led a comprehensive redesign of a fashion e-commerce platform serving 50,000+ monthly users. Conducted extensive user research, created wireframes, and developed a modern, mobile-first design system. Implemented advanced filtering, improved checkout flow, and enhanced product visualization features.",
      image: getProjectImage(1),
      technologies: ["Figma", "Adobe XD", "Photoshop", "Principle", "Sketch"],
      impact: "20% increase in conversions",
      metrics: [
        { label: "Conversion Rate", value: "+20%" },
        { label: "User Engagement", value: "+35%" },
        { label: "Mobile Traffic", value: "+45%" }
      ],
      tags: ["UI/UX", "E-commerce", "Fashion", "Mobile-First"],
      duration: "4 months",
      teamSize: "5 members",
      challenges: "Complex product filtering, mobile optimization, accessibility compliance",
      solutions: "Created intuitive filter system, implemented responsive design patterns, conducted accessibility audits"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      year: "2023",
      category: "UI/UX Design",
      description: "Designed intuitive mobile banking interface with focus on accessibility and user experience.",
      detailedDescription: "Designed a comprehensive mobile banking application for a regional bank with 100,000+ customers. Focused on security, accessibility, and user-friendly financial management tools. Created wireframes, prototypes, and design system for iOS and Android platforms.",
      image: getProjectImage(2),
      technologies: ["Figma", "Principle", "Sketch", "InVision", "Zeplin"],
      impact: "40% faster task completion",
      metrics: [
        { label: "Task Completion", value: "40% faster" },
        { label: "User Satisfaction", value: "4.8/5" },
        { label: "Accessibility Score", value: "98%" }
      ],
      tags: ["Mobile", "Fintech", "Accessibility", "Security"],
      duration: "6 months",
      teamSize: "8 members",
      challenges: "Security compliance, accessibility standards, complex financial workflows",
      solutions: "Implemented WCAG 2.1 AA compliance, created secure authentication flows, simplified complex transactions"
    },
    {
      id: 3,
      title: "SaaS Dashboard Redesign",
      year: "2022",
      category: "UI/UX Design",
      description: "Modernized analytics dashboard with improved data visualization and user workflow optimization.",
      detailedDescription: "Redesigned a complex SaaS analytics dashboard used by 10,000+ business users. Transformed cluttered interface into clean, intuitive design with advanced data visualization capabilities. Implemented customizable widgets and improved reporting features.",
      image: getProjectImage(3),
      technologies: ["Figma", "React", "D3.js", "Chart.js", "Storybook"],
      impact: "60% improved user engagement",
      metrics: [
        { label: "User Engagement", value: "+60%" },
        { label: "Time on Dashboard", value: "+45%" },
        { label: "Feature Adoption", value: "+80%" }
      ],
      tags: ["Dashboard", "Analytics", "SaaS", "Data Visualization"],
      duration: "5 months",
      teamSize: "6 members",
      challenges: "Complex data visualization, user workflow optimization, performance optimization",
      solutions: "Created modular widget system, implemented progressive disclosure, optimized for large datasets"
    },
    {
      id: 4,
      title: "Healthcare App Interface",
      year: "2021",
      category: "UI/UX Design",
      description: "Patient portal design focusing on clear information hierarchy and medical data visualization.",
      detailedDescription: "Designed a comprehensive patient portal for a healthcare network serving 25,000+ patients. Created intuitive interfaces for appointment scheduling, medical records access, and telemedicine features. Ensured HIPAA compliance and accessibility standards.",
      image: getProjectImage(4),
      technologies: ["Adobe XD", "InVision", "Zeplin", "Figma", "Principle"],
      impact: "35% reduced support tickets",
      metrics: [
        { label: "Support Tickets", value: "-35%" },
        { label: "Appointment Booking", value: "+50%" },
        { label: "Patient Satisfaction", value: "4.6/5" }
      ],
      tags: ["Healthcare", "Patient Portal", "Data Viz", "Telemedicine"],
      duration: "7 months",
      teamSize: "7 members",
      challenges: "HIPAA compliance, complex medical data, accessibility requirements",
      solutions: "Implemented secure data handling, created clear information architecture, ensured WCAG compliance"
    },

    // Brand Design Projects
    {
      id: 5,
      title: "Coffee Startup Brand Identity",
      year: "2021",
      category: "Brand Design",
      description: "Developed complete brand identity including logo, packaging, and social media kit for emerging coffee startup.",
      detailedDescription: "Created comprehensive brand identity for a specialty coffee startup. Developed logo system, brand guidelines, packaging design, and marketing materials. Established brand voice and visual language that resonated with target audience of coffee enthusiasts and sustainability advocates.",
      image: getProjectImage(5),
      technologies: ["Illustrator", "InDesign", "Photoshop", "After Effects", "Figma"],
      impact: "Full brand recognition system",
      metrics: [
        { label: "Brand Recognition", value: "85%" },
        { label: "Social Media Growth", value: "+200%" },
        { label: "Retail Partnerships", value: "15 stores" }
      ],
      tags: ["Branding", "Packaging", "Identity", "Sustainability"],
      duration: "3 months",
      teamSize: "3 members",
      challenges: "Standing out in competitive market, sustainability messaging, scalable brand system",
      solutions: "Created unique visual identity, developed comprehensive brand guidelines, designed eco-friendly packaging"
    },
    {
      id: 6,
      title: "Tech Startup Logo & Guidelines",
      year: "2023",
      category: "Brand Design",
      description: "Created modern logo system and comprehensive brand guidelines for AI technology startup.",
      detailedDescription: "Developed cutting-edge brand identity for an AI technology startup. Created scalable logo system, comprehensive brand guidelines, and marketing materials. Established brand positioning that communicated innovation and trustworthiness in the competitive tech market.",
      image: getProjectImage(6),
      technologies: ["Illustrator", "After Effects", "Figma", "InDesign", "Photoshop"],
      impact: "Award-winning brand identity",
      metrics: [
        { label: "Industry Recognition", value: "2 awards" },
        { label: "Investor Interest", value: "+150%" },
        { label: "Brand Consistency", value: "98%" }
      ],
      tags: ["Logo Design", "Brand Guidelines", "Tech", "AI"],
      duration: "2 months",
      teamSize: "2 members",
      challenges: "Communicating complex technology, building trust, differentiating from competitors",
      solutions: "Created modern, approachable design, developed comprehensive guidelines, established clear brand voice"
    },
    {
      id: 7,
      title: "Restaurant Chain Rebrand",
      year: "2022",
      category: "Brand Design",
      description: "Complete rebranding project for family restaurant chain including menu design and store signage.",
      detailedDescription: "Led complete rebranding initiative for 12-location family restaurant chain. Developed new brand identity, redesigned all marketing materials, created new menu layouts, and designed store signage system. Increased brand appeal to younger demographics while maintaining loyal customer base.",
      image: getProjectImage(7),
      technologies: ["Illustrator", "InDesign", "Photoshop", "After Effects", "Figma"],
      impact: "25% increase in foot traffic",
      metrics: [
        { label: "Foot Traffic", value: "+25%" },
        { label: "Customer Age Range", value: "Expanded 20%" },
        { label: "Brand Awareness", value: "+40%" }
      ],
      tags: ["Restaurant", "Rebranding", "Print", "Signage"],
      duration: "4 months",
      teamSize: "4 members",
      challenges: "Maintaining brand heritage, appealing to new demographics, consistent implementation across locations",
      solutions: "Conducted extensive research, created flexible brand system, developed implementation guidelines"
    },
    {
      id: 8,
      title: "Fashion Brand Identity",
      year: "2020",
      category: "Brand Design",
      description: "Luxury fashion brand identity with sophisticated typography and premium packaging design.",
      detailedDescription: "Created luxury fashion brand identity for emerging designer. Developed sophisticated visual language, premium packaging design, and marketing materials. Established brand positioning in competitive luxury market with focus on sustainability and craftsmanship.",
      image: getProjectImage(8),
      technologies: ["Illustrator", "InDesign", "Photoshop", "After Effects", "Figma"],
      impact: "Premium market positioning",
      metrics: [
        { label: "Market Position", value: "Premium tier" },
        { label: "Brand Value", value: "+300%" },
        { label: "Retail Partnerships", value: "8 luxury stores" }
      ],
      tags: ["Fashion", "Luxury", "Packaging", "Sustainability"],
      duration: "3 months",
      teamSize: "2 members",
      challenges: "Competing with established brands, communicating luxury, sustainability messaging",
      solutions: "Created distinctive visual identity, developed premium packaging, established clear brand values"
    },

    // Campaign Design Projects
    {
      id: 9,
      title: "Environmental Awareness Campaign",
      year: "2019",
      category: "Campaign Design",
      description: "Created impactful poster designs and digital assets for environmental awareness campaign reaching 15,000+ audience.",
      detailedDescription: "Designed comprehensive environmental awareness campaign for non-profit organization. Created compelling poster series, digital assets, and social media content. Campaign focused on ocean conservation and reached diverse audience through multiple channels including print, digital, and outdoor advertising.",
      image: getProjectImage(9),
      technologies: ["Photoshop", "Illustrator", "After Effects", "InDesign", "Figma"],
      impact: "15,000+ audience reach",
      metrics: [
        { label: "Audience Reach", value: "15,000+" },
        { label: "Social Shares", value: "2,500+" },
        { label: "Volunteer Signups", value: "+400%" }
      ],
      tags: ["Campaign", "Print", "Digital", "Environmental"],
      duration: "2 months",
      teamSize: "3 members",
      challenges: "Creating emotional connection, reaching diverse audience, limited budget",
      solutions: "Developed strong visual narrative, created multi-channel content, leveraged social media effectively"
    },
    {
      id: 10,
      title: "Social Media Campaign",
      year: "2023",
      category: "Campaign Design",
      description: "Viral social media campaign design with engaging visuals and interactive elements for product launch.",
      detailedDescription: "Created viral social media campaign for tech product launch. Designed engaging visuals, interactive elements, and user-generated content strategies. Campaign achieved viral status through creative storytelling and community engagement tactics.",
      image: getProjectImage(10),
      technologies: ["Photoshop", "After Effects", "Figma", "Principle", "Sketch"],
      impact: "2M+ social media impressions",
      metrics: [
        { label: "Impressions", value: "2M+" },
        { label: "Engagement Rate", value: "8.5%" },
        { label: "User Generated Content", value: "500+ posts" }
      ],
      tags: ["Social Media", "Viral", "Interactive", "Product Launch"],
      duration: "1 month",
      teamSize: "4 members",
      challenges: "Creating viral content, engaging diverse audience, measuring success",
      solutions: "Developed creative content strategy, implemented interactive elements, established clear metrics"
    },
    {
      id: 11,
      title: "Charity Fundraising Campaign",
      year: "2022",
      category: "Campaign Design",
      description: "Emotional storytelling campaign design for children's charity with compelling visual narrative.",
      detailedDescription: "Designed emotional fundraising campaign for children's charity. Created compelling visual narrative that connected donors with beneficiaries. Campaign included print materials, digital assets, and video content that told powerful stories of impact.",
      image: getProjectImage(11),
      technologies: ["Photoshop", "Illustrator", "InDesign", "After Effects", "Premiere"],
      impact: "300% increase in donations",
      metrics: [
        { label: "Donations", value: "+300%" },
        { label: "Donor Retention", value: "+45%" },
        { label: "Average Donation", value: "+60%" }
      ],
      tags: ["Charity", "Storytelling", "Emotional", "Fundraising"],
      duration: "3 months",
      teamSize: "5 members",
      challenges: "Creating emotional connection, building trust, measuring impact",
      solutions: "Developed authentic storytelling approach, created transparent reporting, established donor relationships"
    },
    {
      id: 12,
      title: "Product Launch Campaign",
      year: "2021",
      category: "Campaign Design",
      description: "Multi-channel campaign design for tech product launch including web banners, print ads, and social content.",
      detailedDescription: "Created comprehensive multi-channel campaign for major tech product launch. Designed web banners, print advertisements, social media content, and event materials. Coordinated with marketing team to ensure consistent messaging across all touchpoints and channels.",
      image: getProjectImage(12),
      technologies: ["Photoshop", "Illustrator", "After Effects", "InDesign", "Figma"],
      impact: "500% increase in pre-orders",
      metrics: [
        { label: "Pre-orders", value: "+500%" },
        { label: "Brand Awareness", value: "+200%" },
        { label: "Website Traffic", value: "+350%" }
      ],
      tags: ["Product Launch", "Multi-channel", "Tech", "Event Marketing"],
      duration: "4 months",
      teamSize: "6 members",
      challenges: "Coordinating multiple channels, maintaining brand consistency, tight timeline",
      solutions: "Created comprehensive style guide, established clear workflows, implemented quality control processes"
    },

    // Print Design Projects
    {
      id: 13,
      title: "Annual Report Design",
      year: "2023",
      category: "Print Design",
      description: "Corporate annual report with sophisticated layout, data visualization, and premium print quality.",
      detailedDescription: "Designed comprehensive annual report for Fortune 500 company. Created sophisticated layout with advanced data visualization, infographics, and premium print specifications. Report communicated complex financial data in accessible, visually appealing format for stakeholders and investors.",
      image: getProjectImage(13),
      technologies: ["InDesign", "Illustrator", "Photoshop", "After Effects", "Excel"],
      impact: "Industry award winner",
      metrics: [
        { label: "Industry Recognition", value: "Best Annual Report 2023" },
        { label: "Stakeholder Satisfaction", value: "95%" },
        { label: "Print Quality", value: "Premium grade" }
      ],
      tags: ["Annual Report", "Corporate", "Data Viz", "Infographics"],
      duration: "3 months",
      teamSize: "4 members",
      challenges: "Simplifying complex data, maintaining corporate standards, tight deadlines",
      solutions: "Created clear data hierarchy, developed custom infographics, established efficient workflow"
    },
    {
      id: 14,
      title: "Magazine Layout Design",
      year: "2022",
      category: "Print Design",
      description: "Editorial design for lifestyle magazine with creative typography and engaging visual hierarchy.",
      detailedDescription: "Designed editorial layouts for lifestyle magazine with 50,000+ monthly circulation. Created engaging visual hierarchy, creative typography treatments, and compelling page layouts. Established consistent design system while allowing for creative expression in feature articles.",
      image: getProjectImage(14),
      technologies: ["InDesign", "Photoshop", "Illustrator", "After Effects", "Figma"],
      impact: "40% increase in readership",
      metrics: [
        { label: "Readership", value: "+40%" },
        { label: "Advertiser Satisfaction", value: "90%" },
        { label: "Design Awards", value: "3 nominations" }
      ],
      tags: ["Editorial", "Typography", "Lifestyle", "Layout Design"],
      duration: "6 months",
      teamSize: "3 members",
      challenges: "Balancing creativity with readability, maintaining consistency, meeting deadlines",
      solutions: "Developed flexible design system, created template library, established clear editorial guidelines"
    },
    {
      id: 15,
      title: "Event Brochure Series",
      year: "2021",
      category: "Print Design",
      description: "Complete event brochure series with consistent branding and clear information architecture.",
      detailedDescription: "Designed comprehensive event brochure series for annual conference with 2,000+ attendees. Created consistent branding across all materials, clear information architecture, and engaging visual design. Brochures served multiple purposes including registration, program guide, and networking resource.",
      image: getProjectImage(15),
      technologies: ["InDesign", "Illustrator", "Photoshop", "After Effects", "Figma"],
      impact: "60% increase in event attendance",
      metrics: [
        { label: "Event Attendance", value: "+60%" },
        { label: "Early Registration", value: "+80%" },
        { label: "Attendee Satisfaction", value: "4.7/5" }
      ],
      tags: ["Events", "Brochures", "Information Design", "Conference"],
      duration: "2 months",
      teamSize: "3 members",
      challenges: "Organizing complex information, creating engaging design, meeting print deadlines",
      solutions: "Developed clear information hierarchy, created engaging visual elements, established efficient production workflow"
    },
    {
      id: 16,
      title: "Book Cover Design",
      year: "2020",
      category: "Print Design",
      description: "Award-winning book cover design that captures the essence of the story and attracts target readers.",
      detailedDescription: "Designed award-winning book cover for bestselling novel. Created compelling visual that captured the essence of the story while appealing to target demographic. Cover design contributed to book's commercial success and critical acclaim in literary community.",
      image: getProjectImage(16),
      technologies: ["Photoshop", "Illustrator", "InDesign", "After Effects", "Figma"],
      impact: "Best Book Cover Award 2020",
      metrics: [
        { label: "Industry Recognition", value: "Best Book Cover 2020" },
        { label: "Book Sales", value: "+150%" },
        { label: "Reader Engagement", value: "4.8/5" }
      ],
      tags: ["Book Design", "Award Winner", "Typography", "Literary"],
      duration: "1 month",
      teamSize: "2 members",
      challenges: "Capturing story essence, appealing to target audience, standing out in market",
      solutions: "Conducted thorough research, created multiple concepts, collaborated closely with author and publisher"
    }
  ];

  const categories = ["All", "Brand Design", "UI/UX Design", "Campaign Design", "Print Design"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient-primary">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of my best work showcasing creativity, innovation, and results-driven design solutions
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="transition-all duration-200 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth group">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button variant="hero" size="sm" className="w-full">
                        View Project
                        <ExternalLink className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="gradient-secondary text-white">
                      {project.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={16} className="mr-1" />
                      {project.year}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  {/* Detailed Description */}
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.detailedDescription}
                    </p>
                  </div>

                  {/* Project Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    {project.metrics.slice(0, 3).map((metric, index) => (
                      <div key={index} className="text-center p-2 bg-muted/50 rounded-lg">
                        <div className="text-sm font-semibold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Clock size={14} className="mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground mr-2">Duration:</span>
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users size={14} className="mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground mr-2">Team:</span>
                      <span>{project.teamSize}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Target size={14} className="mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground mr-2">Impact:</span>
                      <span className="text-primary font-medium">{project.impact}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground mb-2">Technologies Used:</div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Solutions */}
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium text-muted-foreground mb-1">Key Challenges:</div>
                      <p className="text-muted-foreground">{project.challenges}</p>
                    </div>
                    <div>
                      <div className="font-medium text-muted-foreground mb-1">Solutions:</div>
                      <p className="text-muted-foreground">{project.solutions}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Projects
              <ExternalLink className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;