import { Contact2, Github, Linkedin, Loader, Mail } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setisSubmitting] = useState(false);

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisSubmitting(true);
    const response = await toast.promise(
      emailjs.sendForm("service_u5xg1cp", "template_9yzo4r9", form.current!, {
        publicKey: "YjC9No9Xaqs3_2tM-",
      }),
      {
        pending: "Sending message",
        success: "Message sent!",
        error: "Error sending message",
      }
    );

    if (response.status === 200) {
      form.current!.reset();
    }

    setisSubmitting(false);
  };

  return (
    <section id="contact" className="section-container flex-col gap-12">
      <h1 className="text-primary text-3xl md:text-[50px] leading-tight flex items-center gap-3">
        <Contact2 className="size-10" /> Contact
      </h1>
      <div className="flex w-full justify-around gap-5">
        <div className="flex flex-col gap-5 text-center">
          <h1 className="text-3xl font-bold text-primary">
            Let's talk about anything
          </h1>
          <div className="space-y-3 text-lg font-bold h-full flex flex-col">
            <div className="flex items-center gap-2">
              <Mail />
              yashilsingh0208@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Github />
              <p
                className="underline cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/yashil-singh", "_blank")
                }
              >
                yashil-singh
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin />
              <p
                className="underline cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/yashil-singh-31359b219",
                    "_blank"
                  )
                }
              >
                Yashil Singh
              </p>
            </div>
          </div>
        </div>
        <div className="w-1 bg-black/50"></div>
        <form
          className="flex flex-col gap-5 w-full max-w-[500px]"
          ref={form}
          onSubmit={sendMail}
        >
          <div className="relative">
            <input
              className="peer p-3 w-full rounded outline-none bg-inherit border border-white focus:border-primary z-20"
              type="text"
              name="user_name"
              placeholder=" "
              required
            />
            <label className="absolute z-0 peer-placeholder-shown:top-3 text-sm peer-placeholder-shown:text-base peer-focus:block -top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary left-2 bg-background px-2 transition-all">
              Full Name
            </label>
          </div>
          <div className="relative">
            <input
              className="peer p-3 w-full rounded outline-none bg-inherit border border-white focus:border-primary"
              type="email"
              name="user_email"
              placeholder=" "
              required
            />
            <label className="absolute peer-placeholder-shown:top-3 text-sm peer-placeholder-shown:text-base peer-focus:block -top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary left-2 bg-background px-2 transition-all">
              Email Address
            </label>
          </div>
          <div className="relative">
            <textarea
              className="peer p-3 w-full rounded outline-none bg-inherit border border-white focus:border-primary min-h-[136px] max-h-[250px] overflow-y-auto"
              rows={5}
              name="message"
              placeholder=" "
              required
            />
            <label className="absolute peer-placeholder-shown:top-3 text-sm peer-placeholder-shown:text-base peer-focus:block -top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary left-2 bg-background px-2 transition-all">
              Write Something
            </label>
          </div>

          <button
            className="bg-primary p-3 rounded font-bold flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader className="animate-spin duration-500" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
