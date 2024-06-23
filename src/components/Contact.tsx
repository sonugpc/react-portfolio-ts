import { FormEvent, useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({});
  const submitForm = ($ev: FormEvent) => {
    $ev.preventDefault();
    console.log(formData);
  };

  const handleChanges = ($ev: any) => {
    setFormData({ ...formData, [$ev.target!.name]: $ev.target!.value });
  };
  return (
    <section id="contact" className="section-contact 2xl:py-[80px] py-[70px]">
      <div
        className="banner text-center mb-[30px] aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="300"
      >
        <span className="text-[14px] text-[#777]">FORM</span>
        <h2 className="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
          Get In <span className="text-[#7963e0]">TOUCH</span>
        </h2>
      </div>
      <form onSubmit={submitForm}>
        <div className="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] px-6">
          <div className="m-b-minus-24px w-full">
            <div
              className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              <div className="border rounded-lg">
                <div className="border-b">
                  <input
                    type="text"
                    name="fname"
                    className="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none rounded-t-lg"
                    id="fname"
                    placeholder="Full Name"
                    onChange={handleChanges}
                  />
                </div>
                <div className="border-b">
                  <input
                    type="email"
                    name="email"
                    className="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="umail"
                    placeholder="Email"
                    onChange={handleChanges}
                  />
                </div>
                <div className="border-b">
                  <input
                    type="text"
                    name="phone"
                    className="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="phone"
                    placeholder="Phone"
                    onChange={handleChanges}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none rounded-b-lg"
                    id="subject"
                    placeholder="Subject"
                    name="subject"
                    onChange={handleChanges}
                  />
                </div>
              </div>
              <div className="mb-0">
                <div className="mb-4">
                  <textarea
                    className="w-full border rounded-xl pl-4 pt-2 focus:outline-none"
                    id="exampleFormControlTextarea1"
                    rows={8}
                    placeholder="Message"
                    name="message"
                    onChange={handleChanges}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-white bg-[#7963e0] hover:bg-opacity-80 no-underline font-medium rounded-full text-sm px-8 py-2.5 mr-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Contact;
