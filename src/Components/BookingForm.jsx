import React, { useEffect, useState } from "react";
import AOS from "aos";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";

const BookingForm = () => {
  const [loading, setLoading] = useState(false);

  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleBooking = async (data) => {
    console.log(data);

    try {
      setLoading(true);

      const response = await axiosSecure.post(
        "/bookings",
        data
      );

      console.log(response.data);

      alert("আপনার বুকিং সফলভাবে সম্পন্ন হয়েছে! 🎉");

      reset();
    } catch (error) {
      console.error(error);
      alert("বুকিং করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 px-4 md:px-10 bg-base-200">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black">
            📸 আপনার সেশন বুক করুন
          </h2>

          <p className="text-black mt-2">
            আপনার বিশেষ মুহূর্তগুলোকে চিরস্মরণীয় করে তুলতে আজই বুকিং করুন।
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleBooking)}
          className="space-y-6"
        >

          {/* Name */}
          <div>
            <label className="font-semibold text-black mb-2 block">
              নাম *
            </label>

            <input
              type="text"
              placeholder="আপনার নাম লিখুন *"
              className="input input-bordered w-full rounded-xl"
              {...register("name", {
                required: "নাম দেওয়া আবশ্যক",
              })}
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="font-semibold text-black mb-2 block">
              ফটোগ্রাফির ধরন *
            </label>

            <select
              className="select select-bordered w-full rounded-xl"
              {...register("category", {
                required: "ক্যাটাগরি নির্বাচন করুন",
              })}
            >
              <option value="">
                একটি ক্যাটাগরি নির্বাচন করুন
              </option>

              <option value="ইভেন্ট ফটোগ্রাফি">
                ইভেন্ট ফটোগ্রাফি
              </option>

              <option value="বিয়ে ফটোগ্রাফি">
                বিয়ে ফটোগ্রাফি
              </option>

              <option value="পোর্ট্রেট ফটোগ্রাফি">
                পোর্ট্রেট ফটোগ্রাফি
              </option>

              <option value="প্রোডাক্ট ফটোগ্রাফি">
                প্রোডাক্ট ফটোগ্রাফি
              </option>

              <option value="ট্রাভেল ফটোগ্রাফি">
                ট্রাভেল ফটোগ্রাফি
              </option>
            </select>

            {errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="font-semibold text-black mb-2 block">
              মোবাইল নম্বর *
            </label>

            <input
              type="tel"
              placeholder="মোবাইল নম্বর *"
              className="input input-bordered w-full rounded-xl"
              {...register("phone", {
                required: "মোবাইল নম্বর দেওয়া আবশ্যক",
              })}
            />

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold text-black mb-2 block">
              ইমেইল ঠিকানা *
            </label>

            <input
              type="email"
              placeholder="ইমেইল ঠিকানা *"
              className="input input-bordered w-full rounded-xl"
              {...register("email", {
                required: "ইমেইল দেওয়া আবশ্যক",
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="font-semibold text-black mb-2 block">
              ঠিকানা *
            </label>

            <input
              type="text"
              placeholder="রাস্তার ঠিকানা *"
              className="input input-bordered w-full mb-3 rounded-xl"
              {...register("address", {
                required: "ঠিকানা দেওয়া আবশ্যক",
              })}
            />

            {errors.address && (
              <p className="text-red-500 text-sm mb-2">
                {errors.address.message}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

              <input
                type="text"
                placeholder="শহর"
                className="input input-bordered w-full rounded-xl"
                {...register("city")}
              />

              <input
                type="text"
                placeholder="জেলা"
                className="input input-bordered w-full rounded-xl"
                {...register("district")}
              />

              <input
                type="text"
                placeholder="পোস্ট কোড"
                className="input input-bordered w-full rounded-xl"
                {...register("postCode")}
              />

            </div>
          </div>

          {/* Date */}
          <div>
            <label className="text-black font-semibold mb-2 block">
              সেশনের তারিখ *
            </label>

            <input
              type="date"
              className="input input-bordered w-full md:w-1/2 rounded-xl"
              {...register("date", {
                required: "তারিখ নির্বাচন করুন",
              })}
            />

            {errors.date && (
              <p className="text-red-500 text-sm mt-1">
                {errors.date.message}
              </p>
            )}
          </div>

          {/* Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={loading}
              className="btn w-full text-lg font-semibold border-none hover:scale-105 transition-all duration-300 bg-black text-white shadow-lg"
            >
              {loading
                ? "⏳ বুকিং হচ্ছে..."
                : "📅 বুকিং নিশ্চিত করুন"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default BookingForm;