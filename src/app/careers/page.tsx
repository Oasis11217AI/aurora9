'use client';

import { useForm, ValidationError } from '@formspree/react';

export default function CareersPage() {
  const [state, handleSubmit] = useForm('xqabvgdv');

  return (
    <main className="max-w-5xl mx-auto py-16 px-4 text-white">
      <h1 className="text-4xl font-bold text-teal-400 mb-6 text-center">Careers at AURORA9</h1>
      <p className="text-center text-gray-300 mb-12">
        Join us in revolutionizing e-commerce with Agentic AI. Browse our open roles and apply below.
      </p>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="grid gap-6 bg-gray-900 p-8 rounded-lg shadow-lg">
        <div>
          <label className="block text-sm font-semibold mb-1">First Name *</label>
          <input type="text" name="firstName" required className="w-full p-3 border rounded bg-gray-100 text-gray-800" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Last Name *</label>
          <input type="text" name="lastName" required className="w-full p-3 border rounded bg-gray-100 text-gray-800" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Email Address *</label>
          <input type="email" name="email" required className="w-full p-3 border rounded bg-gray-100 text-gray-800" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Phone Number *</label>
          <input type="tel" name="phone" required className="w-full p-3 border rounded bg-gray-100 text-gray-800" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Address *</label>
          <input type="text" name="address1" required className="w-full p-3 border rounded bg-gray-100 text-gray-800" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Address 2 (Optional)</label>
          <input type="text" name="address2" className="w-full p-3 border rounded bg-gray-100 text-gray-800" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">City *</label>
          <input type="text" name="city" required className="w-full p-3 border rounded bg-gray-100 text-gray-800" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">State *</label>
          <input type="text" name="state" required className="w-full p-3 border rounded bg-gray-100 text-gray-800" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Country *</label>
          <input type="text" name="country" required className="w-full p-3 border rounded bg-gray-100 text-gray-800" placeholder="United States" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Upload Resume/CV *</label>
          <input type="file" name="resume" accept=".pdf,.doc,.docx" required className="w-full p-3 bg-gray-100 text-gray-800 border rounded" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Which position are you applying for? *</label>
          <select name="jobTitle" required className="w-full p-3 border rounded bg-gray-100 text-gray-800">
            <option value="">Select a role</option>
            <option value="Lead Developer">Lead Developer</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Marketing AI Strategist">Marketing AI Strategist</option>
            <option value="Ecommerce Integration Lead">Ecommerce Integration Lead</option>
            <option value="AI Training Specialist">AI Training Specialist</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-teal-500 text-white font-bold py-3 px-6 rounded hover:bg-teal-600 transition duration-200"
        >
          Submit Application
        </button>

        {state.succeeded && <p className="text-green-400 font-semibold mt-4">Your application has been submitted successfully!</p>}

        <ValidationError prefix="Form" field="" errors={state.errors} />
      </form>
    </main>
  );
}
