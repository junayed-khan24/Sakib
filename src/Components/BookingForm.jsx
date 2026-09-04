import React, { useEffect, useState } from "react";
import AOS from "aos";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

/**
 * Loads the Bengali-friendly display + body typefaces once, without
 * requiring an edit to index.html. Safe to call multiple times.
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

const CATEGORIES = [
  "ইভেন্ট ফটোগ্রাফি",
  "বিয়ে ফটোগ্রাফি",
  "পোর্ট্রেট ফটোগ্রাফি",
  "প্রোডাক্ট ফটোগ্রাফি",
  "ট্রাভেল ফটোগ্রাফি",
];

/* --- small inline icon set, no extra dependency required --- */
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
  User: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4" />
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
  Spinner: (p) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  Alert: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M12 8.5v4.4" strokeLinecap="round" />
      <circle cx="12" cy="15.6" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
};

const BookingForm = () => {
  const [loading, setLoading] = useState(false);
  useStudioFonts();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const selectedCategory = watch("category");

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleBooking = async (data) => {
    try {
      setLoading(true);

      const response = await axios.post(
        "https://sakibbackend-1.onrender.com/bookings",
        data
      );

      console.log(response.data);

      Swal.fire({
        icon: "success",
        title: "বুকিং সফল হয়েছে! 🎉",
        text: "আপনার বুকিং সফলভাবে সম্পন্ন হয়েছে।",
        confirmButtonColor: "#1B1B18",
      });

      reset();
    } catch (error) {
      console.error("Booking error:", error);

      Swal.fire({
        icon: "error",
        title: "সমস্যা হয়েছে!",
        text:
          error.response?.data?.message ||
          "বুকিং করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        confirmButtonColor: "#1B1B18",
      });
    } finally {
      setLoading(false);
    }
  };

  const errorMsg = (msg) => (
    <p className="mt-1.5 flex items-center gap-1 text-[13px] text-[#B3261E]">
      <Icon.Alert className="h-3.5 w-3.5 shrink-0" />
      {msg}
    </p>
  );

  const fieldClass =
    "w-full rounded-lg border border-[#DDD6C8] bg-white pl-11 pr-4 py-3 text-[15px] text-[#1B1B18] placeholder:text-[#9C9284] outline-none transition-colors focus:border-[#B8863B] focus:ring-2 focus:ring-[#B8863B]/15";

  return (
    <div
      className="px-4 py-16 md:px-10"
      style={{
        background: "#FAF7F2",
        fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', sans-serif",
      }}
    >
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-0">
        {/* Left / intro panel */}
        <div
          data-aos="fade-right"
          className="relative overflow-hidden rounded-t-2xl border border-[#E1D9C8] bg-[#1B1B18] px-8 py-10 text-[#F3EEE3] lg:rounded-l-2xl lg:rounded-tr-none lg:px-10 lg:py-12"
        >
          <Icon.Aperture className="absolute -right-10 -top-10 h-56 w-56 text-[#B8863B]/15" />

          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#B8863B]/50 text-[#D9AF6B]">
            <Icon.Aperture className="h-5 w-5" />
          </span>

          <h2
            className="mt-6 text-[32px] leading-tight text-[#F8F4EA] md:text-[38px]"
            style={{ fontFamily: "'Noto Serif Bengali', serif" }}
          >
            আপনার সেশন বুক করুন
          </h2>

          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#D8D0C1]">
            আপনার বিশেষ মুহূর্তগুলোকে চিরস্মরণীয় করে তুলতে আজই বুকিং করুন।
            নিচের তথ্যগুলো পূরণ করলেই আমরা যোগাযোগ করব।
          </p>

          <div className="mt-10 space-y-4 border-t border-white/10 pt-8 text-sm text-[#C9C0AE]">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8863B]" />
              পাঁচ ধরনের ফটোগ্রাফি সার্ভিস থেকে বেছে নিন
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8863B]" />
              বুকিং নিশ্চিত হলে সাথে সাথে জানিয়ে দেওয়া হবে
            </div>
          </div>
        </div>

        {/* Right / form panel */}
        <div
          data-aos="fade-left"
          className="rounded-b-2xl border border-t-0 border-[#E1D9C8] bg-white px-6 py-10 shadow-[0_1px_2px_rgba(27,27,24,0.04)] lg:rounded-r-2xl lg:rounded-bl-none lg:border-t lg:border-l-0 lg:px-10 lg:py-12"
        >
          <form onSubmit={handleSubmit(handleBooking)} className="space-y-7">
            {/* Name + Phone */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-[14px] font-medium text-[#3F3B36]">
                  নাম
                </label>
                <div className="relative">
                  <Icon.User className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#B8863B]" />
                  <input
                    type="text"
                    placeholder="আপনার নাম লিখুন"
                    className={fieldClass}
                    {...register("name", { required: "নাম দেওয়া আবশ্যক" })}
                  />
                </div>
                {errors.name && errorMsg(errors.name.message)}
              </div>

              <div>
                <label className="mb-2 block text-[14px] font-medium text-[#3F3B36]">
                  মোবাইল নম্বর
                </label>
                <div className="relative">
                  <Icon.Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#B8863B]" />
                  <input
                    type="tel"
                    placeholder="মোবাইল নম্বর"
                    className={fieldClass}
                    {...register("phone", { required: "মোবাইল নম্বর দেওয়া আবশ্যক" })}
                  />
                </div>
                {errors.phone && errorMsg(errors.phone.message)}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-[14px] font-medium text-[#3F3B36]">
                ইমেইল ঠিকানা
              </label>
              <div className="relative">
                <Icon.Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#B8863B]" />
                <input
                  type="email"
                  placeholder="ইমেইল ঠিকানা"
                  className={fieldClass}
                  {...register("email", { required: "ইমেইল দেওয়া আবশ্যক" })}
                />
              </div>
              {errors.email && errorMsg(errors.email.message)}
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-[14px] font-medium text-[#3F3B36]">
                ফটোগ্রাফির ধরন
              </label>
              <div className="flex flex-wrap gap-2.5">
                {CATEGORIES.map((cat) => {
                  const active = selectedCategory === cat;
                  return (
                    <label
                      key={cat}
                      className={`cursor-pointer rounded-full border px-4 py-2 text-[13.5px] transition-colors ${
                        active
                          ? "border-[#1B1B18] bg-[#1B1B18] text-white"
                          : "border-[#DDD6C8] bg-white text-[#3F3B36] hover:border-[#B8863B]"
                      }`}
                    >
                      <input
                        type="radio"
                        value={cat}
                        className="sr-only"
                        {...register("category", { required: "ক্যাটাগরি নির্বাচন করুন" })}
                      />
                      {cat}
                    </label>
                  );
                })}
              </div>
              {errors.category && errorMsg(errors.category.message)}
            </div>

            {/* Address */}
            <div>
              <label className="mb-2 block text-[14px] font-medium text-[#3F3B36]">
                ঠিকানা
              </label>
              <div className="relative">
                <Icon.Pin className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#B8863B]" />
                <input
                  type="text"
                  placeholder="রাস্তার ঠিকানা"
                  className={fieldClass}
                  {...register("address", { required: "ঠিকানা দেওয়া আবশ্যক" })}
                />
              </div>
              {errors.address && errorMsg(errors.address.message)}

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <input
                  type="text"
                  placeholder="শহর"
                  className="rounded-lg border border-[#DDD6C8] bg-white px-4 py-3 text-[15px] text-[#1B1B18] placeholder:text-[#9C9284] outline-none transition-colors focus:border-[#B8863B] focus:ring-2 focus:ring-[#B8863B]/15"
                  {...register("city")}
                />
                <input
                  type="text"
                  placeholder="জেলা"
                  className="rounded-lg border border-[#DDD6C8] bg-white px-4 py-3 text-[15px] text-[#1B1B18] placeholder:text-[#9C9284] outline-none transition-colors focus:border-[#B8863B] focus:ring-2 focus:ring-[#B8863B]/15"
                  {...register("district")}
                />
                <input
                  type="text"
                  placeholder="পোস্ট কোড"
                  className="rounded-lg border border-[#DDD6C8] bg-white px-4 py-3 text-[15px] text-[#1B1B18] placeholder:text-[#9C9284] outline-none transition-colors focus:border-[#B8863B] focus:ring-2 focus:ring-[#B8863B]/15"
                  {...register("postCode")}
                />
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="mb-2 block text-[14px] font-medium text-[#3F3B36]">
                সেশনের তারিখ
              </label>
              <div className="relative w-full sm:w-1/2">
                <Icon.Calendar className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#B8863B]" />
                <input
                  type="date"
                  className={fieldClass}
                  {...register("date", { required: "তারিখ নির্বাচন করুন" })}
                />
              </div>
              {errors.date && errorMsg(errors.date.message)}
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1B1B18] py-3.5 text-[15.5px] font-medium text-white transition-colors hover:bg-[#2C2A25] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Icon.Spinner className="h-4.5 w-4.5 animate-spin" />
                    বুকিং হচ্ছে...
                  </>
                ) : (
                  "বুকিং নিশ্চিত করুন"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;