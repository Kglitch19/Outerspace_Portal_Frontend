import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { CreditCard, Receipt } from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PayOuterspace = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [amount, setAmount] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Payment Initiated",
        description: `Processing payment of $${amount} for invoice ${invoiceNumber}`,
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-black">
      <Header />

      <main className="flex-grow w-full max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <Receipt className="h-12 w-12 mx-auto text-primary mb-3" />
          <h1 className="text-3xl font-bold">Pay Your Invoice</h1>
          <p className="text-muted-foreground mt-2 text-base">
            Enter your invoice details to make a payment
          </p>
        </div>

        <Card className="border rounded-xl shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-bold">
              <CreditCard className="h-5 w-5" />
              Invoice Payment
            </CardTitle>
            <CardDescription>
              Secure payment processing for Outerspace Digital invoices
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="invoiceNumber">Invoice Number</Label>
                <Input
                  id="invoiceNumber"
                  placeholder="INV-2024-0001"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Amount (USD)</Label>
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>

              <div className="bg-gray-100 p-4 rounded-md text-sm">
                <div className="flex justify-between">
                  <span>Invoice:</span>
                  <span className="font-medium">{invoiceNumber || "---"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-semibold">${amount || "0.00"}</span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full py-5 text-lg font-semibold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 text-black hover:brightness-105"
                disabled={isLoading || !invoiceNumber || !amount}
              >
                {isLoading ? "Processing..." : `Pay $${amount || "0.00"}`}
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Your payment will be processed securely through Stripe. You’ll receive a confirmation email.
              </p>
            </form>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default PayOuterspace;


/*import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { CreditCard, Receipt } from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PayOuterspace = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [amount, setAmount] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Payment Initiated",
        description: `Processing payment of $${amount} for invoice ${invoiceNumber}`,
      });
      // In real implementation, redirect to Stripe checkout
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Receipt className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Pay Your Invoice</h1>
            <p className="text-muted-foreground">Enter your invoice details to make a payment</p>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Invoice Payment
              </CardTitle>
              <CardDescription>
                Secure payment processing for Outerspace Digital invoices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="invoiceNumber">Invoice Number</Label>
                  <Input 
                    id="invoiceNumber" 
                    placeholder="INV-2024-0001" 
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (USD)</Label>
                  <Input 
                    id="amount" 
                    type="number" 
                    step="0.01"
                    placeholder="0.00" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required 
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Payment Summary</h3>
                  <div className="flex justify-between items-center">
                    <span>Invoice: {invoiceNumber || "---"}</span>
                    <span className="font-semibold">${amount || "0.00"}</span>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-gold text-brand-black font-semibold text-lg py-6" 
                  disabled={isLoading || !invoiceNumber || !amount}
                >
                  {isLoading ? "Processing..." : `Pay $${amount || "0.00"}`}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Your payment will be processed securely through Stripe. You will receive a confirmation email upon successful payment.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PayOuterspace;
*/