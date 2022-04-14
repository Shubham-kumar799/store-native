import React, {FC} from 'react';
//components
import {HStack, useColorMode, Icon, IconButton} from 'native-base';

//icons
import {Ionicons, Feather} from '@native-base/icons';

const ToggleTheme: FC = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      {colorMode === 'light' ? (
        <IconButton
          rounded={'full'}
          onPress={toggleColorMode}
          icon={<Icon as={Feather} name="moon" size={'lg'} />}
          name="moon"
          size={'lg'}
        />
      ) : (
        <IconButton
          rounded={'full'}
          icon={
            <Icon
              as={Ionicons}
              onPress={toggleColorMode}
              name="ios-sunny"
              size={'lg'}
            />
          }
          name="ios-sunny"
          size={'lg'}
        />
      )}
    </HStack>
  );
};

export default ToggleTheme;
