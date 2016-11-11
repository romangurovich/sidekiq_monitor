$.fn.dataTableExt.oApi.fnStandingRedraw = function(oSettings) {
  var before = oSettings._iDisplayStart;
  oSettings._iDisplayStart = before;
  oSettings.oApi._fnCalculateEnd(oSettings);
  return oSettings.oApi._fnDraw(oSettings);
};
