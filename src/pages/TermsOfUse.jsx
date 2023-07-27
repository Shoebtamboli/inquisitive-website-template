import React from "react";
import { Typography, Paper, Box } from "@mui/material";

const TermsOfUse = () => {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Terms of Use
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" gutterBottom>
          Please read these Terms of Use ("Terms") carefully before accessing or
          using the services provided by Inquisitive Institute ("Company," "we,"
          "us," or "our"). These Terms govern your access to and use of our
          website, courses, and services. By accessing or using our services,
          you agree to be bound by these Terms. If you do not agree with any
          part of these Terms, please refrain from using our services.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>1. Intellectual Property:</strong>
          <br />
          a. All content, including but not limited to text, graphics, images,
          logos, videos, and course materials provided by Inquisitive Institute,
          are protected by copyright and intellectual property laws. You may not
          reproduce, distribute, modify, or create derivative works from our
          content without prior written consent from us.
          <br />
          b. You may use the course materials solely for personal,
          non-commercial purposes. Any unauthorized use of the course materials
          or our intellectual property is strictly prohibited.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>2. User Responsibilities:</strong>
          <br />
          a. You agree to provide accurate, complete, and up-to-date information
          during the registration process and to maintain the confidentiality of
          your account login credentials.
          <br />
          b. You are responsible for any activity that occurs under your account
          and for safeguarding your account information.
          <br />
          c. You must not use our services for any unlawful, fraudulent, or
          unauthorized purposes.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>3. Course Enrollment and Payment:</strong>
          <br />
          a. Course enrollment requires payment of the specified fees. By
          enrolling in a course, you agree to pay the applicable fees in a
          timely manner.
          <br />
          b. All payments made are non-refundable, except as expressly stated in
          our refund policy.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>4. Limitation of Liability:</strong>
          <br />
          a. In no event shall Inquisitive Institute, its directors, employees,
          or affiliates be liable for any direct, indirect, incidental, special,
          or consequential damages arising out of or in connection with the use
          of our services or reliance on any information provided.
          <br />
          b. We strive to provide accurate and up-to-date content, but we make
          no warranties or representations about the accuracy, reliability,
          completeness, or timeliness of the information provided.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>5. Links to Third-Party Websites:</strong>
          <br />
          a. Our services may contain links to third-party websites or
          resources. These links are provided for convenience and do not imply
          our endorsement or responsibility for the content, products, or
          services offered by these third parties.
          <br />
          b. You acknowledge and agree that we are not liable for any damages or
          losses incurred through your interactions with third-party websites or
          resources.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>6. Modification and Termination:</strong>
          <br />
          a. We reserve the right to modify, suspend, or terminate our services,
          courses, or website at any time without prior notice.
          <br />
          b. We may also update these Terms from time to time. Any changes will
          be effective upon posting the revised Terms on our website. Your
          continued use of our services after the changes constitute your
          acceptance of the updated Terms.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>7. Governing Law:</strong>
          <br />
          These Terms shall be governed by and construed in accordance with the
          laws of [Jurisdiction]. Any disputes arising out of or relating to
          these Terms shall be subject to the exclusive jurisdiction of the
          courts in [Jurisdiction].
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you have any questions or concerns about these Terms of Use, please
          contact us at <strong>inquisitiveitptc@gmail.com</strong>
        </Typography>
      </Box>
    </Paper>
  );
};

export default TermsOfUse;
