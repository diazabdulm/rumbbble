import { useState, useEffect } from "react";
import axios from "axios";

export default function useProject(projectId) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/posts/${projectId}`);
      setData(response.data);
    };
    fetchData();
  }, [projectId]);

  return data;
}
