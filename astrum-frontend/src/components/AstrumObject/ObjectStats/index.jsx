import "./styles.css";

export default function ObjectStatus({ planetData, hexColor }) {
    const stats = [
        { label: "Radius", value: `${planetData?.radius} km` },
        { label: "Distance from sun", value: `${planetData?.distanceSun} mln km` },
        { label: "Moons", value: planetData?.moons?.length ? planetData.moons.join(", ") : "None" },
        { label: "Gravity", value: `${planetData?.gravity} m/s` },
        { label: "Lenght of years", value: `${planetData?.yearDuration} earth days` },
        { label: "Lenght of days", value: `${planetData?.dayDuration} h` },
        { label: "Temperature", value: `Average ${planetData?.temperature} C` },
    ];

    return (
        <div className="object-status-container">
            {stats.map((stat, i) => (
                <div className="stat-row" key={i}>
                    <span className="stat-label">{stat.label}:</span>
                    <span className="stat-value" style={{ color: hexColor }}>{stat.value}</span>
                </div>
            ))}
        </div>
    );
}
