import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function SettingPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
        <Image
          source="https://www.pngmart.com/files/22/Fast-Forward-PNG.png" // Replace with your forward icon image
          style={styles.forwardIcon}
        />
      </View>

      <View style={styles.setting}>
        <Text style={styles.settingTitle}>Account</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Edit profile</Text>
          <Image
            source="https://www.pngmart.com/files/22/Fast-Forward-PNG.png" // Replace with your forward icon image
            style={styles.forwardIcon}
          />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Your location</Text>
          <Image
            source="https://www.pngmart.com/files/22/Fast-Forward-PNG.png" // Replace with your forward icon image
            style={styles.forwardIcon}
          />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Notifications</Text>
          <Image
            source="https://www.pngmart.com/files/22/Fast-Forward-PNG.png" // Replace with your forward icon image
            style={styles.forwardIcon}
          />
        </View>
      </View>

      <View style={styles.setting}>
        <Text style={styles.settingTitle}>Other</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Privacy policy</Text>
          <Image
            source="https://www.pngmart.com/files/22/Fast-Forward-PNG.png" // Replace with your forward icon image
            style={styles.forwardIcon}
          />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Terms and conditions</Text>
          <Image
            source="https://www.pngmart.com/files/22/Fast-Forward-PNG.png" // Replace with your forward icon image
            style={styles.forwardIcon}
          />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Help and feedback</Text>
          <Image
            source="https://www.pngmart.com/files/22/Fast-Forward-PNG.png" // Replace with your forward icon image
            style={styles.forwardIcon}
          />
        </View>
        <View style={styles.logoutText}>
          <Text style={styles.logoutText}>Log out</Text>
          <Image
            source="https://www.pngmart.com/files/22/Fast-Forward-PNG.png" // Replace with your forward icon image
            style={styles.forwardIcon}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#224f76',
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
    padding: 20,
    paddingVertical:50,
    marginBottom:40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  forwardIcon: {
    position:'absolute',
    right:0,
    width: '24px',
    height: '24px',
  },
  setting: {
    width: '100%',
    marginTop: 20,
    paddingLeft: 20,
  },
  settingTitle: {
    color: '#aeaeae',
    fontSize: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical:5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 16,
  },
  logoutText: {
    margin:0,
    width:'100%',
    fontSize: 16,
    color:'red',
    marginLeft:66,
    marginVertical:8,
  },
});

export default SettingPage;
