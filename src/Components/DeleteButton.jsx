import React from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

// প্রতিটা বুকিং row/card এ ব্যবহার করার জন্য reusable delete button
// props:
//   id        -> booking._id
//   onDeleted -> parent কে জানানোর function, যাতে state থেকেও booking বাদ যায়
//   className -> extra styling দরকার হলে (optional)
const DeleteButton = ({ id, onDeleted, className = "" }) => {
  const axiosSecure = useAxiosSecure();

  const handleDelete = async () => {
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
      onDeleted(id);
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

  return (
    <button
      type="button"
      className={`btn btn-ghost btn-xs text-red-500 ${className}`}
      onClick={handleDelete}
    >
      মুছুন
    </button>
  );
};

export default DeleteButton;