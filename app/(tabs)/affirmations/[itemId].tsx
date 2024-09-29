import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';

const AffirmationPractice = () => {
    const {itemId} = useLocalSearchParams();

    const [affirmation, setAffirmation] = useState<GalleryPreviewData>()

    useEffect(()=>{
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++){
            const affirmatinData = AFFIRMATION_GALLERY[idx].data;

            const affirmationToStart = affirmatinData.find(
                (a) => a.id === Number(itemId)
            );

            if(affirmationToStart){
                setAffirmation(affirmationToStart);
                return
            }
        }
    },[])
  return (
    <View className=''>
      <Text>AffirmationPractice</Text>
    </View>
  )
}

export default AffirmationPractice