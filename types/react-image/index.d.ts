declare module 'react-image' {
  import * as React from 'react';

  export interface ReactImageProps {
    src: any,
    style?: any,
  }

  export default class Img extends React.Component<ReactImageProps, any> {}
}
