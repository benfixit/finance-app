import clsx from 'clsx';

// @ts-ignore
const Dashboard = (props) => {
    const { className } = props;

    return (
        <section className={clsx(className)}>
            <h3>This is the dashboard</h3>
        </section>
    )
}

export default Dashboard
