// import React from 'react'

// function LandingPage() {
//   return (
//     <div>LandingPage component</div>
//   )
// }

// export default LandingPage



import React from "react";
import { DollarSign, Filter, Menu, Moon, Star, X, Zap } from "lucide-react";
import UserImg from "../images/user.jpg";
import ReviewById from "../components/Review/ReviewById.jsx";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import landingImg from "../images/landing.jpg";




export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { profileId } = useParams();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
            <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border p-2">
              <p className="text-xs font-medium md:text-sm">
                Welcome to Road-Ready
              </p>
            </div>
            <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              One Stop Solution for Car-Rental Problems
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-gray-700">
              Looking for hassle-free and reliable car rental services? You've
              come to the right place! At Road-Ready, we offer a wide range of
              vehicles to suit your every need, whether it's a quick city trip,
              a family vacation, or a business journey.
            </p>
            <div className="mt-8">
              {/* <Link to={`/ReviewById/${profileId}`} className='btn btn-primary mx-3' >Your Reviews</Link> */}
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Explore Now
              </button>
            </div>
          </div>
          <div className="rounded-lg bg-gray-200 p-4">
            <img
              className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[500px] lg:object-center"
              src={UserImg}
              alt="User"
            />
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-black">
              100+ Smooth Experience
            </p>
          </div>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Transform Your Travels with Road-Ready
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Elevate your travel experience with our seamless booking process and
            fleet of top-of-the-line vehicles, redefining car rental standards
            in 2024.
          </p>
        </div>
        {/* <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <DollarSign className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
            <p className="mt-4 text-sm text-gray-600">
            Experience peace of mind with our secure payment options, ensuring your transactions are safeguarded at every step.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Zap className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Fast & Easy to Load</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Moon className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Light & Dark Version</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Filter className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
        </div> */}

        {/* why road ready-line */}
        <div class="host-car-sharing mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 pl-20 pt-36">
          <section class="host-car-sharing-benefits flex items-center">
            <h2 class="host-car-sharing-benefits-title w-36">
              Why Choose Road-Ready Car Rental?
            </h2>
            <article class="host-car-sharing-benefits-blocks flex gap-36 pl-36">
              <article class="host-car-sharing-benefits-blocks-block  items-center">
                <div class="host-car-sharing-benefits-blocks-block-image-container flex items-center justify-center">
                  <img
                    src="https://doav52ie4cv60.cloudfront.net/images/repair.svg"
                    alt="Accessible"
                  />
                </div>
                <div class="host-car-sharing-benefits-blocks-block-title font-bold py-3">
                  Accessible
                </div>
                <div class="host-car-sharing-benefits-blocks-block-description w-36 ">
                  There’s always a Road-Ready car near you
                </div>
              </article>
              <article class="host-car-sharing-benefits-blocks-block ">
                <div class="host-car-sharing-benefits-blocks-block-image-container flex items-center justify-center">
                  <img
                    src="https://doav52ie4cv60.cloudfront.net/images/earning.svg"
                    alt="Secure"
                  />
                </div>
                <div class="host-car-sharing-benefits-blocks-block-title font-bold py-3 ">
                  Secure
                </div>
                <div class="host-car-sharing-benefits-blocks-block-description w-36">
                  Pay 0 security deposit, get unlimited KMs
                </div>
              </article>
              <article class="host-car-sharing-benefits-blocks-block">
                <div class="host-car-sharing-benefits-blocks-block-image-container flex items-center justify-center">
                  <img
                    src="https://doav52ie4cv60.cloudfront.net/images/flexibility.svg"
                    alt="Convenient"
                  />
                </div>
                <div class="host-car-sharing-benefits-blocks-block-title font-bold py-3">
                  Convenient
                </div>
                <div class="host-car-sharing-benefits-blocks-block-description w-36">
                  From Hatchbacks to SUVs, choose from 25,000+ cars
                </div>
              </article>
            </article>
          </section>
        </div>
      </div>
      {/* FAQs */}

      <section className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
        <div>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
              Welcome to Road-Ready Car Rentals! Here are some common questions
              to help you get started.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
            {[
              {
                question: "How do I make a reservation?",
                answer:
                  "To make a reservation, simply browse our available cars, select your desired dates, and follow the prompts to complete the booking process online. You can also contact our customer service team for assistance.",
              },
              {
                question: "What documents do I need to rent a car?",
                answer:
                  "To rent a car, you will typically need a valid driver's license, a credit card in your name for payment, and in some cases, additional identification such as a passport or proof of address. Specific requirements may vary based on location and rental company.",
              },
              {
                question: "Is insurance included in the rental?",
                answer:
                  "Basic insurance coverage is often included in the rental price, but it may have limitations. We offer optional insurance upgrades for additional peace of mind. Please review the terms and conditions of your rental agreement for details.",
              },
              {
                question: "What is the minimum age to rent a car?",
                answer:
                  "The minimum age requirement to rent a car varies by location and rental company, but it is typically between 21 and 25 years old. Young drivers may be subject to additional fees or restrictions. Please check our policies for specific age requirements.",
              },
            ].map((faq, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold text-black">
                  {faq.question}
                </h2>
                <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-gray-600">
            Can't find what you're looking for?{" "}
            {/* <a href="#" title="" className="black font-semibold hover:underline"> */}
            <p className="font-bold text-blue-800 ">Contact us</p>
            {/* </a> */}
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative my-12 overflow-hidden py-10 md:my-24 lg:my-32">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:-mr-2 lg:w-1/3">
                <div className="mx-auto max-w-sm rounded-md border border-gray-200 bg-white pb-20 pl-5 pr-8 pt-6 lg:pb-8">
                  <span className="mb-2 block text-sm font-semibold text-gray-400">
                    Road Ready
                  </span>
                  <span className="flex items-end">
                    <span className="text-4xl font-extrabold leading-none">
                      $200
                    </span>
                    <span className="text-sm font-semibold">/month</span>
                  </span>
                  <div className="mt-7 border-t border-gray-100 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          24/7 Roadside Assistance
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Unlimited Mileage
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Comprehensive Insurance Coverage
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Flexible Booking Options
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Wide Selection of Vehicles
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          No Hidden Fees
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
              <div className="-mt-4 w-full lg:-mt-0 lg:w-1/3">
                <div className="pt-22 relative mx-auto max-w-sm rounded-lg bg-black px-10 pb-16">
                  <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white p-2">
                    <div className="flex-shrink-0 rounded-full bg-black px-5 py-4 text-sm font-semibold uppercase text-white">
                      Most Popular
                    </div>
                  </div>
                  <span className="mb-2 block pt-10 text-sm font-semibold text-white">
                    Gold
                  </span>
                  <span className="flex items-end text-white">
                    <span className="text-4xl font-extrabold leading-none">
                      $150
                    </span>
                    <span className="text-sm font-semibold">/month</span>
                  </span>
                  <div className="mt-7 border-t border-orange-500 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">
                          24/7 Roadside Assistance
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">
                          Unlimited Mileage
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">
                          Comprehensive Insurance Coverage
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">
                          Flexible Booking Options
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">
                          Wide Selection of Vehicles
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">
                          No Hidden Fees
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
              <div className="-mt-4 w-full lg:-ml-2 lg:-mt-0 lg:w-1/3">
                <div className="rounded-b-5xl lg:rounded-r-5xl mx-auto max-w-sm border border-gray-200 bg-white pb-8 pl-8 pr-5 pt-12 lg:rounded-b-none lg:pt-6">
                  <span className="mb-2 block text-sm font-semibold text-gray-400">
                    Platinum
                  </span>
                  <span className="flex items-end">
                    <span className="text-4xl font-extrabold leading-none">
                      $250
                    </span>
                    <span className="text-sm font-semibold">/month</span>
                  </span>
                  <div className="mt-7 border-t border-gray-100 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          24/7 Roadside Assistance
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Unlimited Mileage
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Comprehensive Insurance Coverage
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Flexible Booking Options
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Wide Selection of Vehicles
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          No Hidden Fees
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NewsLetter */}
      <div className="mx-auto my-12 max-w-7xl px-2 py-2 md:my-24 lg:my-32 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <h2 className="text-3xl font-bold text-black">
              Sign up for exclusive car rental deals
            </h2>
            <p className="mt-4 text-gray-600">
              Subscribe to our newsletter and be the first to know about our
              latest car rental offers, discounts, and promotions.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-800">
                Trusted by over 100,000+ customers
              </p>
              <div className="mt-2 flex items-center">
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 inline-block">
                  <span className="text-sm font-semibold text-gray-800">
                    4.8/5 . 3420 Reviews
                  </span>
                </span>
              </div>
            </div>
            <form className="mt-6">
              <div className="flex w-full max-w-md flex-col space-y-4">
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Your Email Address"
                ></input>
                <button
                  type="button"
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-2">
              <span className="text-sm text-gray-600">
                By signing up, you agree to receive promotional emails from us.
                You can unsubscribe at any time.
              </span>
            </p>
          </div>
          <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2 bg-contain ">
            <img
              className=" w-full rounded-md object-cover"
              src={landingImg}
              alt="Landing"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
