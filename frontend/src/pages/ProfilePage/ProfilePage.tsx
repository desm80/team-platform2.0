import React from "react";
import styles from './ProfilePage.module.scss';
import { Sidebar } from "src/components/sidebar/Sidebar";


export function ProfilePage(): React.ReactNode {
  return (
    <div className={styles.container}>
      <Sidebar />
      <h1>Profile Page</h1>
    </div>
  )
}
