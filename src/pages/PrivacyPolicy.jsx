import React from "react";
import { Typography, Paper, Box } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1" gutterBottom>
        Last updated: 2023.07.11
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" gutterBottom>
          At Inquisitive IT Training Institute, we are committed to protecting
          the privacy and personal information of our students, visitors, and
          users. This Privacy Policy outlines how we collect, use, disclose, and
          protect the information you provide when interacting with our website,
          services, and courses. By accessing or using our website and services,
          you agree to the terms of this Privacy Policy.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Information We Collect:</strong>
        </Typography>
        <Typography variant="body1" gutterBottom>
          1. Personal Information: When you register for our courses, create an
          account, or engage with our services, we may collect personal
          information, such as your name, email address, contact details, and
          other information relevant to the registration process.
        </Typography>
        <Typography variant="body1" gutterBottom>
          2. Payment Information: If you make a payment for our services, we may
          collect payment-related information, such as your credit card or other
          financial account details. However, we do not store any payment card
          information on our servers. All payment transactions are securely
          processed by our trusted third-party payment processors.
        </Typography>
        <Typography variant="body1" gutterBottom>
          3. Usage Information: We may collect non-personal information about
          your interactions with our website, such as your IP address, browser
          type, device information, and browsing patterns. This information is
          collected to enhance your user experience, analyze trends, and
          administer our website.
        </Typography>
        {/* Additional paragraphs and sections of the privacy policy go here */}
        <Typography variant="body1" gutterBottom>
          <strong>Use of Information:</strong>
        </Typography>
        <Typography variant="body1" gutterBottom>
          1. Personalization: We may use the information we collect to
          personalize your learning experience, deliver relevant course
          materials, and provide tailored recommendations based on your
          interests and learning goals.
        </Typography>
        <Typography variant="body1" gutterBottom>
          2. Communication: We may use your contact information to communicate
          with you regarding course updates, new offerings, promotional
          materials, and important announcements. You can opt out of receiving
          marketing communications at any time.
        </Typography>
        <Typography variant="body1" gutterBottom>
          3. Course Administration: We may use your information for
          administrative purposes, such as processing payments, maintaining
          records, managing user accounts, and providing customer support.
        </Typography>
        <Typography variant="body1" gutterBottom>
          4. Analytical Insights: We may use aggregated and anonymized
          information for statistical analysis, research, and improving our
          courses, website, and services.
        </Typography>
        {/* Additional paragraphs and sections of the privacy policy go here */}
        <Typography variant="body1" gutterBottom>
          <strong>Data Security and Retention:</strong>
        </Typography>
        <Typography variant="body1" gutterBottom>
          We employ industry-standard security measures to protect your personal
          information from unauthorized access, disclosure, alteration, and
          destruction. However, please note that no method of data transmission
          over the internet or electronic storage is 100% secure.
        </Typography>
        <Typography variant="body1" gutterBottom>
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, unless a longer
          retention period is required by law.
        </Typography>

        <Typography variant="body1" gutterBottom>
          <strong>Disclosure of Information:</strong>
        </Typography>
        <Typography variant="body1" gutterBottom>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except in the following
          circumstances:
        </Typography>
        <Typography variant="body1" gutterBottom>
          1. Service Providers: We may engage trusted third-party service
          providers to assist us in operating our website and delivering our
          services. These service providers have access to personal information
          solely for performing their functions and are obligated to maintain
          its confidentiality.
        </Typography>
        <Typography variant="body1" gutterBottom>
          2. Legal Compliance: We may disclose personal information if required
          by law, regulation, or legal process, or if we have a good faith
          belief that such disclosure is necessary to protect our rights, detect
          or prevent fraud, or respond to a government request.
        </Typography>

        <Typography variant="body1" gutterBottom>
          <strong>Your Rights:</strong>
        </Typography>
        <Typography variant="body1" gutterBottom>
          You have the right to access, update, correct, or delete your personal
          information held by us. If you wish to exercise any of these rights or
          have any questions or concerns about our Privacy Policy, please
          contact us using the contact information provided below.
        </Typography>

        <Typography variant="body1" gutterBottom>
          <strong>Changes to this Privacy Policy:</strong>
        </Typography>
        <Typography variant="body1" gutterBottom>
          We reserve the right to update or modify this Privacy Policy at any
          time. Any changes will be effective immediately upon posting the
          revised Privacy Policy on our website. We encourage you to review this
          Privacy Policy periodically for any updates.
        </Typography>

        <Typography variant="body1" gutterBottom>
          <strong>Contact Us:</strong>
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy, please contact us at{" "}
          <strong>inquisitiveitptc@gmail.com</strong>
        </Typography>
      </Box>
    </Paper>
  );
};

export default PrivacyPolicy;
