import React from "react";
import styles from "../assets/styles";

import { Text, View, Image } from "react-native";
import pic from "../assets/images/08.jpg";


const Message = () => {
	return (
		<View style={styles.containerMessage}>
			<Image source={pic} style={styles.avatar} />
			<View style={styles.content}>
				<Text>Customer Service</Text>
				<Text style={styles.message}>What can I help you with today?</Text>
			</View>
		</View>
	);
};

export default Message;



// import React from "react";
// import styles from "../assets/styles";

// import { Text, View, Image } from "react-native";

// const Message = ({ image, lastMessage, name }) => {
// 	return (
// 		<View style={styles.containerMessage}>
// 			<Image source={image} style={styles.avatar} />
// 			<View style={styles.content}>
// 				<Text>{name}</Text>
// 				<Text style={styles.message}>{lastMessage}</Text>
// 			</View>
// 		</View>
// 	);
// };

// export default Message;
