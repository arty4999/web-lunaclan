import LegalLayout from '../components/LegalLayout';

export default function Privacy() {
    return (
        <LegalLayout 
            title="Privacy Policy - Patty" 
            pageTitle="Patty Privacy Policy"
        >
            <p>
                This Privacy Policy describes how your personal information is collected, used, and shared when you use Patty.
            </p>

            <section>
                <h2>1. Personal Information We Collect</h2>
                <p>When you interact with Patty, we automatically collect your discord username but the data is not saved and is for logging purposes only.</p>

                <h2>2. How Do We Use Your Personal Information?</h2>
                <p>We use the personal information we collect from you to provide the Patty functionality, to communicate with you, and to optimize our bot's functionality.</p>

                <h2>3. Sharing Your Personal Information</h2>
                <p>We do not share your Personal Information with third parties.</p>

                <h2>4. Data Retention</h2>
                <p>When you interact with Patty, data is not retained.</p>

                <h2>5. Changes</h2>
                <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>

                <h2>6. Contact Us</h2>
                <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at arty@lunaclan.com.</p>
            </section>
        </LegalLayout>
    );
}