import Link from "next/link";
import { Fragment, useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";

const MobileNavigation = ({ walletToggle, navigationToggle }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="metaportal_fn_mobnav">
        <div className="mob_top">
          <div className="social_trigger">
            <div className="trigger" onClick={() => navigationToggle(true)}>
              <span />
            </div>
            <div className="social">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fb.
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tw.
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    In.
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ln.
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="play_games" >
             <a  href="https://nft-gated-eight.vercel.app/login" 
             style={{fontSize: "1.5vw", borderRadius:"8px", background:"#7000ff", }}>Play Games</a>
          </div>
          <div className="wallet">
              <ConnectWallet />
          </div>
        </div>
        <div className="mob_mid">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/img/logo.png" alt="" />
              </a>
            </Link>
          </div>
          <div
            className={`trigger ${toggle ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
        <div className="mob_bot" style={{ display: toggle ? "block" : "none" }}>
          <ul>
            <li>
              <a className="creative_link" href="">
                Home
              </a>
            </li>
            <li>
              <a className="creative_link" href="#about">
                About
              </a>
            </li>
            <li>
                <Link href="/nft-single">
                  <a className="creative_link">Mint</a>
                </Link>
              </li>
            <li>
              <a className="creative_link" href="#collection">
                Collection
              </a>
            </li>
            <li>
              <a className="creative_link" href="#game">
                GamePlay
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  MobileNavigation
);
