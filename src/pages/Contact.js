import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p className="text-gray-600 mb-8">Have any questions? We'd love to hear from you!</p>
        <form className="max-w-xl mx-auto">
          <input type="text" placeholder="Your Name" className="w-full mb-4 p-4 border rounded-md" />
          <input type="email" placeholder="Your Email" className="w-full mb-4 p-4 border rounded-md" />
          <textarea placeholder="Your Message" className="w-full mb-4 p-4 border rounded-md h-32"></textarea>
          <button type="submit" className="px-8 py-4 bg-[#44318D] text-white rounded-md font-semibold">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
