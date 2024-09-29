import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustomButtonProps {
  onPrss: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
}

const CustomButton = ({
  onPrss,
  title,
  textStyles = "",
  containerStyles = "",
}: CustomButtonProps) => {
  return (
    <TouchableOpacity 
        activeOpacity={0.7}
        className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
        onPress={onPrss}
    >
      <Text className={`font-semibold text-lg ${textStyles}`} >{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
