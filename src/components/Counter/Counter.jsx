import React, { useEffect, useRef, useState } from "react";

const Counter = ({ start, end, label, icon }) => {
  const element = useRef(null);
  const [count, setCount] = useState(start);
  const time = Math.ceil((end - start) / 100); //dynamic speed
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              setCount((prev) => {
                if (prev > end) {
                  clearInterval(interval);
                  return prev;
                } else {
                  return prev + 1;
                }
              });
            }, time);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    if (element.current) {
      observer.observe(element.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={element}
      className="bg-gray-100 flex items-center flex-col gap-2 justify-center rounded-md border border-gray-200 p-5"
    >
      <span>{icon}</span>
      <h4 className="font-bold text-[35px] text-gray-700">{count}+</h4>
      <p className=" text-gray-500 text-center">{label}</p>
    </div>
  );
};

export default Counter;
