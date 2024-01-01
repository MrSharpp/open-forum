import React from "react";
import classes from "./style.module.css";
import { Header } from "@/components/Header";
import { UserLeftSideBar } from "./components/UserLeftSideBar";

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Header />
      </header>

      <div className={classes.container}>
        <aside className={classes.leftSection}>
          <UserLeftSideBar />
        </aside>

        <main className={classes.main}>{children}</main>
      </div>
    </div>
  );
}
