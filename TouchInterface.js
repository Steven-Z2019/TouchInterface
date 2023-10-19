import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
var tempKey = '';

const soundFileMappings = {
  'C': require('./assets/C.mp3'),
  'Db': require('./assets/Db.mp3'),
  'D': require('./assets/D.mp3'),
  'Eb': require('./assets/Eb.mp3'),
  'E': require('./assets/E.mp3'),
  'F': require('./assets/F.mp3'),
  'G': require('./assets/G.mp3'),
  'Gb': require('./assets/Gb.mp3'),
  'A': require('./assets/A.mp3'),
  'Ab': require('./assets/Ab.mp3'),
  'Bb': require('./assets/Bb.mp3'),
  'B': require('./assets/B.mp3')
  // Add mappings for other notes
};


const PianoKey = ({ note, isBlack, offset }) => {
  const keyColor = isBlack ? 'black' : 'white';
  const keyTextColor = isBlack ? 'white' : 'black';
  
  const playSound = async () => {
    const soundObject = new Audio.Sound();
    try {

      const soundFile = soundFileMappings[note]; // Get the sound file based on the note
      await soundObject.loadAsync(soundFile);
      await soundObject.playAsync();
    } catch (error) {
      console.log('Error playing sound:', error);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.key,
        { backgroundColor: keyColor, marginLeft: offset },
        isBlack ? styles.blackKey : styles.whiteKey,
      ]}
      onPress={playSound}
    >
      <View style={styles.keyTextContainer}>
        <Text style={[styles.keyText, { color: keyTextColor }]}>{note}</Text>
      </View>
    </TouchableOpacity>
  );
};

const PianoApp = () => {
  const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const blackKeys = ['C#', 'D#', 'F#', 'G#', 'A#'];

  const keys = [
    {
      isBlack: false,
      note: 'C',
    },
    {
      isBlack: true,
      note: 'Db',
      offset: -20,
    },
    {
      isBlack: false,
      note: 'D',
      offset: -18,
    },
    {
      isBlack: true,
      note: 'Eb',
      offset: -20,
    },
    {
      isBlack: false,
      note: 'E',
      offset: -18,
    },
    {
      isBlack: false,
      note: 'F',
      offset:0,
    },
    {
      isBlack: true,
      note: 'Gb',
      offset: -18,
    },
    {
      isBlack: false,
      note: 'G',
      offset: -20,
    },
    {
      isBlack: true,
      note: 'Ab',
      offset: -18,
    },
    {
      isBlack: false,
      note: 'A',
      offset: -20,
    },
    {
      isBlack: true,
      note: 'Bb',
      offset: -18,
    },
    {
      isBlack: false,
      note: 'B',
      offset: -20,
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.piano}>
        {keys.map((key) => (
          <PianoKey
            key={key.note}
            note={key.note}
            isBlack={key.isBlack}
            offset={key.offset}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  piano: {
    flexDirection: 'row',
  },
  whiteKey: {
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderColor: 'darkgrey',
    height: 200,
    width: 50,
    margin: 2,
    borderRadius: 5,
  },
  blackKey: {
    backgroundColor: 'black',
    height: 100,
    width: 38,
    borderRadius: 5,
    zIndex: 1,
  },
  keyTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  keyText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PianoApp;
