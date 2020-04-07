import React, {PureComponent, createRef} from 'react';


const withPopupLogic = (Component) => {
  return class WithPopupLogic extends PureComponent {
    constructor(props) {
      super(props);

      this._containerRef = createRef();

      this.state = {
        isOpened: false,
      };

      this._handleViewChange = this._handleViewChange.bind(this);
      this._handleDocumentClick = this._handleDocumentClick.bind(this);
    }

    _handleDocumentClick(evt) {
      if (!this._containerRef.current.contains(evt.target)) {
        this._handleClickOutside();
        document.removeEventListener(`click`, this._handleDocumentClick);
      }
    }

    _handleClickOutside() {
      this.setState({
        isOpened: false,
      });
    }

    _handleViewChange() {
      this.setState((state) => {
        if (state.isOpened) {
          document.removeEventListener(`click`, this._handleDocumentClick);
        } else {
          document.addEventListener(`click`, this._handleDocumentClick);
        }
        return {isOpened: !state.isOpened};
      });
    }

    componentWillUnmount() {
      if (this.state.isOpened) {
        document.removeEventListener(`click`, this._handleDocumentClick);
      }
    }

    render() {
      return (<Component
        isOpened={this.state.isOpened}
        onViewChange={this._handleViewChange}
        containerRef={this._containerRef}
        {...this.props}
      />);
    }
  };
};


export default withPopupLogic;
