
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/bookings")
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Booking data fetch error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="mt-3 px-4">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-black">
          📸 Booking Dashboard
        </h2>

        <p className="text-gray-600 mt-1">
          এখানে আপনার সকল photography booking দেখতে পারবেন।
        </p>
      </div>

      <div className="overflow-x-auto mb-24">
        <table className="table table-zebra">

          {/* Head */}
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>

              <th>নাম</th>
              <th>ক্যাটাগরি</th>
              <th>মোবাইল</th>
              <th>ইমেইল</th>
              <th>ঠিকানা</th>
              <th>তারিখ</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking._id}>

                  {/* Checkbox */}
                  <th>
                    <input
                      type="checkbox"
                      className="checkbox"
                    />
                  </th>

                  {/* Name */}
                  <td>
                    <div className="font-bold">
                      {booking.name}
                    </div>
                  </td>

                  {/* Category */}
                  <td>
                    <span className="badge badge-ghost">
                      {booking.category}
                    </span>
                  </td>

                  {/* Phone */}
                  <td>
                    {booking.phone}
                  </td>

                  {/* Email */}
                  <td>
                    {booking.email}
                  </td>

                  {/* Address */}
                  <td>
                    <div>
                      {booking.address}
                    </div>

                    <div className="text-sm text-gray-500">
                      {booking.city}, {booking.district}
                    </div>

                    <div className="text-xs text-gray-400">
                      {booking.postCode}
                    </div>
                  </td>

                  {/* Date */}
                  <td>
                    {booking.date}
                  </td>

                  {/* Action */}
                  <td>
                    <button className="btn btn-ghost btn-xs">
                      Details
                    </button>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-10 text-gray-500"
                >
                  কোনো booking পাওয়া যায়নি।
                </td>
              </tr>
            )}
          </tbody>

          {/* Footer */}
          <tfoot>
            <tr>
              <th></th>
              <th>নাম</th>
              <th>ক্যাটাগরি</th>
              <th>মোবাইল</th>
              <th>ইমেইল</th>
              <th>ঠিকানা</th>
              <th>তারিখ</th>
              <th>Action</th>
            </tr>
          </tfoot>

        </table>
      </div>
    </div>
  );
};

export default Dashboard;
