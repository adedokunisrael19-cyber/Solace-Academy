import { useState } from "react";

function Registration(){
    const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    childClass: "",
    subject: "",
});


    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (event)=> {
        const { name, value}= event.target;

        setFormData({
            ...formData, 
            [name]: value,
        });
    };

    
const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    const registrationData = {
        parent_name: formData.parentName,
        email: formData.email,
        phone: formData.phone,
        child_name: formData.childName,
        child_age: formData.childAge,
        class_level: formData.childClass,
        subject: formData.subject,
    };

    try {
        const response = await fetch(
            "http://127.0.0.1:8000/registrations",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registrationData),
            }
        );

        if (!response.ok) {
            throw new Error(
                "Registration failed. Please check your details and try again."
            );
        }

        const result = await response.json();

        setMessage(
            `Registration successful! Your reference number is ${result.id}.`
        );

        setFormData({
            parentName: "",
            email: "",
            phone: "",
            childName: "",
            childAge: "",
            childClass: "",
            subject: "",
        });
    } catch (err) {
        setError(
            err.message || "Unable to connect to the server. Please try again."
        );
    } finally {
        setLoading(false);
    }
};

    return(
       <section id="registration" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">

       
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Register Your Child
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Take the Next Step in Your Child's Learning Journey
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Complete the form below and our team will get in touch with you
            with the next steps.
          </p>
        </div>

      
        <form

        
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-3xl rounded-2xl bg-white p-6 shadow-sm md:p-8"
        >

          {message && (
                <p role="status" className="mb-4 rounded-lg bg-green-50 p-4 text-green-700">
                    {message}
                </p>
            )}

            {error && (
                <p role="alert" className="mb-4 rounded-lg bg-red-50 p-4 text-red-700">
                    {error}
                </p>
            )}
          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label
                htmlFor="parentName"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Parent/Guardian Name
              </label>

              <input
                id="parentName"
                name="parentName"
                type="text"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                required
              />
            </div>

            
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                required
              />
            </div>

            <div>
              <label
                htmlFor="childName"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Child's Name
              </label>

              <input
                id="childName"
                name="childName"
                type="text"
                value={formData.childName}
                onChange={handleChange}
                placeholder="Enter child's name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                required
              />
            </div>
            
            
            <div>
              <label
                htmlFor="childAge"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Child's Age
              </label>

              <input
                id="childAge"
                name="childAge"
                type="number"
                min="1"
                max="18"
                value={formData.childAge}
                onChange={handleChange}
                placeholder="Enter child's Age"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                required
              />
            </div>

            <div>
              <label
                htmlFor="childClass"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Child's Class
              </label>

              <select
                id="childClass"
                name="childClass"
                value={formData.childClass}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                required
              >
                <option value="">Select class</option>
                <option value="Basic 1">Basic 1</option>
                <option value="Basic 2">Basic 2</option>
                <option value="Basic 3">Basic 3</option>
                <option value="Basic 4">Basic 4</option>
                <option value="Basic 5">Basic 5</option>
              </select>
            </div>

           
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Preferred Subject
              </label>

              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                required
              >
                <option value="">Select subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="English">English</option>
                <option value="Both">Both Mathematics & English</option>
              </select>
            </div>

          </div>

         <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? "Submitting..." : "Submit Registration"}
          </button>
        </form>

      </div>
    </section> 
    );
}

export default Registration