import { Link, withRouter } from "react-router-dom";
import styled, { css } from "styled-components";

import { ReactComponent as Share } from "assets/images/share.svg";
import { ReactComponent as Contact } from "assets/images/contactus.svg";
import { ReactComponent as Settings } from "assets/images/settings.svg";
import { ReactComponent as Activity } from "assets/images/activity.svg";
import { ReactComponent as LinkAccounts } from "assets/images/linkaccounts.svg";
import { ReactComponent as Report } from "assets/images/report.svg";
import { ReactComponent as Home } from "assets/images/home.svg";

const links = [
  { path: "/home", text: "Home", icon: <Home /> },
  { path: "/home/report", text: "Report", icon: <Report /> },
  { path: "/home/linkaccounts", text: "Link Accounts", icon: <LinkAccounts /> },
  { path: "/home/activity", text: "Activity", icon: <Activity /> },
  { path: "/home/settings", text: "Settings", icon: <Settings /> },
];

const Sidebar = ({ name = "Mary", location }) => {
  return (
    <Aside className="d-flex flex-column justify-content-between">
      <div className="d-flex flex-column justify-content-between">
        <Link to="/profile" className="mx-auto">
          <span>Hi</span> {name}!
        </Link>
        <div className="mt-5 w-100">
          <ul className="d-flex flex-column justify-content-between gap-2 align-items w-100">
            {links.map(({ path, text, icon }, index) => (
              <DashLinkItem key={index} active={location.pathname === path}>
                <Link to={path}>
                  {icon} {text}
                </Link>
              </DashLinkItem>
            ))}
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between">
        <ul>
          <DashLinkItem active={location.pathname === "/home/share"}>
            <Link to="/home/share">
              <Share /> Share
            </Link>
          </DashLinkItem>
          <DashLinkItem active={location.pathname === "/home/contactus"}>
            <Link to="/home/contactus">
              <Contact /> Contact Us
            </Link>
          </DashLinkItem>
        </ul>
      </div>
    </Aside>
  );
};

export default withRouter(Sidebar);

const Aside = styled.aside`
  width: 20%;
  /* min-width: 200px; */
  background-color: var(--bg-primary);
  padding: 9rem 1rem 1rem;
  align-items: center;
  border-radius: 0px 50px 50px 0px;
  height: 100vh;
  min-height: 900px;
  a {
    font-size: 24px;
    line-height: 28px;
    color: var(--darkblue);
    width: fit-content;
    span {
      color: var(--lighterblue);
    }
  }
  ul {
    padding: 0;
  }
`;

const activeStyles = css`
  background: #fafcfc;
  border-radius: 20px;
`;

const DashLinkItem = styled.li`
  text-align: center;
  cursor: pointer;
  padding: 0.5rem 0;
  width: 160px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  a {
    color: var(--lighterblue);
    font-size: 18px;
    display: flex;
    gap: 0.4rem;
    white-space: nowrap;
    align-items: center;
    margin: 0 auto;
  }
  ${({ active }) => active && activeStyles}/* &:hover {
    background: #fafcfc73;
    border-radius: 20px;
  } */
`;
