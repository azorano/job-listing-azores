/* src/components/common/initialSetup/InitialSetupComponent.tsx */

import { useEffect } from "react";

// Sets the theme color on an initil mounting
function InitialSetup({ theme = "" }) {
  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

  // Returns nothiing, only setting
  return null;
}

export default InitialSetup;
