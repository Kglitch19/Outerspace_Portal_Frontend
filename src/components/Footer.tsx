
const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Outerspace Digital</h3>
            <p className="text-muted-foreground">
              Creating exceptional digital experiences for brands that dare to be different.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Brand Design</li>
              <li>Social Media Graphics</li>
              <li>Web Design</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>hello@outerspacedigital.com</p>
              <p>Visit: outerspacedigital.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Outerspace Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
