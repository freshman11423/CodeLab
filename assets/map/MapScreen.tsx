import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as FileSystem from 'expo-file-system';

export default function MapScreen() {
  const [svgData, setSvgData] = useState<string | null>(null);

  useEffect(() => {
    const loadSvg = async () => {
      const svgUri = require('../../assets/svg/tr.svg');
      const svgContent = await FileSystem.readAsStringAsync(svgUri);
      setSvgData(svgContent);
    };

    loadSvg();
  }, []);

  if (!svgData) return null;

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1, padding: 10 }}>
        <SvgXml xml={svgData} width="100%" height="100%" />
      </View>
    </ScrollView>
  );
}
