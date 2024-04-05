import React from "react";

const Invite = () => {
  return (
    <section className="invite-background-star w-full text-center relative z-10 ">
      <div className="container m-auto p-[20px] py-[60px]">
        <h2 className="mb-[20px] block text-still-here-title">
          You{`'`}re still here?
        </h2>
        <p className="my-[20px] block">
          Well, that{`'`}s all this page has to say. Maybe you should go read
          the language tour!
        </p>
        <a
          className="inline-block rounded-full bg-brown-pink px-[40px] py-[10px] text-still-here-button text-white"
          href="https://tour.gleam.run/"
        >
          Let{`'`}s go!
        </a>
        <hr className="m-[40px] block border border-underwatter-blue opacity-[0.2]" />
        <h3 className="my-[20px] block text-still-here-subtitle">
          Wanna keep in touch?
        </h3>
        <p className="my-[20px] block leading-[1.3] tracking-[0.5px]">
          Subscribe to the Gleam newsletter
        </p>
        <div className="m-auto">
          <div className="m-auto max-w-[38rem]">
            <div className="block w-[100%]">
              <form action="">
                <div className="mt-[16px] flex items-end justify-center">
                  <div className=" mb-[0.5rem] ">
                    <input
                      type="email"
                      placeholder="cool.person@example.com"
                      className="flex-grow rounded-l-[100px] bg-white px-[0.75rem] py-[0.375rem] leading-[1.6]"
                    />
                  </div>
                  <input
                    type="submit"
                    value={"Keep me updated!"}
                    className="mb-[0.5rem] rounded-r-[100px] bg-brown-pink px-[0.75rem] py-[0.375rem] text-white-fefe"
                  />
                </div>
              </form>
            </div>
            <div className="text-center">
              <div
                className="m-auto mt-[10px] inline-block w-auto text-center"
              >
                <div className="text-center">
                  <p>
                    Powered by{" "}
                    <a
                      href="https://emailoctopus.com/?utm_source=powered_by_form&amp;utm_medium=user_referral"
                      target="_blank"
                      className={`link-otto ml-[5px] pl-[23px] relative`}
                    >
                      EmailOctopus
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="my-[20px] leading-[1.3] tracking-[0.5px]">We send emails at most a few times a year, and we{"'"}ll never share your email with anyone else.</p>
        <p className="my-[20px] opacity-[0.8] text-small text-blacker">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
      </div>
    </section>
  );
};

export default Invite;
