import React from 'react'
import { TouchableOpacity, Icon } from 'react-native'


const PreviousScreen = ({navigator}) => {
    return (
       
        <TouchableOpacity
           onPress={() => {navigator}}
            style={{
              position: "absolute",
              left: 10,
              top: 60,
            }}
          >
            <Icon name="left" size={30} color="#000" />
        </TouchableOpacity>
    )
}

export default PreviousScreen;

