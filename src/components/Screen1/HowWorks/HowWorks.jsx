import React from "react";
import style from "./HowWorks.module.css";
import FriendSvg from "./svg/friend.svg";
import courseSvg from "./svg/course.svg";
import rateSvg from "./svg/rate.svg";
import offerSvg from "./svg/offer.svg";
import walletSvg from "./svg/wallet.svg";
import { Link } from "react-router-dom";

export const HowWorks = () => {
  const data = [
    {
      image: FriendSvg,
      title: "Invite your Friends",
      description: "Share the link tutedude.com with your friends",
    },
    {
      image: courseSvg,
      title: "Friend purchases any course",
      description: "Using your REFERRAL CODE in the payments page",
    },
    {
      image: rateSvg,
      title: "You get ₹ 200 as referral money",
      description: "On total purchase the friend makes, into your wallet",
    },
    {
      image: offerSvg,
      title: "Your Friend gets ₹ 200 Off ",
      description:
        "On his overall fee on successful purchase using your referral code",
    },
    {
      image: walletSvg,
      title: "Transfer money from wallet",
      description:
        "When the wallet balance reaches ₹200 or more, you can withdraw it",
    },
  ];

  return (
    <div className={style.MainDiv}>
      <h2>How does it work ?</h2>
      <div className={style.MapDiv}>
        {/* ---------- Map all headings images------- */}
        {data.map((el, i) => (
          <div key={i}>
            <img src={el.image} alt={el.image} />
            <div className={style.titledDiv}>
              <h2>{el.title}</h2>
              <p>{el.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* ----------Footer------- */}
      <footer className={style.footer}>
        <p>
          <Link to="screen2">Friends Who Enrolled </Link>
        </p>
        <p>Terms & Conditions</p>
      </footer>
    </div>
  );
};
