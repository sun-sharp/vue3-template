/**
 *后端接口api
 * */

const apiUrl = "/lims";

const API = {
  // 年度样品合格率
  YearOrdersPercent: apiUrl + "/lims1/screen/selectYearOrdersPercent",
  // 年度样品数量
  YearOrdersCount: apiUrl + "/lims1/screen/selectYearOrdersCount",
  // 今日样品数量
  DayOrdersCount: apiUrl + "/lims1/screen/selectDayOrdersCount",
  // 月度样品合格率
  MonthOrdersPercent: apiUrl + "/lims1/screen/selectMonthOrdersPercent",
  // 月度样品数量
  MonthOrdersCount: apiUrl + "/lims1/screen/selectMonthOrdersCount",
  // 中间内容部分
  CentreInformation: apiUrl + "/lims1/screen/selectCentreInformation"
};

export default API;
