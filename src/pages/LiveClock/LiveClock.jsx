import React, { useEffect, useState } from "react";
import { FloatButton, Tooltip } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import moment from "moment";

const LiveClock = () => {
	const [currentTime, setCurrentTime] = useState(
		moment().format("hh:mm:ss a")
	);

	useEffect(() => {
		const intervalID = setInterval(() => {
			setCurrentTime(moment().format("hh:mm:ss a"));
		}, 1000);

		return () => clearInterval(intervalID);
	}, []);

	return (
		<Tooltip className="text-sky-600" title={moment().format("dddd, MMMM DD, YYYY")}>
			<FloatButton
				shape="square"
				type="primary"
				description={currentTime}
				style={{ 
					insetInlineEnd: 12, 
					insetBlockEnd: 12, 
					backgroundColor: '#0284c7'  // Tailwind's sky-600 hex code
				}}
				icon={<ClockCircleOutlined />}
				className="px-2 w-24 h-14 !bg-opacity-30 backdrop-filter backdrop-blur-md z-10 rounded-lg"
			/>
		</Tooltip>
	);
};

export default LiveClock;
