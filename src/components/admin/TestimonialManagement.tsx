import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

export function TestimonialManagement() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Testimonial Management</h2>
      </div>

      <Card>
        <CardContent className="p-8 text-center">
          <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Testimonial Management</h3>
          <p className="text-gray-500">This feature is available in the standalone admin panel. You can manage client testimonials here.</p>
        </CardContent>
      </Card>
    </div>
  );
}