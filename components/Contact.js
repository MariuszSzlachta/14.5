var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/contacts-icon.png'} />
        <p className={'contactLabel'}> Imię: {this.props.item.firstName} </p>
        <p className={'contactLabel'}> Nazwisko: {this.props.item.lastName} </p>
        <p className={'contactEmail'}> Email: {this.props.item.email} </p>
      </div>
    )
  },
});