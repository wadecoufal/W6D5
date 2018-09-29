import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  toggleTab(idx) {
    this.setState({index: idx});
  }

  render () {
    return (
      <ul className="tab-widget">
        <h1>Tabs</h1>
        <div className="tab-headers">
          {this.props.info.map( (tab, idx) => {
            return (
              <div key={ idx }>
                <h1 className="tab-header" onClick={() => this.toggleTab(idx)}>{ tab.title }</h1>
              </div>
            );
          })}
        </div>
        <article className="tab-content">{this.props.info[this.state.index].content}</article>
      </ul>
    );
  }
}


export default Tabs;
