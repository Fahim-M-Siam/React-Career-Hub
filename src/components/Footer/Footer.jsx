// @ts-nocheck
const Footer = () => {
  return (
    <footer className="p-10 bg-[#1A1919] text-white">
      <div className="footer max-w-6xl mx-auto">
        <aside>
          <header className="footer-title text-3xl text-white">
            Careerhub
          </header>
          <p className="w-[#300px]">
            There are many variations of passages <br /> of Lorem Ipsum , but
            the majority have <br /> suffered alteration in some form.
          </p>
        </aside>
        <nav>
          <header className="footer-title text-white">Company</header>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <header className="footer-title text-white">Product</header>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <header className="footer-title text-white">Support</header>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </nav>
        <nav>
          <header className="footer-title text-white">Contact</header>
          <a className="link link-hover">524 Broadway , NYC</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
