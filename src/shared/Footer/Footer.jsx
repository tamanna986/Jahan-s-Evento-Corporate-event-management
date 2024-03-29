

const Footer = () => {
    return (
<footer className="footer p-10 bg-cyan-800 text-base-content pl-12 md:pl-36 lg:pl-56 ">


  <nav className="text-white">
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form className="text-white">
    <header className="footer-title text-white">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-info text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    );
};

export default Footer;