import React from 'react';
import { View, StyleSheet } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';

export default function SearchLoadingAnimation() {
  return (
    <View style={styles.container}>

<ShimmerPlaceHolder
            style={styles.Header}
            LinearGradient={LinearGradient}
          />

<ShimmerPlaceHolder
            style={styles.Boxes}
            LinearGradient={LinearGradient}
          />

        
      <View style={styles.post}>
        <View style={styles.avatar}>
          <ShimmerPlaceHolder
            style={styles.avatarShimmer}
            LinearGradient={LinearGradient}
          />
        </View>
        <View style={styles.line}>
          <ShimmerPlaceHolder
            style={styles.lineShimmer}
            LinearGradient={LinearGradient}
          />
        </View>
        <View style={styles.line}>
          <ShimmerPlaceHolder
            style={styles.lineShimmer}
            LinearGradient={LinearGradient}
          />
        </View>
      </View>

      <View style={styles.post}>
        <View style={styles.avatar}>
          <ShimmerPlaceHolder
            style={styles.avatarShimmer}
            LinearGradient={LinearGradient}
          />
        </View>
        <View style={styles.line}>
          <ShimmerPlaceHolder
            style={styles.lineShimmer}
            LinearGradient={LinearGradient}
          />
        </View>
        <View style={styles.line}>
          <ShimmerPlaceHolder
            style={styles.lineShimmer}
            LinearGradient={LinearGradient}
          />
        </View>
      </View>

      <View style={styles.post}>
        <View style={styles.avatar}>
          <ShimmerPlaceHolder
            style={styles.avatarShimmer}
            LinearGradient={LinearGradient}
          />
        </View>
        <View style={styles.line}>
          <ShimmerPlaceHolder
            style={styles.lineShimmer}
            LinearGradient={LinearGradient}
          />
        </View>
        <View style={styles.line}>
          <ShimmerPlaceHolder
            style={styles.lineShimmer}
            LinearGradient={LinearGradient}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  post: {
    width: 220,
    height: 80,
    flexDirection: 'row',
  },
  avatar: {
    width: 52,
    height: 52,
    backgroundColor: '#ccc',
    borderRadius: 25,
    margin: 8,
  },
  avatarShimmer: {
    flex: 1,
  },
  line: {
    width: 140,
    height: 16,
    marginTop: 12,
    borderRadius: 7,
  },
  lineShimmer: {
    flex: 1,
  },
  Header:{
    height:200,
    width:'100%',
    position:'absolute',
    top:0,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30
  },
  Boxes:{
    width:'35%',
    height:100
  }
  // Add more styles as needed for your design
});
