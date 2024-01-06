export const callIconToUse = (activity) => {
  let callIcon = "";
  if (activity.direction === "outbound") {
    callIcon = "outgoing-call";
  } else if (
    activity.direction === "inbound" &&
    activity.call_type === "answered"
  ) {
    callIcon = "incoming-call";
  } else {
    callIcon = "missed-call";
  }
  return callIcon;
};
