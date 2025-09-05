import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  LayoutDashboard, 
  FolderOpen, 
  FileText, 
  MessageSquare, 
  Mail, 
  BarChart3, 
  Upload,
  LogOut,
  User,
  Settings
} from 'lucide-react';
import { dataStore } from '@/lib/localData';
import { ProjectManagement } from './ProjectManagement';
import { BlogManagement } from './BlogManagement';
import { TestimonialManagement } from './TestimonialManagement';
import { ContactManagement } from './ContactManagement';
import { AnalyticsDashboard } from './AnalyticsDashboard';
import { UploadInterface } from './UploadInterface';

interface AdminDashboardProps {
  user: any;
  onLogout: () => void;
}

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({
    projects: 0,
    blogPosts: 0,
    testimonials: 0,
    contacts: 0,
    totalViews: 0,
    totalLikes: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardStats();
  }, []);

  const loadDashboardStats = async () => {
    try {
      setLoading(true);
      
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const projects = dataStore.projects;
      const blogPosts = dataStore.blogPosts;
      const testimonials = dataStore.testimonials;
      const contacts = dataStore.contacts;
      
      const totalViews = projects.reduce((sum, project) => sum + project.views, 0);
      const totalLikes = projects.reduce((sum, project) => sum + project.likes, 0);

      setStats({
        projects: projects.length,
        blogPosts: blogPosts.length,
        testimonials: testimonials.length,
        contacts: contacts.length,
        totalViews,
        totalLikes
      });
    } catch (error) {
      console.error('Failed to load dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_user');
    localStorage.removeItem('admin_token');
    onLogout();
  };

  const StatCard = ({ title, value, description, icon: Icon }: any) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <LayoutDashboard className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="text-sm text-gray-700">{user?.username || user?.email}</span>
                <Badge variant="secondary">Admin</Badge>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center space-x-2">
              <FolderOpen className="h-4 w-4" />
              <span>Projects</span>
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Blog</span>
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>Testimonials</span>
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Contacts</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center space-x-2">
              <Upload className="h-4 w-4" />
              <span>Upload</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                  title="Total Projects"
                  value={stats.projects}
                  description="Portfolio projects"
                  icon={FolderOpen}
                />
                <StatCard
                  title="Blog Posts"
                  value={stats.blogPosts}
                  description="Published articles"
                  icon={FileText}
                />
                <StatCard
                  title="Testimonials"
                  value={stats.testimonials}
                  description="Client reviews"
                  icon={MessageSquare}
                />
                <StatCard
                  title="Contact Messages"
                  value={stats.contacts}
                  description="Inquiries received"
                  icon={Mail}
                />
                <StatCard
                  title="Total Views"
                  value={stats.totalViews}
                  description="Project page views"
                  icon={BarChart3}
                />
                <StatCard
                  title="Total Likes"
                  value={stats.totalLikes}
                  description="Project likes"
                  icon={MessageSquare}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <ProjectManagement />
          </TabsContent>

          <TabsContent value="blog">
            <BlogManagement />
          </TabsContent>

          <TabsContent value="testimonials">
            <TestimonialManagement />
          </TabsContent>

          <TabsContent value="contacts">
            <ContactManagement />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsDashboard />
          </TabsContent>

          <TabsContent value="upload">
            <UploadInterface />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
