import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import * as secp from "noble-secp256k1";

function App() {
  const privateKey =
    "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";
  const publicKey = secp.getPublicKey(privateKey);

  const aa = secp.getSharedSecret(privateKey, publicKey);

  console.log(aa, "public====");

  return (
    <View>
      <Text>{aa}</Text>
    </View>
  );
}

export default App;
