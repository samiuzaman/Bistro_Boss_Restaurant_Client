import { useEffect, useState } from "react";
import axios from "axios";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:5000/menu").then((res) => {
      setLoading(false);
      setMenu(res.data);
    });
  }, []);
  return [menu, loading];
};

export default useMenu;
