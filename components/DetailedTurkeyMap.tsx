import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { G, Path, Text as SvgText } from 'react-native-svg';

const DetailedTurkeyMap = () => {
  return (
    <View style={styles.container}>
      <Svg width="100%" height="100%" viewBox="0 0 800 450">
        {/* Türkiye ana hatları - daha detaylı bir şekil */}
        <G>
          {/* Trakya */}
          <Path
            d="M72,85 L93,75 L120,77 L133,88 L130,102 L116,114 L95,117 L80,105 L72,85 Z"
            fill="#E8E8E8"
            stroke="#000"
            strokeWidth="1.5"
          />
          
          {/* Anadolu */}
          <Path
            d="M133,88 L155,80 L187,70 L220,65 L260,65 L300,70 L335,78 L370,90 L405,100 L440,105 L490,108 L532,112 L570,118 L600,125 L630,135 L655,150 L680,170 L705,200 L720,235 L730,260 L735,290 L735,320 L730,345 L720,370 L705,390 L680,410 L650,422 L610,428 L570,430 L530,428 L490,422 L450,415 L410,405 L370,390 L330,375 L290,360 L250,348 L210,343 L170,338 L140,330 L115,322 L100,310 L95,285 L100,260 L112,230 L125,205 L140,185 L155,165 L170,150 L185,140 L200,130 L215,118 L230,105 L250,95 L270,85 L290,80 L310,80 L330,85 L350,95 L370,105 L390,115 L410,120 L430,122 L450,122 L470,120 L490,115 L510,110 L530,105 L550,105 L570,110 L590,120 L605,135 L615,155 L620,175 L620,195 L615,215 L605,235 L590,250 L575,260 L555,270 L535,275 L515,275 L495,275 L475,270 L455,260 L435,250 L415,240 L395,235 L375,235 L355,240 L335,250 L315,260 L295,270 L275,275 L255,280 L235,280 L215,275 L195,270 L175,260 L155,245 L140,230 L130,210 L125,190 L130,170 L140,150 L155,135 L175,125 L195,120 L215,120 L235,123 L255,130 L275,140 L295,150 L315,160 L335,165 L355,167 L375,165 L395,160 L415,153 L435,147 L455,142 L475,140 L495,140 L515,143 L535,148 L550,155 L565,165 L575,180 L580,195 L580,210 L575,225 L565,240 L550,252 L535,260 L515,265 L495,265 L475,262 L455,255 L435,245 L415,235 L395,225 L375,220 L355,220 L335,225 L315,235 L295,245"
            fill="#E8E8E8"
            stroke="#000"
            strokeWidth="1.5"
          />
          
          {/* Doğu Anadolu Bölgesi için 5 şehir */}
585,155 585,135 600,125 Z"
            fill="#F0F0F0"
            stroke="#000"
            strokeWidth="1.2"
          /
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default DetailedTurkeyMap;