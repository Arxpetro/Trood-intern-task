import React from "react";

// images
import RightArrow from "../img/right_arrow.png";
import Hand from "../img/hand.png";
import Cross from "../img/cross.png";

function TodoCard({ color1, color2, title = "Title", description = "about" }) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				width: "520px",
				height: "290px",
				borderRadius: "12px",
				background: `linear-gradient(0.25turn, ${color1}, ${color2})`,
				padding: "24px",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "100%",
				}}
			>
				<div
					style={{
						width: "76px",
						height: "76px",
						backgroundColor: "#000",
						borderRadius: "38px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						cursor: "pointer",
					}}
				>
					<img
						src={RightArrow}
						alt=" -> "
						style={{
							width: "18px",
							height: "18px",
						}}
					/>
				</div>
				<img
					src={Hand}
					alt="HandImg"
					style={{
						width: "162px",
						height: "169px",
						margin: "-24px -24px 0 0",
					}}
				/>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
                    position: "relative",
					width: "100%",
				}}
			>
				<div>
					<h2
						style={{
							fontSize: "26px",
							fontWeight: "600",
                            marginBottom: "10px",
						}}
					>
						{title}
					</h2>
                    <p style={{
                        fontSize: "18px",
                        fontWeight: "400",
                        color: "#808080",
                        
                    }}>{description}</p>
				</div>
                <div style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#000",
                    width: "38px",
                    height: "38px",
                    borderRadius: "19px",
                    marginTop: "20px",
                    cursor: "pointer",

                }}>
                    <img src={Cross} alt= "x" style={{
                        width: "12px",
                        height: "12 px",
                    }}/>
                </div>
			</div>
		</div>
	);
}

export default TodoCard;
