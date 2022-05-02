import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount () {
    // (window.adsbygoogle = window.adsbygoogle || []).push({});
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
      <ins className="adsbygoogle"
          style={{display: "block"}}
          data-ad-client="ca-pub-4375413214168925"
          data-ad-slot="6157382493"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
    );
  }
}
