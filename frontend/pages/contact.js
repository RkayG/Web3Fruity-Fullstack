// pages/contact.js
import { useState } from 'react';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        website: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
        name: '',
        email: '',
        subject: '',
        website: '',
        message: ''
        });
    };

  return (
    <div className="w-full">
      <section className="w-full bg-gray-200 py-12 md:py-24 lg:py-32 dark:bg-gray-100">
        <div className=" px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold  sm:text-3xl md:text-4xl px-2">Get in Touch</h1>
              <p className="text-gray-900 md:text-xl dark:text-gray-700 px-2">
                Would you like to reach out to us? Fill out the form and our team will get back to you.
                
              </p>
              <p className="text-gray-500 md:text-xl dark:text-gray-700 px-2">
                info@web3fruity.com
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            placeholder='Enter your name'
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input
                        type="text"
                        placeholder='Enter the subject'
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website  (Optional)</label>
                    <input
                        type="text"
                        placeholder='Enter your website'
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        placeholder='Enter your message'
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        rows="4"
                        required
                />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    Submit
                </button>
            </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;