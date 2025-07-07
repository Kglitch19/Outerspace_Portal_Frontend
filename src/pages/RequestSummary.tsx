import { CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RequestSummary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-20 text-center max-w-xl">
        <CheckCircle className="mx-auto text-green-500 w-20 h-20 mb-6" />
        <h1 className="text-3xl font-bold mb-4">Request Submitted!</h1>
        <p className="text-muted-foreground mb-6">
          Your design request has been successfully submitted. Our team will review it and get back to you shortly.
        </p>
        <Button className="text-lg px-6 py-4" onClick={() => window.location.href = "/home/myrequest"}>
          View My Requests
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default RequestSummary;
