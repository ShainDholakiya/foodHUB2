import React from "react";
import styles from "../assets/styles";

import {
	ScrollView,
	View,
	Text,
	ImageBackground,
	TouchableOpacity
} from "react-native";
import ProfileItem from "../components/ProfileItem";
import Icon from "../components/Icon";

import pic from "../assets/images/08.jpg";

const Profile = () => {

	return (
		<ImageBackground
			source={require("../assets/images/bg.png")}
			style={styles.bg}
		>
			<ScrollView style={styles.containerProfile}>
				<ImageBackground source={pic} style={styles.photo}>
					<View style={styles.top}>
						{/* <TouchableOpacity>
							<Text style={styles.topIconLeft}>
								<Icon name="chevronLeft" />
							</Text>
						</TouchableOpacity> */}

						{/* <TouchableOpacity>
							<Text style={styles.topIconRight}>
								<Icon name="optionsV" />
							</Text>
						</TouchableOpacity> */}
					</View>
				</ImageBackground>

				<ProfileItem
					name="Nicky Runol"
					age="24"
					location="Atlanta, GA"
				/>

				<View style={styles.actionsProfile}>
					{/* <TouchableOpacity style={styles.circledButton}>
						<Text style={styles.iconButton}>
							<Icon name="optionsH" />
						</Text>
					</TouchableOpacity> */}
					<TouchableOpacity style={styles.roundedButton}>
						<Text style={styles.iconButton}>
							<Icon name="chat" />
						</Text>
						<Text style={styles.textButton}>View Cart</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.roundedButton}>
						<Text style={styles.iconButton}>
							<Icon name="chat" />
						</Text>
						<Text style={styles.textButton}>View Favorites</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</ImageBackground>
	);
};

export default Profile;
