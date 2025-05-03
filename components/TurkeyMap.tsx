import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Text as SvgText } from 'react-native-svg';

const TurkeyMap = () => {
  // Türkiye haritası için basit bir SVG çizim
  return (
    <View style={styles.container}>
      <Svg width="100%" height="100%" viewBox="0 0 1000 500">
        {/* Türkiye ana hatları */}
        <Path
          d="M50,200 C100,150 200,150 350,180 C500,210 650,200 800,220 C900,230 950,280 950,350 C950,400 900,450 800,450 C700,450 600,420 500,400 C400,380 300,380 200,350 C100,320 50,250 50,200 Z"
          fill="#F0F0F0"
          stroke="#000"
          strokeWidth="2"
        />
        
        {/* Doğu Anadolu Bölgesi Şehirleri */}
        {/* Erzurum */}
        <Path
          id="erzurum"
          d="M750,280 C765,270 780,270 795,280 C810,290 810,310 795,320 C780,330 765,330 750,320 C735,310 735,290 750,280 Z"
          fill="#F0F0F0"
          stroke="#000"
          strokeWidth="1"
        />
        <SvgText x="755" y="305" fontSize="12" fontFamily="Arial">Erzurum</SvgText>
        
        {/* Van */}
        <Path
          id="van"
          d="M850,320 C865,310 880,310 895,320 C910,330 910,350 895,360 C880,370 865,370 850,360 C835,350 835,330 850,320 Z"
          fill="#F0F0F0"
          stroke="#000"
          strokeWidth="1"
        />
        <SvgText x="860" y="345" fontSize="12" fontFamily="Arial">Van</SvgText>
        
        {/* Malatya */}
        <Path
          id="malatya"
          d="M650,340 C665,330 680,330 695,340 C710,350 710,370 695,380 C680,390 665,390 650,380 C635,370 635,350 650,340 Z"
          fill="#F0F0F0"
          stroke="#000"
          strokeWidth="1"
        />
        <SvgText x="655" y="365" fontSize="12" fontFamily="Arial">Malatya</SvgText>
        
        {/* Elazığ */}
        <Path
          id="elazig"
          d="M700,300 C715,290 730,290 745,300 C760,310 760,330 745,340 C730,350 715,350 700,340 C685,330 685,310 700,300 Z"
          fill="#F0F0F0"
          stroke="#000"
          strokeWidth="1"
        />
        <SvgText x="710" y="325" fontSize="12" fontFamily="Arial">Elazığ</SvgText>
        
        {/* Ağrı */}
        <Path
          id="agri"
          d="M800,250 C815,240 830,240 845,250 C860,260 860,280 845,290 C830,300 815,300 800,290 C785,280 785,260 800,250 Z"
          fill="#F0F0F0"
          stroke="#000"
          strokeWidth="1"
        />
        <SvgText x="810" y="275" fontSize="12" fontFamily="Arial">Ağrı</SvgText>
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

export default TurkeyMap;