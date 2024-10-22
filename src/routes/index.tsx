import { Outlet, useRoutes } from "react-router-dom";
import AuthGuard from "../guard/AuthGuard";
import GuestGuard from "../guard/GuestGuard";
import HeaderLayout from "../layout/HeaderLayout";
import FooterLayout from "../layout/FooterLayout";
import AppHome from "../page/AppHome";
import React, { ReactNode } from "react";
import OfferDeal from "../component/OfferDeal";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: (
        <AuthGuard>
          <Layout>
            <Outlet />
          </Layout>
        </AuthGuard>
      ),
    },
    {
      path: "/auth",
      element: (
        <GuestGuard>
          <Layout>
            <Outlet />
          </Layout>
        </GuestGuard>
      ),
      children: [
        {
          path: "/auth",
          element: <AppHome />,
        },
      ],
    },
  ]);
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderLayout />
      {children}
      <FooterLayout />
    </>
  );
}
