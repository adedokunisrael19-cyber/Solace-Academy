
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function AdminDashboard() {
    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [statistics, setStatistics] = useState(null);

  

useEffect(() => {
  async function fetchRegistrations() {
    const token = sessionStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/registrations`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 401 || response.status === 403) {
        sessionStorage.removeItem("adminToken");
        navigate("/admin/login");
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to load registrations.");
      }

      const data = await response.json();
      setRegistrations(data);
    } catch (err) {
      setError(err.message || "Could not connect to the server.");
    } finally {
      setLoading(false);
    }
    const statsResponse = await fetch(
  `${import.meta.env.VITE_API_BASE_URL}/admin/statistics`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

if (!statsResponse.ok) {
  throw new Error("Failed to load dashboard statistics.");
}

const statsData = await statsResponse.json();
setStatistics(statsData);
  }

  fetchRegistrations();
}, [navigate]);

function handleLogout() {
  sessionStorage.removeItem("adminToken");
  navigate("/admin/login");
}


    return (
        <section className="min-h-screen bg-slate-50 px-6 py-12">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">
                    Solace Academy
                </h1>

                
<div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
  <div className="rounded-xl bg-white p-5 shadow-sm">
    <p className="text-sm text-slate-500">
      Total Registrations
    </p>
    <h2 className="mt-2 text-3xl font-bold text-slate-800">
      {statistics?.total_registrations ?? "..."}
    </h2>
  </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">
            Basic 1–3
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-800">
            {statistics
                ? statistics.registrations_by_class
                    .filter((item) =>
                    ["Basic 1", "Basic 2", "Basic 3"].includes(
                        item.class_level
                    )
                    )
                    .reduce((total, item) => total + item.count, 0)
                : "..."}
            </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">
            Mathematics Registrations
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-800">
            {statistics
                ? statistics.registrations_by_subject
                    .filter((item) =>
                    item.subject?.toLowerCase() === "mathematics"
                    )
                    .reduce((total, item) => total + item.count, 0)
                : "..."}
            </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">
            English Registrations
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-800">
            {statistics
                ? statistics.registrations_by_subject
                    .filter((item) =>
                    item.subject?.toLowerCase() === "english"
                    )
                    .reduce((total, item) => total + item.count, 0)
                : "..."}
            </h2>
        </div>
        </div>
        
{/* Registration breakdown by class */}
<section className="mb-8 rounded-xl bg-white p-6 shadow-sm">
  <h2 className="mb-5 text-xl font-bold text-slate-800">
    Registrations by Class
  </h2>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
    {["Basic 1", "Basic 2", "Basic 3", "Basic 4", "Basic 5"].map(
      (className) => {
        const classData = statistics?.registrations_by_class?.find(
          (item) => item.class_level === className
        );

        const count = classData?.count ?? 0;

        return (
          <div
            key={className}
            className="rounded-lg border border-slate-200 p-4"
          >
            <p className="text-sm text-slate-500">
              {className}
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-800">
              {statistics ? count : "..."}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {count === 1 ? "registration" : "registrations"}
            </p>
          </div>
        );
      }
    )}
  </div>
</section>



                <p className="mt-2 text-slate-600">
                    Registration Dashboard
                </p>
{/* 
                <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
                    <p className="text-sm text-slate-500">
                        Total registrations
                    </p>

                    <p className="mt-1 text-3xl font-bold text-blue-700">
                        {registrations.length}
                    </p>
                </div> */}

                

                <div className="mt-8 overflow-x-auto rounded-xl bg-white shadow-sm">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-100 text-slate-700">
                            <tr>
                                <th className="p-4">Parent/Guardian</th>
                                <th className="p-4">Email</th>
                                <th className="p-4">Phone</th>
                                <th className="p-4">Child's Name</th>
                                <th className="p-4">Child's Age</th>
                                <th className="p-4">Class</th>
                                <th className="p-4">Subject</th>
                            </tr>
                        </thead>

                        <tbody>
                            {registrations.map((registration) => (
                                <tr
                                    key={registration.id}
                                    className="border-t border-slate-100"
                                >
                                    <td className="p-4">
                                        {registration.parent_name}
                                    </td>
                                    <td className="p-4">
                                        {registration.email}
                                    </td>
                                    <td className="p-4">
                                        {registration.phone}
                                    </td>
                                    <td className="p-4">
                                        {registration.child_name}
                                    </td>
                                    <td className="p-4">
                                        {registration.child_age}
                                    </td>
                                    <td className="p-4">
                                        {registration.class_level}
                                    </td>
                                    <td className="p-4">
                                        {registration.subject}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {registrations.length === 0 && (
                        <p className="p-6 text-center text-slate-500">
                            No registrations found.
                        </p>
                    )}
                </div>
                 <button
                    onClick={handleLogout}
                    className="rounded-lg bg-red-600 px-4 py-2 mt-4 ml-4 text-white hover:bg-red-700"
                    >
                    Logout
                    </button>
            </div>
        </section>
    );
}

export default AdminDashboard;
