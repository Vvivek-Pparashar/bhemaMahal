import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import XLSX from 'xlsx';

const exportDataToExcel = async (data) => {
  // Convert JSON data to a worksheet
  const ws = XLSX.utils.json_to_sheet(data);

  // Create a new workbook and append the worksheet
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Write the workbook to a binary string
  const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });

  // Convert the binary string to a base64 string
  const buf = new ArrayBuffer(wbout.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < wbout.length; i++) {
    view[i] = wbout.charCodeAt(i) & 0xFF;
  }
  const base64 = btoa(String.fromCharCode.apply(null, view));

  // Define the file path to save the Excel file
  const fileUri = `${FileSystem.documentDirectory}data.xlsx`;

  // Write the file to the file system
  await FileSystem.writeAsStringAsync(fileUri, base64, { encoding: FileSystem.EncodingType.Base64 })
    .then(() => {
      console.log('FILE WRITTEN!', fileUri);
      alert('Excel file has been created at: ' + fileUri);

      // Share the file
      Sharing.shareAsync(fileUri);
    })
    .catch((err) => {
      console.log(err.message);
    });
};


export {exportDataToExcel};
