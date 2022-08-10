/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { path } from "ramda";
import { Patient as FhirPatient } from "fhir-r4b";

// const dotPath = R.useWith(R.path, [R.split(".")]);
// const propsDotPath = R.useWith(R.ap, [R.map(dotPath), R.of]);

export default function PatientDisplay(props: { data: FhirPatient }) {
  const patientData = props.data;
  // const [patient, setPatient] = useState(props.patient);
  console.log(patientData);
  // const patientName: string | undefined = stuff?.name?.at(0)?.text;
  const patientName = path<string>(["name", "0", "text"], patientData);
  console.log(`Patient Name: ${patientName}`);
  if (!patientName) {
    return <div class={tw`p-4 mx-auto max-w-screen-md`}>Patient!</div>;
  }
  if (patientData?.resourceType === "Patient") {
    return (
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        {patientName}
      </div>
    );
  }
  return <div>Invalid.</div>;
}
