import { Link } from "react-router-dom";
import { LayoutDashboard, FilePlus, BadgeDollarSign } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">Outerspace</h1>
        <nav className="flex gap-6 items-center text-gray-600 text-sm font-medium">
          <Link to="/home/dashboard" className="hover:text-black flex items-center gap-2">
            <LayoutDashboard size={16} />
            Dashboard
          </Link>
          <Link to="/home/new-request" className="hover:text-black flex items-center gap-2">
            <FilePlus size={16} />
            New Request
          </Link>
          <Link to="/home/payment" className="hover:text-black flex items-center gap-2">
            <BadgeDollarSign size={16} />
            Pay
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


/*import { Button } from "./ui/button";
import { CreditCard, User, LogOut, Home, Layout } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/d7786cfe-89a7-4014-86eb-85724cb364d1.png" 
              alt="Outerspace Digital" 
              className="h-10 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/pay-outerspace" className="text-muted-foreground hover:text-foreground transition-colors">
              Pay Invoice
            </Link>
            <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link to="/designer-dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Designer Portal
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/auth">
                <User className="h-4 w-4 mr-2" />
                Login
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/designer-dashboard">
                <Layout className="h-4 w-4 mr-2" />
                Designer
              </Link>
            </Button>
            <Button asChild size="sm" className="gradient-gold text-brand-black font-semibold">
              <Link to="/pay-outerspace">
                <CreditCard className="h-4 w-4 mr-2" />
                Pay Invoice
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
*/
