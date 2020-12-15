import React from "react";
import { Breadcrumbs } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import DashboardIcon from "@material-ui/icons/Dashboard";

const NavigationBreadcrumbs = ({
  firstName,
  firstLink,
  secondName,
  secondLink,
}) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        <DashboardIcon fontSize={"small"} />
      </Link>
      <Link
        color={secondName ? "inherit" : "textPrimary"}
        href={firstLink}
        aria-current={secondName ? "page" : null}
      >
        {firstName}
      </Link>
      {secondName ? (
        <Link color="textPrimary" href={secondLink} aria-current="page">
          {secondName}
        </Link>
      ) : null}
    </Breadcrumbs>
  );
};

export default NavigationBreadcrumbs;
