const businessInfo = new URLSearchParams(window.location.search);
const memberDetails = document.querySelector(".member-details");

memberDetails.innerHTML = `
<p><b>First Name:</b> ${businessInfo.get('firstName') || ""}</p>
<p><b>Last Name:</b> ${businessInfo.get('lastName') || ""}</p>
<p><b>Email Address:</b> ${businessInfo.get('email') || ""}</p>
<p><b>Mobile Phone:</b> ${businessInfo.get('phone') || ""}</p>
<p><b>Business Name:</b> ${businessInfo.get('businessName') || ""}</p>
<p><b>Application Timestamp:</b> ${businessInfo.get('timestamp') || ""}</p>
`;