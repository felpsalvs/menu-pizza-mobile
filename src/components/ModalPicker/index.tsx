import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Dimensions,
    ScrollView
} from "react-native";
import { CategoryProps } from "../../pages/Order";

interface ModalPickerProps {
    options: CategoryProps[];
    handleCloseModal: () => void;
    selectedItem: () => void;
}

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

export function ModalPicker({options, handleCloseModal, selectedItem}: ModalPickerProps) {
    
    function onPress(item: CategoryProps) {
        selectedItem(item);
        handleCloseModal();
    }

    const option = options.map((item, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => onPressItem(item)}>
            <Text style={styles.item}>{item?.name}</Text>
        </TouchableOpacity>
    ));
    
    return (
        <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {option}
                </ScrollView>
            </View>
            </TouchableOpacity>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
        },
        content: {
            width: WIDTH - 20,
            height: HEIGHT / 2,
            backgroundColor: '#fff',
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#8a8a8a',
        },
    });