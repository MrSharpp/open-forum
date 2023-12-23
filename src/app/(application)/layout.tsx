import React from "react";
import classes from "./style.module.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={classes.root}>
      <header className={classes.header}> ddefault header </header>

      <div className={classes.container}>
        <aside className={classes.leftSection}>left section</aside>

        <main className={classes.main}>{children}</main>

        <aside className={classes.rightSection}>right section</aside>
      </div>
    </div>
  );
}
