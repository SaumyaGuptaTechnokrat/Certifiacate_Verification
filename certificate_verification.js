function verifyCertificate() {
    // Get the entered certificate code
    var certificateCode = document.getElementById('certificateCode').value;

    // You can replace this array with a database query or an API call to fetch valid certificate codes.
    var validCertificateCodes = [
        'ABC123',
        'XYZ456',
        'QWE123',
        'EFG789',
        'HIJ987'
        // Add more valid certificate codes here
    ];

    // Check if the entered code is valid
    if (validCertificateCodes.includes(certificateCode)) {
        document.getElementById('verificationResult').innerText = 'Certificate Verified! Congratulations!';
    } else {
        document.getElementById('verificationResult').innerText = 'Invalid Certificate Code. Please try again.';
    }
}
