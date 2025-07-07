/*import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { BadgeCheck, Clock, CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const DesignerDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Designer Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card>
            <CardHeader className="flex items-center gap-2">
              <BadgeCheck className="text-blue-500 w-6 h-6" />
              <CardTitle>New Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">4</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-2">
              <Clock className="text-yellow-500 w-6 h-6" />
              <CardTitle>In Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">2</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-2">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <CardTitle>Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">8</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Requests</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-background rounded shadow-sm">
              <div>
                <h3 className="font-bold">Social Media Post - Eid Campaign</h3>
                <p className="text-sm text-muted-foreground">Due: July 5</p>
              </div>
              <Button variant="outline">View</Button>
            </div>
            <div className="flex justify-between items-center p-4 bg-background rounded shadow-sm">
              <div>
                <h3 className="font-bold">Website Banner - Summer Sale</h3>
                <p className="text-sm text-muted-foreground">Due: July 6</p>
              </div>
              <Button variant="outline">View</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DesignerDashboard;
*/


import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import { FileText, Clock, CheckCircle, AlertCircle, Upload, MessageCircle, Eye } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DesignerDashboard = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Independence Day Social Media Post",
      client: "John Smith",
      status: "In Progress",
      priority: "High",
      revisions: 1,
      maxRevisions: 3,
      createdAt: "2024-06-01",
      dueDate: "2024-06-10",
      amount: 150,
      description: "Need a patriotic social media post for July 4th campaign",
      assets: ["logo.png", "brand-colors.pdf"],
      lastMessage: "Please make the text bigger and add more stars"
    },
    {
      id: 2,
      title: "Brand Logo Design",
      client: "Sarah Johnson",
      status: "Under Review",
      priority: "Medium",
      revisions: 0,
      maxRevisions: 3,
      createdAt: "2024-05-28",
      dueDate: "2024-06-15",
      amount: 500,
      description: "Modern logo for tech startup, prefer minimalist design",
      assets: ["reference1.jpg", "reference2.jpg"],
      lastMessage: "Initial design submitted, awaiting feedback"
    },
    {
      id: 3,
      title: "Website Banner",
      client: "Mike Davis",
      status: "Completed",
      priority: "Low",
      revisions: 2,
      maxRevisions: 3,
      createdAt: "2024-05-20",
      dueDate: "2024-05-30",
      amount: 300,
      description: "Homepage banner for e-commerce website",
      assets: ["product-images.zip"],
      lastMessage: "Final design approved, project completed"
    }
  ]);

  const { toast } = useToast();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Progress":
        return <Clock className="h-4 w-4" />;
      case "Under Review":
        return <AlertCircle className="h-4 w-4" />;
      case "Completed":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Under Review":
        return "bg-yellow-100 text-yellow-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-orange-100 text-orange-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleUploadDesign = () => {
    toast({
      title: "Design Uploaded",
      description: "Design has been uploaded and client has been notified.",
    });
  };

  const handleSendMessage = () => {
    toast({
      title: "Message Sent",
      description: "Your message has been sent to the client.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Designer Dashboard</h1>
            <p className="text-muted-foreground">Manage client projects and communications</p>
          </div>
          <Badge className="gradient-gold text-brand-black font-semibold px-4 py-2">
            Outerspace Digital Team
          </Badge>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Projects</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
                <Clock className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Under Review</p>
                  <p className="text-2xl font-bold">1</p>
                </div>
                <AlertCircle className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed Today</p>
                  <p className="text-2xl font-bold">1</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Revenue Today</p>
                  <p className="text-2xl font-bold">$300</p>
                </div>
                <FileText className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList>
            <TabsTrigger value="projects">All Projects</TabsTrigger>
            <TabsTrigger value="pending">Pending Review</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <div className="grid gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="border-2 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-2">
                          {getStatusIcon(project.status)}
                          {project.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Client: {project.client} • 
                          Created: {new Date(project.createdAt).toLocaleDateString()} • 
                          Due: {new Date(project.dueDate).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                        <Badge className={getPriorityColor(project.priority)}>
                          {project.priority}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">Revisions: </span>
                        <span className="font-medium">{project.revisions}/{project.maxRevisions}</span>
                        <span className="text-muted-foreground">Amount: </span>
                        <span className="font-medium">${project.amount}</span>
                        <span className="text-muted-foreground">Assets: </span>
                        <span className="font-medium">{project.assets.length} files</span>
                      </div>

                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm font-medium mb-1">Latest Communication:</p>
                        <p className="text-sm text-muted-foreground">{project.lastMessage}</p>
                      </div>

                      <div className="flex gap-2 flex-wrap">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-2" />
                              View Assets
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Project Assets</DialogTitle>
                              <DialogDescription>
                                Assets uploaded by {project.client}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-2">
                              {project.assets.map((asset, index) => (
                                <div key={index} className="flex items-center gap-2 p-2 border rounded">
                                  <FileText className="h-4 w-4" />
                                  <span className="text-sm">{asset}</span>
                                  <Button size="sm" variant="ghost" className="ml-auto">
                                    Download
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </DialogContent>
                        </Dialog>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" className="gradient-gold text-brand-black">
                              <Upload className="h-4 w-4 mr-2" />
                              Upload Design
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Upload Design</DialogTitle>
                              <DialogDescription>
                                Upload the completed design for {project.title}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                <p className="text-muted-foreground mb-2">Click to upload design files</p>
                                <p className="text-sm text-muted-foreground">PNG, JPG, PDF, AI, PSD up to 50MB</p>
                                <Input type="file" multiple className="hidden" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="designNotes">Design Notes</Label>
                                <Textarea 
                                  id="designNotes" 
                                  placeholder="Add any notes about the design..."
                                  className="min-h-[80px]"
                                />
                              </div>
                              <Button onClick={handleUploadDesign} className="w-full gradient-gold text-brand-black">
                                Upload & Notify Client
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Message Client
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Message {project.client}</DialogTitle>
                              <DialogDescription>
                                Send a message about {project.title}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea 
                                  id="message" 
                                  placeholder="Type your message to the client..."
                                  className="min-h-[120px]"
                                />
                              </div>
                              <Button onClick={handleSendMessage} className="w-full gradient-gold text-brand-black">
                                Send Message
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>

                        {project.status === "Under Review" && (
                          <Button size="sm" variant="outline">
                            Mark as Completed
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pending">
            <div className="grid gap-6">
              {projects.filter(p => p.status === "Under Review").map((project) => (
                <Card key={project.id} className="border-2 border-yellow-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-600" />
                      {project.title} - Awaiting Client Feedback
                    </CardTitle>
                    <CardDescription>Client: {project.client}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <Button className="gradient-gold text-brand-black">
                      Follow Up with Client
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid gap-6">
              {projects.filter(p => p.status === "Completed").map((project) => (
                <Card key={project.id} className="border-2 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {project.title} - Completed
                    </CardTitle>
                    <CardDescription>Client: {project.client} • Amount: ${project.amount}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-green-100 text-green-800">Project Completed</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default DesignerDashboard;
