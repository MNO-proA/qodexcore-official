import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";
import Link from "next/link";

const Products = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="SaaS Products" /> <br />
            <br />
            <Title title="Innovation in Business" className="title-bg" />
          </div>

          <div className="my-content">
            <div className="left">
              <Link href={"/"}>
                <TitleSm title="Qodalert – Get Paid Faster with Smart Invoice Reminders" />
              </Link>

              <div className="desc-p">
                <p className="desc-p">
                  Still chasing payments with spreadsheets or printed invoices?
                  They don’t follow up, remind, or accept payments—Paystack
                  does. Qodalert automates invoice reminders via WhatsApp, SMS,
                  and voice calls, ensuring clients never “forget” to pay.
                </p>
                <p className="desc-p">
                  🚀 No Paystack? We’ll set it up for you! Stop using outdated
                  templates and start invoicing digitally.
                </p>
                <p className="desc-p">
                  📲 Already using Paystack? Connect & automate! Sync your
                  invoices and let Qodalert handle follow-ups.
                </p>
                <p className="desc-p">
                  💬 WhatsApp, SMS & Voice Call Reminders – Your customers get
                  notified on the day of invoice creation, 2 days before the due
                  date, 1 day before the due date, and on the due date.
                </p>
                <p className="desc-p">
                  💳 Instant Payments – Every reminder includes a Paystack
                  payment link for easy checkout.
                </p>
                <p>
                  <Link href={"/"}>
                    🔗 No more excuses. No more delays. Sign up today and get
                    paid on time!
                  </Link>
                </p>
              </div>
            </div>

            <div className="right">
              <img src="/images/p2.jpg" alt="Img" />
            </div>
          </div>

        </div>
      </section>
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Products;
