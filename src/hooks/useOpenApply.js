import { useContext } from "react";
import { ApplyModalContext } from "../App"; // Adjust path if you move the context

export default function useOpenApply() {
  const { openApplyModal } = useContext(ApplyModalContext);
  return openApplyModal;
}
