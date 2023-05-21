import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Hero Galore || ${title}`;
  }, [title]);
};

export default useTitle;
