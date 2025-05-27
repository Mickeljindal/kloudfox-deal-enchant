import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DataProcessingAgreement = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Data Processing Agreement</h1>
            <p className="text-gray-600 mb-8">Last Updated: June 22, 2024</p>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-8">
                This Data Processing Agreement (the "DPA"), entered into by the Kloudfox customer identified on the applicable Kloudfox ordering document for Kloudfox services ("Customer") and the Kloudfox company identified on the ordering document ("Kloudfox"), governs the processing of personal data that Customer uploads or otherwise provides Kloudfox in connection with the services and the processing of any personal data that Kloudfox uploads or otherwise provides to Customer in connection with the services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Definitions</h2>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>"Data Protection Requirements"</strong> means the Directive, the General Data Protection Regulation, the CCPA, HIPAA, ISO standards, Local Data Protection Laws, any subordinate legislation and regulation implementing the General Data Protection Regulation, and all Privacy Laws.</li>
                <li><strong>"GDPR"</strong> means the General Data Protection Regulation, the European Union Regulation on the protection of individuals with regard to the processing of personal data and on the free movement of such data.</li>
                <li><strong>"Personal Data"</strong> means information about an individual that can be used to identify, contact or locate a specific individual.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Nature of Data Processing</h2>
              <p className="mb-6">
                Kloudfox agrees to process Personal Data received from the Customer only on the instructions of the Customer. As the Controller of Personal Data, for avoidance of doubt, the Customer sets the purpose of processing for this DPA.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Compliance with Laws</h2>
              <p className="mb-6">
                The parties shall each comply with their respective obligations under all applicable Data Protection Requirements. Kloudfox acknowledges that it is not yet fully compliant with HIPAA, ISO, or GDPR but agrees to implement all necessary measures to achieve compliance within a reasonable timeframe.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Customer Obligations</h2>
              <p className="mb-4">Customer agrees to:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Provide instructions to Kloudfox and determine the purposes and general means of Kloudfox's processing of Customer Personal Data in accordance with the DPA;</li>
                <li>Comply with its protection, security and other obligations with respect to Customer Personal Data prescribed by Data Protection Requirements for data controllers;</li>
                <li>Establish and maintain a procedure for the exercise of the rights of the individuals whose Customer Personal Data are processed;</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Kloudfox Obligations</h2>
              <p className="mb-4">Kloudfox will:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Process Customer Personal Data only for the purpose of providing, supporting and improving Kloudfox's services;</li>
                <li>Inform Customer promptly if an instruction from Customer violates applicable Data Protection Requirements;</li>
                <li>Take commercially reasonable steps to ensure compliance with the terms of the DPA;</li>
                <li>Maintain appropriate organizational and technical measures to protect the security and integrity of Customer Personal Data;</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Transfers</h2>
              <p className="mb-6">
                For transfers of EU Personal Data to Kloudfox for processing by Kloudfox in a jurisdiction other than a jurisdiction in the EU, the EEA, or the European Commission-approved countries providing 'adequate' data protection, Kloudfox agrees it will provide at least the same level of privacy protection for EU Personal Data through appropriate safeguards.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Return and Deletion</h2>
              <p className="mb-6">
                The parties agree that on the termination of the data processing services or upon Customer's reasonable request, Kloudfox shall, at the choice of Customer, return all the Customer Personal Data and copies of such data to Customer or securely destroy them.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Governing Law</h2>
              <p className="mb-6">
                The rights and obligations not expressly provided for in this DPA shall be governed by the relevant provisions of generally binding legislation of New York. In case of a dispute arising out of this DPA, the Parties agree that such disputes shall be resolved primarily by mutual negotiations between the representatives of the Parties.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataProcessingAgreement;
