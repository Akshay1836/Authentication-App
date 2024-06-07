"use client";

import axios from "axios";
import React, { useEffect } from "react";

export default function Data() {
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/datas/list");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Hello, welcome</div>;
}
