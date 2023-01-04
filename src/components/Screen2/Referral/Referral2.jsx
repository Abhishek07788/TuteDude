import React from "react";
import style from "./Referral.module.css";
import arrow from "./arrow.svg";
import { Link } from "react-router-dom";

const Referral2 = () => {
  return (
    <div className={style.MainDiv}>
      <p style={{ textAlign: "left" }}>
        <Link to="/">UI/UX</Link> {">"} <Link to="/">Refer & Earn</Link> {">"}{" "}
        <Link to="/screen2">Friends Referred</Link>
      </p>
      <Link to="/">
        <h3 className={style.goBack}>
          <img src={arrow} alt="arrow" />
          go back
        </h3>
      </Link>
      <div className={style.ReferralDiv}>
        {/* ------ Referral code ----------- */}
        <div className={style.ReferralCode}>
          <h3>Your Referral Code </h3>
          <p>&nbsp;EDCH54</p>
        </div>
        <div className={style.Wallet}>
          <p>Wallet Balance</p>
          <h2>₹ 500</h2>
        </div>
      </div>
    </div>
  );
};

export default Referral2;
