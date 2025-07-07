import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm text-gray-600">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-black font-semibold mb-2">Outerspace Digital</h2>
          <p>
            Creating exceptional digital experiences for brands that dare to be
            different.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-black font-semibold mb-2">Services</h2>
          <ul className="space-y-1">
            <li>Brand Design</li>
            <li>Social Media Graphics</li>
            <li>Web Design</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-black font-semibold mb-2">Contact</h2>
          <ul className="space-y-1">
            <li>
              <a
                href="mailto:hello@outerspacedigital.com"
                className="hover:underline"
              >
                hello@outerspacedigital.com
              </a>
            </li>
            <li>
              <a
                href="https://outerspacedigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Visit: outerspacedigital.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center py-4 border-t border-gray-200 text-xs text-gray-500">
        © 2024 Outerspace Digital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


/*const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Outerspace Digital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
*/

/*
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
*/

