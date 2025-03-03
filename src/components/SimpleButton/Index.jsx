import './Style.css'

export const SimpleButton = ({ type, title, icon }) => {

  switch (type) {
    case type === "": 
    return (<button>title</button>)
    default: 
    return (
      <button class="simple-button">
        {title}
      </button>
    );
  }
 
}

export default SimpleButton;

