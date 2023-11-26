import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Chobby",
          from_email: form.email,
          to_email: "kwb020312@naver.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };
  const handleFocus = () => {};
  const handleBlur = () => {};
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">언제든 연락해주세요</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-black-500 font-semibold" htmlFor="">
            이름
            <input
              type="text"
              name="name"
              className="input"
              placeholder="홍길동"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold" htmlFor="">
            이메일
            <input
              type="email"
              name="email"
              className="input"
              placeholder="홍길동@naver.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold" htmlFor="">
            메시지
            <textarea
              rows={4}
              name="message"
              className="textarea"
              placeholder="어떤 말을 하고싶은지 자유롭게 적어주세요!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "전송중..." : "전송하기"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
