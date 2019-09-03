import Reactotron from 'reactotron-react-native';
import getHost from 'rn-host-detect';

if (__DEV__) {
  const tron = Reactotron.configure({
    host: getHost('localhost'),
    port: 9090,
  })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
