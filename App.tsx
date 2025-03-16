import React from 'react';
import { Dimensions, View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header Section with Card */}
      <View style={styles.selectionCard}>
        <View style={styles.profileContainer}>
          <Image source={require('./asserts/account-circle.jpg')} style={styles.profileImage} />
          <View style={styles.selectionCardText}>
            <Text style={styles.welcomeText}>Welcome{"\n"}
              <Text style={styles.userName}>Malan</Text></Text>
          </View>
        </View>
        <Image source={require('./asserts/icon.webp')} style={styles.translateImage} />
      </View>

      {/* Weather Update Section */}
      <Text style={styles.sectionTitle}>Weather Update</Text>
      <View style={styles.weatherCard}>
        <View style={styles.leftSection}>
          <Text style={styles.locationText}>Dambulla</Text>
          <Text style={styles.weatherText}>Partly Cloudy</Text>
        </View>
        <View style={styles.rightSection}>
          <Image
            source={require('./asserts/weather_partly_cloudy.png')}
            style={styles.weatherCloudyImage}
          />
        </View>
      </View>

      {/* Sensor Readings Section */}
      <Text style={styles.sectionTitle}>Live Sensor Readings</Text>
      <View style={styles.sensorContainer}>
        <View style={styles.sensorCard}>
          <Image
            source={require('./asserts/sun.png')}
            style={styles.sunImage}
          />
          <Text style={styles.sensorText}>Temp{"\n"}30°C</Text>
        </View>
        <View style={styles.sensorCard}>
          <Image
            source={require('./asserts/moisturizing.png')}
            style={styles.sunImage}
          />
          <Text style={styles.sensorText}>Moisture{"\n"}45%</Text>
        </View>
        <View style={styles.sensorCard}>
          <MaterialCommunityIcons name="water-percent" size={30} color="#27AE60" />
          <Text style={styles.sensorText}>Humidity{"\n"}53%</Text>
        </View>
        <View style={styles.sensorCard}>
          <MaterialCommunityIcons name="weather-rainy" size={30} color="#7D3C98" />
          <Text style={styles.sensorText}>Rain{"\n"}No</Text>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Image
          source={require('./asserts/home.png')}
          style={styles.sunImage}
        />
        <Image
          source={require('./asserts/settings.png')}
          style={styles.sunImage}
        />
        <Image
          source={require('./asserts/notification.png')}
          style={styles.sunImage}
        />
        <Image
          source={require('./asserts/logout.png')}
          style={styles.sunImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: width * 0.05, // 5% of screen width
  },
  selectionCard: {
    backgroundColor: '#E0E0E0',
    padding: width * 0.04, // 4% of screen width
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.02, // 2% of screen height
    marginTop: height * 0.1, // 10% of screen height
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: width * 0.04, // 4% of screen width
    textAlign: 'center',
    marginLeft: -width * 0.15, // 15% of screen width
  },
  userName: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: width * 0.05, // 5% of screen width
    fontWeight: 'bold',
    marginBottom: height * 0.01, // 1% of screen height
    marginTop: height * 0.05, // 5% of screen height
  },
  weatherCard: {
    backgroundColor: '#E0E0E0',
    padding: width * 0.04, // 4% of screen width
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.02, // 2% of screen height
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: width * 0.06, // 6% of screen width
    fontWeight: 'bold',
  },
  weatherText: {
    fontSize: width * 0.04, // 4% of screen width
    marginTop: height * 0.01, // 1% of screen height
  },
  weatherCloudyImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 20,
  },
  sensorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sensorCard: {
    backgroundColor: '#E0E0E0',
    padding: width * 0.04,
    borderRadius: 10,
    alignItems: 'center',
    width: width * 0.40,
    marginBottom: height * 0.01,
  },
  sensorText: {
    fontSize: width * 0.04,
    textAlign: 'center',
    marginTop: height * 0.01,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: height * 0.01,
    borderTopWidth: 1,
    borderColor: '#CCC',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: width * 0.05, // 5% of screen width
  },
  profileImage: {
    width: width * 0.15, // 15% of screen width
    height: width * 0.15, // 15% of screen width
    borderRadius: 20,
  },
  selectionCardText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  translateImage: {
    width: width * 0.15, // 15% of screen width
    height: width * 0.15, // 15% of screen width
    marginLeft: -width * 0.2, // 20% of screen width
    borderRadius: 20,
  },
  sunImage: {
    width: width * 0.1, // 10% of screen width
    height: width * 0.1, // 10% of screen width
    borderRadius: 20,
  },
});

export default App;