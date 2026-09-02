import React from "react";
import Swal from "sweetalert2";
import axios from "axios";

const DeleteButton = ({ id, onDeleted, className = "" }) => {
  const handleDelete = async () => {
    const confirm = await Swal.fire({
      icon: "warning",
      title: "আপনি কি নিশ্চিত?",
      text: "এই বুকিংটি স্থায়ীভাবে মুছে যাবে!",
      showCancelButton: true,
      confirmButtonText: "হ্যাঁ, মুছে ফেলুন",
      cancelButtonText: "বাতিল",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
    });

    if (!confirm.isConfirmed) return;

    try {
      const response = await axios.delete(
        `https://sakibbackend-1.onrender.com/bookings/${id}`
      );

      console.log(response.data);

      // MongoDB থেকে সত্যিই delete হয়েছে কিনা check
      if (response.data.deletedCount > 0) {
        onDeleted(id);

        Swal.fire({
          icon: "success",
          title: "মুছে ফেলা হয়েছে",
          text: "বুকিংটি সফলভাবে ডিলিট করা হয়েছে।",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "ডাটা পাওয়া যায়নি",
          text: "এই বুকিংটি ডিলিট করা সম্ভব হয়নি।",
        });
      }
    } catch (error) {
      console.error("Delete error:", error);

      Swal.fire({
        icon: "error",
        title: "মুছতে ব্যর্থ হয়েছে",
        text:
          error.response?.data?.message ||
          "Server error হয়েছে। আবার চেষ্টা করুন।",
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