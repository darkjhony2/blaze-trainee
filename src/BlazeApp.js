import { PureComponent } from "react";
import { BlazeAppRouter } from "./router/BlazeAppRouter"
import { AppTheme } from "./theme/AppTheme";

class BlazeApp extends PureComponent {


  render() {

    return (
      <AppTheme>
        <BlazeAppRouter />
      </AppTheme>
    )
  }
}

export default BlazeApp;
