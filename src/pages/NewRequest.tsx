import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Upload, FileText, DollarSign } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const NewRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  // const { toast } = useToast();

  const designTypes = {
    "social-media": { name: "Social Media Post", price: 150 },
    "logo": { name: "Logo Design", price: 500 },
    "banner": { name: "Website Banner", price: 300 },
    "brochure": { name: "Brochure Design", price: 400 },
    "business-card": { name: "Business Card", price: 200 },
    "custom": { name: "Custom Request", price: 0 }
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    setEstimatedPrice(designTypes[value as keyof typeof designTypes]?.price || 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      alert("Your design request has been submitted successfully. We'll review it and get back to you with a quote.");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">New Design Request</h1>
            <p className="text-muted-foreground">Tell us about your design needs and upload your assets</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Project Details
                </CardTitle>
                <CardDescription>
                  Provide details about your design project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="projectTitle">Project Title</Label>
                  <Input id="projectTitle" placeholder="e.g., Independence Day Social Media Post" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="designType">Design Type</Label>
                  <Select value={selectedType} onValueChange={handleTypeChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select design type" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(designTypes).map(([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value.name} {value.price > 0 && `- $${value.price}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe your design requirements, target audience, style preferences, and any specific details..."
                    className="min-h-[120px]"
                    required 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dimensions">Dimensions (if applicable)</Label>
                    <Input id="dimensions" placeholder="e.g., 1080x1080px" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Preferred Deadline</Label>
                    <Input id="deadline" type="date" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Assets & References
                </CardTitle>
                <CardDescription>
                  Upload your logo, brand assets, and reference materials
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Logo & Brand Assets</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-muted-foreground">PNG, JPG, PDF up to 10MB each</p>
                    <Input type="file" multiple className="hidden" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Reference Images (Optional)</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Upload inspiration or reference images</p>
                    <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB each</p>
                    <Input type="file" multiple className="hidden" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brandGuidelines">Brand Guidelines/Notes</Label>
                  <Textarea 
                    id="brandGuidelines" 
                    placeholder="Share any brand guidelines, color codes, fonts, or style preferences..."
                    className="min-h-[80px]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Pricing & Payment
                </CardTitle>
                <CardDescription>
                  Review the estimated pricing for your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">Estimated Price:</span>
                    <span className="text-2xl font-bold text-primary">
                      {estimatedPrice > 0 ? `$${estimatedPrice}` : "Quote on request"}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Includes up to 3 revisions</p>
                    <p>• Final files delivered in high resolution</p>
                    <p>• 48-72 hour turnaround time</p>
                    <p>• Commercial usage rights included</p>
                  </div>

                  {estimatedPrice > 0 && (
                    <div className="mt-4 p-4 bg-background rounded border">
                      <h4 className="font-semibold mb-2">Payment Options:</h4>
                      <div className="space-y-2 text-sm">
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="payment" value="upfront" defaultChecked />
                          <span>Pay upfront (Recommended - Start immediately)</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="payment" value="approval" />
                          <span>Pay after design approval</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="payment" value="final" />
                          <span>Pay after final revision</span>
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button type="button" variant="outline" className="flex-1">
                Save as Draft
              </Button>
              <Button 
                type="submit" 
                className="flex-1 gradient-gold text-brand-black font-semibold" 
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Request"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewRequest;

