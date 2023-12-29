import styleUtils from "../styles/utils.module.css";

const PrivacyPage = () => {
  return (
    <div>
      <div className={styleUtils.privPageTitleBody}>
        <div className={styleUtils.privPageTitle}>
          We Care About Your Privacy
        </div>
      </div>
      <div className={styleUtils.privPageTextBody}>
        <div>
          <h1 className={styleUtils.privPageText}>Privacy Policy</h1>
          <p>
            This Privacy Policy governs the manner in which our note-taking
            application collects, uses, maintains, and discloses information
            collected from users ("Users").
          </p>
          <h1 className={styleUtils.privPageText}>
            Personal Identification Information
          </h1>
          <p>
            We may collect personal identification information from Users in
            various ways, including, but not limited to, when Users visit our
            app, register on the app, subscribe to the newsletter, and in
            connection with other activities, services, features, or resources
            we make available on our app. Users may be asked for, as
            appropriate, name, email address. Users may, however, visit our app
            anonymously. We will collect personal identification information
            from Users only if they voluntarily submit such information to us.
            Users can always refuse to supply personal identification
            information, except that it may prevent them from engaging in
            certain app-related activities.
          </p>
          <h1 className={styleUtils.privPageText}>
            Non-personal Identification Information
          </h1>
          <p>
            We may collect non-personal identification information about Users
            whenever they interact with our app. Non-personal identification
            information may include the browser name, the type of computer or
            device, and technical information about Users’ means of connection
            to our app, such as the operating system and the Internet service
            providers utilized and other similar information.
          </p>
          <h1 className={styleUtils.privPageText}>
            How We Use Collected Information
          </h1>
          <p>
            Our app may collect and use Users’ personal information for the
            following purposes: To personalize user experience: We may use
            information in the aggregate to understand how our Users as a group
            use the services and resources provided on our app. To improve our
            app: We continually strive to improve our offerings based on the
            information and feedback we receive from Users. To send periodic
            emails: We may use the email address to send User information and
            updates pertaining to their order. It may also be used to respond to
            their inquiries, questions, and/or other requests.
          </p>
          <h1 className={styleUtils.privPageText}>Protection of Information</h1>
          <p>
            {" "}
            We adopt appropriate data collection, storage, and processing
            practices and security measures to protect against unauthorized
            access, alteration, disclosure, or destruction of Users’ personal
            information and data stored on our app.
          </p>
          <h1 className={styleUtils.privPageText}>
            Changes to this Privacy Policy
          </h1>
          <p>
            We have the discretion to update this privacy policy at any time.
            When we do, we will revise the updated date at the bottom of this
            page. We encourage Users to frequently check this page for any
            changes to stay informed about how we are helping to protect the
            personal information we collect. You acknowledge and agree that it
            is your responsibility to review this privacy policy periodically
            and become aware of modifications.
          </p>
          <h1 className={styleUtils.privPageText}>
            Your Acceptance of these Terms
          </h1>
          <p>
            By using our app, you signify your acceptance of this policy. If you
            do not agree to this policy, please do not use our app. Your
            continued use of the app following the posting of changes to this
            policy will be deemed your acceptance of those changes.
          </p>
          <h1 className={styleUtils.privPageText}>Contacting Us</h1>
          <p>
            If you have any questions about this Privacy Policy, the practices
            of this app, or your dealings with this app, please contact me at
            alexander.s.canales@gmail.com. This document was last updated on
            12/29/2023.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
