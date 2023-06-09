import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";

const Header = ({ walletToggle, navigationToggle }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  return (
    <header id="header">
      <div className="header">
        <div className="header_in">
          <div className="trigger_logo">
            
            <div className="logo">
              <Link href="/">
                <a>
                <img className="img__logo" src="/img/logo.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul>
              <li>
                <Link href="/#home">
                  <a className="creative_link">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <a className="creative_link">About</a>
                </Link>
              </li>
              <li>
                <Link href="https://edittion-drop.vercel.app/">
                  <a className="creative_link">Mint</a>
                </Link>
              </li>
              <li>
                <Link href="/#collection">
                  <a className="creative_link">Collection</a>
                </Link>
              </li>
              <li>
                <Link href="/#game">
                  <a className="creative_link">GamePlay</a>
                </Link>
              </li>
              <li>
                <Link href="/#team_name">
                  <a className="creative_link">Team</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="play_games">
             <a  href="https://nft-gated-eight.vercel.app/login"
             >Play Games</a>
          </div>
          <div className="wallet">
              <ConnectWallet />
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  Header
);
