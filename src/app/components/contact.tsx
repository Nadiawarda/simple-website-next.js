
import Link from "next/link"

export default function Contact() {
    return (
      <section id="contact" className="py-16 text-center">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div className="flex flex-col text-left">
              <label htmlFor="name" className="mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col text-left">
              <label htmlFor="email" className="mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col text-left">
              <label htmlFor="message" className="mb-2 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  