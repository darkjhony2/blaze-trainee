import { PureComponent } from "react";
import { BlazeAppRouter } from "./router/BlazeAppRouter"

class BlazeApp extends PureComponent {


  render() {

    return (
      <BlazeAppRouter />
    )
  }
}

export default BlazeApp;
