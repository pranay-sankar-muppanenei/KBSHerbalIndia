import React, { useState } from "react";
import { FaStar, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

// Helper to get initials for avatar
const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const RatingAndReview = ({
  rating,
  reviewCount,
  ratingDistribution,
  reviews: initialReviews,
}) => {
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });
  const [reviews, setReviews] = useState(initialReviews || []);
  const [likeCounts, setLikeCounts] = useState(
    (initialReviews || []).map(() => ({ up: 0, down: 0 }))
  );

  // Filter reviews by star
  const filteredReviews =
    filter === "All"
      ? reviews
      : reviews.filter((r) => r.rating === Number(filter[0]));

  // Handle review form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;
    setReviews([
      {
        ...newReview,
        date: new Date().toISOString().split("T")[0],
      },
      ...reviews,
    ]);
    setLikeCounts([{ up: 0, down: 0 }, ...likeCounts]);
    setShowForm(false);
    setNewReview({ name: "", rating: 5, comment: "" });
  };

  // Handle like/dislike
  const handleLike = (idx, type) => {
    setLikeCounts((prev) =>
      prev.map((c, i) => (i === idx ? { ...c, [type]: c[type] + 1 } : c))
    );
  };

  // Star bar data
  const starPercents = [5, 4, 3, 2, 1].map(
    (star) => ratingDistribution?.[star] || 0
  );

  return (
    <div className="w-full md:w-[420px] max-w-full mx-auto p-6 mt-0">
      {/* Rating summary */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="flex flex-col items-center sm:items-start min-w-[90px]">
          <span className="text-3xl font-bold text-gray-800">
            {rating?.toFixed(1) || "0.0"}
          </span>
          <div className="flex text-yellow-400 mt-1">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(rating) ? "" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-gray-500 text-base mt-1">
            {reviewCount} reviews
          </span>
        </div>
        {/* Star distribution */}
        <div className="flex-1 min-w-[180px]">
          {[5, 4, 3, 2, 1].map((star, idx) => (
            <div key={star} className="flex items-center mb-1">
              <span className="w-4 text-gray-700 text-sm">{star}</span>
              <div className="flex-1 mx-2 bg-gray-200 rounded-full h-2 relative">
                <div
                  className="bg-black h-2 rounded-full"
                  style={{ width: `${starPercents[idx]}%` }}
                ></div>
              </div>
              <span className="w-10 text-gray-700 text-sm">
                {starPercents[idx]} %
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter buttons */}
      <div className="flex gap-3 mt-6 mb-4">
        {["All", "5 Star", "4 Star"].map((btn) => (
          <button
            key={btn}
            className={`px-5 py-1 rounded-full text-base font-medium ${
              filter === btn
                ? "bg-[#7A9B5C] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFilter(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Reviews */}
      <div className="space-y-8">
        {filteredReviews.length === 0 && (
          <div className="text-gray-500 text-center">No reviews yet.</div>
        )}
        {filteredReviews.map((r, idx) => (
          <div key={idx} className="flex items-start gap-3">
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-[#7A9B5C] overflow-hidden">
              {r.avatar ? (
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>{getInitials(r.name)}</span>
              )}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-800">{r.name}</div>
              <div className="text-xs text-gray-500 mb-1">
                {r.date
                  ? (() => {
                      const d = new Date(r.date);
                      const now = new Date();
                      const diff = Math.floor(
                        (now - d) / (1000 * 60 * 60 * 24)
                      );
                      if (diff === 0) return "Today";
                      if (diff === 1) return "1 day ago";
                      if (diff < 30) return `${diff} days ago`;
                      const months = Math.floor(diff / 30);
                      return months === 1
                        ? "1 month ago"
                        : `${months} months ago`;
                    })()
                  : ""}
              </div>
              <div className="flex text-yellow-400 mb-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={i < r.rating ? "" : "text-gray-300"}
                  />
                ))}
              </div>
              <div className="text-gray-800">{r.comment}</div>
              <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
                <button
                  className="flex items-center gap-1 hover:text-[#7A9B5C] transition"
                  onClick={() => handleLike(idx, "up")}
                  type="button"
                >
                  <FaRegThumbsUp /> {likeCounts[idx]?.up || 0}
                </button>
                <button
                  className="flex items-center gap-1 hover:text-[#7A9B5C] transition"
                  onClick={() => handleLike(idx, "down")}
                  type="button"
                >
                  <FaRegThumbsDown /> {likeCounts[idx]?.down || 0}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Review Us Button */}
      <div className="flex justify-center mt-8">
        <button
          className="bg-[#7A9B5C] text-white text-xl font-bold px-8 py-2 rounded-full shadow hover:bg-[#5C7A3C] transition w-full"
          onClick={() => setShowForm((v) => !v)}
        >
          Review Us!
        </button>
      </div>

      {/* Add Review Form */}
      {showForm && (
        <form
          className="mt-6 bg-gray-50 rounded-2xl p-5 shadow-md flex flex-col gap-4 w-full max-w-xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9B5C]"
              placeholder="Your Name"
              value={newReview.name}
              onChange={(e) =>
                setNewReview((r) => ({ ...r, name: e.target.value }))
              }
              required
            />
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9B5C]"
              value={newReview.rating}
              onChange={(e) =>
                setNewReview((r) => ({
                  ...r,
                  rating: Number(e.target.value),
                }))
              }
            >
              {[5, 4, 3, 2, 1].map((s) => (
                <option key={s} value={s}>
                  {s} Star
                </option>
              ))}
            </select>
          </div>

          <textarea
            className="border border-gray-300 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#7A9B5C]"
            placeholder="Write your review..."
            value={newReview.comment}
            onChange={(e) =>
              setNewReview((r) => ({ ...r, comment: e.target.value }))
            }
            rows={4}
            required
          />

          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              type="submit"
              className="bg-[#7A9B5C] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#5C7A3C] transition"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-400 transition"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default RatingAndReview;
