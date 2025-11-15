import { Outlet } from "react-router";
import SideBar from "./SideBar";
import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <main className={styles.main}>
            <SideBar className={styles.sidebar} />
            <section className={styles.outlet}>
                <Outlet />
            </section>
        </main>
    );
}

export default Layout;