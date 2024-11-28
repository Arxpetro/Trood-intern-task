import React from "react";
import TodoCard from "./TodoCard";

// images
import DownArrow from "../img/down_arrow.png";
import Shop from "../img/shop.png";
import TProflogo from "../img/T_profile_logo.png";

function Dashboard() {
	return (
		<div
			style={{
				width: "100%",
				padding: "20px 28px",
			}}
		>
			<div /* project navigation / profile */
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginBottom: "30px",
				}}
			>
				<div
					style={{
						display: "flex",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: "400px",
							height: "58px",
							padding: "0 30px 0 20px ",
							borderRadius: "8px",
							border: "solid 2px #808080",
							fontSize: "20px",
							color: "#808080",
							marginRight: "58px",
							cursor: "pointer",
						}}
					>
						All projects
						<img src={DownArrow} alt="▼" width={"14px"} />
					</div>
					<div
						style={{
							width: "58px",
							height: "58px",
							borderRadius: "18px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							boxShadow: "0 4px 4px #00000026",
							cursor: "pointer",
						}}
					>
						<img
							src={Shop}
							alt="|shop|"
							style={{
								width: "30px",
							}}
						/>
					</div>
				</div>
				<img
					src={TProflogo}
					alt="T."
					style={{
						width: "46px",
						height: "46px",
						cursor: "pointer",
					}}
				/>
			</div>

			<section style={{
                marginBottom: "40px",
            }}>
				<h1
					style={{
						fontSize: "36px",
						fontWeight: "600",
						marginBottom: "20px",
					}}
				>
					Suggestion
				</h1>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
						gap: "30px",
					}}
				>
					<TodoCard
						color1={"#DAFBC6"}
						color2={"#BBE89F"}
						title="Add your project"
						description="personal"
					/>
					<TodoCard
						color1={"#A8F2F5"}
						color2={"#A2D3F0"}
						title="Add product structure"
						description="personal"
					/>
					
				</div>
			</section>
			<section>
				<h1
					style={{
						fontSize: "36px",
						fontWeight: "600",
						marginBottom: "20px",
					}}
				>
					Tasks
				</h1>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
						gap: "30px",
					}}
				>
					<TodoCard
						color1={"#EFF0A8"}
						color2={"#DBE274"}
						title="Add task"
						description="Click to add a new task"
					/>
					
				</div>
			</section>
			<div></div>
		</div>
	);
}

export default Dashboard;
