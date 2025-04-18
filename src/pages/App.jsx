import { useState } from "react";
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

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";

// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

function App() {
  // const inputRef = useRef();

  const data = [
    { name: "A", value: 320 },
    { name: "B", value: 230 },
    { name: "C", value: 100 },
    { name: "D", value: 300 },
    { name: "E", value: 520 },
    { name: "F", value: 410 },
    { name: "G", value: 500 },
    { name: "H", value: 280 },
    { name: "I", value: 150 },
  ];

  const data2 = [
    { name: "Jan", value1: 240, value2: 100 },
    { name: "Feb", value1: 180, value2: 90 },
    { name: "Mar", value1: 220, value2: 120 },
    { name: "Apr", value1: 300, value2: 200 },
    { name: "May", value1: 350, value2: 180 },
    { name: "Jun", value1: 430, value2: 210 },
    { name: "Jul", value1: 370, value2: 160 },
    { name: "Aug", value1: 310, value2: 140 },
    { name: "Sep", value1: 280, value2: 120 },
    { name: "Oct", value1: 200, value2: 170 },
    { name: "Nov", value1: 270, value2: 200 },
    { name: "Dec", value1: 450, value2: 160 },
  ];

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

  const AnalyticsCard = [
    {
      icon: wallet,
      label: "Today's Money",
      value: "$53,000",
      percent: "+55%",
      onClick: () => console.log("Today's Money tıkkkkkkkkkk"),
      isAccount: true,
    },
    {
      icon: earth,
      label: "Today’s Users",
      value: "2,300",
      percent: "+5%",
      onclick: "",
      isAccount: true,
    },
    {
      icon: text,
      label: "New Clients",
      value: "+3,052",
      percent: "-14%",
      onclick: "",
      isAccount: true,
    },
    {
      icon: cart,
      label: "Total Sales",
      value: "$173,000",
      percent: "+8%",
      onclick: "",
      isAccount: true,
    },
  ];

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
      <div className="col ">
        <div className="progress-bar p-0">
          <div className="progress-fill" style={{ width: progress }}>
            {/* <img src={progress} alt="" /> */}
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
            <div className="col-2 me-2">
              <aside>
                <div className="sidebar pt-3">
                  <div className="df">
                    <div>
                      <img src={logo} alt="Logo" />
                    </div>
                    <div className="f14 title ps-2">PURITY UI DASHBOARD</div>
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
                              <div className="col-auto pointer">
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
                  <div className="col-12 ">
                    <div className="row gap-3 hvr2">
                      {AnalyticsCard.map((item, index) => (
                        <div
                          key={index}
                          className="col tdmoney rectangle9 py-3"
                          onClick={item.onClick}
                        >
                          <div className="row">
                            <div className="col df aic">
                              <div className="row">
                                <div className="gray400 f12">{item.label}</div>
                                <div>
                                  <span className="gray700 f18">
                                    {item.value}
                                  </span>{" "}
                                  <span className="green f14">
                                    {item.percent}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-auto df je aic">
                              <div className="rectangle6 tealbg df aic jc">
                                <img
                                  className="iconimg1"
                                  src={item.icon}
                                  alt={item.label}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-12 big-cards">
                    <div className="row gap-3">
                      <div className="col rectangle9">
                        <div className="row pointer">
                          <div className="col">
                            <div className="df flex-column justify-content-between py-3 h100">
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
                              <div className="f10">
                                Read more{" "}
                                <span className="ms-1">
                                  <img src={blcarrow} alt="forward" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto df jc aic p-3">
                            <div className="imgbox">
                              <img className="img" src={chakra} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col rectangle9 p-3">
                        <div className="secondcard pointer df flex-column justify-content-between p-3 h100">
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
                          <div className="f10 whitef">
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
                            <div className="graphbox ">
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data}>
                                  <YAxis
                                    stroke="#fff"
                                    domain={[0, 600]}
                                    ticks={[0, 100, 200, 300, 400, 500, 600]}
                                    axisLine={false}
                                    tickLine={false}
                                  />
                                  <XAxis
                                    dataKey="none"
                                    axisLine={false}
                                    tickLine={false}
                                  />
                                  <Bar
                                    dataKey="value"
                                    fill="#ffffff"
                                    radius={[10, 10, 0, 0]}
                                    barSize={10}
                                  />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>

                            {/* <div className="rectangle7 grad2 my-3">
                              <div className="row mx-2 df aie">
                                <div className="col-auto">
                                  <div className="databox my-3">
                                    

                                    <div class="y-axis whitef f10">
                                      <span>500</span>
                                      <span>400</span>
                                      <span>300</span>
                                      <span>200</span>
                                      <span>100</span>
                                      <span>0</span>
                                    </div>
                                    <img src={dataimg} alt="" />
                                  </div>
                                </div>
                                <div className="col m-3">
                                  <div className="linebox">
                                    <img src={chart} alt="Cahrt" />
                                  </div>
                                </div>
                              </div>
                            </div> */}
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
                                    progress="60%"
                                  />
                                </div>
                                <div className="col">
                                  <Cards
                                    icon={wallet}
                                    label="Clicks"
                                    value="2,42m"
                                    progress="80%"
                                  />
                                </div>
                                <div className="col">
                                  <Cards
                                    icon={wallet}
                                    label="Sales"
                                    value="2,400$"
                                    progress="50%"
                                  />
                                </div>
                                <div className="col">
                                  <Cards
                                    icon={wallet}
                                    label="Items"
                                    value="320"
                                    progress="70%"
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
                            <div style={{ width: "100%", height: 300 }}>
                              <ResponsiveContainer>
                                <AreaChart data={data2}>
                                  <XAxis dataKey="name" stroke="#2d3748" />
                                  <YAxis stroke="#2d3748" domain={[0, 600]} />
                                  <Tooltip />
                                  <Area
                                    type="monotone"
                                    dataKey="value1"
                                    stackId="1"
                                    stroke="#0f172a"
                                    fill="url(#colorValue1)"
                                  />
                                  <Area
                                    type="monotone"
                                    dataKey="value2"
                                    stackId="1"
                                    stroke="#0f766e"
                                    fill="url(#colorValue2)"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="colorValue1"
                                      x1="0"
                                      y1="0"
                                      x2="0"
                                      y2="1"
                                    >
                                      <stop
                                        offset="5%"
                                        stopColor="#0f172a"
                                        stopOpacity={0.9}
                                      />
                                      <stop
                                        offset="95%"
                                        stopColor="#0f172a"
                                        stopOpacity={0}
                                      />
                                    </linearGradient>
                                    <linearGradient
                                      id="colorValue2"
                                      x1="0"
                                      y1="0"
                                      x2="0"
                                      y2="1"
                                    >
                                      <stop
                                        offset="5%"
                                        stopColor="#0d9488"
                                        stopOpacity={0.9}
                                      />
                                      <stop
                                        offset="95%"
                                        stopColor="#0d9488"
                                        stopOpacity={0}
                                      />
                                    </linearGradient>
                                  </defs>
                                </AreaChart>
                              </ResponsiveContainer>
                            </div>
                            {/* <img src={salesdataimg} alt="Sales Data" /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 content-cards">
                    <div className="row gap-3">
                      <div className="col rectangle9">
                        <div className="row">
                          <div className="col text"></div>
                          <div className="col list"></div>
                        </div>
                      </div>
                      <div className="col rectangle9">sağ</div>
                    </div>
                  </div>
                  <div className="col-12 footer">
                    <div className="row df aic">
                      <div className="col">
                        <div className="fw400 gray400 f12">
                          @ 2025, Made with ❤️ by
                          <span className="tealf fw700 pointer"> Kumsal </span>
                          for a better web
                        </div>
                      </div>
                      <div className="col df je">
                        <div className="row f12 fw400 gray400">
                          <div className="col-auto pointer">Creative</div>
                          <div className="col pointer">Blog</div>
                          <div className="col pointer">Simple</div>
                          <div className="col pointer">License</div>
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
