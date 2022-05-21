import React from 'react';

interface Props {
  
}

interface State {

}

const defaultState: State = {
  
};

export default class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
        <div className="header">
          <div>
            <figure>
              <img src="/build/images/logo.svg"/>
            </figure>
          </div>
          <div></div>
        </div>
      </>
    );
  }
}