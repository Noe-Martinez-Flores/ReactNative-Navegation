import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import YoutubeIframe from 'react-native-youtube-iframe'

export default function Video({id}) {
  return (
    <View>
      <YoutubeIframe height={230}
      play
      videoId={id}
      ></YoutubeIframe>
    </View>
  )
}

const styles = StyleSheet.create({})