var zipFs = new zip.fs.FS();
function onerror(message) {
  console.error(message);
}

function logText(text) {
  console.log(text);
  console.log("--------------");
}

zipFs.importHttpContent("lorem.sh.zip", false, function() {
  var firstEntry = zipFs.root.children[0];
  document.getElementById('extraField').textContent = firstEntry.extraField;
  firstEntry.getText(function(data) {
    logText(data);
  });
  zipFs.exportBlob((blob) => {
    saveAs(blob, 'lorem.sh.zip');
  }, null, onerror);
}, onerror);