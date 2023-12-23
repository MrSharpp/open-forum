import React from "react";
import classes from "./style.module.css";
import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Header />
      </header>

      <div className={classes.container}>
        <aside className={classes.leftSection}>
          <Navbar />
        </aside>

        <main className={classes.main}>{children}</main>

        <aside className={classes.rightSection}>right section</aside>
      </div>
    </div>
  );
}
