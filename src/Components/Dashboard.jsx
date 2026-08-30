import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FcManager } from "react-icons/fc";
import { Link, Links } from "react-router";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/bookings")
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Booking data fetch error:", error);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "ডেটা লোড করা যায়নি",
          text: "বুকিং তথ্য আনতে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        });
      });
  }, [axiosSecure]);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      icon: "warning",
      title: "আপনি কি নিশ্চিত?",
      text: "এই বুকিংটি স্থায়ীভাবে মুছে যাবে।",
      showCancelButton: true,
      confirmButtonText: "হ্যাঁ, মুছে ফেলুন",
      cancelButtonText: "বাতিল",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
    });

    if (!confirm.isConfirmed) return;

    try {
      await axiosSecure.delete(`/bookings/${id}`);
      setBookings((prev) => prev.filter((b) => b._id !== id));
      Swal.fire({
        icon: "success",
        title: "মুছে ফেলা হয়েছে",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Delete error:", error);
      Swal.fire({
        icon: "error",
        title: "মুছতে ব্যর্থ হয়েছে",
        text: "আবার চেষ্টা করুন।",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className=" pt-24 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            📸 Booking Dashboard
          </h2>
          {/* <p className="text-gray-600 mt-1 text-sm md:text-base">
            এখানে আপনার সকল photography booking দেখতে পারবেন।
          </p> */}
        </div>

        <div className="stats shadow bg-base-100 self-start md:self-auto">
          <div className="stat py-2 px-4">
            <div className="stat-title text-xs">মোট বুকিং</div>
            <div className="stat-value text-2xl text-black flex gap-2 mt-2 items-center">
              {bookings.length} <FcManager></FcManager>
            </div>
          </div>
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-base-100 rounded-2xl shadow">
          <span className="text-5xl mb-3">🗂️</span>
          <p className="text-gray-500 font-medium">
            কোনো booking পাওয়া যায়নি।
          </p>
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto mb-24 bg-base-100 rounded-2xl shadow">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>#</th>
                  <th>নাম</th>
                  <th>ক্যাটাগরি</th>
                  <th>মোবাইল</th>
                  <th>ইমেইল</th>
                  <th>ঠিকানা</th>
                  <th>তারিখ</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={booking._id}>
                    <th>{index + 1}</th>

                    <td>
                      <div className="font-bold">{booking.name}</div>
                    </td>

                    <td>
                      <span className="badge badge-ghost">
                        {booking.category}
                      </span>
                    </td>

                    <td>{booking.phone}</td>
                    <td className="max-w-[180px] truncate">{booking.email}</td>

                    <td>
                      <div>{booking.address}</div>
                      <div className="text-sm text-gray-500">
                        {booking.city}, {booking.district}
                      </div>
                      <div className="text-xs text-gray-400">
                        {booking.postCode}
                      </div>
                    </td>

                    <td>{booking.date}</td>

                    <td>
                      <div className="flex justify-end gap-2">
                        {/* <Link to="/details"> 
                        <button className="btn btn-ghost btn-xs">
                          বিস্তারিত
                        </button>
                        </Link> */}
                        
                        <button
                          className="btn btn-ghost btn-xs text-red-500"
                          onClick={() => handleDelete(booking._id)}
                        >
                          মুছুন
                        </button>
                        
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4 mb-24">
            {bookings.map((booking, index) => (
              <div
                key={booking._id}
                className="bg-base-100 rounded-2xl shadow p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-bold text-black">
                      {index + 1}. {booking.name}
                    </p>
                    <span className="badge badge-ghost mt-1">
                      {booking.category}
                    </span>
                  </div>
                </div>

                <div className="text-sm text-gray-600 space-y-1 mt-3">
                  <p>📞 {booking.phone}</p>
                  <p className="truncate">✉️ {booking.email}</p>
                  <p>
                    📍 {booking.address}, {booking.city}, {booking.district}{" "}
                    {booking.postCode}
                  </p>
                  <p>📅 {booking.date}</p>
                </div>

                <div className="flex gap-2 mt-4">
                  <Link to="/details">
                  <button className="btn btn-outline btn-sm flex-1">
                    বিস্তারিত
                  </button>
                  </Link>
                  <button
                    className="btn btn-outline btn-sm text-red-500 flex-1"
                    onClick={() => handleDelete(booking._id)}
                  >
                    মুছুন
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;