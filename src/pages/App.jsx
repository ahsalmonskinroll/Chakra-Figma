import { useState } from "react";
// import "./App.css";
import logo from "../design/assets/logo.svg";
import home from "../design/assets/home.svg";
import table from "../design/assets/table.svg";
import billing from "../design/assets/billing.svg";
import rtl from "../design/assets/rtl.svg";
import profile from "../design/assets/person.svg";
import signin from "../design/assets/signin.svg";
import signup from "../design/assets/rocket.svg";
import help from "../design/assets/help.svg";
import search from "../design/assets/search.svg";
import notification from "../design/assets/notification.svg";
import settings from "../design/assets/settings.svg";
import person2 from "../design/assets/person2.svg";
import cart from "../design/assets/cart.svg";
import text from "../design/assets/text.svg";
import earth from "../design/assets/earth.svg";
import wallet from "../design/assets/wallet.svg";
import arrow from "../design/assets/arrow.svg";

function App() {
  // const inputRef = useRef();

  const SidebarItem = ({ icon, label }) => (
    <div className="col-12 df aic pr pointer hvr1">
      <div className="row left16">
        <div className="col-auto rectangle4 whitebg df jc aic">
          <img src={icon} alt={label} />
        </div>
        <div className="col-auto df aic f12 gray400">{label}</div>
      </div>
    </div>
  );

  const AnalyticsCard = ({ icon, label }) => (
    <div className="col tdmoney rectangle9 py-3">
      <div className="row">
        <div className="col df aic">
          <div className="row">
            <div className="gray400 f12">{label}</div>
            <div>
              <span className="gray700 f18">$53,000</span>{" "}
              <span className="green f14">+55%</span>
            </div>
          </div>
        </div>
        <div className="col-auto df je aic">
          <div className="rectangle6 tealbg df aic jc">
            <img className="iconimg1" src={icon} alt={label} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <aside>
                <div className="sidebar pt-3">
                  <div className="row">
                    <div className="col-auto">
                      <img src={logo} alt="Logo" />
                    </div>
                    <div className="col-auto f14 title">
                      PURITY UI DASHBOARD
                    </div>
                  </div>
                  <div className="menu">
                    <div className="row gap-4 w17">
                      <div className="col-12 rectangle2 whitebg df aic pr pointer">
                        <div className="row left16">
                          <div className="col-auto rectangle3 tealbg df jc aic">
                            <img src={home} alt="Dashboard" />
                          </div>
                          <div className="col-auto df aic f12">Dashboard</div>
                        </div>
                      </div>
                      <SidebarItem icon={table} label="Tables" />
                      <SidebarItem icon={billing} label="Billing" />
                      <SidebarItem icon={rtl} label="RTL" />
                      <div className="col-12 df aic pr f12 left16">
                        ACCOUNT PAGES
                      </div>
                      <SidebarItem icon={profile} label="Profile" />
                      <SidebarItem icon={signin} label="Sign In" />
                      <SidebarItem icon={signup} label="Sign Up" />
                      <div className="col-12 rectangle5 tealbg df pr ellipsebg">
                        <div className="row left16 pt-3">
                          <div className="col-12 rectangle3 whitebg df jc aic">
                            <div>
                              <img src={help} alt="Help" />
                            </div>
                          </div>
                          <div className="col-12 pt-4 ps-0 whitef">
                            Need help?
                          </div>
                          <div className="col-12 ps-0 whitef fw400 f12">
                            Please check our docs
                          </div>
                          <button className="col-12 rectangle5 whitebg df aic jc button1 gray700 f10">
                            DOCUMENTATION
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-9">
              <article>
                <div className="row gap-3">
                  <div className="col-12">
                    <div className="row">
                      <div className="col text">
                        <div className="row">
                          <div className="col-12 breadcrumbb">
                            <p className="m-0 pointer">
                              <span className="gray400 f12 fw400">Pages</span>
                              <span className="px-2 f12 fw400">/</span>
                              <span className="f12 fw400">Dashboard</span>
                            </p>
                          </div>
                          <div className="col-12 f14">Dashboard</div>
                        </div>
                      </div>
                      <div className="col menu2 df je me-4 aic">
                        <div className="row">
                          <div className="col search rectanglein">
                            <div className="row">
                              <div className="col-auto">
                                <img
                                  className="iconimg"
                                  src={search}
                                  alt="Search"
                                />
                              </div>
                              <div className="col">
                                <input
                                  // ref={inputRef}
                                  type="text"
                                  id="searchBar"
                                  placeholder="Type here..."
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-auto pointer df aic f12 gray500">
                            <img
                              className="iconimg"
                              src={person2}
                              alt="Profile"
                            />
                            Sign In
                          </div>
                          <div className="col-auto pointer df aic">
                            <img
                              className="iconimg"
                              src={settings}
                              alt="Settings"
                            />
                          </div>
                          <div className="col-auto pointer df aic">
                            <img
                              className="iconimg"
                              src={notification}
                              alt="Notification"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row gap-3">
                      <AnalyticsCard icon={wallet} label="Today's Money" />
                      <AnalyticsCard icon={earth} label="Today’s Users" />
                      <AnalyticsCard icon={text} label="New Clients" />
                      <AnalyticsCard icon={cart} label="Total Sales" />
                    </div>
                  </div>
                  <div className="col-12 big-cards">
                    <div className="row gap-3">
                      <div className="col rectangle9"></div>
                      <div className="col rectangle9">
                        <div className="secondcard m-3 pointer">
                          <div className="whitef p-3">
                            Work with the Rockets
                          </div>
                          <div className="whitef f14 fw400 ps-3">
                            Wealth creation is an evolutionarily recent
                            positive-sum game.
                          </div>
                          <div className="whitef f14 fw400 ps-3">
                            It is all about who take the opportunity first.
                          </div>
                          <div className="whitef f10 readmore df ps-3">
                            Read more
                            <span className="mx-1 ">
                              <img src={arrow} alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 analytics-cards2 rectangle9">sdsd</div>
                  <div className="col-12 content-cards rectangle9">sds</div>
                  <div className="col-12 footer rectangle9">sdsd</div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
