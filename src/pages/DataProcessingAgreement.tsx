import LegalPage from "@/components/kf/LegalPage";

const DataProcessingAgreement = () => {
  return (
    <LegalPage
      title="Data Processing Agreement"
      description="The DPA that governs the processing of personal data between Kloudfox and its customers."
      slug="data-processing-agreement"
      lastUpdated="June 22, 2024"
    >
      <p>
        This Data Processing Agreement (the "DPA"), entered into by the Kloudfox customer identified on the applicable Kloudfox ordering document for Kloudfox services ("Customer") and Kloudfox ("Kloudfox"), governs the processing of personal data that Customer uploads or otherwise provides Kloudfox in connection with the services, and the processing of any personal data that Kloudfox uploads or otherwise provides to Customer in connection with the services.
      </p>

      <h2>1. Definitions</h2>
      <ul>
        <li><strong>Data Protection Requirements</strong> — the Directive, the General Data Protection Regulation, the CCPA, HIPAA, ISO standards, local data-protection laws, and any subordinate regulations.</li>
        <li><strong>GDPR</strong> — the General Data Protection Regulation, the European Union regulation on the protection of individuals with regard to the processing of personal data.</li>
        <li><strong>Personal Data</strong> — information about an individual that can be used to identify, contact, or locate a specific individual.</li>
      </ul>

      <h2>2. Nature of data processing</h2>
      <p>
        Kloudfox agrees to process Personal Data received from the Customer only on the instructions of the Customer. As the Controller of Personal Data, the Customer sets the purpose of processing for this DPA.
      </p>

      <h2>3. Compliance with laws</h2>
      <p>
        The parties shall each comply with their respective obligations under all applicable Data Protection Requirements. Kloudfox will implement all necessary measures to remain compliant with GDPR obligations for the categories of data it processes.
      </p>

      <h2>4. Customer obligations</h2>
      <ul>
        <li>Provide instructions to Kloudfox and determine the purposes and general means of processing.</li>
        <li>Comply with its own data-controller obligations under applicable Data Protection Requirements.</li>
        <li>Maintain a procedure for the exercise of individual data-subject rights.</li>
      </ul>

      <h2>5. Kloudfox obligations</h2>
      <ul>
        <li>Process Customer Personal Data only for the purpose of providing, supporting, and improving the Services.</li>
        <li>Inform Customer promptly if an instruction from Customer violates applicable law.</li>
        <li>Maintain appropriate organizational and technical measures to protect the security and integrity of Customer Personal Data.</li>
      </ul>

      <h2>6. Data transfers</h2>
      <p>
        For transfers of EU Personal Data to Kloudfox for processing in a jurisdiction other than an approved one, Kloudfox agrees to provide at least the same level of privacy protection through appropriate safeguards.
      </p>

      <h2>7. Data return and deletion</h2>
      <p>
        On termination of the data-processing services, or on Customer's reasonable request, Kloudfox shall — at the Customer's choice — return all Customer Personal Data or securely destroy it.
      </p>

      <h2>8. Governing law</h2>
      <p>
        The rights and obligations not expressly provided for in this DPA shall be governed by the applicable jurisdiction of Customer's ordering document.
      </p>
    </LegalPage>
  );
};

export default DataProcessingAgreement;
