import './style.css'

export const Button = ({ type, title, icon }) => {

  switch (type) {
    case type === "": 
    return (<button>title</button>)
    default: 
    return (
      <button class="button-1">
        {title}
      </button>
    );
  }
 
}

export default Button;

