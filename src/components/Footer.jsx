import React from "react";

function Footer() {
  return (
    <div className="bg-red-500 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Recipe Finder. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="/privacy-policy" className="text-white font-bold hover:underline mx-4">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-white font-bold hover:underline mx-4">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
