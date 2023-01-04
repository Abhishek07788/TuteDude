import React from "react";
import { Link } from "react-router-dom";
import style from "./referral.module.css";
import ReferralCode from "./ReferralCode";

const Referral = () => {
  return (
    <div className={style.ReferralMainDiv1}>
      <p>
        <Link to="/">UI/UX</Link> {">"}{" "}
        <Link to="/">Refer & Earn</Link>
      </p>

      <div className={style.ReferralMainDiv2}>
        {/* ----------- Referral box ---------- */}
        <div>
          <div className={style.Box1}>
            <p>Referral Earning</p>
            <h2>₹ 2,500</h2>
          </div>
          <div className={style.Box2}>
            <p>Total Referrals</p>
            <h2>7</h2>
          </div>
          <div className={style.Box3}>
            <p>Wallet Balance</p>
            <h2>₹ 500</h2>
          </div>
          <div className={style.Box4}>
            <p>Withdraw Balance</p>
          </div>
        </div>

        {/* ------ Referral code ----------- */}
        <ReferralCode />
      </div>
    </div>
  );
};

export default Referral;
