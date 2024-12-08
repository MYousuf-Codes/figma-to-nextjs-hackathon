import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Menu Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Menu */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/new-arrivals" className="hover:text-gray-300">New arrivals</Link></li>
              <li><Link href="/best-sellers" className="hover:text-gray-300">Best sellers</Link></li>
              <li><Link href="/recently-viewed" className="hover:text-gray-300">Recently viewed</Link></li>
              <li><Link href="/popular-this-week" className="hover:text-gray-300">Popular this week</Link></li>
              <li><Link href="/all-products" className="hover:text-gray-300">All products</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/crockery" className="hover:text-gray-300">Crockery</Link></li>
              <li><Link href="/furniture" className="hover:text-gray-300">Furniture</Link></li>
              <li><Link href="/homeware" className="hover:text-gray-300">Homeware</Link></li>
              <li><Link href="/plant-pots" className="hover:text-gray-300">Plant pots</Link></li>
              <li><Link href="/chairs" className="hover:text-gray-300">Chairs</Link></li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="hover:text-gray-300">About us</Link></li>
              <li><Link href="/vacancies" className="hover:text-gray-300">Vacancies</Link></li>
              <li><Link href="/contact-us" className="hover:text-gray-300">Contact us</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-300">Privacy</Link></li>
              <li><Link href="/returns-policy" className="hover:text-gray-300">Returns policy</Link></li>
            </ul>
          </div>

          {/* Join Mailing List */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Join our mailing list</h3>
            <form className="flex flex-wrap">
              <input
                type="email"
                placeholder="you@email.com"
                className="px-4 py-2 text-black w-full sm:w-auto max-w-xs mb-4 sm:mb-0"
              />
              <button
                type="submit"
                className="bg-blue-800 text-white px-8 py-2 hover:bg-blue-700 w-full sm:w-auto"
              >
                Signup
              </button>
            </form>
          </div>
        </div>

        {/* Horizontal line */}
        <div className="my-8 border-t border-gray-600"></div>

        {/* Footer Bottom */}
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center">
          {/* Copyright */}
          <div className="text-sm text-gray-400 mb-4 sm:mb-0">
            <p>&copy; 2022 Avion LTD</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com" className="hover:text-gray-300">
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://www.facebook.com" className="hover:text-gray-300">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://www.instagram.com" className="hover:text-gray-300">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://www.salesforce.com" className="hover:text-gray-300">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://www.pinterest.com" className="hover:text-gray-300">
              <FaPinterest size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
