/**
 * AthenaCM H2 Playbook — Google Sheets Receiver
 *
 * 1) Create a Google Sheet.
 * 2) Extensions > Apps Script.
 * 3) Paste this code.
 * 4) Deploy > New deployment > Web app.
 *    Execute as: Me
 *    Who has access: Anyone (or your Workspace users if policy allows)
 * 5) Copy the Web App URL into SHEET_ENDPOINT in index.html.
 */

const SHEET_NAME = "Pitch Leads";

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);

  if (sh.getLastRow() === 0) {
    sh.appendRow([
      "Timestamp",
      "Account / Owner",
      "Team",
      "Brand",
      "Product",
      "Goal",
      "Budget",
      "Page",
      "User Agent"
    ]);
  }

  const p = e.parameter || {};
  sh.appendRow([
    p.timestamp || new Date().toISOString(),
    p.owner || "",
    p.team || "",
    p.brand || "",
    p.product || "",
    p.goal || "",
    p.budget || "",
    p.page || "",
    p.userAgent || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput("AthenaCM Pitch Lead Receiver is running.")
    .setMimeType(ContentService.MimeType.TEXT);
}
