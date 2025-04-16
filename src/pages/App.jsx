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
import whtarrow from "../design/assets/whtarrow.svg";
import blcarrow from "../design/assets/blcarrow.svg";
import chakra from "../design/assets/chakra.svg";
import chart from "../design/assets/chart.svg";
import dataimg from "../design/assets/data.svg";
import progressimg from "../design/assets/progress.svg";
import salesdataimg from "../design/assets/salesdata.svg";

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

  const AnalyticsCard = ({ icon, label, value, percent }) => (
    // const percentClass = percent.startsWith('+') ? 'green' : 'red';
    <div className="col tdmoney rectangle9 py-3">
      <div className="row">
        <div className="col df aic">
          <div className="row">
            <div className="gray400 f12">{label}</div>
            <div>
              <span className="gray700 f18">{value}</span>{" "}
              <span className="green f14">{percent}</span>
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

  const Cards = ({ icon, label, value, progress }) => (
    <div className="row">
      <div className="col">
        <div className="row df jc aic g-2">
          <div className="col-auto">
            <div className="rectangle3 tealbg df jc aic">
              <img className="iconimg2" src={icon} alt="" />
            </div>
          </div>
          <div className="col gray400 f12">{label} </div>
        </div>
      </div>
      <div className="col-12 f18 mt-2">{value}</div>
      <div className="col">
        <div className="w70">
          <img src={progress} alt="" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-auto me-3">
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
            <div className="col">
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
                      <AnalyticsCard
                        icon={wallet}
                        label="Today's Money"
                        value="$53,000"
                        percent="+55%"
                      />
                      <AnalyticsCard
                        icon={earth}
                        label="Today’s Users"
                        value="2,300"
                        percent="+5%"
                      />
                      <AnalyticsCard
                        icon={text}
                        label="New Clients"
                        value="+3,052"
                        percent="-14%"
                      />
                      <AnalyticsCard
                        icon={cart}
                        label="Total Sales"
                        value="$173,000"
                        percent="+8%"
                      />
                    </div>
                  </div>
                  <div className="col-12 big-cards">
                    <div className="row gap-3">
                      <div className="col rectangle9">
                        <div className="row pointer">
                          <div className="col">
                            <div className="df flex-column justify-content-between py-3">
                              <div>
                                <div className="f12 gray400">
                                  Built by developers
                                </div>
                                <div className="f18 gray700 py-1">
                                  Purity UI Dashboard
                                </div>
                                <div className="f14 gray400 fw400">
                                  From colors, cards, typography to complex
                                  elements, you will find the full
                                  documentation.
                                </div>
                              </div>
                              <div className="mt-5 pt-1 f10">
                                Read more{" "}
                                <span className="ms-1">
                                  <img src={blcarrow} alt="forward" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto df jc aic p-3">
                            <div className="imgbox">
                              <img className="img-fluid " src={chakra} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col rectangle9">
                        <div className="secondcard my-3 pointer df flex-column justify-content-between p-3">
                          <div>
                            <div className="whitef pb-1">
                              Work with the Rockets
                            </div>
                            <div className="whitef f14 fw400 ">
                              Wealth creation is an evolutionarily recent
                              positive-sum game.
                            </div>
                            <div className="whitef f14 fw400 ">
                              It is all about who take the opportunity first.
                            </div>
                          </div>
                          <div className="mt-5 f10 whitef pt-3">
                            Read more{" "}
                            <span className="ms-1">
                              <img src={whtarrow} alt="forward" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 analytics-cards2">
                    <div className="row gap-3">
                      <div className="col-5 rectangle9">
                        <div className="row">
                          <div className="col-12 graph">
                            <div className="rectangle7 grad2 my-3">
                              <div className="row mx-2 df aie">
                                <div className="col-auto">
                                  <div className="databox my-3">
                                    {/* <div class="y-axis whitef f10">
                                      <span>500</span>
                                      <span>400</span>
                                      <span>300</span>
                                      <span>200</span>
                                      <span>100</span>
                                      <span>0</span>
                                    </div> */}
                                    <img src={dataimg} alt="" />
                                  </div>
                                </div>
                                <div className="col m-4">
                                  <div className="linebox">
                                    <img src={chart} alt="Cahrt" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="m-3">
                              <div className="f18 ">Active Users</div>
                              <div className="f14">
                                {" "}
                                <span className="green">(+23)</span>
                                <span className="fw400 gray400">
                                  {" "}
                                  than last week
                                </span>
                              </div>
                              <div className="row mt-4">
                                <div className="col">
                                  <Cards
                                    icon={wallet}
                                    label="Users"
                                    value="32,984"
                                    progress={progressimg}
                                  />
                                </div>
                                <div className="col">
                                  <Cards
                                    icon={wallet}
                                    label="Clicks"
                                    value="2,42m"
                                    progress={progressimg}
                                  />
                                </div>
                                <div className="col">
                                  <Cards
                                    icon={wallet}
                                    label="Sales"
                                    value="2,400$"
                                    progress={progressimg}
                                  />
                                </div>
                                <div className="col">
                                  <Cards
                                    icon={wallet}
                                    label="Items"
                                    value="320"
                                    progress={progressimg}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col rectangle9">
                        <div className="f14 mt-4">
                          <div className="f18">Sales overview</div>
                          <div>
                            <span className="green">(+5) more</span>
                            <span className="fw400 gray400"> in 2021</span>
                          </div>
                        </div>
                        <div className="mt-5">
                          <div className="salesdata">
                            <img src={salesdataimg} alt="Sales Data" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 content-cards">
                    <div className="row gap-3">
                      <div className="col rectangle9">sol</div>
                      <div className="col rectangle9">sağ</div>
                    </div>
                  </div>
                  <div className="col-12 footer">
                    <div className="row df aic">
                      <div className="col">
                        <div className="fw400 gray400 f12">
                          <span>@ 2021, Made with ❤️ by </span>
                          <span className="tealf fw700">Creative Tim</span> &
                          <span className="tealf fw700"> Simmmple</span> for a
                          better web
                        </div>
                      </div>
                      <div className="col df je">
                        <div className="row f12 fw400 gray400">
                          <div className="col-auto">Creative Tim</div>
                          <div className="col">Simmmple</div>
                          <div className="col">Blog</div>
                          <div className="col">License</div>
                        </div>
                      </div>
                    </div>
                  </div>
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
