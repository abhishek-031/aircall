import outgoingCall from "../icons/outgoing-call.svg";
import incomingCall from "../icons/incoming-call.svg";
import missedCall from "../icons/missed-call.svg";

export const callIconToUse = (activity) => {
  let callIcon = "";
  if (activity.direction === "outbound") {
    callIcon = outgoingCall;
  } else if (
    activity.direction === "inbound" &&
    activity.call_type === "answered"
  ) {
    callIcon = incomingCall;
  } else {
    callIcon = missedCall;
  }
  return callIcon;
};
