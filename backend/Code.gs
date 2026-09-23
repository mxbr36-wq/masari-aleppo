function doPost(e) {
  const sheet = SpreadsheetApp.openById("PUT_YOUR_SHEET_ID_HERE").getSheetByName("Visitors");
  const data = JSON.parse(e.postData.contents || "{}");
  sheet.appendRow([new Date(), data.name || "", data.phone || ""]);
  return ContentService.createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
