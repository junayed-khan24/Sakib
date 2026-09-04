import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router";

/**
 * Loads the same Bengali-friendly typefaces used across the booking flow.
 * Safe to call multiple times — it only injects the <link> once.
 */
const useStudioFonts = () => {
  useEffect(() => {
    if (document.getElementById("studio-fonts")) return;
    const link = document.createElement("link");
    link.id = "studio-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600&family=Noto+Serif+Bengali:wght@500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);
};

/* --- inline icon set, kept consistent with the booking form --- */
const Icon = {
  Aperture: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M12 3.4 8.6 9.2h6.8L12 3.4Z" />
      <path d="M20.6 8.6 14.8 9.2l3.4 5.9L20.6 8.6Z" />
      <path d="M18.2 19.4 15.4 14 12 19.8l3.2.6 2-1Z" />
      <path d="M6 19.8 9.2 14.8 12 19.8H6Z" />
      <path d="M3.4 8.6l3.2 6.2L9.6 9.2 3.4 8.6Z" />
      <path d="M5.8 6l6.2 1.4L8.6 12.6 5.8 6Z" />
    </svg>
  ),
  Phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M6.6 4.4 9 4l1.6 4-2 1.6a11.6 11.6 0 0 0 5.8 5.8l1.6-2 4 1.6-.4 2.4c-.2 1.2-1.3 2-2.5 1.8A16.6 16.6 0 0 1 4.8 6.9c-.2-1.2.6-2.3 1.8-2.5Z" />
    </svg>
  ),
  Mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.6" />
      <path d="m4.5 7 7.5 5.6L19.5 7" />
    </svg>
  ),
  Pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M12 21s-6.6-5.7-6.6-11A6.6 6.6 0 1 1 18.6 10c0 5.3-6.6 11-6.6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  ),
  Calendar: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3.5" y="5" width="17" height="15" rx="1.6" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  ),
  Trash: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M5 7h14M9.5 7V5.2c0-.7.6-1.2 1.2-1.2h2.6c.7 0 1.2.5 1.2 1.2V7M7 7l.8 12c.05.9.8 1.6 1.7 1.6h4.9c.9 0 1.65-.7 1.7-1.6L17 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Info: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.4" strokeLinecap="round" />
      <circle cx="12" cy="8.1" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  Folder: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M3.5 6.6c0-.8.6-1.4 1.4-1.4h4.2l1.8 2h8.2c.8 0 1.4.6 1.4 1.4v9c0 .8-.6 1.4-1.4 1.4H4.9c-.8 0-1.4-.6-1.4-1.4Z" />
    </svg>
  ),
  Users: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <circle cx="9" cy="8.4" r="3" />
      <path d="M3.5 19c.9-3.2 3-4.8 5.5-4.8s4.6 1.6 5.5 4.8" />
      <circle cx="17" cy="9.4" r="2.2" />
      <path d="M15 14.4c1.9.2 3.3 1.6 4 3.9" />
    </svg>
  ),
};

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();
  useStudioFonts();

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
          confirmButtonColor: "#1B1B18",
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
        confirmButtonColor: "#1B1B18",
      });
    }
  };

  if (loading) {
    return (
      <div
        className="flex min-h-[300px] items-center justify-center"
        style={{ background: "#FAF7F2" }}
      >
        <Icon.Aperture className="h-9 w-9 animate-spin text-[#B8863B]" style={{ animationDuration: "1.6s" }} />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen px-4 pb-24 pt-24 sm:px-6 lg:px-10"
      style={{
        background: "#FAF7F2",
        fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', sans-serif",
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#B8863B]/40 text-[#B8863B]">
              <Icon.Aperture className="h-5 w-5" />
            </span>
            <h2
              className="mt-3 text-[28px] leading-tight text-[#1B1B18] md:text-[32px]"
              style={{ fontFamily: "'Noto Serif Bengali', serif" }}
            >
              বুকিং ড্যাশবোর্ড
            </h2>
            <p className="mt-1 text-[14px] text-[#8A8375]">
              সকল photography booking এক জায়গায়
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-xl border border-[#E1D9C8] bg-white px-5 py-3.5 md:self-auto">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B1B18]/5 text-[#B8863B]">
              <Icon.Users className="h-5 w-5" />
            </span>
            <div>
              <div className="text-[12px] text-[#8A8375]">মোট বুকিং</div>
              <div className="text-[22px] leading-none text-[#1B1B18]">
                {bookings.length}
              </div>
            </div>
          </div>
        </div>

        {bookings.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-[#E1D9C8] bg-white py-20 text-center">
            <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FAF7F2] text-[#B8863B]">
              <Icon.Folder className="h-6 w-6" />
            </span>
            <p className="font-medium text-[#3F3B36]">
              কোনো booking পাওয়া যায়নি।
            </p>
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden overflow-hidden rounded-2xl border border-[#E1D9C8] bg-white md:block">
              <table className="w-full text-left text-[14px]">
                <thead>
                  <tr className="border-b border-[#E1D9C8] text-[13px] text-[#8A8375]">
                    <th className="px-5 py-4 font-medium">#</th>
                    <th className="px-5 py-4 font-medium">নাম</th>
                    <th className="px-5 py-4 font-medium">ক্যাটাগরি</th>
                    <th className="px-5 py-4 font-medium">মোবাইল</th>
                    <th className="px-5 py-4 font-medium">ইমেইল</th>
                    <th className="px-5 py-4 font-medium">ঠিকানা</th>
                    <th className="px-5 py-4 font-medium">তারিখ</th>
                    <th className="px-5 py-4 text-right font-medium">অ্যাকশন</th>
                  </tr>
                </thead>

                <tbody>
                  {bookings.map((booking, index) => (
                    <tr
                      key={booking._id}
                      className="border-b border-[#EFEAE0] last:border-0 hover:bg-[#FAF7F2]/70"
                    >
                      <td className="px-5 py-4 text-[#8A8375]">{index + 1}</td>

                      <td className="px-5 py-4 font-semibold text-[#1B1B18]">
                        {booking.name}
                      </td>

                      <td className="px-5 py-4">
                        <span className="rounded-full border border-[#E1D9C8] bg-[#FAF7F2] px-3 py-1 text-[12.5px] text-[#3F3B36]">
                          {booking.category}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-[#3F3B36]">{booking.phone}</td>
                      <td className="max-w-[180px] truncate px-5 py-4 text-[#3F3B36]">
                        {booking.email}
                      </td>

                      <td className="px-5 py-4">
                        <div className="text-[#3F3B36]">{booking.address}</div>
                        <div className="text-[13px] text-[#8A8375]">
                          {booking.city}, {booking.district}
                        </div>
                        <div className="text-[12px] text-[#B0A995]">
                          {booking.postCode}
                        </div>
                      </td>

                      <td className="px-5 py-4 text-[#3F3B36]">{booking.date}</td>

                      <td className="px-5 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            className="flex items-center gap-1.5 rounded-lg border border-[#F1D4D0] px-3 py-1.5 text-[13px] text-[#B3261E] transition-colors hover:bg-[#FBEEEC]"
                            onClick={() => handleDelete(booking._id)}
                          >
                            <Icon.Trash className="h-3.5 w-3.5" />
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
            <div className="space-y-4 md:hidden">
              {bookings.map((booking, index) => (
                <div
                  key={booking._id}
                  className="rounded-2xl border border-[#E1D9C8] bg-white p-5"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-[#1B1B18]">
                        {index + 1}. {booking.name}
                      </p>
                      <span className="mt-1.5 inline-block rounded-full border border-[#E1D9C8] bg-[#FAF7F2] px-3 py-1 text-[12px] text-[#3F3B36]">
                        {booking.category}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 space-y-2 text-[13.5px] text-[#3F3B36]">
                    <p className="flex items-center gap-2">
                      <Icon.Phone className="h-4 w-4 shrink-0 text-[#B8863B]" />
                      {booking.phone}
                    </p>
                    <p className="flex items-center gap-2 truncate">
                      <Icon.Mail className="h-4 w-4 shrink-0 text-[#B8863B]" />
                      {booking.email}
                    </p>
                    <p className="flex items-start gap-2">
                      <Icon.Pin className="mt-0.5 h-4 w-4 shrink-0 text-[#B8863B]" />
                      {booking.address}, {booking.city}, {booking.district}{" "}
                      {booking.postCode}
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon.Calendar className="h-4 w-4 shrink-0 text-[#B8863B]" />
                      {booking.date}
                    </p>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Link to="/details" className="flex-1">
                      <button className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-[#DDD6C8] py-2 text-[13.5px] text-[#3F3B36] transition-colors hover:border-[#B8863B]">
                        <Icon.Info className="h-4 w-4" />
                        বিস্তারিত
                      </button>
                    </Link>
                    <button
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#F1D4D0] py-2 text-[13.5px] text-[#B3261E] transition-colors hover:bg-[#FBEEEC]"
                      onClick={() => handleDelete(booking._id)}
                    >
                      <Icon.Trash className="h-4 w-4" />
                      মুছুন
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;