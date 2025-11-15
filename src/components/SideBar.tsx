import clsx from 'clsx';
import styles from "./SideBar.module.css";

// @ts-ignore
const SideBar = (props) => {
    const { className } = props;

    return (
        <aside className={clsx(styles.aside, className)}>
            <h3>Fintech</h3>
            <ul>
                <li>
                    <a href='/'>Dashboard</a>
                </li>
                <li>
                    <a href='/expenses'>Expenses</a>
                </li>
                <li>
                    <a href='/budget'>Budget</a>
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;