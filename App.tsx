import React from 'react';
//components
import {
  Text,
  HStack,
  Center,
  Switch,
  useColorMode,
  NativeBaseProvider,
} from 'native-base';
import {ToggleTheme} from '@components/common';

//utils
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import appTheme from '@theme';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider theme={appTheme}>
        <Center
          _dark={{bg: 'blueGray.900'}}
          _light={{bg: 'blueGray.50'}}
          px={4}
          flex={1}>
          <ToggleTheme />
        </Center>
      </NativeBaseProvider>
    </ApolloProvider>
  );
};
export default App;
