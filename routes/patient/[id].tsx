/** @jsx h */
import { h } from "preact";
import { Patient as FhirPatient } from "fhir-r4b";
import { tw } from "../../utils/twind.ts";
import PatientDisplay from "../../components/Patient.tsx";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers<FhirPatient | null> = {
  async GET(
    _,
    ctx,
  ): Promise<Response> {
    const response = await fetch(
      "https://hapi.fhir.org/baseR4/Patient/1565928",
    );
    console.log(response.status); // e.g. 200
    console.log(response.statusText); // e.g. "OK"
    if (response.status === 200) {
      const patient: FhirPatient = await response.json();
      return ctx.render(patient);
    }
    return ctx.render();
  },
};

export default function FhirPatientContainer(
  props: { data: FhirPatient },
) {
  const patientInfo = props.data;
  if (patientInfo) {
    const stringifiedData = JSON.stringify(patientInfo);
    return (
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <div>Param id = {stringifiedData}</div>
        Patient below:
        <PatientDisplay data={patientInfo} />
      </div>
    );
  }
  console.log("No Patient");
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <p>No patient</p>
    </div>
  );
}
