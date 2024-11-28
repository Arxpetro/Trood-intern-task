import React from "react";
import Dashboard from "./Dashboard";

/// images
import Tlogo from "../img/T_logo.png";
import DashboardImg from "../img/dashboard.png";
import BussinessImg from "../img/bussiness.png";
import ProductImg from "../img/product.png";

function Workspace() {
	const selected = <Dashboard />;
	return (
		<div>
			<style>{`
				* {
					box-sizing: border-box;
					margin: 0;
					padding: 0;
                    font-family: 'Inter';
				}
                p {
                    margin-bottom: 6px;
                }
                .navSlot{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: #808080;
                    width: 100%;
                    font-size: 14px;
                    font-weight: 500;
                }
                .imgContainer{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 18px;
                    width: 62px;
                    height: 36px;

                    margin-bottom: 5px;
                }
                .imgContainer img {
                    width: 20px;
                }
                .navSlot {
                    margin-bottom: 15px;
                    cursor: pointer;
                }
			`}</style>

			<div 
				style={
					{
                        display: "flex",
						backgroundColor: "#F5F4F4",
					}
				}
			>
				<div /* Navigation panel (side menu) */
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						width: "108px",
						height: "100vh",
						padding: "13px",
                        backgroundColor: "white",
					}}
				>
					<img
						src={Tlogo}
						alt="T. logo"
						style={{
							width: "82px",
							marginBottom: "24px",
						}}
					/>

					<div
						className="navSlot"
						style={{
							color: "#3888E7",
						}}
					>
						<div
							className="imgContainer"
							style={{
								backgroundColor: "#3888E7",
							}}
						>
							<img src={DashboardImg} alt="Dashboard" />
						</div>
                        Dashboard
					</div>

					<div className="navSlot">
						<div className="imgContainer">
							<img src={BussinessImg} alt="Bussiness" />
						</div>
                        Bussiness
					</div>

					<div className="navSlot">
						<div className="imgContainer">
							<img src={ProductImg} alt="Dashboard" />
						</div>
                        Product
					</div>
				</div>

                <Dashboard/>
                
			</div>
		</div>
	);
}

export default Workspace;
