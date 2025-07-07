import { FileText, Clock, DollarSign, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const requests = [
  {
    id: "REQ-001",
    title: "Social Media Post – Independence Day",
    type: "Social Media",
    price: "$150",
    status: "In Progress",
    submitted: "July 1, 2025",
  },
  {
    id: "REQ-002",
    title: "Logo for Startup",
    type: "Logo",
    price: "$500",
    status: "Completed",
    submitted: "June 20, 2025",
  },
  {
    id: "REQ-003",
    title: "Brochure – Summer Campaign",
    type: "Brochure",
    price: "$400",
    status: "Pending Review",
    submitted: "June 25, 2025",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Completed":
      return <Badge className="bg-green-500 text-white">Completed</Badge>;
    case "In Progress":
      return <Badge className="bg-yellow-400 text-black">In Progress</Badge>;
    case "Pending Review":
      return <Badge className="bg-blue-500 text-white">Pending Review</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const MyRequests = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <FileText className="h-10 w-10 mx-auto mb-2 text-primary" />
          <h1 className="text-3xl font-bold">My Design Requests</h1>
          <p className="text-muted-foreground">Track your submitted design requests and their statuses</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {requests.map((req) => (
            <Card key={req.id} className="border-2 border-muted/30">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{req.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Request ID:</span>
                  <span>{req.id}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Type:</span>
                  <span>{req.type}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Submitted:</span>
                  <span>{req.submitted}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Estimated Price:</span>
                  <span>{req.price}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-3">
                  <span className="text-muted-foreground">Status:</span>
                  {getStatusBadge(req.status)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyRequests;
