import RequestHelper from "../helpers/request.helper";
import { appConfig } from "../config/app.config";
import qs from "qs";

export default class Api {
  static login(email, password) {
    return RequestHelper.post(
      appConfig.apiUrl + "token",
      qs.stringify({
        username: email,
        password,
        grant_type: "password"
      }),
      {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    );
  }

  static fetchVisitor(vehicleNumber) {
    return RequestHelper.get(appConfig.apiUrl + "visitors/" + vehicleNumber);
  }

  static fetchPhoneNumbers(houseNumber) {
    return RequestHelper.get(appConfig.apiUrl);
  }

  static submitVisitor(contract) {
    return RequestHelper.post(appConfig.apiUrl + "visitors", { contract });
  }

  static fetchHouseData(timestamp) {
    return RequestHelper.get(appConfig.apiUrl, { timestamp });
  }

  static fetchPhoneNumberData(timestamp) {
    return RequestHelper.get(appConfig.apiUrl, { timestamp });
  }
}
