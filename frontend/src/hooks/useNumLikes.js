import { useState, useEffect } from "react";
import axios from "axios";

export default function useNumLikes(projectId) {
  const [numLikes, setNumLikes] = useState(0);

  useEffect(() => {
    const fetchLikeNumber = async () => {
      const response = await axios.get(`/likes/${projectId}/count`);
      setNumLikes(response.data);
    };
    fetchLikeNumber();
  }, [projectId]);

  return numLikes;
}
