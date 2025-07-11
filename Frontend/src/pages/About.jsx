

const About = () => {
  return (
    <div className="min-h-[90vh] bg-gray-400/40 flex flex-col items-center justify-center p-8 text-white">

      <div className="max-w-4xl w-full bg-gray-400 rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-white">About Us</h1>
        <p className="text-xl font-thin mb-6">
          Welcome to <span className="font-semibold text-blue-300">E-CART</span>, your trusted destination for quality products across fashion, electronics, lifestyle, and more.
          Our mission is to deliver premium goods with seamless service and fast delivery.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-blue-200">Why Choose Us?</h2>
        <ul className="list-disc pl-5 text-lg font-light mb-6">
          <li>Handpicked products curated with care</li>
          <li>Easy returns & secure checkout</li>
          <li>24/7 customer support</li>
          <li>Trusted by thousands of satisfied customers</li>
        </ul>

        <div className="bg-blue-500 p-4 rounded-xl text-center text-white text-lg">
          "Quality isn’t expensive, it’s priceless."
        </div>
      </div>


    </div>
  );
};

export default About;
