document.addEventListener('DOMContentLoaded', function () {
  const now = new Date();
  const timestamp = now.toISOString();
  const date = new Date(timestamp);
  const readable = date.toLocaleString();

  const timestampField = document.getElementById('formTimeStamp');
  if (timestampField) {
    timestampField.value = readable;
  }
});