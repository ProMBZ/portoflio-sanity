function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Discover my professional journey through a curated collection of projects, showcasing my skills and experiences. From web development to graphic design, each project reflects my dedication to creativity and excellence.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About Us
              </a>
            </li>
       
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              target="_blank" href="https://www.facebook.com/profile.php?id=100094584034949"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              target="_blank "href="https://www.linkedin.com/in/muhammad-zohaib14151617-/"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedln
            </a>
            <a
               target="_blank" href ="https://www.instagram.com/muhammad.binzohaib/"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Karachi, Pakistan</p>
          <p>Karachi, 75850</p>
          <p>Email: info@muhammadzohaib1415.com</p>
          <p>Phone: (92) 3360327970</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 Portfolio-Website. All rights reserved.</p>
    </footer>
  )
}

export default Footer