import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `PHero || ${title}`;
  }, [title]);
};

export default useTitle;
