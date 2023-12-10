import React, { useState } from "react";
import { useCallback } from "react";
import { createContext } from "react";

export const ReviewCountContext = createContext({});

export default function ReviewCountProvider({ children }){
  const [reviewCount, setReviewCount] = useState({
    r_allCount: 0,
    r_replyCount: 0,
  });

  const updateReviewCounts = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:4000/admin/Reviewdata", {});
      const data = await response.json();
      setReviewCount({
        r_allCount: data.length,
        r_replyCount: data.filter(review => review.r_reply.length > 0).length,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <ReviewCountContext.Provider value={{ reviewCount, updateReviewCounts }}>
      {children}
    </ReviewCountContext.Provider>
  );
};